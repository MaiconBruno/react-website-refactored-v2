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
import Menu from '../../../components/menu';

export default function Banner() {
  return (
    <>
      <MainSection>
        <Menu />
        <RowBanner>
          <Column className="col-md-8 col-sm-12 col-12">
            <Title>
              Desenvolvedor <span style={{ color: '#00aa96'}}>WEB</span>
            </Title>
            <SubTitle>Soluções para seu negócio com as principais tecnologias do mercado.</SubTitle>
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
    </>
  );
}
