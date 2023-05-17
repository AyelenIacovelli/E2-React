import React from "react";
import { LinkContainer, NavLinkStyled, NavbarContainer } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <NavbarContainer>
            <LinkContainer>
                <NavLinkStyled to="/" >Home</NavLinkStyled>
                <NavLinkStyled to="/todolist" >ToDoList</NavLinkStyled>
                <NavLinkStyled to="/pokeapi" >Pokeapi</NavLinkStyled>
            </LinkContainer>
        </NavbarContainer>
    );
};

export default Navbar;