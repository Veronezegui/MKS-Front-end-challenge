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
`;

export const ButtonContent = styled.div`
    padding: 16px 15px;
    font-size: 18px;
    font-weight: 700;
    gap: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.p`
    padding-top: 2px;
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
    margin-bottom: 20px;
`;

export const CartMenuHeaderTitle = styled.h1`
    font-size: 24px;
    color: #ffffff;
    font-weight: 700;
    text-align: left;
`;

export const CloseMenuHeader = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    min-width: 38px;
    min-height: 38px;
    border-radius: 100%;
    color: #ffffff;
    background: #000000;

    :hover {
        cursor: pointer;
    }
`;

export const CartMenuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    padding: 37px 37px 20px 37px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }
`;

export const CartMenuBodyContent = styled.div`
    padding: 10px;
    overflow: visible;
    width: 100%;
    min-height: 300px;
    max-height: calc(100%-54px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`;

export const CartMenuFooter = styled.div``;

export const FinishButton = styled.button`
    display: flex;
    font-size: 28px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 90px;
    background: #000000;
    color: #ffffff;

    :hover {
        cursor: pointer;
    }
`;

export const CartTotalContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 37px 20px;
    color: #ffffff;
    font-weight: 700;
`;

export const LabelTotal = styled.p``;

export const CartTotal = styled.p``;
