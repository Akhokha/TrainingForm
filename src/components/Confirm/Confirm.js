import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <List className="conf">
            <ListItem primaryText="الاسم بالكامل" secondaryText={fullName} />
            <ListItem primaryText="الرقم الوظيفي" secondaryText={id} />
            <ListItem primaryText="الاداة/ اللجنة" secondaryText={department} />
            <ListItem primaryText="الدرجة الوظيفية" secondaryText={jobLevel} />
            <ListItem primaryText="رقم الموبيل" secondaryText={mobileNumber} />
            <ListItem primaryText="الرقم الداخليn" secondaryText={extenion} />
            //
            <ListItem primaryText="السن" secondaryText={age} />
            <ListItem
              primaryText="عدد سنوات الخبرة بالامانة العامة"
              secondaryText={experience}
            />
            <ListItem
              primaryText="عدد سنوات الخبرة خارج الامانة العامة"
              secondaryText={otherExperience}
            />
            <ListItem
              primaryText="المؤهل الدراسي"
              secondaryText={qualification}
            />
            <ListItem
              primaryText="اعلر شهادة كاديمية"
              secondaryText={highestAcademicQualification}
            />
            <ListItem
              primaryText="اسم اخر برنامج تدريبي "
              secondaryText={lastTrainingCourse}
            />
            <ListItem primaryText="تاريخه" secondaryText={executionDate} />
            <ListItem
              primaryText="المهام و المسذوليات التي يتم تكليفكم بها"
              secondaryText={tasks}
            />
            <ListItem
              primaryText="في حالة ما اذا كانت هناك خبرات خارج العمل "
              secondaryText={otherTasks}
            />
            <ListItem
              primaryText="البرامج المتخصصة"
              secondaryText={specializedCourses}
            />
            <ListItem
              primaryText="الهدف من تنفيذ البرنامج "
              secondaryText={speObjective}
            />
            <ListItem
              primaryText="البرامج المبرامج المهارات السلوكية"
              secondaryText={softSkill}
            />
            <ListItem
              primaryText="برامج تكنولوجيا المعلومات"
              secondaryText={it}
            />
            <ListItem primaryText="برامج اللغات" secondaryText={language} />
          </List>

          <br />
          <RaisedButton
            label="Confirm & Continue"
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
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default Confirm;
