import React from 'react';
import Card from './toolsCard';
import { GaleriaRow, GaleriaCon, TitleGaleri, CardFilter, Filter, TextCard, TitleCard, CardGaleriCor } from './styles';

function Galeria() {
    return (
        <>
            <GaleriaRow id="projetos">
                <TitleGaleri>Projetos</TitleGaleri>
                <CardFilter>
                    <Filter style={{color:'#00aa96'}} id="All"><i style={{margin:10}} class="fas fa-code"></i>TODOS</Filter>
                    <Filter id="Desk"><i style={{margin:10}} class="fas fa-globe"></i> WEB</Filter>
                    <Filter id="Mobi"><i style={{margin:10}}  class="fas fa-mobile-alt"></i> MOBILE</Filter>
                </CardFilter>
                <GaleriaCon className="row">
                    <Card/>
                </GaleriaCon>
            </GaleriaRow>
        </>
    );
}




export default Galeria;