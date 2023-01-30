import {
    CloseButton,
    Container,
    Price,
    ProductName,
    ImageContainer,
    QtdValue,
    QtdSelector,
    QtdTitle,
    QtdContainer,
    QtdButton,
    ButtonText,
} from "./styles";
import { ProductsProps } from "../CartButton";

interface CartCardProps extends ProductsProps {
    value: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export default function CartCard({
    photo,
    name,
    price,
    event,
    value,
    onIncrease,
    onDecrease,
}: CartCardProps) {
    return (
        <Container>
            <ImageContainer src={photo} alt="product" width={46} height={57} />
            <ProductName>{name}</ProductName>
            <QtdSelector>
                <QtdTitle>Qtd:</QtdTitle>
                <QtdContainer>
                    <QtdButton onClick={onDecrease}>
                        <ButtonText>-</ButtonText>
                    </QtdButton>
                    <QtdValue>{value}</QtdValue>
                    <QtdButton onClick={onIncrease}>
                        <ButtonText>+</ButtonText>
                    </QtdButton>
                </QtdContainer>
            </QtdSelector>
            <Price>{`R$${parseInt(price).toLocaleString("pt-BR")}`}</Price>
            <CloseButton className="close" onClick={event}>
                X
            </CloseButton>
        </Container>
    );
}
