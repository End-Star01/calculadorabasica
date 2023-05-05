/// <reference types="cypress" />

describe("testando função soma", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/calculadora.teste/index.html")
    })

    it("soma de 3 + 5", ()=>{
        cy.get('#numero1')


    })
})