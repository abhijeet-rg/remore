import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  Alert,
  Backdrop,
  CircularProgress,
  Snackbar,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import moment from "moment";
import { LoadingButton } from "@mui/lab";
import "./default.css";

import { db } from "@unix-interiors/utils/firebaseCongif";
import FeedbackRow from "@unix-interiors/components/FeedbackRow";
import TextInput from "@unix-interiors/components/TextInput";
import validateFormData from "@unix-interiors/utils/validateFormData";
import PoweredBy from "@unix-interiors/components/PoweredBy";

import {
  theme,
  FormActionContainer,
  ToogleButtonContainer,
  OverallError,
} from "./FeedBackForm.style";

function FeedBackForm({ setEndStatus }) {
  const feedbackCollectionRef = collection(db, "unix-feedback");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    quality: 0,
    behaviour: 0,
    overall: "",
    experience: "",
    email: "",
  });
  const [formError, setFormError] = useState({});
  const [sendStatus, setStatus] = useState(false);
  const [errorAlert, setErrorAlert] = useState({
    show: false,
    message: "All field is required !",
  });

  // useEffect(() => {
  //   getDocs(feedbackCollectionRef)
  //     .then((data) => {
  //       console.log("raw", data);
  //       console.log(
  //         "data",
  //         map(data.docs, (doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  function handleChange(event) {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    if (
      Object.values(validateFormData(formData)).every(
        (value) => value === false
      )
    ) {
      setStatus(true);
      addDoc(feedbackCollectionRef, {
        ...formData,
        time: moment().format(),
      })
        .then(() => {
          setFormData({
            name: "",
            contact: "",
            quality: 0,
            behaviour: 0,
            overall: "",
            experience: "",
            email: "",
          });
          setStatus(false);
          setEndStatus(true);
        })
        .catch((err) => {
          setStatus(false);
          setErrorAlert({
            show: true,
            message: err.message,
          });
        });
    } else {
      setFormError(validateFormData(formData));
    }
  }

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorAlert({
      ...errorAlert,
      show: false,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <section>
        <TextInput
          name="name"
          label={"FullName"}
          value={formData.name}
          handleChange={handleChange}
          showError={formError.nameError}
        />
        <TextInput
          name="contact"
          label={"Contact Number"}
          value={formData.contact}
          handleChange={handleChange}
          showError={formError.contactError}
        />
      </section>

      <section>
        <FeedbackRow
          name={"quality"}
          heading={"Quality of Work"}
          data={formData}
          setData={setFormData}
          showError={formError.qualityError}
        />
        <FeedbackRow
          name={"behaviour"}
          heading={"Behaviours of Workers"}
          data={formData}
          setData={setFormData}
          showError={formError.behaviourError}
        />
        <ToogleButtonContainer>
          <h3>Did we meet your overall Expectations ?</h3>
          <ToggleButtonGroup
            color="primary"
            value={formData.overall}
            exclusive
            onChange={handleChange}
            fullWidth
            size={"small"}
          >
            <ToggleButton name="overall" value="no">
              No
            </ToggleButton>
            <ToggleButton name="overall" value="yes">
              Yes
            </ToggleButton>
            <ToggleButton name="overall" value="exceeded">
              Exceeded
            </ToggleButton>
          </ToggleButtonGroup>
          <OverallError showError={formError.overallError}>
            Please select the Option
          </OverallError>
        </ToogleButtonContainer>
      </section>

      <section>
        <TextInput
          name={"experience"}
          label={"How was your Experience"}
          value={formData.experience}
          config={{ multiline: true, rows: 5 }}
          handleChange={handleChange}
          showError={formError.experienceError}
        />
        <TextInput
          name={"email"}
          label={"Email Address"}
          value={formData.email}
          handleChange={handleChange}
          showError={formError.emailError}
        />
      </section>

      <FormActionContainer>
        <PoweredBy />

        <LoadingButton
          variant="contained"
          endIcon={<SendIcon />}
          loading={sendStatus}
          loadingPosition="end"
          onClick={handleSubmit}
        >
          Submit
        </LoadingButton>
      </FormActionContainer>
      {sendStatus && (
        <Backdrop sx={{ color: "#eceff1", zIndex: 99 }} open={sendStatus}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorAlert.show}
        autoHideDuration={4000}
        onClose={handleAlertClose}
      >
        <Alert
          variant="filled"
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorAlert.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default FeedBackForm;
