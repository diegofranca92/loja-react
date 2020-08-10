import React, { Fragment, useState, useContext, useEffect } from 'react';
import { ItemContext } from '../../context/ItemState';
import { useHistory, Link } from "react-router-dom";

import { Form, Container } from "./styles";

export const EditItem = (route) => {
    let history = useHistory();
    const { items, editItem } = useContext(ItemContext);
    const [selectedItem, setSeletedItem] = useState({ id: null, name: '', price: '' });
    const currentItemId = route.match.params.id;

    useEffect(() => {
        const itemId = currentItemId;
        const selectedItem = items.find(item => item.id === parseInt(itemId));
        setSeletedItem(selectedItem);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editItem(selectedItem);
        history.push('/');
    }

    const handleOnChange = (itemKey, value) => setSeletedItem({ ...selectedItem, [itemKey]: value })

    if (!selectedItem || !selectedItem.id) {
        return <div>Carregando...</div>
    }

    return (
        <Fragment>
            <Container>
                <Form onSubmit={onSubmit}>
                    <input 
                        placeholder="Nome do item"
                        value={selectedItem.name} 
                        onChange={(e) => handleOnChange('name', e.target.value)} 
                        type="text"
                    />
                    <input 
                        placeholder="Preço do item"
                        value={selectedItem.price} 
                        onChange={(e) => handleOnChange('price', e.target.value)} 
                        type="text"
                    />
                    <button>Editar</button>
                    <hr />
                    <Link to='/'>Cancelar</Link>
                </Form>
            </Container>
        </Fragment>
    )
}