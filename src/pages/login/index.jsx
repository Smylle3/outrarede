import MyButton from 'components/button'
import MyInput from 'components/input'
import React from 'react'
import { Link } from 'react-router-dom'

import { Background, ButtonBox, LoginBox, LoginIcon } from './styles'

export default function Login() {
    const login = () => {
        console.log('Click!')
    }

    return (
        <Background>
            <LoginBox>
                <LoginIcon />
                <MyInput label="E-mail" type="text" />
                <MyInput label="Senha" type="password" />
                <MyButton onClick={login} type="mediumP" name="LOGIN" />
                <ButtonBox>
                    <Link to="/signin">
                        <MyButton type="underline" name="CADASTRE-SE" />
                    </Link>
                    <Link to="/signin">
                        <MyButton type="underline" name="ESQUECI A SENHA" />
                    </Link>
                </ButtonBox>
            </LoginBox>
        </Background>
    )
}
