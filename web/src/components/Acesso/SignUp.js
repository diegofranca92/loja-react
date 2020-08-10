import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/auth";
import { Form, Container } from "./styles";
import Logo from "../../assets/cart.png"

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async e => {
        e.preventDefault();
        if (!email || !password) {
          setError({ error: "Preencha todos os dados para se cadastrar" });
        } 
        else {
          try {
            await api.post("/register", { email, password });
            this.props.history.push("/signin");
          } catch (err) {
            console.log(err);
            setError({ error: "Ocorreu um erro ao registrar sua conta." });
          }
        }
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
             <img src={Logo} alt="Logo" />
                {error && <p>{error}</p>}
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
                <Link to="/signin">Fazer login</Link>
            </Form>
        </Container>
    )

}

export default withRouter(SignUp);