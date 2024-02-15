import { RealizarSorteio } from './RealizarSorteio'

describe('dado um sorteio de amigo secreto', () => {

  test('cada participante nao sorteie o propio nome', () => {
    const participantes = [
      'Ana',
      'Juliana',
      'Catarina',
      'Lucho',
      'Pato'
    ]

    const sorteio = RealizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect( amigoSecreto ).not.toEqual(participante)
    })
  })
})
