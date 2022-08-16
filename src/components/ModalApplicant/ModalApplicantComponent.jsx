import { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { ButtonTag } from './ModalApplicantComponent.style';

const ModalApplicantComponent = ({ jobId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleAddApplicant = () => {
    // TODO: Chamar action para vincular candidato em vaga
    handleToggleState();
    toast.success('Candidato vinculado com sucesso!');
    return;
  };

  const handleToggleState = () => setIsOpen(!isOpen);

  return (
    <div>
      <ButtonTag type="button" onClick={handleToggleState}>
        Ver candidatos
      </ButtonTag>

      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <h2>Candidatos</h2>
        <button onClick={handleToggleState}>close</button>
        <button type="button" onClick={handleAddApplicant}>
          Vincular
        </button>
      </Modal>
    </div>
  );
};

export default ModalApplicantComponent;