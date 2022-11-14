import * as React from "react";
import { useGithubRepositoriesRequest } from "../hooks/useGithubRepositoriesRequest";
import { DebouncedTextField } from "../components/DebouncedTextField";

const GithubWidget = () => {
  const resultsCount = 10;
  const [searchValue, setSearchValue] = React.useState("mui");
  const { loading, error, repositoryMap } = useGithubRepositoriesRequest({
    searchValue,
    resultsCount,
  });

  console.log("repositoryMap", repositoryMap);

  return (
    <div>
      {repositoryMap?.map((item: { name: string }) => (
        <div>{item.name}</div>
      ))}
      <DebouncedTextField
        defaultValue={"mui"}
        onChange={(val: string) => {
          setSearchValue(val);
        }}
      />
    </div>
  );
};

export { GithubWidget };
