/* eslint-disable react-hooks/exhaustive-deps */
import {
    Container,
    CartMenu,
    CartMenuHeader,
    CartMenuFooter,
    CartMenuBody,
    ButtonContent,
    ButtonText,
    CartMenuHeaderTitle,
    CloseMenuHeader,
    CartMenuBodyContent,
    CartTotalContent,
    LabelTotal,
    CartTotal,
    FinishButton,
} from "./styles";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import CartCard from "../CartCard";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, incrementQtd, decreaseQtd } from "@/features/cartMenu";
import { calculateTotal } from "@/features/cartTotal";

export interface ProductsProps {
    id: number;
    name: string;
    brand?: string;
    description?: string;
    photo: string;
    price: string;
    qtd: number;
    event?: () => void;
}

export default function CartButton() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.cart);
    const cartTotal = useSelector((state: any) => state.cartTotal.total);

    function onClose(item: ProductsProps) {
        dispatch(removeProduct(item));
    }

    function calcTotal(item: ProductsProps[]) {
        dispatch(calculateTotal(item));
    }

    function addQtd(item: ProductsProps) {
        dispatch(incrementQtd(item));
    }

    function removeQtd(item: ProductsProps) {
        dispatch(decreaseQtd(item));
    }

    useEffect(() => {
        calcTotal(products);
    }, [products]);

    return (
        <>
            <Container
                onClick={() => setIsOpen(!isOpen)}
                data-testid="openCart"
            >
                <ButtonContent>
                    <Icon
                        icon="typcn:shopping-cart"
                        color="black"
                        fontSize={22}
                    />
                    <ButtonText>{products.length}</ButtonText>
                </ButtonContent>
            </Container>
            {isOpen === true && (
                <CartMenu data-testid="cartMenu">
                    <CartMenuHeader>
                        <CartMenuHeaderTitle>
                            Carrinho de compras
                        </CartMenuHeaderTitle>
                        <CloseMenuHeader
                            onClick={() => setIsOpen(false)}
                            data-testid="closeCart"
                        >
                            X
                        </CloseMenuHeader>
                    </CartMenuHeader>
                    <CartMenuBody>
                        <CartMenuBodyContent>
                            {products.map((item: ProductsProps) => (
                                <CartCard
                                    key={item.id}
                                    id={item.id}
                                    photo={item.photo}
                                    name={item.name}
                                    price={item.price}
                                    qtd={item.qtd}
                                    event={() => onClose(item)}
                                    value={item.qtd}
                                    onIncrease={() => {
                                        addQtd(item);
                                    }}
                                    onDecrease={() => {
                                        removeQtd(item);
                                    }}
                                />
                            ))}
                        </CartMenuBodyContent>
                    </CartMenuBody>
                    <CartMenuFooter>
                        <CartTotalContent>
                            <LabelTotal>Total:</LabelTotal>
                            <CartTotal data-testid="cartTotal">
                                R${parseInt(cartTotal).toLocaleString("pt-BR")}
                            </CartTotal>
                        </CartTotalContent>
                        <FinishButton>Finalizar Compra</FinishButton>
                    </CartMenuFooter>
                </CartMenu>
            )}
        </>
    );
}
