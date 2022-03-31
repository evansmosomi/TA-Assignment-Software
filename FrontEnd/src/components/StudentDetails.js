import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../index.css";
export class StudentDetails extends Component {
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

    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <h1>StudentPair - Student View</h1>
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Name"
              label="Enter your name"
              onChange={handleChange("name")}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="ID"
              label="Studet/Staff Banner ID"
              onChange={handleChange("id")}
              defaultValue={values.id}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Profile"
              label="What is your email address?"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />

            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default StudentDetails;
