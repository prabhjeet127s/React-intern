import { render, screen } from "@testing-library/react";
import Button from "./Button";




// eslint-disable-next-line no-undef
test("renders login button", () => {
  render(<Button />);

  const btn = screen.getByText("Login");

  // eslint-disable-next-line no-undef
  expect(btn).toBeInTheDocument();
});