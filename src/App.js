import React, {useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contendor = styled.div`
  max-width: 600px;
  margin: 1rem auto;

`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen]= useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }  
  })
  const {cotizacion, datos} = resumen

  //state para el spinner
  const [cargando, guardarCargando]=useState(false);

  return (
    <Contendor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner/> :  null}
        
        <Resumen
          datos={datos}
        />
        {!cargando 
        ? 
          <Resultado
          cotizacion={cotizacion}
        />
        : null
      }
        

      </ContenedorFormulario>
    </Contendor>  
  );
}

export default App;
