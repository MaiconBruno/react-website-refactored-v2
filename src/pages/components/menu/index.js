import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Menubutton,Navp,Spantext,NavT} from './styles';
import LogoSVG from '../../../assets/images/svg/logo'


export default function Heade() {
    return (
        <Navp className="col-md-12 col-12 d-flex justify-content-center align-items-center" expand="lg">
            <Navbar.Brand href="#inicio"><LogoSVG sizeWidth={'300px'} sizeHeight={'80'}/></Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor:'white',}} aria-controls="basic-navbar-nav" />
            <Navp.Collapse id="basic-navbar-nav">
            <NavT className="m-0 col-md-12 justify-content-end align-items-center">
                    <Nav.Link  href="#inicio"><Spantext>Inicio</Spantext></Nav.Link>
                    <Nav.Link  href="#servico"><Spantext>Serviços</Spantext></Nav.Link>
                    <Nav.Link  href="#projetos"><Spantext>Projetos</Spantext></Nav.Link>
                    <Nav.Link  href="#blog"><Spantext>Blog</Spantext></Nav.Link>
                    <Menubutton className="m-4" variant="outline-light"  href="#contato">Contato</Menubutton>
             </NavT>
            </Navp.Collapse>
        </Navp>
    );
}


