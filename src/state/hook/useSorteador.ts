import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"
import { RealizarSorteio } from "../helpers/RealizarSorteio"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)
    return () => {
       const resultado = RealizarSorteio(participantes)
        setResultado(resultado)       
    }
}
