import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Home.css";

export default function Home() {
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        height: "80vh",
        background: "url('/static/HomeGif.gif') center/contain",
      }}
    >
      <Box
        className="left-home"
        sx={{
          width: "30%",
          height: "100%",
          display: "flex",
          margin: "1rem 1rem",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/html.png"
          alt="html"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/css.png"
          alt="css"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/js.png"
          alt="javascript"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/react.png"
          alt="react"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/node.png"
          alt="node"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/mongo.png"
          alt="mongodb"
        />
      </Box>
      <Box
        className="mid-home"
        sx={{
          height: "100%",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          Full Stack Developer
        </Typography>
      </Box>
      <Box
        className="right-home"
        sx={{
          width: "30%",
          height: "100%",
          display: "flex",
          margin: "1rem 1rem",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/c.cms"
          alt="c language"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/cplus.png"
          alt="C++"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/java.png"
          alt="java"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/spring.jpeg"
          alt="spring boot"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/postgres.png"
          alt="postgreSql"
        />
        <img
          className="skills-sq"
          style={{ width: "40%", height: "20%" }}
          src="/static/sql.webp"
          alt="SQL"
        />
      </Box>
    </Box>
  );
}
