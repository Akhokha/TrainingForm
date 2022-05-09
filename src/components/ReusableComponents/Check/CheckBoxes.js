import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../../Form.css";

export default function Checkboxs(props) {
  return (
    <FormGroup className="checkbox">
      <h4>{props.text} </h4>
      <FormControlLabel control={<Checkbox />} label={props.Label1} />
      <FormControlLabel control={<Checkbox />} label={props.Label2} />
    </FormGroup>
  );
}
