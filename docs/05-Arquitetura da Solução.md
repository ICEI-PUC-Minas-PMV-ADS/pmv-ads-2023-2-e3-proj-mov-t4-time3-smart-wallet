# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![diagramaclassesyourwallet](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-time3-smart-wallet/assets/109763968/17ea9193-dd60-4abc-9854-b9cef391a10a)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![REM yourwallet](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-time3-smart-wallet/assets/109763968/4a1e0a96-dd61-4a26-8e29-4e8c0a0b4319)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![ERyourwallet](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-time3-smart-wallet/assets/109763968/f0dd66cc-37cf-4cc5-b30b-5d9b66d4315b)


## Modelo Físico

Arquivo banco.sql que contem os scripts de criação das tabelas do banco de dados.

![dbscriptyourwallet](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-time3-smart-wallet/assets/109763968/5fe0b150-db41-4399-bd19-2f34e8f939f3)

## Tecnologias Utilizadas

Foram utilizadas as seguintes tecnologias:

- Microsoft Visual Studio Code
- Android Studio
- MySQL Workbench
- JavaScript
- React Native
- npm
- JSON Server
- Figma
- drawio.com

## Hospedagem

Não houve hospedagem, utilizamos somente o ambiente local para desenvolvimento.

## Qualidade de Software

Com o objetivo de padronizar a avaliação da qualidade do sowftware no nosso projeto, vamos seguir os padrões da norma ISO/IEC 9216 - com a atualização conferida pela norma ISO/IEC 25010 - que propõe atributos de qualidade distribuídos em características principais e em subcaracteristicas:

![Qualidade Software ISO 9126](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-time3-smart-wallet/assets/109763968/b3505eb3-277c-4c54-9df5-b466b9c8c365)

**Funcionalidade**:
 - *Interoperabilidade*: O sistema cumpre esse critério com a sua capacidade de interagir com sistemas Android.
 - *Segurança de acesso*: O sistema implementa esse critério a partir da autenticação de usuários, com senha criptografada no banco de dados.

**Confiabilidade**:
 - *Tolerância a falhas*: O sistema implementa esse critério através das avaliações pelos testes de usabilidade.

**Usabilidade**:
 - *Inteligibilidade*: O sistema implementa esse critério através das avaliações pelos testes de usabilidade.
 - *Apreensibilidade*: O sistema implementa esse critério através das avaliações pelos testes de usabilidade.

**Manutenibilidade**:
 - *Modificabilidade*: O sistema cumpre esse critério através da implementação e ajuste de funcionalidades.

