import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [text, setText] = useState("Message Sent Successfully");
  const [nameError, setNameError] = useState(false);
  const [nameLabel, setNameLabel] = useState("Enter Your Name");
  const [nameHelper, setNameHelper] = useState();
  const [emailError, setEmailError] = useState(false);
  const [emailLabel, setEmailLabel] = useState("Enter Your Email");
  const [emailHelper, setEmailHelper] = useState();

  const handleName = (_event) => {
    let n = _event.target.value;
    if (!checkEmpty(n) && n.length > 30) {
      setNameError(true);
      setNameLabel("Name Error");
      setNameHelper("Name length cannot be more than 30");
    } else {
      setNameError(false);
      setNameLabel("Enter Your Name");
      setNameHelper(null);
    }
    setName(n);
  };

  const handleEmail = (_event) => {
    let e = _event.target.value;
    if (!checkEmpty(e) && checkEmpty(e.match(".+@.+\\..+"))) {
      setEmailError(true);
      setEmailLabel("Email Error");
      setEmailHelper("Email is not in standard format");
    } else {
      setEmailError(false);
      setEmailLabel("Enter Your Email");
      setEmailHelper(null);
    }
    setEmail(e);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkEmpty = (prop) => {
    return prop === null || prop === undefined || prop === "";
  };

  const sendMessage = async (_event) => {
    if (
      !checkEmpty(name) &&
      !checkEmpty(email) &&
      !checkEmpty(email.match(".+@.+\\..+")) &&
      !checkEmpty(message) &&
      !nameError &&
      !emailError
    ) {
      const res = await send();
      // console.log(res);
      if (res === 200) {
        setSeverity("success");
        setText("Message Sent Successfully");
      } else {
        setSeverity("error");
        setText("Error Occurred");
      }
    } else if (checkEmpty(name) || checkEmpty(email) || checkEmpty(message)) {
      setSeverity("error");
      setText("Fields Cannot be Empty");
    } else if (nameError || emailError) {
      setSeverity("error");
      nameError && setText("Name Format Is Not Correct");
      emailError && setText("Email Format Is Not Correct");
      nameError &&
        emailError &&
        setText("Name and Email Format Is Not Correct");
    } else {
      setSeverity("error");
      setText("Error Occurred");
    }
    setOpen(true);
  };

  const send = () => {
    return fetch("https://navneet-aneja-portfolio.herokuapp.com/send-email", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then((res) => {
        return 200;
      })
      .catch(function (err) {
        console.log(err);
        return 500;
      });
  };

  return (
    <Box
      height="90vh"
      sx={{
        display: "flex",
        background: "black"
      }}
      className="footer"
    >
      <img width="50%" alt="Footer" src="/static/Contact.svg" />
      <Box
      width="50%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
        className="touch"
      >
        <Typography
          variant="h4"
          sx={{ textDecoration: "underline purple 0.3rem", mb: 4 }}
        >
          GET IN TOUCH
        </Typography>
        <TextField
          helperText={nameHelper}
          error={nameError}
          onChange={handleName}
          color="secondary"
          placeholder="Enter Your Name"
          sx={{
            mb: 2,
            borderBottom: `${!nameError ? "0.3rem solid purple" : null}`,
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label={nameLabel}
          className="textfield"
        />
        <TextField
          helperText={emailHelper}
          error={emailError}
          onChange={handleEmail}
          color="secondary"
          placeholder="Enter Your Email"
          sx={{
            mb: 2,
            borderBottom: `${!emailError ? "0.3rem solid purple" : null}`,
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label={emailLabel}
          className="textfield"
        />
        <TextField
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          color="secondary"
          placeholder="Enter Your Message"
          sx={{
            mb: 4,
            borderBottom: "0.3rem solid purple",
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label="Enter Your Message"
          className="textfield"
        />
        <Button
          type="submit"
          onClick={sendMessage}
          variant="contained"
          color="secondary"
        >
          SEND
        </Button>
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          autoHideDuration={5000}
          open={open}
          onClose={handleClose}
        >
          <Alert severity={severity}>{text}</Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
