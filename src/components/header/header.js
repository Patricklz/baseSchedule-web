import React from 'react';
import { Link } from 'react-router-dom';


import headerLogo from '~/assets/header-logo.svg';

import Notifications from '~/components/notifications/notification'
import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={headerLogo} alt="" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>Patrick</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}