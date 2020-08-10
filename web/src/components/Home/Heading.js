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
                        <button>
                            Novo Item
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
