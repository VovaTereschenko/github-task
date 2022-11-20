import * as React from "react";
import Box from "@mui/material/Box";
import { RepositoriesListPartial, ErrorPartial } from "../../partials";
import { RepositoriesListLayout } from "../../layouts";
import { IGithubReposList } from "../../types";

const Repositories = React.memo(
  ({
    repositoryMap,
    isLoading,
    isError,
    additionalListItems,
  }: IGithubReposList) => {
    const isSomethingWrong =
      Boolean(!repositoryMap?.length && !isLoading) || isError;
    const isActualListPresented = Boolean(repositoryMap?.length);

    return (
      <RepositoriesListLayout>
        {isSomethingWrong && <ErrorPartial />}
        {isActualListPresented && (
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <RepositoriesListPartial repositoryMap={repositoryMap} />
            {additionalListItems}
          </Box>
        )}
      </RepositoriesListLayout>
    );
  }
);

export { Repositories };
