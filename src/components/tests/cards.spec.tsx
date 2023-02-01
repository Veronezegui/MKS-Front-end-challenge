import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "../Cards";

describe("Card", () => {
    it("should render correctly", () => {
        const cardTest = {
            id: 1,
            name: "Headset Cloud Stinger",
            brand: "HyperX",
            description:
                "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
            price: "600.00",
        };

        render(
            <Cards
                id={cardTest.id}
                image={cardTest.photo}
                title={cardTest.name}
                price={cardTest.price}
                description={cardTest.description}
            />
        );

        expect(screen.getByText("COMPRAR")).toBeInTheDocument();
        expect(screen.getByText(cardTest.name)).toBeInTheDocument(),
            expect(screen.getByText(cardTest.description)).toBeInTheDocument();
    });
});
