import * as React from "react";
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
      <TextField
        onChange={handleChange}
        value={value}
        variant="outlined"
        fullWidth
      />
    );
  }
);

export { DebouncedTextField };
