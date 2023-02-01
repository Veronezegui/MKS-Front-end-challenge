import {
    Container,
    Description,
    Button,
    Content,
    ImageContainer,
    ProductName,
    Price,
    TitleContainer,
    ButtonText,
} from "./styles";
import Image from "next/image";
import { Icon } from "@iconify/react";

export interface CardProps {
    id: number;
    image: string;
    title: string;
    price: string;
    description?: string;
    event?: () => void;
}

export default function Card({
    image,
    title,
    price,
    description,
    event,
}: CardProps) {
    return (
        <Container data-testid="card">
            <Content>
                <ImageContainer>
                    <Image src={image} alt="Product" width={111} height={138} />
                </ImageContainer>
                <TitleContainer>
                    <ProductName>{title}</ProductName>
                    <Price>{`R$${price}`}</Price>
                </TitleContainer>
                <Description>{description}</Description>
                <Button onClick={event}>
                    <Icon
                        icon="mdi:marketplace-outline"
                        color="white"
                        fontSize={16}
                    />
                    <ButtonText>COMPRAR</ButtonText>
                </Button>
            </Content>
        </Container>
    );
}
