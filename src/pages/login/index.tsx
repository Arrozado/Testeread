import React from 'react'
import Header from '../../components/Header'
import { Container, Content, LeftSide, Center, ContainInput, Reader, ErrorsContainer, Label, FirstLine, Form, Input, InputButton, ContainerOptions } from '../../styles/pages/Login'
import { useForm, NestedValue } from 'react-hook-form';
import { TextField, Select } from '@material-ui/core';

type Option = {
    label: string;
    value: string;
};

function LoginScreen(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const formEmail = "Email"

    const welcome = "Bem vindo"
    const reader = "Leitor"
    const description = 'Faça seu login para desfrutar de todas as conquistas, glorias e funcionalidades da plataforma'
    return (
        <Container   >
            <LeftSide>
                <Center>
                    <FirstLine>
                        <h1>{welcome}, </h1>
                        <Reader>
                            <h1>{`${reader}`}</h1>
                        </Reader>
                    </FirstLine>
                    <h2>{description}</h2>
                </Center>
            </LeftSide>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <ContainInput>
                        <Label>Email</Label>
                        <Input {...register('Email', { required: true })} />
                        {errors.Email && <h5> Email é obrigatorio</h5>}
                    </ContainInput>

                    <ContainInput>
                        <Label>Senha</Label>
                        <Input type="password" {...register('Password', { required: true })} />
                        {errors.Password && <h5>Senha é obrigatoria</h5>}

                    </ContainInput>

                    <ContainerOptions>
                        <h4>Esqueci minha senha</h4>
                    </ContainerOptions>
                    {/*   <ErrorsContainer>
                    </ErrorsContainer> */}

                    <InputButton type="submit" variant="contained" color="primary">
                        <h3>
                            Entrar
                        </h3>
                    </InputButton>

                </Form>
            </Content>
        </Container>
    )
}

export default LoginScreen
