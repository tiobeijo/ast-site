describe('Partners content test', function() {
    it('Partner content signup', function() {
        cy.visit('ast.docker.local')
    })

    it('logging in as a Redator and creating Parceiro content', function() {
      cy.contains('Entrar').click()
      cy.get('input[name="name"]').type('Redator')
      cy.get('input[name="pass"]').type('asteste21')
      cy.get('input[name="op"]').click()
      cy.contains('Adicionar conteúdo').click()
      cy.visit('ast.docker.local/node/add')
      cy.contains('Parceiro').click()
      cy.get('input[name="title[0][value]"]').type('Ralph Lauren')
      cy.window()
  .then(win => {
    win.CKEDITOR.instances["edit-body-0-value"]
    .setData("<p>A Ralph Lauren Corporation é uma empresa de moda americana que produz produtos que variam desde os segmentos intermediário até o de luxo. Eles são conhecidos pelo vestuário, marketing e distribuição de produtos em quatro categorias: vestuário, casa, acessórios e fragrâncias.</p>");
  });
  cy.wait(2000);

      const imagePath = 'images/ralph_lauren.jpg';

      cy.fixture(imagePath).then(content => {
        cy.get('input[name="files[field_partner_logo_0]"]').upload([{fileContent: content, fileName: 'ralph_lauren.jpg', mimeType: 'image/JPEG'}
          ]);
      });

      cy.get('input[id="edit-field-reference-site-0-uri"]').type('https://www.ralphlauren.com/')

      cy.wait(2000);

      cy.contains('Salvar').click()
    })

    it('checking Parceiros content', function() {

      cy.contains('Ralph Lauren')
      cy.contains("A Ralph Lauren Corporation é uma empresa de moda americana que produz produtos que variam desde os segmentos intermediário até o de luxo. Eles são conhecidos pelo vestuário, marketing e distribuição de produtos em quatro categorias: vestuário, casa, acessórios e fragrâncias.")

      cy.get('[data-drupal-link-system-path="user/logout"]').click()

    })
})
