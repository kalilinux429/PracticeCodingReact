import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById("portal")  // ⭐ uses the extra div
  );
}

export default Modal;
