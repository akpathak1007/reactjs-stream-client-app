import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      id="modal"
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,.7)" }}
      role="dialog"
      onClick={props.onDismiss}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn-close"
              onClick={props.onDismiss}
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.content}</p>
          </div>
          <div className="modal-footer">
            {props.action}
            <button
              type="button"
              className="btn btn-light"
              data-bs-dismiss="modal"
              onClick={props.onDismiss}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-container")
  );
};

export default Modal;
