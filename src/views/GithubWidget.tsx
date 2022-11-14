import { useQuery } from "@apollo/client";
import { GITHUB_REPOSITORIES } from "../api/queries/github-repositories";


const GithubWidget = () => {
  const { loading, error, data } = useQuery(GITHUB_REPOSITORIES, {
    variables: {
      searchValue: 'mui',
      results: 10,
    },
  });

  console.log("data", data);

  return (
    <div>Hello Github Widget</div>
  )
}

export { GithubWidget };