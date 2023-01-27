import {
    Container,
    CartMenu,
    CartMenuHeader,
    CartMenuFooter,
    CartMenuBody,
} from "./styles";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CartCard from "../CartCard";
export default function CartButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Container onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <Icon
                        icon="typcn:shopping-cart"
                        color="black"
                        fontSize={22}
                    />
                    <p>0</p>
                </div>
            </Container>
            {isOpen === true && (
                <CartMenu>
                    <CartMenuHeader>
                        <h1>Carrinho de compras</h1>
                        <button onClick={() => setIsOpen(false)}>X</button>
                    </CartMenuHeader>
                    <CartMenuBody>
                        <div className="cards">
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                        </div>
                        <div className="total">
                            <p>Total:</p>
                            <p>R$399</p>
                        </div>
                    </CartMenuBody>
                    <CartMenuFooter>Finalizar Compra</CartMenuFooter>
                </CartMenu>
            )}
        </>
    );
}
