import { Container } from "./styles";

export default function Skeleton() {
    return (
        <>
            <Container>
                <rect x="15" y="50" rx="2" ry="2" width="350" height="217" />
                <rect x="15" y="230" rx="2" ry="2" width="170" height="217" />
                <rect x="60" y="230" rx="2" ry="2" width="170" height="217" />
            </Container>
        </>
    );
}
