import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt=" " />

            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="senha" />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </form>
        </>
    );
}
