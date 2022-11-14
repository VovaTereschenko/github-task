import * as React from "react";
import { GithubWidgetLayout } from "../layouts";
import { useGithubRepositoriesRequest } from "../hooks/useGithubRepositoriesRequest";
import { DebouncedTextField } from "../components/DebouncedTextField";
import { Repositories } from "../renderers/Repositories";

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
      <Repositories
        repositoryMap={repositoryMap}
        additionalListItems={<>Pagination</>}
      />
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
