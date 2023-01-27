import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background: #e5e5e5;
    padding-top: 141px;
    padding-bottom: 50px;

    @media screen and (max-width: 1180px) {
        align-items: flex-start;
    }
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    width: 80%;

    @media screen and (max-width: 1180px) {
        width: 90%;
    }

    @media screen and (max-width: 500px) {
        width: 96%;
        gap: 11px;
    }

    @media screen and (max-width: 380px) {
        width: 90%;
        gap: 22px;
    }
`;

   