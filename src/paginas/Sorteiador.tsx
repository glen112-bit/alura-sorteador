import React from 'react';
import { useState } from "react"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"
import './Sorteio.css'

/**
* Sorteio       
*/
const Sorteio = () => {
    const participantes = useListaDeParticipantes()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }
    return(
        <section className="sorteio">
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button className="botao-sortear">Sortear</button>            
            </form>
        {amigoSecreto && <p className="resultado"  role="alert">{amigoSecreto}</p>} 
          <footer className="sorteio">
            <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
          </footer>  
        </section>
    )
    
}
export default Sorteio
