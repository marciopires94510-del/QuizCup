import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Perguntas = () => {

 const perguntase = [
    {
      id: 1,
      pergunta: "Qual é a capital da França?",
      respostas: ["Paris", "Lyon", "Marselha", "Toulouse"],
      correta: 0
    },

    {
      id: 2,
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: ["Terra", "Júpiter", "Saturno", "Marte"],
      correta: 1
    },

    {
      id: 3,
      pergunta: "Qual é o elemento químico com o símbolo 'O'?",
      respostas: ["Oxigênio", "Ouro", "Osmio", "Óxido"],
      correta: 0
    },

    {
      id: 4,
      pergunta: "Qual é o animal terrestre mais rápido do mundo?",
      respostas: ["Leopardo", "Guepardo", "Tigre", "Leão"],
      correta: 1
    },

    {
      id: 5,
      pergunta: "Qual é o país com a maior população do mundo?",
      respostas: ["China", "Índia", "Estados Unidos", "Indonésia"],
      correta: 1
    },
    {
      id: 6,
      pergunta: "Qual é o rio mais longo do mundo?",
      respostas: ["Nilo", "Amazonas", "Yangtzé", "Mississippi"],
      correta: 1
    },

    {
      id: 7,
      pergunta: "Qual é a montanha mais alta do mundo?",
      respostas: ["Everest", "K2", "Kangchenjunga", "Lhotse"],  
      correta: 0
    },

    {
       id: 8,
      pergunta: "Qual é o oceano mais profundo do mundo?",
      respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
      correta: 2
    }
  ];

 
     const [indice, setIndice] = useState(Math.floor(Math.random() * perguntase.length))
     const [pontos, setPontos]= useState (0)
     const [selecionada, setSelecionada] = useState (null)
     const [vidas, setVidas] = useState (3)
     const [tempo, setTempo] = useState(10)
     const [perdeu, setPerdeu] = useState(false)

     
         useEffect(()=>{
             const cronometro = setInterval(()=>{
                 setTempo(prev => prev - 1)
               }, 1000)
             
             return ()=>{
               clearInterval (cronometro)}
           },[tempo])

   const nave = useNavigate ()

useEffect(() => {
  if (tempo <= 0 || vidas <= 0) {
    nave("/lostg");
  }
}, [perdeu, tempo, vidas, nave])

  return (
    <div className=" justify-center">
      <nav 
      className="bg-[#020f59] p-5 shadow-lg">
         <h2
      className="text-center text-white font-bold ">
        {perguntase[indice].pergunta}
        </h2>
        <h2>
          Faltam: {tempo}
        </h2>
        <h2
        className=" justify-end text-white font-bold"
        >Pontos: {pontos}</h2>
        <h2
      className="text-center text-white font-bold ">
        Vidas:{vidas}
      </h2>
      </nav>
     
      <div className="gap-4 flex flex-col items-center justify-between mt-4">
       {perguntase[indice].respostas.map((resposta, index) => (
      <button
      key={index}
      onClick={() =>{ setSelecionada(index)
        if (index === perguntase[indice].correta){
          setTimeout(() => {
            setIndice(Math.floor(Math.random() * perguntase.length))
            setPontos (p=> p + 20)
            setSelecionada(null)
            setTempo(10)
          }, 500);
         }
         else{
         setTimeout(() => {
            setIndice(Math.floor(Math.random() * perguntase.length))
            setSelecionada(null)
            setVidas( prev => prev - 1)
            setPerdeu(true)
          }, 500);;
         }
      
      } 
      }
      className={`
      p-4 rounded-lg w-[50%]
      ${
        selecionada === index
          ? index === perguntase[indice].correta
            ? "bg-green-500"
            : "bg-red-500"
          : "bg-blue-500"
         }
      `}
       >
      {resposta}
      </button>
       ))}
       {tempo === 0?
        "bg-blue-500" :
        "bg-blue-600"
      }
      </div>
    </div>
)}

export default Perguntas
