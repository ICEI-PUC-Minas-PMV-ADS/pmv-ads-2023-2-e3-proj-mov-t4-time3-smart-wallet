# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Cenários de testes utilizados na realização dos testes da aplicação AgendAI atendendo aos requisitos pré-definidos na seção "2 - Especificação do Projeto". 
 
| **Caso de Teste** 	| **CT-01 - Gerenciar Lançamentos** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação deve permitir o usuário gerenciar seus lançamentos.|
| Objetivo do Teste 	|Verificar se o sistema permite que o usuário gerencie suas receitas. |
| Passos 	| 1-Após logar com sucesso o usuário na aplicação clicar em "Lançamento" 2-Selecionar o "Tipo" do lançamento 3-Selecionar a "Classificação "do lançamento 4- Entrar com "Valor" 5- Entrar com o "Vencimento" 6- Selecionar a "Recorrência 7- Definir o "Status" como pendente ou efetivo 8- Adicionar uma descrição opcional 9- Clicar em "Salvar"   |
|Critério de Êxito | - O usuário conseguir ver seus lançamentos recentes na tela de extratos . |
|  	|  	|
| Caso de Teste	| **CT-02 - Informar Saldo** 	|
|	Requisito Associado 	| RF-002 - A aplicação deve gerar um saldo pegando o valor das receitas e subtraindo aos das despesas.  |
| Objetivo do Teste 	| Verificar se o sistema é capaz de gerar saldos a partir das receitas informadas.   |
| Passos 	| 1- Após o usuário executar com sucesso a etapa de lançamento 2- Volte para a tela de usuário onde estará exibido o "Saldo" como a diferen~ça exata entre as "Receitas" e "Despesas"|
|Critério de Êxito | - O usuário conseguir verificar seu saldo com sucesso. |
|  	|  	|
| Caso de Teste	| **CT-03 – Emitir Alertas** |
|	Requisito Associado 	| RF-003 - A aplicação deve emitir alertas, quando as despesas atingirem 75% do valor das receitas. |
| Objetivo do Teste 	| Verificar se o sistema emite alertas ao usuário ao atingir o limite predeterminado |
| Passos 	|1- Clicar em "Lançamento" na tela de usuário 2- Fazer um lançamento de "Receita" de R$1000,00 3- Clicar em "Salvar" 4- Fazer um lançamento de "Despesas" de R$750,00 5- Clicar em "Salvar e voltar para tela de usuário 6- Ao atualizar o saldo aparecera um  alerta de 75% |
|Critério de Êxito | - O usuário receber uma notificação ao atingir o limite predeterminado. |
|  	|  	|
| Caso de Teste 	| **CT-04 – Login**	|
|Requisito Associado | RF-004	- A aplicação deve permitir que o usuário faça login|
| Objetivo do Teste 	|  Verificar se o usuário conseguirá efetuar o login a partir das informações corretas. |
| Passos 	| 1- Estar na tela de login do aplicativo "Smat Wallet". 2- Preencher corretamente o campo e-mail com o endereço cadastrado. 3-Preencher corretamente o campo senha . 4- Clicar no botão "Entrar". |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| **CT-05 - Gráficos de Receitas** 	|
|	Requisito Associado 	| RF-005 - 	A aplicação deve apresentar um gráfico de receitas versus despesas |
| Objetivo do Teste 	| Verificar se o sistema é capaz de gerar gráficos a partir das receitas informadas. |
| Passos 	|1- Após realizar alguns lançamentos voltar para a tela de usuário 2- Abaixo do "Saldo" será exibido um gráfico de despesas e receitas mensais do usuário|
|Critério de Êxito | - O usuário conseguir gerar gráficos com suas receitas. |
|  	|  	|
| Caso de Teste 	| **CT-06 – Cadastrar Usuário** 	|
|Requisito Associado | RF-009	- A aplicação deve ter a funcionalidade de cadastro |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar no aplicativo |
| Passos 	|1- Estar na tela de login do aplicativo "SmatWallet". 2-Clicar em "Cadastre-se" 3- Preencher corretamente os campos "Nome", "E-mail"e "Senha"  4- Clicar no botão "Cadastrar".|
|Critério de Êxito | - O usuário conseguir cadastrar seu usuário com sucesso. |
|  	|  	|
| Caso de Teste 	| **CT-07 –  Visão Geral dos Lançamentos** 	|
|Requisito Associado | RF-007	- A aplicação deve ter uma página com a Visão Geral dos Lançamentos(Despesas/Receitas) com Status de Efetivado ou Pendente, identificados com cores. |
| Objetivo do Teste 	| Verificar se o sistema faz distinção dos status das receitas através de cores |
| Passos 	| 1- na tela de usuário clicar em "Lançamento" e realizar lançamentos de despesas e  receitas com seus "Status" definidos 2- voltar para a tela de usuário e clicar em "Extrato" |
|Critério de Êxito | - O usuário conseguir visualizar os status de suas receitas. |
|  	|  	|
| Caso de Teste 	| **CT-08 – Ocultar o Saldo** 	|
|Requisito Associado | RF-008	- A aplicação deve ter a funcionalidade de ocultar o saldo |
| Objetivo do Teste 	| Verificar se o usuário consegue ocultar seu saldo |
| Passos 	| 1- Na tela de usuário clicar em "Lançamentos" 2- executar lançamentos de despesas e receitas  3- clicar em salvar e voltar para tela do usuário 4- clicar no icone de "olho" em saldo para que o valor dos lançamentos seja exibido |
|Critério de Êxito | - O usuário conseguir ocultar o saldo. |
|  	|  	|
| Caso de Teste 	| **CT-09 – Funcionalidade de Chat** 	|
|Requisito Associado | RF-009	- A aplicação deve ter a funcionalidade de chat |
| Objetivo do Teste 	| Verificar se o usuário consegue acessar o chat |
| Passos 	|1- Na tela do usuário clicar no icone "chat" 2- iniciar uma conversa |
|Critério de Êxito | - O usuário conseguir entrar em contato com o suporte pelo chat. |
|  	|  	|



