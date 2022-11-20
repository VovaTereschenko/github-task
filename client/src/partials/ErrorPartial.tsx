import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SOMETHING_WENT_WRONG_MESSAGE } from "../constants";

const ErrorPartial = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography
      sx={{
        textAlign: "center",
      }}
    >
      {SOMETHING_WENT_WRONG_MESSAGE}
    </Typography>
  </Box>
);

export { ErrorPartial };
