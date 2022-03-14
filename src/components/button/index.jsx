import React from 'react'

import { ButtonBox, UnderLine, Transparent } from './styles'

export default function MyButton(props) {

    

    switch (props.type) {
        case 'mediumP':
            return <ButtonBox onClick={props.onClick}>{props.name}</ButtonBox>
        case 'underline':
            return <UnderLine onClick={props.onClick}>{props.name}</UnderLine>
        case 'transparent':
            return <Transparent onClick={props.onClick}>{props.name}</Transparent>
        default:
            break
    }
}
