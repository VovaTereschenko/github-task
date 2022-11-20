import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { DebouncedTextField } from "../components/DebouncedTextField";

const TextFieldPartial = ({
  defaultValue,
  onChange,
  isLoading,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
}) => (
  <Box sx={{ zIndex: 1, position: "relative" }}>
    <LinearProgress
      sx={{
        visibility: isLoading ? "visible" : "hidden",
      }}
    />
    <DebouncedTextField defaultValue={defaultValue} onChange={onChange} />
  </Box>
);

export { TextFieldPartial };
