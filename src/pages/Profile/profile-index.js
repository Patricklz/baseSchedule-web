import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './Avatar-input/avatar-input';

import { Container } from './profile-styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>

                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu Endereço de e-mail"
                />

                <hr />
                <input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar Perfil</button>
            </Form>

            <button type="button" onClick={handleSignOut}>Sair</button>
        </Container>
    );
}
