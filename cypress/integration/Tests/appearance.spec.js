describe("Color test", () => {
    it('Verify the backgroud color, this should work', () => {
       cy.visit('ast.docker.local')
        cy.get('.top-nav')
          .should('have.css', 'background-color')
          .and('eq', 'rgb(0, 100, 0)')
    })

    it('Verify the button backgroud color, this should work', () => {
      cy.visit('ast.docker.local')
       cy.get('.form-submit')
         .should('have.css', 'background-color')
         .and('eq', 'rgb(255, 0, 0)')
   })

  it('Verify the title color, this should work', () => {
    cy.visit('ast.docker.local')
     cy.get('h1')
       .should('have.css', 'color')
       .and('eq', 'rgb(0, 100, 0)')
 })
 
  it('Verify the letters color, this should work', () => {
    cy.visit('ast.docker.local')
     cy.contains('Entrar')
       .should('have.css', 'color')
       .and('eq', 'rgb(0, 100, 0)')   
 })

  it('Verify the letters color, this should work', () => {
   cy.visit('ast.docker.local')
    cy.contains('Contato')
      .should('have.css', 'color')
      .and('eq', 'rgb(0, 100, 0)')   
 })
}) 
