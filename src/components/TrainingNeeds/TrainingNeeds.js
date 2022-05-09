import * as React from "react";
import { Component } from "react";
import Field from "../ReusableComponents/TextField/Field";
import Checkboxs from "../ReusableComponents/Check/CheckBoxes";
// import AppBar from "material-ui/AppBar";
import "../Form.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

export class TrainingNeeds extends Component {
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
        {/* <AppBar title="Enter User Details" /> */}
        <div className="form">
          {/* <p>
            الرجاء ذكر اسماء البرامج التي ترغب في الحصول عليها بشكل مرتب وبناء
            علي حاجة العمل
          </p> */}
          <div className="form__group">
            <Field
              class="field-right"
              label="الهدف من البرنامج"
              onChange={handleChange("id")}
              defaultValue={values.id}
              rows={5}
            />
            <Field
              class="field-left"
              label="البرامجج المتخصصة"
              onChange={handleChange("fullName")}
              defaultValue={values.fullName}
              rows={5}
            />
          </div>
          <div className="form__group">
            <Checkboxs
              text="برامج اللغات"
              Label1="برنامج اللغة العربية(يشتمل علي مجموعة من القواعد الاساسية للغة)"
              Label2="الاخطاء الشائعة في اللغة العربية"
            />
          </div>
          <div className="form__group">
            <Checkboxs
              text="برامج تكنولوجيا المعلومات "
              Label1="ًWord"
              Label2="Excel"
            />
          </div>
          <div className="form__group">
            <Checkboxs
              text="برامج المهارات السلوكية"
              Label1="ًWord"
              Label2="Excel"
            />
          </div>
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
export default TrainingNeeds;
