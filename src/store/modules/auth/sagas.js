import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { signInSucess, signFailure } from './actions';

export function* signIN({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuário não é prestador');
            return;
        }
        yield put(signInSucess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(signFailure());
    }
}

export function* SignUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
        history.push('/');
    } catch (err) {
        toast.error('Falha no cadastro!');
        yield put(signFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIN),
    takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
]);