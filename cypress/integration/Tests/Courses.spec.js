describe('redator role test', function() {
    it('Visit Ast site', function() {
        cy.visit('ast.docker.local')
    })

    it('logging in as a Coordinator and creating Cursos content', function() {
      cy.contains('Entrar').click()
      cy.get('input[name="name"]').type('Coordinator')
      cy.get('input[name="pass"]').type('asteste21')
      cy.get('input[name="op"]').click()
      cy.contains('Adicionar conteúdo').click()
      cy.contains('Cursos').click()
      cy.get('input[name="title[0][value]"]').type('test')
      cy.window()
  .then(win => {
    win.CKEDITOR.instances["edit-body-0-value"]
    .setData("<p>teste do coordinator role e do tipo de conteudo cursos</p>");
  });
  cy.wait(2000);

      const imagePath = 'images/forest.jpg';

      cy.fixture(imagePath).then(content => {
        cy.get('[name="files[field_featured_image_0]"]').upload([{fileContent: content, fileName: 'forest.jpg', mimeType: 'image/JPEG'}
          ]);
      });

      cy.wait(3000);

      cy.get('input[name="field_requirements[0][value]"]').type('Ter acima de 16 Anos')
      cy.get('input[name="field_requirements_add_more"]').click()
      cy.get('input[name="field_requirements[1][value]"]').type('Morar em Belo Horizonte')
      cy.get('input[name="field_requirements_add_more"]').click()
      cy.get('input[name="field_requirements[2][value]"]').type('Possuir Cadastro Único')




      cy.contains('Salvar').click()
    })

    it('checking Notícias content', function() {

      cy.contains('test')
      cy.contains("teste do coordinator role e do tipo de conteudo cursos")
      cy.contains('Ter acima de 16 Anos')
      cy.contains('Morar em Belo Horizonte')
      cy.contains('Possuir Cadastro Único')


    })
})
