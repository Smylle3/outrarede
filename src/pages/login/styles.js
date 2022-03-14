import styled from 'styled-components'
import { theme } from 'globalStyles'
import Image from '../../assets/images/icons/Icon.png'

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.mediumP};

    width: 100vw;
    height: 100vh;
`

export const LoginBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${theme.darkP};

    min-width: 230px;
    width: 30vw;
    height: 70vh;

    border-radius: 10px;
    box-shadow: 0px 0px 15px 10px ${theme.lightP};
`

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    margin: 15px 0px;
    width: 100%;
`

export const LoginIcon = styled.div`
    background-image: url(${Image});
    background-size: cover;
    background-repeat: no-repeat;

    width: 150px;
    height: 150px;

    margin-bottom: 15px;
`
