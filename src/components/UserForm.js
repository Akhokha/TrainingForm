import React, { Component } from "react";
import "./UserForm.css";

import FormTraineeDetails from "./TraineeDetails/FormTraineeDetails";
import FormMoreDetails from "./TraineeDetails/FormMoreDetails";
import KPIs from "./TraineeDetails/KPIs";
import TrainingNeeds from "./TrainingNeeds/TrainingNeeds";
import Confirm from "./Confirm/Confirm";
import Success from "./Confirm/Success";
export class UserForm extends Component {
  state = {
    //Form Trainee Details
    step: 1,
    fullName: "",
    id: "",
    department: "",
    jobLevel: "",
    mobileNumber: "",
    extenion: "",
    //Form More Details
    age: "",
    experience: "",
    otherExperience: "",
    qualification: "",
    highestAcademicQualification: "",
    lastTrainingCourse: "",
    executionDate: "",
    //KPIs
    tasks: "",
    otherTasks: "",
    // Trainig Needs
    specializedCourses: "",
    speObjective: "",
    softSkill: "",
    it: "",
    language: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      fullName,
      id,
      department,
      jobLevel,
      mobileNumber,
      extenion,
      //Form More Details
      age,
      experience,
      otherExperience,
      qualification,
      highestAcademicQualification,
      lastTrainingCourse,
      executionDate,
      //KPIs
      tasks,
      otherTasks,
      // Trainig Needs
      specializedCourses,
      speObjective,
      softSkill,
      it,
      language,
    } = this.state;
    const values = {
      fullName,
      id,
      department,
      jobLevel,
      mobileNumber,
      extenion,
      //Form More Details
      age,
      experience,
      otherExperience,
      qualification,
      highestAcademicQualification,
      lastTrainingCourse,
      executionDate,
      //KPIs
      tasks,
      otherTasks,
      // Trainig Needs
      specializedCourses,
      speObjective,
      softSkill,
      it,
      language,
    };

    switch (step) {
      case 1:
        return (
          <>
            <div className="leftSide--1 bg-img">LeftSide</div>
            <div className="rightSide--1">
              <FormTraineeDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="leftSide--2 ">
              <FormMoreDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <div className="rightSide--2 bg2"></div>
          </>
        );
      case 3:
        return (
          <>
            <div className="leftSide--1 bg3">LeftSide</div>
            <div className="rightSide--1">
              <KPIs
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="leftSide--2">
              {" "}
              <TrainingNeeds
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <div className="rightSide--2 bg4"></div>
          </>
        );

      case 5:
        return (
          <>
            <div className="leftSide--1">LeftSide</div>
            <div className="rightSide--1">
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="leftSide--2">
              <Success />;
            </div>
            <div className="rightSide--2">rightSide</div>
          </>
        );
    }
  }
}

export default UserForm;
