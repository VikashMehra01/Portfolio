import { render, screen } from "@testing-library/react";
import Navbar from "./Components/Navbar";

test("renders navbar links", () => {
  const { unmount } = render(<Navbar theme={true} />);
  expect(screen.getByText("Vikash Mehra")).toBeInTheDocument();
  expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Experience & Skills").length).toBeGreaterThan(0);
  unmount();
});
