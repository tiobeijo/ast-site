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
  cy.wait(2000);

      const imagePath = 'images/forest.jpg';

      cy.fixture(imagePath).then(content => {
        cy.get('[name="files[field_featured_image_0]"]').upload([{fileContent: content, fileName: 'forest.jpg', mimeType: 'image/JPEG'}
          ]);
      });

      cy.wait(3000);
      const galleryPath = 'images/witch.jpg';

      cy.fixture(galleryPath).then(contentGallery => {
        cy.get('[name="files[field_photo_gallery_0][]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'witch.jpg', mimeType: 'image/JPEG' },
          {fileContent: contentGallery, fileName: 'witch_2.jpg', mimeType: 'image/JPEG' },
        ]);
      });

      cy.wait(2000);

      cy.contains('Salvar').click()
    })

    it('checking Notícias content', function() {

      cy.contains('test')
      cy.contains("Era uma vez um projeto que deu certo")
    })
})
