import ContentLoader from "react-content-loader";
import styled from "styled-components";

export const Container = styled(ContentLoader)`
    width: 217px;
    max-height: 285px;
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
