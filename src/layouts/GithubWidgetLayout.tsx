import Box from "@mui/material/Box";

const GithubWidgetLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "calc(100vh - 16px)",
    }}
  >
    <Box
      sx={{
        width: 420,
        boxShadow: "0px 10px 22px rgb(0 0 0 / 20%)",
        borderRadius: "6px",
      }}
    >
      {children}
    </Box>
  </Box>
);

export { GithubWidgetLayout };
