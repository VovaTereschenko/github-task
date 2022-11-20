import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";

enum IconType {
  Star = "star",
  Fork = "fork",
}

const iconParametersMap = {
  star: {
    icon: <StarIcon sx={{ color: "#ffcc12" }} />,
  },
  fork: {
    icon: <ForkRightIcon sx={{ color: "#aa5a5a" }} />,
  },
};

const IconWithCounter = ({
  type,
  count,
}: {
  type: IconType;
  count: number;
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {iconParametersMap[type].icon} {count}
    </Box>
  );
};

export { IconWithCounter, IconType };
