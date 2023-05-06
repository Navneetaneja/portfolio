import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Home, School, Work, Assignment } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../apis/navbar.json";

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

  const handleIcons = (prop) =>{
    switch(prop){
      case "<Home />":
      return <Home />;
      case "<School />":
        return <School />;
      case "<Work />":
        return <Work />;
      case "<Assignment />":
        return <Assignment />;    
      default: 
      return <Home/>;
    }
  }

  return (
    <Box
      sx={{
        height: "10vh",
        pl: 5,
        pr: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 5,
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
        {data.name}
      </Typography>
      <Tabs
        value={value}
        onChange={handleValue}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        {data.tabs.map((tab, i) => {
          return (
            <Tab
              key = {i}
              icon={handleIcons(tab.icon)}
              iconPosition="start"
              label={tab.label}
              LinkComponent={Link}
              to={tab.linkTo}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
