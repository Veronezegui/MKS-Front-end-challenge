import { Container, Description, Title, Button, Content } from "./styles";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface CardProps {
    image: string;
    title: string;
    price: string;
    description: string;
}

export default function Card({ image, title, price, description }: CardProps) {
    return (
        <Container>
            <Content>
                <div className="image">
                    <Image src={image} alt="Product" width={111} height={138} />
                </div>
                <Title>
                    <h1>{title}</h1>
                    <p>{price}</p>
                </Title>
                <Description>{description}</Description>
                <Button>
                    <Icon
                        icon="mdi:marketplace-outline"
                        color="white"
                        fontSize={16}
                    />
                    <p>COMPRAR</p>
                </Button>
            </Content>
        </Container>
    );
}
