import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, } from './styles'

function Button(props) {
    const {
        text,
    } = props
    return (
        <Container>
            {props.children}
        </Container>
    )
}
export default Button

