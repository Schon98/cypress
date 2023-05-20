

describe('trasações', () => {

    beforeEach( () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('cadastrar uma entrada', () => {
        
        criarTransação("Freela", 250)
        criarTransação("Freela do Finde", 2250)

        //cy.get("tbody tr td.description").should("have.text", "Freela")

    });         
    
    it ('cadastrar uma saída', () => 
    {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        criarTransação("Freelas", -250)
    });
    it ('excluir transação',() => {
        criarTransação("Freela", 100)
        criarTransação("Mesada", 10)


        cy.contains(".description", "Freela")
            .parent()
            .find('img')
            .click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransação(descrição, valor ) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descrição)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-12")
    cy.contains('button', 'Salvar').click()
}
