import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 101px;
    background: #0f52ba;
    padding: 28px 65px;
    z-index: 1;

    @media screen and (max-width: 440px) {
        padding: 28px 30px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    line-height: 19px;
`;

export const Subtitle = styled.p`
    padding-top: 14px;
    font-size: 18px;
    font-weight: 100;
    color: #fff;
    line-height: 19px;
`;
