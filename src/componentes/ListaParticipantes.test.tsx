import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'
import ListaParticipantes from '../componentes/ListaParticipantes'

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return{
        useListaDeParticipantes: jest.fn()
    }

})

describe('una lista sin participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('lista sin participantes',() => {
          render(
        <RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>
    )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)

    }) 
})
describe('una lista con participantes', () => {
        const participantes = ['ana', 'lucho'];
        beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('lista con participantes',() => {
          render(
        <RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>
    )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)

    }) 
})
