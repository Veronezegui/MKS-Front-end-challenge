import styled from "styled-components";

export const Container = styled.div`
    width: 217px;
    min-height: 300px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 30px;
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;

    .image {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 14px;
    gap: 4px;

    h1 {
        text-align: left;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
    }

    p {
        max-width: 100px;
        height: 26px;
        background: #373737;
        color: #ffff;
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 5px;
    }
`;

export const Description = styled.p`
    padding: 0 14px;
    font-size: 10px;
    color: #2c2c2c;
    font-weight: 300;
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
