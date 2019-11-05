describe('redator role test', function() {
    it('Visit Ast site', function() {
        cy.visit('ast.docker.local')
    })

    it('logging in as a Redator and creating Notícias content', function() {
      cy.contains('Entrar').click()
      cy.get('input[name="name"]').type('Redator')
      cy.get('input[name="pass"]').type('asteste21')
      cy.get('input[name="op"]').click()
    })
  })