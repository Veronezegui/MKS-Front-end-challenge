import { Html, Head, Main, NextScript } from "next/document";
import StyledJsxRegistry from "./registry";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <StyledJsxRegistry>
                    <Main />
                    <NextScript />
                </StyledJsxRegistry>
            </body>
        </Html>
    );
}
