import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartCard from "../CartCard";
import { Provider } from "react-redux";
import { store } from "@/store";

describe("CartCard", () => {
    it("should render correctly", () => {
        const cardTest = {
            id: 1,
            name: "Headset Cloud Stinger",
            brand: "HyperX",
            description:
                "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
            price: "600.00",
            qtd: 1,
        };

        const onIncrease = jest.fn();
        const onDecrease = jest.fn();

        render(
            <Provider store={store}>
                <CartCard
                    id={cardTest.id}
                    name={cardTest.name}
                    photo={cardTest.photo}
                    price={cardTest.price}
                    qtd={cardTest.qtd}
                    value={cardTest.qtd}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            </Provider>
        );

        expect(screen.getByTestId("photo")).toBeInTheDocument(),
            expect(screen.getByTestId("name")).toBeInTheDocument(),
            expect(screen.getByText("Qtd:")).toBeInTheDocument(),
            expect(screen.getByText("-")).toBeInTheDocument(),
            expect(screen.getByText("+")).toBeInTheDocument(),
            expect(screen.getByText(1)).toBeInTheDocument(),
            expect(screen.getByText("X")).toBeInTheDocument();
    });

    it("should call a function when hits the buttons", () => {
        const cardTest = {
            id: 1,
            name: "Headset Cloud Stinger",
            brand: "HyperX",
            description:
                "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
            price: "600.00",
            qtd: 1,
        };

        const onIncrease = jest.fn();
        const onDecrease = jest.fn();
        const onClose = jest.fn();

        render(
            <Provider store={store}>
                <CartCard
                    id={cardTest.id}
                    name={cardTest.name}
                    photo={cardTest.photo}
                    price={cardTest.price}
                    qtd={cardTest.qtd}
                    value={cardTest.qtd}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    event={onClose}
                />
            </Provider>
        );

        const increase = screen.getByText("+");
        const decrease = screen.getByText("-");
        const close = screen.getByText("X");

        fireEvent.click(increase);
        fireEvent.click(decrease);
        fireEvent.click(close);

        expect(onIncrease).toBeCalled(),
            expect(onDecrease).toBeCalled(),
            expect(onClose).toBeCalled();
    });
});
