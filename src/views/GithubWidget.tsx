import * as React from "react";
import { GithubWidgetLayout, RepositoriesListLayout } from "../layouts";
import { useGithubRepositoriesRequest } from "../hooks/useGithubRepositoriesRequest";
import { DebouncedTextField } from "../components/DebouncedTextField";
import { RepositoriesList } from "../partials/RepositoriesList";

const GithubWidget = () => {
  const resultsCount = 10;
  const [searchValue, setSearchValue] = React.useState("mui");
  const { loading, error, repositoryMap } = useGithubRepositoriesRequest({
    searchValue,
    resultsCount,
  });

  console.log("repositoryMap", repositoryMap);

  return (
    <GithubWidgetLayout>
      <RepositoriesListLayout>
        <RepositoriesList repositoryMap={repositoryMap} />
      </RepositoriesListLayout>
      <DebouncedTextField
        defaultValue={"mui"}
        onChange={(val: string) => {
          setSearchValue(val);
        }}
      />
    </GithubWidgetLayout>
  );
};

export { GithubWidget };
