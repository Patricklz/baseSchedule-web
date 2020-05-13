import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './auth-style';

import Header from '~/components/header/header';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
}

AuthLayout.prototype = {
    children: PropTypes.element.isRequired,
};
