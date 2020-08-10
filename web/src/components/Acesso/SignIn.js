import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

// import { api } from "../../services/auth";
import { Form, Container } from "./styles";
import Logo from "../../assets/cart.png"

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async e => {
        e.preventDefault();

        if (!email || !password) {
            setError({ error: "Preencha e-mail e senha para continuar!" });
        } 
        // else {
        //     try {
        //         const response = await api.post("/login", { email, password });
        //         // login(response.data.token);
        //         this.props.history.push("/");
        //     } catch (err) {
        //         setError({error: "Houve um problema com o login, verifique suas credenciais."});
        //     }
        // }
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
        <Form onSubmit={handleSignIn}>
            <img src={Logo} alt="Logo" />
            {error && <p>{error}</p>}
            <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={onChangeEmail}
            />
            <input
            type="password"
            placeholder="Senha"
            onChange={onChangePassword}
            />
            <button type="submit">Entrar</button>
            <hr />
            <Link to="/signup">Criar conta</Link>
        </Form>
        </Container>
    );
}

export default withRouter(SignIn);