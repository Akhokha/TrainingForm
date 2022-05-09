import * as React from "react";
import Popup from "./Popup";
import "./Popup.css";

export default function PopUpMassage() {
  return (
    <Popup>
      <div className="popup__left">
        <img src="" alt="" className="popup__img"></img>
      </div>
      <div class="popup__right">
        <button href="#" class="btn btn--green">
          موافق
        </button>
      </div>
    </Popup>
  );
}
