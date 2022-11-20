import { gql } from "@apollo/client";

const GITHUB_REPOSITORIES = gql`
  query getRepositories($searchValue: String!, $resultsCount: Int!) {
    search(query: $searchValue, type: REPOSITORY, first: $resultsCount) {
      issueCount
      nodes {
        ... on Repository {
          name
          forkCount
          url
          stargazerCount
        }
      }
    }
  }
`;

export { GITHUB_REPOSITORIES };
