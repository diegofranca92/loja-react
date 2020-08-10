import React, { Fragment, useState, useContext } from 'react';
import { ItemContext } from '../../context/ItemState';
import { useHistory,  Link  } from "react-router-dom";

import { Form, Container } from "./styles";

export const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { addItem, items } = useContext(ItemContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: items.length + 1,
            name,
            price
        }
        addItem(newItem);
        history.push("/");
    }

    return (
        <Fragment>
            <Container>
                <Form onSubmit={onSubmit}>
                    <input
                        placeholder="Nome do item"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text"
                    />
                    <input 
                        placeholder="Preço do item"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        type="text"
                    />
                    <button>Salvar</button>
                    <hr />
                    <Link to='/'>Cancelar</Link>
                </Form>
            </Container>
        </Fragment>
    )
}