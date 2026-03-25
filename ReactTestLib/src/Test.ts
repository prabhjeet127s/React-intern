import { render, screen } from "@testing-library/react";
import App from './App'

test("renders login button", () => {
  render(<App/>);

  const btn = screen.getByText("Login");

  expect(btn).toBeInTheDocument();
});
