import { Row, Col, Container } from 'react-bootstrap';
import Styled from 'styled-components';

export const TitleSection = Styled.h2`
  font-weight:900;
  width:100%;
  color:#00aa96;
  font-size:25px;
  text-align:center;
  padding:50px 20px;
  border-top:solid 10px #00aa96;
`;

export const TitleCard = Styled.h3`
  font-weight:bold;
  color:#535353;
  font-size:20px;
  text-align:center;
  margin:10px;
  
`;
export const ContentCard = Styled.p`
  font-weight:400;
  color:#535353;
  font-size:15px;
  text-align:center;
`;

export const IcoService = Styled.img`
  padding-bottom:10px;
  transition:0.8s; 
 
@keyframes treme {
  0% {transform: rotate(20deg);}
  25% {transform: rotate(-20deg);}
  50% {transform: rotate(20deg);}
  75% {transform: rotate(-20deg);}
  100% {transform: rotate(20deg);}
}
`;

export const RowSection = Styled(Row)`
  background-color:#f3f3f3;
  display:flex;
  flex-direction:column; 
  margin:0!important;
  align-items:center;
  justify-content:center;
  padding:0!important;
`;

export const ContainCard = Styled(Container)`
   display:flex;
   justify-content:center;
   align-items:center;
   margin-top:50px;
`;

export const ColCard = Styled(Col)`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:30px;
   padding:20px;
   border-radius:10px 50px 10px 50px;
   transition:0.5s;
   &:hover  {
     transition:0.5s;
     -webkit-box-shadow: 0px 0px 11px 0px rgba(64, 50, 50, 0.52);
-moz-box-shadow:    0px 0px 11px 0px rgba(64, 50, 50, 0.52);
box-shadow:         0px 0px 11px 0px rgba(64, 50, 50, 0.52);
     cursor:pointer;
   }
   &:hover ${IcoService} {  
      animation: treme 0.9s;
      animation-iteration-count: 1;
  }
}
`;







