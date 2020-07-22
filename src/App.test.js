import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Entre em contacto connosco", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Entre em contacto connosco/i);
  expect(linkElement).toBeInTheDocument();
});
