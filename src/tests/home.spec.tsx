import {
    act,
    fireEvent,
    getByTestId,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";
import { Provider } from "react-redux";
import { store } from "@/store";
import api from "@/service/api";
import { mocked } from "jest-mock";

jest.mock("@/service/api");

describe("HomePage", () => {
    it("should render correctly", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getByText("MKS")).toBeInTheDocument();
        expect(
            screen.getByText("MKS sistemas © Todos os direitos reservados")
        ).toBeInTheDocument();
    });

    it("should call the API", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        expect(apiMocked).toBeCalled();
    });

    it("should render the card component", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        await waitFor(() => screen.getByTestId("card"));
        expect(screen.getByTestId("card")).toBeInTheDocument();
    });

    it("should pass the API data to the card component", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        await waitFor(() => screen.getByTestId("card"));
        expect(screen.getByText("Headset Cloud Stinger")).toBeInTheDocument();
        expect(
            screen.getByText(
                "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior"
            )
        ).toBeInTheDocument();
        expect(screen.getByText("R$600")).toBeInTheDocument();
    });

    it("should increase the quantity of itens in cart", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        await waitFor(() => screen.getByTestId("card"));
        const comprarButton = screen.getByText("COMPRAR");
        fireEvent.click(comprarButton);

        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("should add an item to the cartMenu", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        await waitFor(() => screen.getByTestId("card"));
        const comprarButton = screen.getByText("COMPRAR");
        fireEvent.click(comprarButton);
        const cartButton = screen.getByTestId("openCart");
        fireEvent.click(cartButton);
        expect(screen.getByTestId("cartCard")).toBeInTheDocument();
    });

    it("should alterate total when add an item to the cartMenu", async () => {
        const apiMocked = mocked(api.get);
        apiMocked.mockResolvedValueOnce({
            data: {
                products: [
                    {
                        id: 1,
                        name: "Headset Cloud Stinger",
                        brand: "HyperX",
                        description:
                            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
                        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                        price: "600.00",
                    },
                ],
            },
        } as any);

        await act(async () =>
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
        );

        await waitFor(() => screen.getByTestId("card"));
        const cartButton = screen.getByTestId("openCart");
        fireEvent.click(cartButton);
        const comprarButton = screen.getByText("COMPRAR");
        fireEvent.click(comprarButton);
        const total = screen.getByTestId("cartTotal").textContent
        expect(total).toBe("R$1.800")
    });
});
