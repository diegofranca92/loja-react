import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Container } from "./styles";

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={onChangeUsername}
                    value={username}
                />
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={onChangeEmail}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={onChangePassword}
                    value={password}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    )

}
