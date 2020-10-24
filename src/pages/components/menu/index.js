import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Menubutton,Navp,Spantext,NavT} from './styles';
import LogoSVG from '../../../assets/images/svg/logo'


export default function Heade() {
    return (
        <Navp expand="lg">
            <Navbar.Brand href="#inicio"><LogoSVG sizeWidth={'250px'} sizeHeight={'80'}/></Navbar.Brand>
            <Navbar.Toggle  style={{backgroundColor:'white',}} aria-controls="basic-navbar-nav" />
            <Navp.Collapse id="basic-navbar-nav">
            <NavT className="mr-auto col-md-9 justify-content-end align-items-center">
                    <Nav.Link  href="#inicio"><Spantext>Inicio</Spantext></Nav.Link>
                    <Nav.Link  href="#servico"><Spantext>Serviços</Spantext></Nav.Link>
                    <Nav.Link  href="#projetos"><Spantext>Projetos</Spantext></Nav.Link>
                    <Nav.Link  href="#blog"><Spantext>Blog</Spantext></Nav.Link>
             </NavT>
             <NavT className="mr-auto col-md-2  justify-content-end align-items-center">
                    <Menubutton variant="outline-light"  href="#contato">Contato</Menubutton>
             </NavT>
            </Navp.Collapse>
        </Navp>
    );
}


