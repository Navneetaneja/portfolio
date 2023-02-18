import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Home, School, Work, Assignment } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navs = ["/", "/education", "/experience", "/projects"];
  let index = navs.indexOf(window.location.pathname);
  if (index === -1) {
    index = 0;
    window.location.pathname = "/";
  }
  const [value, setValue] = useState(index);
  const handleValue = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        height: "10vh",
        pl: 5,
        pr: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 5
      }}
    >
      <Typography
        sx={{
          fontFamily: "cursive",
          fontSize: 20,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Navneet Aneja
      </Typography>
      <Tabs
        value={value}
        onChange={handleValue}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        <Tab
          className="tab"
          icon={<Home />}
          iconPosition="start"
          label="home"
          LinkComponent={Link}
          to={navs[0]}
        />
        <Tab
          icon={<School />}
          iconPosition="start"
          label="education"
          LinkComponent={Link}
          to={navs[1]}
        />
        <Tab
          icon={<Work />}
          iconPosition="start"
          label="experience"
          LinkComponent={Link}
          to={navs[2]}
        />
        <Tab
          icon={<Assignment />}
          iconPosition="start"
          label="projects"
          LinkComponent={Link}
          to={navs[3]}
        />
      </Tabs>
    </Box>
  );
}
