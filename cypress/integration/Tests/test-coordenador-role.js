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
     cy.get('input[name="title[0][value]"]').type('Programador WEB')
      cy.window()
  .then(win => {
    win.CKEDITOR.instances["edit-body-0-value"].setData("<p>Era uma vez um projeto que deu certo</p>");
  });
      cy.get('input[name="files[field_imagem_de_destaque_0][]"]').click()
      cy.get('input[name="field_requisitos[0][value]"]').type('Idade Mínima: 16 anos')
      cy.get('input[name="field_requisitos_add_more"]').click()
      cy.get('input[name="field_requisitos[1][value]"]').type('Morar em Belo Horizonte')
      cy.get('input[name="field_requisitos_add_more"]').click()
      cy.get('input[name="field_requisitos[2][value]"]').type('Escolaridade Mínima: 1° Ano/Ensino Médio')
      cy.get('input[name="field_requisitos_add_more"]').click()
      cy.get('input[name="field_requisitos[3][value]"]').type('Possuir Cadastro Único')
      cy.contains('Salvar').click()
   })
})
