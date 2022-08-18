import { useState } from 'react';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { HandleAddAplicantToJob } from '../../store/actions/ApplicantAction';
import { ButtonTag, Info, CardFechar } from './ModalApplicantComponent.style';

const ModalApplicantComponent = ({ jobId, applicants, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [applyJobId, setApplyJobId] = useState(jobId);

  const customStyles = {
    content: {
      width: '80%',
      height: '60%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleAddApplicant = (applicantId) => {
    debugger;
    // TODO: Chamar action para vincular candidato em vaga
    HandleAddAplicantToJob(dispatch, applyJobId, applicantId);
    handleToggleState();
    return;
  };

  const handleToggleState = () => setIsOpen(!isOpen);

  return (
    <div>
      <ButtonTag type="button" onClick={handleToggleState}>
        Vincular Candidato
      </ButtonTag>

      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <CardFechar>
          <ButtonTag onClick={handleToggleState}>Fechar</ButtonTag>
        </CardFechar>
        <h2>Candidatos</h2>
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
                <ButtonTag
                  type="button"
                  onClick={() => handleAddApplicant(applicant.id)}
                >
                  Vincular
                </ButtonTag>
              </Info>
            );
          })}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applyJobStatus: state.ApplicantReducer.applyJobStatus,
});

export default connect(mapStateToProps)(ModalApplicantComponent);
