import React from 'react';
import { Link } from 'react-router-dom';

export const Heading = () => {
    return (
        <>
            <div>
                <div>
                    <h5>Lista de Itens</h5>
                </div>
                <div>
                    <Link to="/add">
                        <button>Novo Item</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
