import * as React from "react";
import "./TextField.css";
import { TextField } from "@mui/material";
import Typography from "material-ui/styles/typography";
// import { makeStyles } from "@mui/styles";

export default function Field(props) {
  return (
    <TextField
      className={props.class}
      type={"text"}
      label={props.label}
      m
      // label={
      //   <Typography
      //     style={{
      //       display: "inline",
      //       direction: "rtl",
      //       textAlign: "right",
      //     }}
      //   >
      //     {props.label}
      //   </Typography>
      // }
      variant="outlined"
      fullWidth
      multiline
      rows={props.rows}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    />
  );
}
