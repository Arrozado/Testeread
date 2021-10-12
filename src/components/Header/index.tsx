import React from 'react'
import Link from 'next/link'
import { Container, Separator, LoginContainer, Content, Item, SlimeIcon } from './styles'

function Header(props) {
    const weAre = "Quem somos"
    const supportUs = "Apoie-nos"
    const categories = "Categorias"
    const restrict = "+18"
    const login = "Entrar"
    const home = "Slime Read"

    const {
        children
    } = props

    return (
        <header>
            <Container>
                <Content >
                    <Separator flex={1}>
                        <>
                            <SlimeIcon>
                                <Link href="/">
                                    <h1>{home}</h1>
                                </Link>
                            </SlimeIcon>
                        </>

                        <Link href="about">
                            <Item>
                                <>

                                    <h3>{weAre}</h3>
                                </>
                            </Item>
                        </Link>

                        <Link href="support-us">
                            <Item>
                                <>
                                    <h3>{supportUs}</h3>
                                </>
                            </Item>
                        </Link>

                        <Link href="categories">
                            <Item>
                                <>
                                    <h3>{categories}</h3>
                                </>
                            </Item>

                        </Link>


                        <Link href="adult">
                            <Item>
                                <>
                                    <h3>{restrict}</h3>
                                </>
                            </Item>
                        </Link>
                    </Separator>


                    <LoginContainer>
                        <>
                            <Link href="login">
                                <h3>{login}</h3>
                            </Link>
                        </>
                    </LoginContainer>

                </Content>
            </Container >
        </header>
    )
}
export default Header

