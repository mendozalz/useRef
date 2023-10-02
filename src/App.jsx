import { useRef } from "react";
import Atanagildo from ".//assets/rey_atanagildo.png";
import Ataulfo from ".//assets/rey_ataulfo.png";
import './App.css'

function App() {
 const referencia = useRef("")
 const bolivares = 0.0084
const incrementar = (e) =>{
  let valor = e.target.innerHTML = Number(e.target.innerHTML) +1
  if(valor >= 10){
    e.target.innerHTML = 1
  }
  if(valor >= 8){
    e.target.parentNode.style.backgroundColor = "blue"
    e.target.style.backgroundColor = "blue"
  }else{
    e.target.style.backgroundColor = "tomato"
    e.target.parentNode.style.backgroundColor = "tomato"
  }
}
const cambiar = () =>{
  referencia.current.innerHTML = Number(referencia.current.innerHTML) * bolivares
}
const leeValor = (e) =>{
  referencia.current.innerHTML = e.target.value
}
const cambiarRey = (e) =>{
  if(e.target.src.includes("rey_ataulfo")){
    e.target.src = Atanagildo
  }else if(e.target.src.includes("rey_atanagildo")){
    e.target.src = Ataulfo
  }
}
  return (
    <>
      <div className="card" >
      <div ref={referencia} onClick={incrementar} className="incrementar">1</div>
      <button onClick={cambiar}>Multiplicar</button>
      <img onClick={cambiarRey} src={Ataulfo} />
      <input type="number" onChange={leeValor}/>
      </div>
    </>
  )
}

export default App
