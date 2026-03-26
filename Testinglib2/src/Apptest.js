import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login button", () => {
  render(<App />);

  const button = screen.getByText("Decrement");

  expect(button).toBeInTheDocument();
});