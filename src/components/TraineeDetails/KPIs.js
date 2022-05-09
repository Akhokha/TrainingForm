import React, { Component } from "react";
import "../Form.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "@mui/material";

export class KPIs extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div className="form ">
          <TextField
            className="TextField"
            type="text"
            label="Tasks and responsibilities(Mention the most important 3 tasks and responsibilities)"
            color="secondary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={5}
            onChange={handleChange("tasks")}
            defaultValue={values.tasks}
          />
          <TextField
            className=""
            type="text"
            label="Other work outside the scope of jop to be mentioned in order of priority"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={5}
            onChange={handleChange("otherTasks")}
            defaultValue={values.otherTasks}
          />

          <div className="Button-box">
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
const styles = (theme) => ({
  button: {
    margin: 15,
  },
  lable: {
    display: "flex",
    fontSize: 40,
  },
});

export default KPIs;
