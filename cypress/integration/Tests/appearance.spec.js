import chaiColors from 'chai-colors'
chai.use(chaiColors)

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
         .and('eq', 'rgb(30, 144, 255)')
   })

  it('Verify the title color, this should work', () => {
    cy.visit('ast.docker.local')
     cy.get('h1')
       .should('have.css', 'color')
       .and('eq', 'rgb(0, 100, 0)')
 })
 
  it('Verify the letters color, this should work', () => {
    cy.visit('ast.docker.local')
     cy.get('a')
       .should('have.css', 'background-color')
 })
}) 