import * as React from "react";
import { Component } from "react";
import Field from "../ReusableComponents/TextField/Field";
import "../Form.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

export class FormTraineeDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    if (this.props.fullName && this.props.id && this.props.department) {
      return false;
    }
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div className="form">
          {/* <AppBar title="Enter User Details" /> */}
          <div className="form__group">
            <Field
              class="field-left"
              label="Full Name"
              onChange={handleChange("fullName")}
              defaultValue={values.fullName}
            />
            <Field
              class="field-right"
              label="Jop ID"
              onChange={handleChange("id")}
              defaultValue={values.id}
            />
          </div>
          <div className="form__group">
            <Field
              class="field-left"
              label="Department"
              onChange={handleChange("department")}
              defaultValue={values.department}
            />
            <Field
              class="field-right"
              label="Jop level"
              onChange={handleChange("jobLevel")}
              defaultValue={values.jobLevel}
            />
          </div>
          <div className="form__group">
            <Field
              class="field-left"
              label="Mobile Number"
              onChange={handleChange("mobileNumber")}
              defaultValue={values.mobileNumber}
            />
            <Field
              class="field-right"
              label="Extenion"
              onChange={handleChange("extenion")}
              defaultValue={values.extenion}
            />
          </div>
          <RaisedButton
            className="button"
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FormTraineeDetails;
