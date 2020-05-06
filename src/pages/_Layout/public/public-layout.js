import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './public-style';

export default function PublicLayout({ children }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
}

PublicLayout.prototype = {
    children: PropTypes.element.isRequired,
};
