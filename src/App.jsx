
import { useState } from 'react';
import './App.css' 
import './estilos/estilos.css'

const App =()=> {
  const options = [
    {value: 'Bolivianos', text: 'Bolivianos'},
    {value: 'Pesos Chilenos', text: 'Pesos Chilenos'},
    {value: 'Pesos Mexicanos', text: 'Pesos Mexicanos'},
    {value: 'Pesos Argentinos', text: 'Pesos Argentinos'},
    {value: 'Dolares', text: 'Dolares'},
  ];
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [selected1, setSelected1] = useState(options[0].value);
  const [selected2, setSelected2] = useState(options[0].value);
  const calcular=()=>{
    console.log("calcula");
    console.log(selected1);
    console.log(selected2);
    let fact=1;    
    if( selected1 == 'Bolivianos' &&  selected2 == 'Pesos Chilenos' ){
      fact=44.88;
  } else if(selected1 == 'Bolivianos' &&  selected2 == 'Pesos Mexicanos'){
      fact=11.65;
  } else if(selected1 == 'Bolivianos' &&  selected2 == 'Pesos Argentinos' ){
      fact=30.77;
  } else if(selected1 == 'Bolivianos' &&  selected2 == 'Dolares' ){
      fact=0.15;
  } 
  // Peso Chileno a XXXXXXX
  else if(selected1 == 'Pesos Chilenos' &&  selected2 == 'Bolivianos'){
    fact=0.0084;
} else if(selected1 == 'Pesos Chilenos' &&  selected2 == 'Pesos Mexicanos'){
    fact=0.022;
} else if(selected1 == 'Pesos Chilenos' &&  selected2 == 'Pesos Argentinos'){
    fact=0.26;
} else if(selected1 == 'Pesos Chilenos' &&  selected2 == 'Dolares'){
    fact=0.0012;
} 
// Peso mexicano a xxxxxxx
else if( selected1 == 'Pesos Mexicanos' &&  selected2 == 'Bolivianos'){
  fact=0.38;
} else if(selected1 == 'Pesos Mexicanos' &&  selected2 == 'Pesos Chilenos'){
  fact=44.90;
} else if(selected1 == 'Pesos Mexicanos' &&  selected2 == 'Pesos Argentinos'){
  fact=11.65;
} else if(selected1 == 'Pesos Mexicanos' &&  selected2 == 'Dolares'){
  fact=0.055;
} 
// Peso Argentino a xxxxxxxxxx
else if(selected1 == 'Pesos Argentinos' &&  selected2 == 'Bolivianos'){
  fact=0.032;
} else if(selected1 == 'Pesos Argentinos' &&  selected2 == 'Pesos Chilenos'){
  fact=3.85;
} else if(selected1 == 'Pesos Argentinos' &&  selected2 == 'Pesos Mexicanos'){
  fact=0.086;
} else if(selected1 == 'Pesos Argentinos' &&  selected2 == 'Dolares'){
  fact=0.0047;
} 
// Dolares a  xxxxxxxxxxxxx
else if(selected1 == 'Dolares' &&  selected2 == 'Bolivianos'){
  fact=6.86;
} else if(selected1 == 'Dolares' &&  selected2 == 'Pesos Chilenos'){
  fact=813.74;
} else if(selected1 == 'Dolares' &&  selected2 == 'Pesos Mexicanos'){
  fact=18.12;
} else if(selected1 == 'Dolares' &&  selected2 == 'Pesos Argentinos'){
  fact=211.28;
} else fact=1;
const inputValue = document.getElementById("intro").value; 
//const inputvalue=12;
setValor(inputValue);    
console.log(valor)
//document.getElementById("intro").value=valor; 
setResultado(valor * fact);



//Sconsole.log(result);

  }  
  const Lista1 =(props)=>{
    const cambioSelect = event => {
      console.log(event.target.value);
      setSelected1(event.target.value);
    };
    return(
      <> 
        <select value={selected1} onChange={cambioSelect} >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
      </>    
    )
  }
  const Lista2 =(props)=>{
    const cambioSelect = event => {
      console.log(event.target.value);
      setSelected2(event.target.value);
    };
    return(
      <> 
        <select value={selected2} onChange={cambioSelect} >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
      </>    
    )
  }
  
const Boton =()=>{
  
  return(
    <div class="buttonContainer">
    <button id="calcular" onClick={()=>calcular()} >Calcular</button>
  </div>
  )
}
const Conversor =(props)=>{
  const Leer = () => {
    return (
     <>
     <input id="intro" type="number"  step="0.1" value={valor} onChange={event => {

            setValor (event.target.value);
            document.getElementById("intro").focus();

}}/>
     </>
     )
   };
    return (
    <>
    <div class="conver">
      <h2>{props.titulo}</h2>
      <label >CANTIDAD: </label>
       <Leer></Leer><br/>
       <label >DE:</label>
       <Lista1></Lista1><br/>
       <label >A:</label>
       <Lista2></Lista2><br/>
       <Boton></Boton>
       <label id="resul">RESULTADO:{resultado} </label>
    </div>
    </>
    )
  }  
  return (
    <>
      <Conversor titulo="COVERSOR DE DIVISAS">
          
      </Conversor>    
    
    </>
  )
}

export default App
