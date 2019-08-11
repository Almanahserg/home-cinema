import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
    background-color: #213245;
    box-shadow: 0 0 5px black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
`;

export const Footer = () => (
    <FooterTag>
        © 2019 Сергеев Ю.С.
    </FooterTag>
);