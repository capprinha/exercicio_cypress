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
        cy.get('.edit').click()
        cy.get('input[type="tel"]').clear().type('0987654321')
        cy.get('.alterar').click()
        cy.get('.sc-eDDNvR > li').contains('0987654321')
    })

    it('Deletando contato', () => {
        cy.get('.delete').click()
    })
})