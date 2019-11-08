describe('Ast login test', function() {
    it('Visit Ast site', function() {
        cy.visit('ast.docker.local')

        cy.get('[data-drupal-link-system-path="user/login"]').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()

        cy.get('[data-drupal-link-system-path="user/logout"]').click()

    })
})