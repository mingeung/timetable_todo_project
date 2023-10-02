import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.bgColor};
    color : ${({ theme }) => theme.textColor};
    
}input {
    background-color: ${({ theme }) => theme.inputBgColor};
} .input {
    background-color: ${({ theme }) => theme.inputBgColor};
} .category-input{
    background-color: ${({ theme }) => theme.inputBgColor};
}
#daily-dropdown, #light, #profile {
    box-shadow: ${({ theme }) => theme.boxShadow};
}
`;
