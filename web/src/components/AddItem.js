import React, { Fragment, useState, useContext } from 'react';
import { ItemContext } from '../context/ItemState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

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
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">Nome do Item</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                    </div>
                    <div>
                        <label htmlFor="price"> Preço</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text"/>
                    </div>
                    <div>
                        <button>Salvar</button>
                    </div>
                    <div><Link to='/'>Cancelar</Link></div>
                </form>
            </div>
        </Fragment>
    )
}