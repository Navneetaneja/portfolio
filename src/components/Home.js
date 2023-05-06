import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import data from "../apis/home.json";
import skills from "../apis/skills.json";

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index === data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
  }, [index]);

  let first = skills.slice(0, skills.length / 2);
  let last = skills.slice(skills.length / 2, skills.length);

  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        background: "url('/static/HomeGif.gif') center/contain"
      }}
    >
      <Box className="left-home">
        {first.map((skill, i) => {
          return (
            <img
              key={i}
              className="skills-sq"
              style={{ width: "46%", height: "30%", margin: "2% 2%" }}
              src={skill.src}
              alt={skill.alt}
            />
          );
        })}
      </Box>
      <Box className="mid-home">
        <img
          style={{ height: "30%", borderRadius: "50%" }}
          src="/static/me.jpg"
          alt="self"
        />
        <Typography
          variant="h5"
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          Hi , I m Navneet Aneja
        </Typography>
        <Typography
          variant="h4"
          className="text"
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          {data[index]}
        </Typography>
      </Box>
      <Box className="right-home">
      {last.map((skill, i) => {
          return (
            <img
              key={i}
              className="skills-sq"
              style={{ width: "46%", height: "30%", margin: "2% 2%" }}
              src={skill.src}
              alt={skill.alt}
            />
          );
        })}
      </Box>
    </Box>
  );
}
