import React, { useState, useEffect } from 'react';
import { CardGaleriCor, TitleCard, TextCard } from './styles';

import ImageProjetExemple from '../../../../assets/images/svg/BannerFundoForm.png'

function Card() {
    const [projects, setProjects] = useState([
        {   
            projectType:'web',
            projectName:'Title',
            projectDesc:'Projeto projetado para projesão de algo',
            ProjectImg: ImageProjetExemple,
        }
    ]);


    return (
        <>
            {projects.map(project => (
                <CardGaleriCor name={project.projectType}
                    style={{backgroundImage: `url(${project.ProjectImg})`}}>
                    <TitleCard>{project.projectName}</TitleCard>
                    <TextCard>{project.projectDesc}</TextCard>
                </CardGaleriCor>
            ))}
        </>
    );
}

export default Card;