import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DebouncedTextField } from "./DebouncedTextField";

describe("should work with default value and debounce logic", () => {
  it("renders input with default value", async () => {
    render(
      <DebouncedTextField defaultValue="Default value" onChange={() => {}} />
    );
    expect(screen.getByDisplayValue("Default value")).toBeInTheDocument();
  });

  it("calls onChange function with a proper temeout", async () => {
    const mockedOnchange = jest.fn();
    render(<DebouncedTextField defaultValue="a" onChange={mockedOnchange} />);
    const input = screen.getByDisplayValue("a");
    userEvent.type(input, "b");
    expect(mockedOnchange).not.toHaveBeenCalledWith("ab");
    await waitFor(
      () => expect(mockedOnchange).toHaveBeenCalledWith("ab"),
      { timeout: 1000 } // > than a default 550ms and < 1000 which is UX problematic
    );
    jest.clearAllMocks();
  });
});
