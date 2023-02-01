import { Container, Subtitle, Title, TitleContainer } from "./styles";
import CartButton from "@/components/CartButton";

export default function Header() {
    return (
        <Container>
            <TitleContainer>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleContainer>
            <CartButton data-testid="openCart" />
        </Container>
    );
}
