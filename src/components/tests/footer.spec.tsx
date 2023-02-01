import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer", () => {
    it("should render correctly", () => {
        render(<Footer />);

        expect(
            screen.getByText("MKS sistemas © Todos os direitos reservados")
        ).toBeInTheDocument();
    });
});
