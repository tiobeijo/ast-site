describe('coordenador role test', function() {
   it('Visit Ast site', function() {
       cy.visit('ast.docker.local')
   })
   it('logging in as a Coordenador and creating Cursos content', function() {
     cy.contains('Entrar').click()
     cy.get('input[name="name"]').type('Coordenador')
     cy.get('input[name="pass"]').type('asteste21')
     cy.get('input[name="op"]').click()
     cy.contains('Adicionar conteúdo').click()
     cy.contains('Cursos').click()
   })
})
