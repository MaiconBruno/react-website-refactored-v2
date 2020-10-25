import Styled from 'styled-components';
import {Button,Navbar,Nav} from 'react-bootstrap';

export const Spantext = Styled.span`
 font-style: normal;
 font-size: 16px;
 color:white!important;
 font-weight:bold;
 transition:0.2s;
 &:hover {
  transition:0.2s;
  border-bottom:solid 3px #00aa96;
}
`;

export const Menubutton = Styled(Button) `
border-radius:0;
font-size:18px;
color:white;
border:none;
background-color:#00aa96;
margin:0;
padding: 5px 30px;
transition:0.4s;
  &:hover {
      color:white;
      border:none;
      background-color:#00bb96;
      transform:scale(1.2);
      transition:0.4s;
  }
`;
export const NavT = Styled(Nav)`
  margin:0;
  padding:0;
`;

export const Navp = Styled(Navbar)`
  width:100%;
  margin:0;
  background-color: rgba(0,0,0, 0.4);
`;

