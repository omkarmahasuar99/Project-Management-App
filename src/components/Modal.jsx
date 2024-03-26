import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={modal}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
