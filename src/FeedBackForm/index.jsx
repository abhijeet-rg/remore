import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {
  Backdrop,
  CircularProgress,
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
  const [sendStatus, setStatus] = useState(false);

  useEffect(() => {
    getDocs(feedbackCollectionRef)
      .then((data) => {
        console.log("raw", data);
        console.log(
          "data",
          map(data.docs, (doc) => ({ ...doc.data(), id: doc.id }))
        );
      })
      .catch((error) => console.log("error", error));
  }, []);

  function handleChange(event) {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    setStatus(true);
    let { nameError, contactError, emailError } = validateFormData(formData);
    addDoc(feedbackCollectionRef, {
      ...formData,
      time: moment().format(),
    }).then((res) => {
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
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <section>
          <TextInput
            name="name"
            label={"FullName"}
            value={formData.name}
            handleChange={handleChange}
          />
          <TextInput
            name="contact"
            label={"Contact Number"}
            value={formData.contact}
            handleChange={handleChange}
          />
        </section>

        <section>
          <FeedbackRow
            name={"quality"}
            heading={"Quality of Work"}
            data={formData}
            setData={setFormData}
          />
          <FeedbackRow
            name={"behaviour"}
            heading={"Behaviours of Workers"}
            data={formData}
            setData={setFormData}
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
          </ToogleButtonContainer>
        </section>

        <section>
          <TextInput
            name={"experience"}
            label={"How was your Experience"}
            value={formData.experience}
            config={{ multiline: true, rows: 5 }}
            handleChange={handleChange}
          />
          <TextInput
            name={"email"}
            label={"Email Address"}
            value={formData.email}
            handleChange={handleChange}
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
      </ThemeProvider>
      <Backdrop sx={{ color: "#eceff1", zIndex: 99 }} open={sendStatus}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default FeedBackForm;
