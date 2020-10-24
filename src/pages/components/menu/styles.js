import Styled from 'styled-components';
import {Button,Navbar,Nav} from 'react-bootstrap';

export const Spantext = Styled.span`
 font-style: normal;
 font-size: 14px;
 color:white!important;
 font-weight:bold;
 transition:0.2s;
 &:hover {
  transition:0.2s;
  border-bottom:solid 3px #00ff86;
}
`;

export const Menubutton = Styled(Button) `
border-radius:0;
font-size:18px;
color:white;
border:none;
background-color:#4B9E50;
margin:0;
padding: 5px 30px;
&:hover {
    color:white;
    border:solid #white;
    background-color:#4B9E50;
}
  
`;
export const NavT = Styled(Nav)`
  margin:0;
  padding:0;
`;

export const Navp = Styled(Navbar)`
  width:100%;
  margin:0;
  background-color:rgba(11,11,11, 0.2);
`;

