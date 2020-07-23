import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders Entre em contacto connosco", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Entre em contacto connosco/i);
  expect(linkElement).toBeInTheDocument();
});
