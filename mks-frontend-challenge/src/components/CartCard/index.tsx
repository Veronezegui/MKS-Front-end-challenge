import { Container, Price, ProductName } from "./styles";
import Image from "next/image";
import QtdSelector from "../QtdSelector";

export default function CartCard() {
    return (
        <Container>
            <Image src="" alt="product" width={46} height={57} />
            <ProductName>Apple Watch Series 4 GPS</ProductName>
            <QtdSelector />
            <Price>R$399</Price>
            <div className="divClose">
                <button className="close">X</button>
            </div>
        </Container>
    );
}
