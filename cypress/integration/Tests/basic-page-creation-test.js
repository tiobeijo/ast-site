describe('basic page criation test', function() {
  it('Visit Ast site', function() {
    cy.visit('ast.docker.local')
  }) 
  it('logging in as a Redator and creating Notícias content', function() {
    cy.contains('Entrar').click()
    cy.get('input[name="name"]').type('Redator')
    cy.get('input[name="pass"]').type('asteste21')
    cy.get('input[name="op"]').click()
    cy.contains('Adicionar conteúdo').click()
    cy.get('input[name="title[0][value]"]').type('Programação WEB')
    cy.window()
    .then(win => {
   win.CKEDITOR.instances["edit-body-0-value"]
   .setData("<p>As linguagens de programação web são utilizadas especificamente para o desenvolvimentos das camadas de apresentação e de lógica de negócio de web sites, portais e aplicações web em geral. Entenda nesse link um pouco do conceito de camadas.Para a camada de apresentação, é essencial que o WebDesigner conheça principalmente HTML, CSS e  ao menos o básico de JavaScript. Para as linguagens de programação de lógica, as opções disponíveis no mercado são muitas e com isso fica muito difícil dominar todas as linguagens, por isso é importante, pelo menos a principio, focar em alguma delas como PHP, ASP ou .NET, apesar de existir várias outras.</p>");
   }); 
   cy.contains('Salvar').click()
  })
  it('Checking information', function() {
    cy.contains('Programação WEB')
    cy.contains('As linguagens de programação web são utilizadas especificamente para o desenvolvimentos das camadas de apresentação e de lógica de negócio de web sites, portais e aplicações web em geral. Entenda nesse link um pouco do conceito de camadas.Para a camada de apresentação, é essencial que o WebDesigner conheça principalmente HTML, CSS e ao menos o básico de JavaScript. Para as linguagens de programação de lógica, as opções disponíveis no mercado são muitas e com isso fica muito difícil dominar todas as linguagens, por isso é importante, pelo menos a principio, focar em alguma delas como PHP, ASP ou .NET, apesar de existir várias outras.')
  })
})