import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "@/store";

describe("Header", () => {
    it("should render correctly", () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect(screen.getByText("MKS")).toBeInTheDocument(),
            expect(screen.getByText("Sistemas")).toBeInTheDocument(),
            expect(screen.getByTestId("openCart")).toBeInTheDocument();
    });
});
