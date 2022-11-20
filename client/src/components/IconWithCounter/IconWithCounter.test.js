import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IconWithCounter } from "./IconWithCounter";

describe("should render correct icon and counter", () => {
  it("renders icon with counter", async () => {
    render(<IconWithCounter type="star" count={10} />);
    expect(await screen.findByTestId("StarIcon")).toBeInTheDocument(); //StarIcon is from mui itself
    expect(await screen.findByText("10")).toBeInTheDocument();
  });
});
