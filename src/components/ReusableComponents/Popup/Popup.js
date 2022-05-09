import * as React from "react";
import "./Popup.css";

export default function PopUp(props) {
  return (
    <div className="popup">
      <div className="popup__content">{props.children}</div>
    </div>
  );
}
