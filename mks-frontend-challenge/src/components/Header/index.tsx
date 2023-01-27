import { Container, Title } from "./styles";
import CartButton from "@/components/CartButton";

export default function Header() {
    return (
        <Container>
            <Title>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </Title>
            <CartButton />
        </Container>
    );
}
