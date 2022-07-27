import Modal from '@mui/material/Modal';
import classNames from 'classnames';
import c from "./customModal.module.scss";
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={()=> props.handleModalClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classNames(c.modal, "d-flex align-items-center justify-content-center vh-100")}
      >
        <div className={classNames(c.modalContainer)}>
          <CloseIcon className={classNames(c.cursorPointer, 'text-white float-end')} onClick={()=> props.handleModalClose()}/>
            <img className="w-100" src={props.imgUrl} alt="profile"/>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;
