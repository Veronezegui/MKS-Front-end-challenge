import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    min-width: 50px;
    min-height: 29px;
    color: #000000;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 2px;
        width: 100%;
        background: #ffffff;
        border: 1px solid #bfbfbf;
        border-radius: 4px;

        p {
            font-size: 10px;
        }

        .qtdNumber {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000000;
            width: 33%;
            height: 100%;
            border-inline: 1px solid #bfbfbf;
        }

        button {
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35%;
            height: 100%;

            :hover {
                cursor: pointer;
            }
        }
    }
`;

export const Title = styled.p`
    font-size: 8px;
    color: #000000;
`;
