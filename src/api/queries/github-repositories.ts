import { gql } from "@apollo/client";

const GITHUB_REPOSITORIES = gql`
  query getRepositories($searchValue: String!, $results: Int!) {
    search(query: $searchValue, type: REPOSITORY, first: $results) {
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
