# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>, <a href="03-Metodologia.md"> Metodologia</a>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>, <a href="05-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

|ID    | Descrição do Requisito  | Artefatos |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir o usuário gerenciar seus lançamentos. | src/pages/Lancamento.js, src/pages/Extrato.js, src/services/lancamento.services.js | 
|RF-002| A aplicação deve gerar um saldo pegando o valor das receitas e subtraindo aos das despesas.   | src/pages/Usuario.js |
|RF-003| A aplicação deve emitir alertas, quando as despesas atingirem 75% do valor das receitas. | | 
|RF-004| A aplicação deve permitir que o usuário faça cadastro.  | src/pages/Cadastro.js |
|RF-005| A aplicação deve permitir que o usuário faça login.  | src/pages/Login.js |
|RF-006| A aplicação deve apresentar um gráfico de receitas versus despesas|  | 
|RF-007| A aplicação deve emitir alertas próximo aos vencimentos dos pagamentos cadastrados   |  |
|RF-008| A aplicação deve ter uma página com a Visão Geral dos Lançamentos(Despesas/Receitas) com Status de Efetivado ou Pendente, identificados com cores. | src/pages/Extrato.js | 
|RF-009| A aplicação deve ter a funcionalidade de ocultar o saldo  | src/pages/Usuario.js | 
|RF-010| A aplicação deve ter a funcionalidade de chat  | src/pages/Chat.js | 
