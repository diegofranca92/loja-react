import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { ListItem } from './ListItem';

export const Home = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <h3>Loja Virtual</h3>
                    <Heading />
                    <ListItem />
                </div>
            </div>
        </Fragment>
    )
}