import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Repositories } from "./Repositories";
import { SOMETHING_WENT_WRONG_MESSAGE } from "../../constants";

const repositoryMap = [
  {
    __typename: "Repository",
    name: "mui",
    forkCount: 6721,
    url: "https://github.com/dcloudio/mui",
    stargazerCount: 13388,
  },
];

describe("should render basic repo information correctly", () => {
  it("renders repository info and it's anchor correctly", async () => {
    render(<Repositories repositoryMap={repositoryMap} />);
    expect(await screen.findByText("mui")).toBeInTheDocument();
    expect(await screen.findByText("6721")).toBeInTheDocument();
    expect(await screen.findByText("13388")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/dcloudio/mui"
    );
  });

  it("renders additionalItems if provided", async () => {
    const additionalItemText = "Additional item";
    render(
      <Repositories
        repositoryMap={repositoryMap}
        additionalListItems={<>{additionalItemText}</>}
      />
    );
    expect(await screen.findByText(additionalItemText)).toBeInTheDocument();
  });

  it("renders error screen correctly", async () => {
    render(<Repositories repositoryMap={repositoryMap} isError={true} />);
    expect(
      await screen.findByText(SOMETHING_WENT_WRONG_MESSAGE)
    ).toBeInTheDocument();
  });
});
