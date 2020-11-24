import React, {useState} from 'react';
import { GaleriaRow, GaleriaCon, TitleGaleri, CardFilter, Filter, TitleCard,TextCard, CardGaleriCor } from './styles';

import ImageProjetExemple from '../../../../assets/images/svg/BannerFundoForm.png'

function Galeria() {

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
            <GaleriaRow id="projetos">
                <TitleGaleri>Projetos</TitleGaleri>
                <CardFilter>
                    <Filter><i style={{ margin: 10 }} class="fas fa-code"></i>TODOS</Filter>
                    <Filter><i style={{ margin: 10 }} class="fas fa-globe"></i> WEB</Filter>
                    <Filter><i style={{ margin: 10 }} class="fas fa-mobile-alt"></i> MOBILE</Filter>
                </CardFilter>
                <GaleriaCon className="row">
                    {projects.map(project => (
                        <CardGaleriCor name={project.projectType}
                            style={{ backgroundImage: `url(${project.ProjectImg})` }}>
                            <TitleCard>{project.projectName}</TitleCard>
                            <TextCard>{project.projectDesc}</TextCard>
                        </CardGaleriCor>
                    ))}
                </GaleriaCon>
            </GaleriaRow>
        </>
    );
}




export default Galeria;