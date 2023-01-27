import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ffffff;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    width: 100%;
    min-height: 100vh;
    padding: 217px 247px;
    background: #e5e5e5;

    @media screen and (max-width: 400px) {
        padding: 217px 30px;
    }

    @media screen and (max-width: 900px) {
        padding: 217px 80px;
    }
`;
