Projeto feito pela turma de desenvolvimento web para a criação do site da Ação Social Técnica - Escola Profissional Tio Beijo. Código aberto podendo ser usado por qualquer associação.

Requisitos necessários para rodar o projeto em sua máquina:

Utilizar o comando "composer install" no make shell para a instalação do mesmo. Instalação do Cypress em sua máquina.

Link para a instalação do Cypress:

https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

## Como Montar o ambiente do site em sua máquina

1 - Renomeie o arquivo ".env.example" para ".env".
2 - Os links para o site que ira utilizar são encontrados na linha 21 e 30 do arquivo ".env" que foi renomeado. Altere ele para o link que queira utiizar de teste.
3 - No terminal, digite o comando "sudo nano /etc/hosts".
4 - Irá abrir uma nova janela. Se nada tiver sido alterado previamente nesta janela, vai apareccer dois endereços de IP e seus respectivos endereços. Coloque o endereço de IP "127.0.0.1" logo abaixo do 2º IP e o link que irá utilizar para os testes abaixo do 2º endereço.
5 - No terminal acesse a pasta que estão os arquivos para teste. 
6 - Apague o arquivo "composer.lock" da pasta.
7 - Digite o comando "make up" no terminal para subir o site.
8 - Assim que o comando anterior finalizar de subir o site, digite o comando "make shell".
9 - Dentro do make shell, digite o comando "composer install". A instalação do mesmo pode demorar um pouco.
10 - Após finalizada a instalação, utilize o comando "ctrl + d" para sair do make shell.
11 - Digite "make prune && make up" no terminal. Isso irá "desligar" o site e "liga-lo" novamente com as novas configurações.
12 - Acesse o link utilizado para os testes na máquina em seu navegador e faça a isntalação do site.

## Como fazer modificações no tema

1- No terminal, entre na pasta do tema e rode o comando compass watch (caso não tenha o instalado, e necessário que o instale), que vai acompanhar as modificações feitas e fazer a comunicação com o site.
2- No terminal, rode o comando make shell, cd web e dentro dessa pasta rode o comando drush cr a cada modificação feita no tema para ver o resultado na interface.