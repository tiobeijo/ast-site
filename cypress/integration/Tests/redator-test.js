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
    win.CKEDITOR.instances["edit-body-0-value"]
    .setData("<p>Era uma vez um projeto que deu certo</p>");
  });

      const imagePath = 'images/forest.jpg';

      cy.fixture(imagePath).then(content => {
        //console.log(fileContent);
        cy.get('[name="files[field_featured_image_0]"]')
        .upload([
            {fileContent: content, fileName: 'forest.jpg', mimeType: 'image/JPEG'}
          ]);
      });

      const galleryPath = 'images/witch.jpg';

      cy.fixture(galleryPath).then(content => {
        //console.log(fileContent);
        cy.get('[name="files[field_photo_gallery_0][]"]')
        .upload([
          {fileContent: content, fileName: 'witch.jpg', mimeType: 'image/JPEG' }
        ]);
      });

      cy.contains('Salvar').click()
    })

    it('checking Notícias content', function() {
      cy.contains('test')
      cy.contains("Era uma vez um projeto que deu certo")
    })
})
