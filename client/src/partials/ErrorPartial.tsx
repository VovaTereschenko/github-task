import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SOMETHING_WENT_WRONG = "Noop! ;)";

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
      {SOMETHING_WENT_WRONG}
    </Typography>
  </Box>
);

export { ErrorPartial };
