import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import img_banner from '../../../../assets/images/svg/bg_image.svg';
import GithubSVG from '../../../../assets/icons/svg/github';
import LinkedinSVG from '../../../../assets/icons/svg/linkedin';
import response from '../../../../util/px2vw';

export const MainSection = styled.div`
 background-image: url(${img_banner});
 margin:0;
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
`

export const Contain = styled(Container)`
`
export const RowBanner = styled(Row)`
 margin:0px;
 height:100vh;
 background-color: rgba(0,0,0, 0.4);
`
export const RowContain = styled(Row)`
margin:0;
flex-direction:column;
align-items:center;
@media (min-width: 1024px) { 
    padding-top:230px; 
    padding-left:120px;
    padding-bottom:10px;
    }
    @media (max-width:1023px) {          
      padding-top:120px;      
    }
    @media (max-width: 600px) {
      padding:0;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      margin-left:20px;
    }
`
export const Column = styled(Col)`
display:flex;
flex-direction:column;
padding:30px;
`
export const Title = styled.h1`
color:white;
font-weight:bold;
@media (min-width: 1024px) { 
    font-size: ${response(60)} ;
    padding-top:150px; 
    padding-left:100px;
    padding-bottom:10px;
    }
    @media (max-width:1023px) { 
          font-size: ${response(120)} ;    
          padding-top:10px;      
    }
    @media (max-width: 600px) { 
          font-size: ${response(150)} ;  
          text-align:center;
    }

`
export const SubTitle = styled.h2`
  color:white;
  font-weight:400;
  @media (min-width: 1024px) { 
    font-size: ${response(30)} ; 
    padding-left:100px;
    }
    @media (max-width:1023px) { 
          font-size: ${response(45)} ;           
    }
    @media (max-width: 600px) { 
          font-size: ${response(90)} ;  
          text-align:center;
          padding-top:10px;
          padding-right:25px;
    }
`
export const Ico = styled.div`
      transition:0.4s;
      &:hover{
            transition:0.4s;
            transform:scale(1.2);
      }
`

export const GitHubIco = styled(GithubSVG)``
export const LkIcon = styled(LinkedinSVG)``