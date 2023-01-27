import { useState } from "react";
import { Container, Title } from "./styles";

export default function QtdSelector() {
    const [qtd, setQtd] = useState(1);

    return (
        <Container>
            <Title>Qtd:</Title>
            <div>
                <button onClick={() => setQtd(qtd - 1)}>
                    <p>-</p>
                </button>
                <p className="qtdNumber">{qtd}</p>
                <button onClick={() => setQtd(qtd + 1)}>
                    <p>+</p>
                </button>
            </div>
        </Container>
    );
}
