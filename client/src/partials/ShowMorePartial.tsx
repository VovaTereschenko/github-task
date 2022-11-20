import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SHOW_MORE_BUTTON_TEXT } from "../constants";

const ShowMorePartial = ({
  onClick,
  isDisabled,
}: {
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        sx={{ mb: 2, mr: 1 }}
        variant="text"
        disabled={isDisabled}
        onClick={onClick}
      >
        {SHOW_MORE_BUTTON_TEXT}
      </Button>
    </Box>
  );
};

export { ShowMorePartial };
