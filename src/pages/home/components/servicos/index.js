import React, { useState } from "react";
import {
    ServicosRow, ServicosCon, ServicosCol, TitleServicoh1, TitleServicoh2,
    ConteudoTextServico, ImgServico
} from './styles';
import img1 from '../../../../assets/images/svg/codigo.png';
import img2 from '../../../../assets/images/svg/telefone.png';
import img3 from '../../../../assets/images/svg/blogue.png';
import img4 from '../../../../assets/images/svg/manutencao.png';
import img5 from '../../../../assets/images/svg/frente.png';
import img6 from '../../../../assets/images/svg/back-end.png';

const [servicos, setServicos] = useState([
    {
        ico: img1,
        title: "Criação de Sites",
        content: "Desenvolvedor de Sites em HTML, CSS, JavaScript, PHP, MySql. React.js, Wordpress."
    },
    {
        ico: img2,
        title: "Desenvolvimento de aplicativos",
        content: "Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).",
    },
    {
        ico: img3,
        title: "Blog",
        content: "Desenvolvimento de blog e plataformas de gerenciamento de conteudo."
    },
    {
        ico: img4,
        title: "Manutenção Web",
        content: "Criação de layouts responsivos e interativos com usuario."
    },
    {
        ico: img5,
        title: "Desenvolvimento Front-end",
        content: "Criação de layouts responsivos e interativos com usuario."
    },
    {
        ico: img6,
        title: "Desenvolvimento Back-end",
        content: "Criação de toda a estrutura e regra de negocio por tras da aplicação.",
    },
]);


function Services() {
    return (
        <>
            <ServicosRow id="servico">
                <TitleServicoh1>Serviços</TitleServicoh1>
                <ServicosCon className="col-md-12 col-sm-12 col-12 row">
                    {servicos.map(data => (
                        <ServicosCol className="col-md-3 col-sm-12 col-12 ">
                        <ImgServico src={data.ico} />
                        <TitleServicoh2>{data.title}</TitleServicoh2>
                        <ConteudoTextServico>
                                {data.content}
                        </ConteudoTextServico>
                       </ServicosCol> 
                    ))}
                </ServicosCon>
            </ServicosRow>
        </>
    );
};

export default Services;



