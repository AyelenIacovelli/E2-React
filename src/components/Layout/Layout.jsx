import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyles';



const Layout = ({ children }) => {
    return (
        <LayoutContainerStyled>
            <Navbar />
            <ContentContainerStyled>{children}</ContentContainerStyled>
            <p>Nucbaneta</p>
        </LayoutContainerStyled>
    );
};

export default Layout;