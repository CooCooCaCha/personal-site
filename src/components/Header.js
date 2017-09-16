import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

const Header = () => (
    <HeaderContainer>
        <HeaderInner>
            <Title>
                <TitleLink to="/">
                    Bill Johnson
                </TitleLink>
            </Title>
        </HeaderInner>
    </HeaderContainer>
);

const HeaderContainer = styled.div`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`;

const HeaderInner = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
    margin: 0;
`;

const TitleLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export default Header;