import styled from 'styled-components'
import { theme } from 'globalStyles'

export const ButtonBox = styled.button`
    background-color: ${theme.lightP};

    margin-top: 10px;
    padding: 7px 15px;

    border: 0 none;
    border-radius: 7px;

    font-size: 18px;
    color: ${theme.darkP};
    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 15px 5px ${theme.lightP};
        transition: 0.5s;
    }
    :active {
        color: ${theme.lightP};
        background-color: ${theme.darkP};
        transition: 0.1s;
    }
`

export const UnderLine = styled.button`
    background-color: transparent;

    margin-top: 10px;
    padding: 5px 10px;

    border-bottom: 3px solid ${theme.lightP};
    border-top: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;

    font-size: 18px;
    color: ${theme.lightP};
    :hover {
        cursor: pointer;
        border: 3px solid ${theme.lightP};
        border-radius: 7px;
        transition: 0.5s;
    }
    :active {
        color: ${theme.lightS};
        border-color: ${theme.lightS};
        transition: 0.1s;
    }
`
export const Transparent = styled.button`
    background-color: transparent;

    margin-top: 10px;

    border: 0 none;
    border-radius: 7px;

    font-size: 18px;
    color: ${theme.lightP};
    :hover {
        cursor: pointer;
        color: ${theme.lightS};
        transition: 0.5s;
    }
    :active {
        box-shadow: 0px 0px 15px 5px ${theme.lightP};
        transition: 0.1s;
    }
`