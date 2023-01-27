import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 100px;
    gap: 20px;
    padding: 45px 36px 45px 20px;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    @media screen and (max-width: 345px) {
        padding: 5px 5px;
        justify-content: flex-start;
    }
`;

export const ImageContainer = styled(Image)`
    width: 46px;

    @media screen and (max-width: 345px) {
        width: 0%;
        visibility: hidden;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: -5px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    color: #ffffff;
    background: #000000;

    :hover {
        cursor: pointer;
    }
`;

export const QtdSelector = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    min-width: 60px;
    min-height: 29px;
    color: #000000;
`;

export const QtdTitle = styled.p`
    font-size: 8px;
    color: #000000;
`;

export const QtdContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 2px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
`;

export const QtdButton = styled.button`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;

    :hover {
        cursor: pointer;
    }
`;

export const ButtonText = styled.p`
    font-size: 10px;
`;

export const QtdValue = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #000000;
    width: 33%;
    height: 100%;
    border-inline: 1px solid #bfbfbf;
`;

export const ProductName = styled.p`
    text-align: left;
    font-size: 12px;
    color: #000000;
`;

export const Price = styled.p`
    font-size: 12px;
    color: #000000;
    font-weight: 700;

    @media screen and (max-width: 343px) {
        visibility: hidden;
    }
`;

export const Price = styled.p`
    font-size: 12px;
    color: #000000;
    font-weight: 700;
`;