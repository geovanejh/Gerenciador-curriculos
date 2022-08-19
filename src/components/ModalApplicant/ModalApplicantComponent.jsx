import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {
  HandleAddAplicantToJob,
  HandleUnlinkAplicantToJob,
  HandleListApplicants,
} from '../../store/actions/ApplicantAction';
import { ButtonTag, Info, CardFechar } from './ModalApplicantComponent.style';

const ModalApplicantComponent = ({ jobId, applicants, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [applyJobId, setApplyJobId] = useState(jobId);

  const customStyles = {
    content: {
      width: '50%',
      height: '60%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleAddApplicant = async (applicantId) => {
    await HandleAddAplicantToJob(dispatch, applyJobId, applicantId);
    HandleListApplicants(dispatch);
  };

  const handleUnlinkApplicant = async (applicantId) => {
    await HandleUnlinkAplicantToJob(dispatch, jobId, applicantId);
    HandleListApplicants(dispatch);
  };

  const handleToggleState = () => setIsOpen(!isOpen);

  return (
    <div>
      <ButtonTag type="button" onClick={handleToggleState}>
        Vincular Candidato
      </ButtonTag>

      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <CardFechar>
          <h2>Candidatos</h2>
          <ButtonTag onClick={handleToggleState}>Fechar</ButtonTag>
        </CardFechar>

        {applicants &&
          applicants.map((applicant, index) => {
            return (
              <Info key={index}>
                <span>Nome: {applicant.name}</span>
                <span>Cargo: {applicant.role}</span>
                <span>Data nascimento: {applicant.birthdate}</span>
                <span>Senioridade: {applicant.seniority}</span>
                <span>
                  Curriculo:
                  <a
                    href={applicant.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    download
                  </a>
                </span>
                <div>
                  <ButtonTag
                    hide={applicant.jobAppliant.includes(applyJobId)}
                    type="button"
                    onClick={() => handleAddApplicant(applicant.id)}
                  >
                    Vincular
                  </ButtonTag>

                  <ButtonTag
                    hide={!applicant.jobAppliant.includes(applyJobId)}
                    type="button"
                    onClick={() => handleUnlinkApplicant(applicant.id)}
                  >
                    Desvincular
                  </ButtonTag>
                </div>
              </Info>
            );
          })}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applyJobStatus: state.ApplicantReducer.applyJobStatus,
  applicants: state.ApplicantReducer.applicants,
});

export default connect(mapStateToProps)(ModalApplicantComponent);
