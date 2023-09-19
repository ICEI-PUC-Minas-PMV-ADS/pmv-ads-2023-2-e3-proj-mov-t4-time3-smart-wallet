# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Cenários de testes utilizados na realização dos testes da aplicação AgendAI atendendo aos requisitos pré-definidos na seção "2 - Especificação do Projeto". 
 
| **Caso de Teste** 	| **CT-01 - Gerenciar Lançamentos** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação deve permitir o usuário gerenciar seus lançamentos.|
| Objetivo do Teste 	|Verificar se o sistema permite que o usuário gerencie suas receitas. |
| Passos 	|  |
|Critério de Êxito | - O usuário conseguir ver seus lançamentos recentes . |
|  	|  	|
| Caso de Teste	| **CT-02 - Informar Saldo** 	|
|	Requisito Associado 	| RF-002 - A aplicação deve gerar um saldo pegando o valor das receitas e subtraindo aos das despesas.  |
| Objetivo do Teste 	| Verificar se o sistema é capaz de gerar saldos a partir das receitas informadas.   |
| Passos 	| |
|Critério de Êxito | - O usuário conseguir verificar seu saldo com sucesso. |
|  	|  	|
| Caso de Teste	| **CT-03 – Emitir Alertas** |
|	Requisito Associado 	| RF-003 - A aplicação deve emitir alertas, quando as despesas atingirem 75% do valor das receitas. |
| Objetivo do Teste 	| Verificar se o sistema emite alertas ao usuário ao atingir o limite predeterminado |
| Passos 	| |
|Critério de Êxito | - O usuário receber uma notificação ao atingir o limite predeterminado. |
|  	|  	|
| Caso de Teste 	| **CT-04 – Login**	|
|Requisito Associado | RF-004	- A aplicação deve permitir que o usuário faça login|
| Objetivo do Teste 	|  Verificar se o usuário conseguirá efetuar o login a partir das informações corretas. |
| Passos 	| |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| Caso de Teste 	| **CT-05 - Gráficos de Receitas** 	|
|	Requisito Associado 	| RF-005 - 	A aplicação deve apresentar um gráfico de receitas versus despesas |
| Objetivo do Teste 	| Verificar se o sistema é capaz de gerar gráficos a partir das receitas informadas. |
| Passos 	||
|Critério de Êxito | - O usuário conseguir gerar gráficos com suas receitas. |
|  	|  	|
| Caso de Teste 	| **CT-06 – Alerta de Vencimentos**	|
|Requisito Associado | RF-006	- A aplicação deve emitir alertas próximo aos vencimentos dos pagamentos cadastrados|
| Objetivo do Teste 	| Verificar se o sistema emite alertas de pagamentos cadastrados que estão próximos ao vencimento |
| Passos 	||
|Critério de Êxito | -  O usuário receber uma notificação próximo do vencimento. |
|  	|  	|
| Caso de Teste 	| **CT-07 –  Visão Geral dos Lançamentos** 	|
|Requisito Associado | RF-007	- A aplicação deve ter uma página com a Visão Geral dos Lançamentos(Despesas/Receitas) com Status de Efetivado ou Pendente, identificados com cores. |
| Objetivo do Teste 	| Verificar se o sistema faz distinção dos status das receitas através de cores |
| Passos 	| |
|Critério de Êxito | - O usuário conseguir visualizar os status de suas receitas. |
|  	|  	|
| Caso de Teste 	| **CT-08 – Ocultar o Saldo** 	|
|Requisito Associado | RF-008	- A aplicação deve ter a funcionalidade de ocultar o saldo |
| Objetivo do Teste 	| Verificar se o usuário consegue ocultar seu saldo |
| Passos 	| |
|Critério de Êxito | - O usuário conseguir ocultar o saldo. |
|  	|  	|
| Caso de Teste 	| **CT-09 – Funcionalidade de Chat** 	|
|Requisito Associado | RF-009	- A aplicação deve ter a funcionalidade de chat |
| Objetivo do Teste 	| Verificar se o usuário consegue acessar o chat |
| Passos 	||
|Critério de Êxito | - O usuário conseguir entrar em contato com o suporte pelo chat. |
|  	|  	|


