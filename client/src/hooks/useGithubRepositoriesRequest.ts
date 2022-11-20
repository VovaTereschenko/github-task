import { useQuery } from "@apollo/client";
import { GITHUB_REPOSITORIES } from "../api/queries/github-repositories";

const useGithubRepositoriesRequest = ({
  searchValue,
  resultsCount,
}: {
  searchValue: string;
  resultsCount: number;
}) => {
  const { loading, error, data } = useQuery(GITHUB_REPOSITORIES, {
    variables: {
      searchValue,
      resultsCount,
    },
  });

  const repositoryMap = data?.search?.nodes;

  return {
    loading,
    error,
    repositoryMap,
  };
};

export { useGithubRepositoriesRequest };
