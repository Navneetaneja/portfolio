import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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

  const sendMessage = (_event) => {
    if (
      !checkEmpty(name) &&
      !checkEmpty(email) &&
      !checkEmpty(email.match(".+@.+\\..+")) &&
      !checkEmpty(message) &&
      !nameError &&
      !emailError
    ) {
      setSeverity("success");
      send();
      setText("Message Sent Successfully");
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

  const send = ()=>{
    fetch("https://navneet-aneja-portfolio.herokuapp.com/send-email", {
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'post',
      body: JSON.stringify({name:name,email:email,message:message})
    })
    .catch(function(err){
        console.log(err);
    })
  }

  return (
    <Box
      height="90vh"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        overflow: "hidden",
      }}
    >
      <img height="100%" width="50%" alt="Footer" src="/static/Contact.svg" />
      <Box
        height="100%"
        width="50%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          pt: 5,
          pb: 5,
        }}
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
            width: "50%",
            borderBottom: `${!nameError ? "0.3rem solid purple" : null}`,
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label={nameLabel}
        />
        <TextField
          helperText={emailHelper}
          error={emailError}
          onChange={handleEmail}
          color="secondary"
          placeholder="Enter Your Email"
          sx={{
            mb: 2,
            width: "50%",
            borderBottom: `${!emailError ? "0.3rem solid purple" : null}`,
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label={emailLabel}
        />
        <TextField
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          color="secondary"
          placeholder="Enter Your Message"
          sx={{
            mb: 4,
            width: "50%",
            borderBottom: "0.3rem solid purple",
            label: { color: "white" },
            input: { color: "white" },
          }}
          variant="standard"
          label="Enter Your Message"
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
