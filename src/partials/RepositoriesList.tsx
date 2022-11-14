import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export interface IRepositoryInfo {
  description: string;
  forkCount: number;
  name: string;
  stargazerCount: number;
  url: string;
}

const handleExternalRedirect = (url: string) => {
  window.open(url);
};

const RepositoriesList = ({
  repositoryMap,
}: {
  repositoryMap?: IRepositoryInfo[];
}) => (
  <List
    sx={{
      width: "100%",
      pb: 2,
    }}
  >
    {repositoryMap?.map(({ forkCount, name, stargazerCount, url }) => (
      <ListItemButton
        key={url}
        onClick={() => handleExternalRedirect(url)}
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <ListItemText>{name}</ListItemText>
        <Box>
          {stargazerCount} / {forkCount}
        </Box>
      </ListItemButton>
    ))}
  </List>
);

export { RepositoriesList };
