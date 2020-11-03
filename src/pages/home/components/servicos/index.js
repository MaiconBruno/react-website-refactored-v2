import React, { useState } from "react"; //React imports

import { //Import Styles.js
    TitleSection, TitleCard, ContentCard, IcoService, RowSection, ContainCard, ColCard
} from './styles';

// Import Icons  

import Ico1 from '../../../../assets/images/svg/codigo.svg';
import Ico2 from '../../../../assets/images/svg/telefone.svg';
import Ico3 from '../../../../assets/images/svg/blogue.svg';
import Ico4 from '../../../../assets/images/svg/manutencao.svg';
import Ico5 from '../../../../assets/images/svg/frente.svg';
import Ico6 from '../../../../assets/images/svg/back-end.svg';
import IcoSVG from '../../../../assets/icons/svg/codigo';//End Icons



export default function Services() {

    //Array Services 
    const [servicos, setServicos] = useState([
        { ico: Ico1 , title: "Criação de Sites", content: "Desenvolvedor de Sites em HTML, CSS, JavaScript, PHP, MySql. React.js, Wordpress." },
        { ico: Ico2, title: "Desenvolvimento de aplicativos", content: "Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone)." },
        { ico: Ico3, title: "Blog", content: "Desenvolvimento de blog e plataformas de gerenciamento de conteudo." },
        { ico: Ico4, title: "Manutenção Web", content: "Criação de layouts responsivos e interativos com usuario." },
        { ico: Ico5, title: "Desenvolvimento Front-end", content: "Criação de layouts responsivos e interativos com usuario." },
        { ico: Ico6, title: "Desenvolvimento Back-end", content: "Criação de toda a estrutura e regra de negocio por tras da aplicação." }
    ]);

    return (
        <RowSection id="servico">
            <TitleSection>SERVIÇOS</TitleSection>      
            <ContainCard className="col-md-12 col-sm-12 col-12 row">
                {servicos.map(data => (
                    <ColCard className="col-md-3 col-sm-12 col-12 ">
                        <img src={data.ico} alt=""/>
                        <TitleCard>{data.title}</TitleCard>
                        <ContentCard>
                            {data.content}
                        </ContentCard>
                    </ColCard>
                ))}
            </ContainCard>
        </RowSection>
    );
};





