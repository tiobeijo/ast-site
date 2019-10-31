describe('redator role test', function() {
    it('Visit Ast site', function() {
        cy.visit('ast.docker.local')
    })

    it('logging in as a Redator and creating Notícias content', function() {
      cy.contains('Entrar').click()
      cy.get('input[name="name"]').type('Redator')
      cy.get('input[name="pass"]').type('asteste21')
      cy.get('input[name="op"]').click()
      cy.contains('Adicionar conteúdo').click()
      cy.contains('Notícias').click()
      cy.get('input[name="title[0][value]"]').type('test')
      cy.window()
  .then(win => {
    win.CKEDITOR.instances["edit-body-0-value"].setData("<p>Era uma vez um projeto que deu certo</p>");
  });
      cy.get('input[name="files[field_imagem_de_destaque_0]"]').click()
      cy.fixture('forest.jpg').as('destaque')
        cy.get('input[type="forest.jpg"]').upload({'forest.jpg': 'application/json' });
      cy.get('input[name="files[field_galeria_de_fotos_0][]"]').click()
      cy.contains('Salvar').click()
    })

    it('checking Notícias content', function() {
      cy.contains('test')
      cy.contains("Era uma vez um projeto que deu certo")
    })
})
