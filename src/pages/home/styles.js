import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import img_banner from '../../assets/images/svg/bg_image.jpg';
import img_section from '../../assets/images/svg/bg_section.jpg';
import GithubSVG from '../../assets/icons/svg/github';
import LinkedinSVG from '../../assets/icons/svg/linkedin';
import response from '../../util/px2vw';

export const MainSection = styled.div`
 background-image: url(${img_banner});
 margin:0;
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
`
export const SecondSection = styled.div`
 background-image: url(${img_section});
 margin:0;
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 height:80vh;
`

export const Contain = styled(Container)`

`
export const RowBanner = styled(Row)`
 margin:0px;
 background-color:rgba(11,11,11, 0.2);
 height:100vh;
`
export const RowContain = styled(Row)`
margin:0;
flex-direction:column;
align-items:center;
@media (min-width: 1024px) { 
    padding-top:200px; 
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
    font-size: ${response(50)} ;
    padding-top:150px; 
    padding-left:100px;
    padding-bottom:10px;
    }
    @media (max-width:1023px) { 
          font-size: ${response(40)} ;    
          padding-top:30px;      
    }
    @media (max-width: 600px) { 
          font-size: ${response(150)} ;  
          text-align:center;
    }

`
export const SubTitle = styled.h2`
  color: white;
  font-weight: 400;
  margin-top:3px;
  @media (min-width: 1024px) { 
    font-size: ${response(25)} ; 
    padding-left:100px;
    }
    @media (max-width:1023px) { 
          font-size: ${response(25)} ;           
    }
    @media (max-width: 600px) { 
          font-size: ${response(90)} ;  
          text-align:center;
          padding-top:10px;
          padding-right:25px;
    }
`

export const GitHubIco = styled(GithubSVG)``
export const LkIcon = styled(LinkedinSVG)``