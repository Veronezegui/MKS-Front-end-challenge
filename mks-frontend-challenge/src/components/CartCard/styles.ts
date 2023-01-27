import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    gap: 20px;
    padding: 45px 36px;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    .divClose {
        position: relative;
    }

    .close {
        position: absolute;
        z-index: 1;
        top: -60px;
        right: -40px;
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
    }
`;

export const ProductName = styled.p`
    font-size: 12px;
    color: #000000;
`;

export const Price = styled.p`
    font-size: 12px;
    color: #000000;
    font-weight: 700;
`;
