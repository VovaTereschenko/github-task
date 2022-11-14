import { useGithubRepositoriesRequest } from "../hooks/useGithubRepositoriesRequest";


const GithubWidget = () => {
  const searchValue = 'mui'
  const resultsCount = 10
  const {
    loading,
    error,
    repositoryMap,
  } = useGithubRepositoriesRequest({
    searchValue,
    resultsCount,
  });

  console.log("repositoryMap", repositoryMap);

  return (
    <div>Hello Github Widget</div>
  )
}

export { GithubWidget };