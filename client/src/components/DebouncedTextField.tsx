import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDebounce } from "../hooks/useDebounce";

interface IDebouncedTextField {
  onChange: (value: string) => void;
  defaultValue?: string;
}

const DebouncedTextField = React.memo(
  ({ onChange, defaultValue = "" }: IDebouncedTextField) => {
    const [value, setValue] = React.useState<string>(defaultValue);
    const debouncedValue = useDebounce<string>(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    React.useEffect(() => {
      onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    return (
      <Box
        sx={{
          boxShadow: "0px -10px 36px rgb(0 0 0 / 20%)",
        }}
      >
        <TextField
          onChange={handleChange}
          value={value}
          variant="outlined"
          fullWidth
        />
      </Box>
    );
  }
);

export { DebouncedTextField };
