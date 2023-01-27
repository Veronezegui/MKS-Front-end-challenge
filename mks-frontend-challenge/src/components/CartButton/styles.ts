import styled from "styled-components";

export const Container = styled.button`
    width: 90px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;

    :hover {
        cursor: pointer;
        filter: brightness(85%);
    }

    div {
        padding: 16px 15px;
        font-size: 18px;
        font-weight: 700;
        gap: 16px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            padding-top: 2px;
        }
    }
`;

export const CartMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 440px;
    height: 100vh;
    background: #0f52ba;
    position: absolute;
    padding-top: 36px;
    top: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0px 5px 5px #000000;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const CartMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    padding: 0 47px;

    h1 {
        font-size: 24px;
        color: #ffffff;
        font-weight: 700;
        text-align: left;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        width: 38px;
        height: 38px;
        border-radius: 100%;
        color: #ffffff;
        background: #000000;

        :hover {
            cursor: pointer;
        }
    }
`;

export const CartMenuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    padding: 70px 37px 20px 37px;
    width: 100%;

    .cards {
        padding: 10px;
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        max-height: 600px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        ::-webkit-scrollbar {
            width: 5px;
        }
    }

    .total {
        display: flex;
        font-size: 18px;
        justify-content: space-between;
        font-weight: 700;
        color: #ffffff;
    }
`;

export const CartMenuFooter = styled.button`
    display: flex;
    font-size: 28px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    background: #000000;
    color: #ffffff;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 700px) {
        position: fixed;
        bottom: 0;
        z-index: 1;
    }
`;
