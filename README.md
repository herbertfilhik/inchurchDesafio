# inchurch challenge

## Desafio:
1. O nosso time de desenvolvimento está trabalhando em uma nova feature, 
que foi alinhada hoje na nossa reunião de planejamento. A feature se resume em, 
o usuário deseja realizar a inscrição em um evento pelo nosso site, 
onde ele tem a possibilidade de realizar um login, fazer a inscrição selecionando a quantidade de tickets, 
preenchendo informações adicionais como nome, telefone e cpf (campos obrigatórios)
e a realização de pagamento do ticket via cartão de crédito e boleto. 
Dado o cenário, é necessário realizar a descrição de possíveis casos de testes.

Para este item numero 1, foi criado um novo arquivo .feature que descreve os novos cenarios
que poderiam ser desenvolvidos.

esta em: //src/test/resources/features/inchurch/inscricao.feature
	
-----
	

2. Com a possível feature entregue pelo time de desenvolvimento, e em fase de validação, 
desenvolva testes automatizados para a realização da validação. 
Link da feature: ​https://qa-suaigreja.inchurch.com.br/#/events/2574
Login: desafio@qa.inchurch.com
Senha: qainchurch

DISPONIBILIZADO NESTE REPOSITORIO NO GITHUB

A execucao da suite pode ser realizada de duas formas:

01 via maven - digitando o comando mvn clean install ou mvn test
02 via junit - executando a suite pelo arquivo RunnerTest.java