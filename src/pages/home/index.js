import React from 'react';
import {
  MainSection,
  Column,
  RowBanner,
  RowContain,
  GitHubIco,
  LkIcon,
  Title,
  SubTitle,
  Ico,
} from './styles';
import Menu from '../components/menu'
import Servicos from './components/servicos';

export default function Home() {
  return (
    <>
      {/* First Section */}
      <MainSection>
        <Menu />
        <RowBanner>
          <Column className="col-md-8 col-sm-12 col-12">
            <Title>
              Desenvolvedor <span style={{ color: '#00aa96'}}>WEB</span>
            </Title>
            <SubTitle><span style={{ color: '#00aa96' }}>+</span> Criação de sites</SubTitle>
            <SubTitle><span style={{ color: '#00aa96' }}>+</span> Aplicações web</SubTitle>
            <SubTitle><span style={{ color: '#00aa96' }}>+</span> Aplicações mobile</SubTitle>
          </Column>
          <Column className="col-md-4 col-sm-12 col-12 ">
            <RowContain>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.github.com/MaiconBruno?tab=repositories">
                <Ico><GitHubIco sizeWidth={"80px"} sizeHeight={"80px"} /></Ico>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maicon-rodrigues-65ab9217a">
                <Ico><LkIcon sizeWidth={"80px"} sizeHeight={"80px"} /></Ico>
              </a>
            </RowContain>
          </Column>
        </RowBanner>
      </MainSection>
      {/* End First Section */}
      <Servicos/>
    </>
  );
}
