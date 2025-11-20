import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
} from "@mui/material";

const steps = ["Enter First Name", "Enter Last Name", "Confirm"];

const StudentStepper = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Save to localStorage
      const students = JSON.parse(localStorage.getItem("students") || "[]");
      students.push({ firstName, lastName });
      localStorage.setItem("students", JSON.stringify(students));
      onClose();
      setActiveStep(0);
      setFirstName("");
      setLastName("");
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Student</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        )}
        {activeStep === 1 && (
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        )}
        {activeStep === 2 && (
          <div className="text-center my-4">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
          </div>
        )}

        <div className="flex justify-between mt-2">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentStepper;
