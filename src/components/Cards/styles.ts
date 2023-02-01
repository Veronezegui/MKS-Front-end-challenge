import styled from "styled-components";

export const Container = styled.div`
    width: 217px;
    max-height: 285px;
    background: #ffffff;
    border-radius: 8px;
    flex: calc(20% - 22px);
    max-width: calc(20% - 22px);

    @media screen and (max-width: 1500px) {
        flex: calc(25% - 22px);
        max-width: calc(25% - 22px);
    }

    @media screen and (max-width: 1380px) {
        flex: calc(33% - 22px);
        max-width: calc(33% - 22px);
    }

    @media screen and (max-width: 1040px) {
        flex: calc(50% - 11px);
        max-width: calc(50% - 11px);
    }

    @media screen and (max-width: 500px) {
        flex: calc(50% - 6px);
        max-width: calc(50% - 6px);
    }

    @media screen and (max-width: 380px) {
        flex: 100%;
        max-width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    padding-top: 18px;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px 0 14px;
    gap: 2px;
`;

export const ProductName = styled.h1`
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
`;

export const Price = styled.p`
    max-width: 100px;
    height: 26px;
    background: #373737;
    color: #ffff;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    padding: 0 14px;
    font-size: 10px;
    font-style: normal;
    color: #2c2c2c;
    font-weight: 300;
    line-height: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Button = styled.button`
    width: 100%;
    height: 32px;
    background: #0f52ba;
    border-radius: 0 0 8px 8px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    color: white;
    font-size: 14px;
    font-weight: 600;

    :hover {
        cursor: pointer;
        filter: brightness(75%);
    }
`;

export const ButtonText = styled.p``;
