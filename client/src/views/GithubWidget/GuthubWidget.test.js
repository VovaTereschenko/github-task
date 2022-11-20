import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GITHUB_REPOSITORIES } from "../../api/queries/github-repositories";
import { GithubWidget } from "./GithubWidget";
import { SOMETHING_WENT_WRONG_MESSAGE } from "../../constants";

const SEARCH_VALUE = "mui";

const mocks = [
  {
    request: {
      query: GITHUB_REPOSITORIES,
      variables: {
        searchValue: SEARCH_VALUE,
        resultsCount: 2,
      },
    },
    result: {
      data: {
        search: {
          issueCount: 0,
          nodes: [
            {
              name: "mui",
              forkCount: 6721,
              url: "https://github.com/dcloudio/mui",
              stargazerCount: 13388,
              __typename: "Repository",
            },
            {
              name: "mui-datatables",
              forkCount: 906,
              url: "https://github.com/gregnb/mui-datatables",
              stargazerCount: 2516,
              __typename: "Repository",
            },
          ],
          __typename: "SearchResultItemConnection",
        },
      },
    },
  },
];

describe("should work with github API", () => {
  it("should reflect loading state correctly", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <GithubWidget />
      </MockedProvider>
    );
    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
  });

  it("should reflect error correctly", async () => {
    const errorResponseMock = {
      request: {
        query: GITHUB_REPOSITORIES,
        variables: {
          searchValue: SEARCH_VALUE,
          resultsCount: 10,
        },
      },
      error: new Error("An error occurred"),
    };
    render(
      <MockedProvider mocks={[errorResponseMock]}>
        <GithubWidget />
      </MockedProvider>
    );
    expect(
      await screen.findByText(SOMETHING_WENT_WRONG_MESSAGE)
    ).toBeInTheDocument();
  });

  it("should render a github widget with basic functionality", async () => {
    const singleRepoMock = {
      request: {
        query: GITHUB_REPOSITORIES,
        variables: { searchValue: SEARCH_VALUE, resultsCount: 10 },
      },
      result: {
        data: {
          search: {
            issueCount: 0,
            nodes: [
              {
                name: "mui",
                forkCount: 1,
                url: "https://github.com/dcloudio/mui",
                stargazerCount: 1,
                __typename: "Repository",
              },
              {
                name: "mui2",
                forkCount: 2,
                url: "https://github.com/dcloudio/mui2",
                stargazerCount: 2,
                __typename: "Repository",
              },
            ],
            __typename: "SearchResultItemConnection",
          },
        },
      },
    };
    render(
      <MockedProvider mocks={[singleRepoMock]}>
        <GithubWidget />
      </MockedProvider>
    );

    // Basic widget functionality includes
    expect(await screen.findByRole("progressbar")).toBeInTheDocument(); // should reflect loading state
    expect(await screen.findByText("mui")).toBeInTheDocument(); // should see first result
    expect(await screen.findByText("mui2")).toBeInTheDocument(); // should see another result
    expect(screen.getByDisplayValue(SEARCH_VALUE)).toBeInTheDocument(); // should see a textfield with initial value
  });

  describe("should reflect getRepositories loading state correctly", () => {});
});
