/// <reference types="cypress" />

describe('Teste da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
    })
    it('Adicionado novo contato', () => {
        cy.get('input[type="text"]').type('Augusto')
        cy.get('input[type="email"]').type('emailTeste@gmail.com')
        cy.get('input[type="tel"]').type('123456789')
        cy.get('.adicionar').click()
        cy.get('.sc-eDDNvR > li').contains('Augusto')
        cy.get('.sc-eDDNvR > li').contains('emailTeste@gmail.com')
        cy.get('.sc-eDDNvR > li').contains('123456789')
    })

    it('Editando contato',() => {
        cy.get('.sc-eDDNvR').contains('Augusto').get('.edit').last().click() 
        cy.get('input[type="tel"]').clear().type('0987654321').get('.alterar').click()
    })

    it('Deletando contato', () => {
        cy.get('.delete').last().click()
    })
})