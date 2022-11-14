import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconWithCounter, IconType } from "../components";
import { IRepositoryInfo } from "../types";

const handleExternalRedirect = (url: string) => {
  window.open(url);
};

const RepositoriesListPartial = ({
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
          <IconWithCounter type={IconType.Star} count={stargazerCount} />
          <IconWithCounter type={IconType.Fork} count={forkCount} />
        </Box>
      </ListItemButton>
    ))}
  </List>
);

export { RepositoriesListPartial };
