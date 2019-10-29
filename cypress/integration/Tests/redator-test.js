describe('redator login test', function() {
    it('Visit Ast site', function() {
        cy.visit('ast.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('redator')
        cy.get('input[name="pass"]').type('asteste21')
        cy.get('input[name="op"]').click()
        cy.contains('Adicionar conteúdo').click()
        cy.contains('Notícias').click()
        cy.get('input[name="title[0][value]"]').type('test')
        cy.get('div[id="cke_1_contents"]').type('isso aqui')

      })
    })
