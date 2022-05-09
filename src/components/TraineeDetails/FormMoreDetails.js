import React, { Component } from "react";
import "../Form.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import { TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
import { RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

export class FormMoreDetails extends Component {
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
          <div className="form-box">
            <FormControl className="FormControl">
              <p className="FormLabel">Age</p>
              <RadioGroup
                row={true}
                name="age"
                onChange={handleChange("age")}
                defaultValue={values.age}
              >
                <FormControlLabel
                  value="<25"
                  control={<Radio />}
                  label="<25"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="26:35"
                  control={<Radio />}
                  label="26:35"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="36:54"
                  control={<Radio />}
                  label="36:54"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value=">45"
                  control={<Radio />}
                  label=">45"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl className="FormControl">
              <p className="FormLabel">Experience</p>

              <RadioGroup
                row={true}
                name="experience"
                onChange={handleChange("experience")}
                defaultValue={values.experience}
              >
                <FormControlLabel
                  value="<5"
                  control={<Radio />}
                  label="<5"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="6:10"
                  control={<Radio />}
                  label="6:10"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="11:20"
                  control={<Radio />}
                  label="11:20"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value=">20"
                  control={<Radio />}
                  label=">20"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl className="FormControl">
              <p className="FormLabel">Other Experience</p>

              <RadioGroup
                row={true}
                name="otherExperience"
                onChange={handleChange("otherExperience")}
                defaultValue={values.otherExperience}
              >
                <FormControlLabel
                  value="<5"
                  control={<Radio />}
                  label="<5"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="6:10"
                  control={<Radio />}
                  label="6:10"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value="11:20"
                  control={<Radio />}
                  label="11:20"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
                <FormControlLabel
                  value=">20"
                  control={<Radio />}
                  label=">20"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="form__group">
            <TextField
              className="field-left-2"
              type="text"
              label="Academic Qualification"
              color="secondary"
              variant="outlined"
              fullWidth
              onChange={handleChange("qualification")}
              defaultValue={values.qualification}
            />
            <TextField
              className="field-right-2"
              type="text"
              label="Highest Academic Qualification"
              variant="outlined"
              fullWidth
              onChange={handleChange("highestAcademicQualification")}
              defaultValue={values.highestAcademicQualification}
            />
          </div>
          <div className="form__group">
            <TextField
              className="field-left-2 "
              type="text"
              label="LastTraining Course"
              color="secondary"
              variant="outlined"
              fullWidth
              onChange={handleChange("lastTrainingCourse")}
              defaultValue={values.lastTrainingCourse}
            />
            <TextField
              className="field-right-2"
              type="date"
              label="Date"
              variant="outlined"
              fullWidth
              onChange={handleChange("executionDate")}
              defaultValue={values.executionDate}
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
    direction: "rtl",
    fontSize: 40,
  },
});

export default FormMoreDetails;
