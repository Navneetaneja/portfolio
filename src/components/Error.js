import { Box } from "@mui/material";

export default function Error() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <img style={{ padding: "3vh" }} alt="error" src="/static/Error.svg" />
    </Box>
  );
}
