import * as React from "react";
import Box from "@mui/material/Box";

const RepositoriesListLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <Box
    sx={{
      display: "flex",
      height: 360,
      overflow: "auto",
    }}
  >
    {children}
  </Box>
);

export { RepositoriesListLayout };
