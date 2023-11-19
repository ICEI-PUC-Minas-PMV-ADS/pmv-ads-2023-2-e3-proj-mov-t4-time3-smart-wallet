# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

As referências abaixo irão auxiliá-lo na geração do artefato "Plano de Testes de Usabilidade".

Aqui estão as atividades a serem realizadas pelos participantes, que serão cuidadosamente observadas:


| **Caso de Teste** 	| **CTU-01– Gerenciar lançamentos"**  	|
|:---:	|:---:	|
|                    	| **`CTU-01.1 – Adicionar Receitas`** 	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Avaliar a possibilidade de adicionar as receitas  |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Lançamento";<br>5. Selecionar a opção do tipo Receitas;<br>6. Preencher as demais informações da página (Classificação, Valor, Vencimento etc);<br>6. Salvar informações.<br>
|                   	| **`CTU-01.2 – Adicionar Despesas`**  	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Avaliar a possibilidade de adicionar as despesas |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Lançamento";<br>5. Selecionar a opção do tipo Despesa;<br>6. Preencher as demais informações da página (Classificação, Valor, Vencimento etc);<br>6. Salvar informações.<br>


| **Caso de Teste** 	| **CTU-02– Informar saldo"**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Avaliar a atualização do saldo na página inicial de acordo com os lançamentos |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Lançamento";<br>5. Selecionar o Tipo desejado;<br>6. Preencher todas as informações da página (Classificação, Valor, Vencimento etc);<br>6. Salvar informações.<br>7. Visualizar página de extrato e voltar para a página inicial, utilizando a seta no canto superior esquerdo;<br>8. Visualizar o saldo atualizado no banner de Saldo.<br>

| **Caso de Teste** 	| **CTU-03 – Emitir alerta"**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Receber alerta da aplicação ao atingir 75% das despesas em relação às receitas |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Lançamento";<br>5. Preencher todas as informações da página, como: Tipo, Classificação, Valor, Vencimento etc;<br>6. Salvar informações;<br>7. Visualizar extrato;<br>8. Ao atingir 75% das despesas em relação às receitas, a aplicação emitirá um alerta.<br>


| **Caso de Teste** 	| **`CTU-04 – Realizar o LOGIN.`**    	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Avaliar a funcionalidade de login dos usuários. |
| Ações necessárias 	|  1.  Acessar o aplicativo a partir de um aparelho móvel<br>	2. Visualizar a tela de login da aplicação<br>3. Inserir o e-mail no campo indicado<br>4. Inserir a senha no campo indicado<br>5. Realizar o Login clicando em “Entrar".<br>
|                     | **CTU-04.1 – Validar exigências de login.**  	|
| Objetivo do Teste 	| Avaliar as exigências de login. |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Tentar realizar o login com dados incorretos, ou não preencher um dos campos exigidos;<br>4. Visualizar mensagem de erro.<br>


| **Caso de Teste** 	| **CTU-05 – Visualizar gráfico de receitas"**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Visualizar gráfico de receitas e despesas atualizados de acordo com os lançamentos |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. O gráfico de receitas e despesas está na página inicial e atualizará de acordo com os lançamentos adicionados.<br>


| 	                  | **CTU-06 - Cadastrar novo usuário.**  	|
|:---:	|:---:	|
| Objetivo do Teste 	| Avaliar a funcionalidade de cadastro de usuários. |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel;<br>2. Visualizar a tela de login da aplicação;<br>3. Clicar na opção “Cadastre-se”; <br>4. Preencher todos os campos do formulário de usuários;<br>5. Confirmar a criação do usuário clicando em “Cadastrar";<br>6. Acessar novamente a tela de LOGIN.<br>
|                    	| **`CTU-06.1 – Validar exigências de cadastro.`**  	|
|:---:	|:---:	|
| Objetivo do Teste 	| Avaliar as exigências de cadastro. |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação;<br>3. Tentar realizar o login sem ter os dados cadastrados;<br>4. Visualizar mensagem de erro;<br>5. Realizar a criação do usuário clicando em “Cadastrar";<br>6. Inserir todos os dados seguindo todas as regras, caso contrário, outra tela de erro será exibida.<br>


| **Caso de Teste** 	| **CTU-07 – Visualizar extrato - `Opção 01`**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Verificar o extrato geral das receitas e despesas |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Lançamento";<br>5. Selecionar o Tipo desejado;<br>6. Preencher as demais informações da página (Classificação, Valor, Vencimento etc);<br>6. Ao salvar as informações, o usuário será direcionado para a página de extrato.<br>
|                  	| **CTU-07.1 – Visualizar extrato - `Opção 02`**  	|
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Clicar na aba "Extrato";<br>5. Visualizar a página completa.<br>
|                  	| **CTU-07.2 – Visualizar extrato - `Opção 03`**  	|
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4.Clicar na opção "Ver extrato" na página inicial (banner Saldo);<br>5. Visualizar a página completa.<br>


| **Caso de Teste** 	| **CTU-08 – Ocultar saldo"**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Verificar a possibilidadae de mostrar e esconder saldo total. |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Ao abrir a página inicial, basta clicar na opção "visualizar/ocultar" no banner de Saldo.<br>


| **Caso de Teste** 	| **CTU-09 – Funcionalidade do chat"**  	|
|:---:	|:---:	|
|	Perfil	| Usuário (todos) |
| Objetivo do Teste 	| Avaliar a possibilidade de interação com o chat |
| Ações necessárias 	|  1. Acessar o aplicativo a partir de um aparelho móvel; <br>2. Visualizar a tela de login da aplicação; <br>3. Realizar o login com dados corretos;<br>4. Ao abrir a página inicial, basta clicar na opção "chat" no canto direito inferior;<br>5. Será enviado uma mensagem inicial automática e o usuário poderá interagir com o chat utilizando o campo de mensagem.<br>
