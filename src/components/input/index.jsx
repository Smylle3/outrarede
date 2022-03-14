import React from 'react'

import { InputBox, LabelBox } from './styles'

export default function MyInput(props) {
    return (
        <LabelBox>{props.label}
            <InputBox type={props.type}/>
        </LabelBox>
    )
}
