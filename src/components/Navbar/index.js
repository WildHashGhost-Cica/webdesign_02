import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobielIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {FcBarChart} from 'react-icons/fc'

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>WHG</NavLogo>
                   <MobielIcon onClick={toggle}>
                       <FcBarChart/>
                   </MobielIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="discover">Discover</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="services">Services</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="signup">Sign Up</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to ="/signin">Sing In </NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
           </Nav> 
        </>
    )
}

export default Navbar
