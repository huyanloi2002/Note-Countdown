import React, { useContext } from "react";
import { Context } from "../store/Context";
import { openModal } from "../store/action";

const Modal = ({ nameButton = "", children, onOpen = () => {}, type = "" }) => {
  const { state, dispatch } = useContext(Context);

  const { isOpenModal } = state;

  const handleOnClose = () => {
    dispatch(openModal({ type: "", isOpen: false }));
  };

  return (
    <React.Fragment>
      {isOpenModal.isOpen && isOpenModal.type === type && (
        <div className="fixed top-0 w-full h-full flex justify-center items-center bg-gray-transparent z-50">
          <div className="bg-white p-3 rounded-md">
            <div className="modal-header text-[red] text-[20px] flex justify-end">
              <i
                className="fa-solid fa-xmark cursor-pointer"
                onClick={() => handleOnClose()}
              ></i>
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
      <button onClick={onOpen}>{nameButton}</button>
    </React.Fragment>
  );
};

export default Modal;
