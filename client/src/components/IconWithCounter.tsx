import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";

enum IconType {
  Star = "star",
  Fork = "fork",
}

const IconWithCounter = ({
  type,
  count,
}: {
  type: IconType;
  count: number;
}) => {
  const parametersMap = {
    star: {
      icon: <StarIcon sx={{ color: "#ffcc12" }} />,
    },
    fork: {
      icon: <ForkRightIcon sx={{ color: "#aa5a5a" }} />,
    },
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {parametersMap[type].icon} {count}
    </Box>
  );
};

export { IconWithCounter, IconType };
