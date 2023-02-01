import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CartButton from "../CartButton";
import "@testing-library/jest-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "@/store";

describe("CartButton", () => {
    it("should render correctly", () => {
        render(
            <Provider store={store}>
                <CartButton />
            </Provider>
        );

        expect(screen.getByTestId("openCart")).toBeInTheDocument();
    });

    it("should open CartMenu", () => {
        render(
            <Provider store={store}>
                <CartButton />
            </Provider>
        );

        const open = screen.getByTestId("openCart");
        fireEvent.click(open);
        expect(screen.getByTestId("cartMenu")).toBeInTheDocument(),
            expect(screen.getByText("Carrinho de compras")).toBeInTheDocument(),
            expect(screen.getByTestId("closeCart")).toBeInTheDocument(),
            expect(screen.getByText("Total:")).toBeInTheDocument(),
            expect(screen.getByText("Finalizar Compra")).toBeInTheDocument();
    });

    it("should close CartMenu", async () => {
        render(
            <Provider store={store}>
                <CartButton />
            </Provider>
        );

        const open = screen.getByTestId("openCart");

        fireEvent.click(open);

        const close = screen.getByTestId("closeCart");

        fireEvent.click(close);

        await waitFor(() => {
            expect(screen.queryByTestId("cartMenu")).not.toBeInTheDocument();
        });

        expect(screen.getByTestId("openCart")).toBeInTheDocument();
    });

    it("should close CartMenu", async () => {
        render(
            <Provider store={store}>
                <CartButton />
            </Provider>
        );

        const open = screen.getByTestId("openCart");

        fireEvent.click(open);

        const close = screen.getByTestId("closeCart");

        fireEvent.click(close);

        await waitFor(() => {
            expect(screen.queryByTestId("cartMenu")).not.toBeInTheDocument();
        });

        expect(screen.getByTestId("openCart")).toBeInTheDocument();
    });
});
