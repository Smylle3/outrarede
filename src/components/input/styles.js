import styled from "styled-components";
import { theme } from "globalStyles";

export const LabelBox=styled.label`
    color: ${theme.lightP};

    width: 70%;
    padding: 1px;
    margin-bottom: 25px;
`

export const InputBox=styled.input`
    background-color: ${theme.lightP};

    height: 30px;
    width: 100%;
    margin-top: 10px;
    padding-left: 7px;

    border: 0 none;
    border-radius: 7px;

    font-size: 18px;
    color: ${theme.darkP};
    :focus {
        border: 0 none;
        outline: 0;
        transition: 0.5s;
        box-shadow: 0px 0px 15px 5px ${theme.lightP};
    }
`