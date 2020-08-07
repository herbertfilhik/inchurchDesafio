$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inscricao.feature");
formatter.feature({
  "line": 1,
  "name": "Realizar Inscrição para Eventos da inchurch",
  "description": "\nCenario: 01 - Criar login para o cliente realizar inscrição\nDado que o que cliente acesse o site para inscrição\nE realize o cadastro no site\n|ticket |nome       |fone        |cpf        |\n|1\t    |alvaro dias|11-4444-2222|78534769818|\n|0\t    |alvaro dias|11-4444-2222|78534769818|\n|1\t    |!@#$%ˆ\u0026*()_|11-4444-2222|78534769818|\n|9999   |alvaro dias|11-4444-2222|78534769818|\n|1\t    |alvaro dias|!@#$%ˆ\u0026*()__|78534769818|\n|1\t    |alvaro dias|11-4444-2222|11122233344|\n|1 \t    |alvaro dias|11-4444-2222|!@#$%ˆ\u0026*()!|\n|10 \t  |alvaro dias|11-4444-2222|68484027880|\nE realiza validacao dos dados para efetivar o cadastro do cliente\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\nEntao deve ser gerado um login para o cliente\n\nCenario: 02 - Realizar login\nDado que o cliente esteja cadastrado\nE esteja no site\nE informa usuario e senha\nEntao deve acessar o sistema\n\nCenario: 03 - Tentar realizar login com usuario invalido ou inexistente\nDados que nao exista o cliente na base\nE esteja no site\nE informa usuario e senha invalidos ou inexistentes\nEntao o sistema devera informar que o usuario eh inexistente ou invalido\n\nCenario: 04 - Realizar pagamento para o evento com cartao de credito\nDado que o cliente esteja cadastrado na base\nE esteja no site\nE realiza o login\nE esteja no carrinho de compras\nE seleciona o meio de pagamento CARTAO\nE informa os dados de pagamento\n|cartao          |bandeira|dtexpiracao|cvv|nome           |\n|4556302487225856|visa    |09/21      |907|antonieta souza|\n|5330991798089462|master  |07/21      |765|jose santos    |\n|xxxxxxxxxxxxxxxx|error   |xx/ss      |123|!@#$%ˆ\u0026*((     |\nE valida se o meio de pagamento eh valido\nEntao realiza pagamento e retorna voucher para o cliente\n\nCenario: 05 - Realizar pagamento para o evento com boleto\nDado que o cliente esteja cadastrado na base\nE esteja no site\nE realiza o login\nE esteja no carrinho de compras\nE seleciona o meio de pagamento BOLETO\nEntao o sistema deve gerar o boleto para pagamento e disponibilizar ao cliente\n|boleto            |dataVencimento              |\n|valido            |dentro da data de vencimento|\n|valido            |fora da data de vencimento  |\n|invalido          |dentro da data de vencimento|\n|valido segunda via|dentro da data de vencimento|\t\t\n|valido segunda via|fora da data de vencimento  |\t\t\t\t\nEntao o cliente deve realizar o pagamento\nEntao o sistema valida se o pagamento foi realizado de acordo com as politicas financeiras da empresa\nEntao se o pagamento foi realizado com sucesso o sistema disponibiliza o voucher ao cliente",
  "id": "realizar-inscrição-para-eventos-da-inchurch",
  "keyword": "Feature"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 367201000,
  "status": "passed"
});
formatter.before({
  "duration": 51820,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login to inchurch site and validate the user name",
  "description": "",
  "id": "login;login-to-inchurch-site-and-validate-the-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on inchurch site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Entrar como visitante",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should make login on system and validate the user name",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_inchurch_site()"
});
formatter.result({
  "duration": 8965153498,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_search_for_Entrar_como_visitante()"
});
formatter.result({
  "duration": 6509811933,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_make_login_on_system()"
});
formatter.result({
  "duration": 28538259215,
  "status": "passed"
});
formatter.after({
  "duration": 2437589154,
  "status": "passed"
});
formatter.after({
  "duration": 26910,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "Create User",
  "description": "",
  "id": "create-user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 142361551,
  "status": "passed"
});
formatter.before({
  "duration": 30155,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new user for inchurch",
  "description": "",
  "id": "create-user;create-a-new-user-for-inchurch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on inchurch site to create a user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Entrar como visitante to open option and input data for new user",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I must be inform data to insert register on the base",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.i_am_on_inchurch_site()"
});
formatter.result({
  "duration": 9660060426,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.inputdatafornewuser()"
});
formatter.result({
  "duration": 6492896152,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.insertregisteronthebase()"
});
formatter.result({
  "duration": 28843197303,
  "status": "passed"
});
formatter.after({
  "duration": 586097737,
  "status": "passed"
});
formatter.after({
  "duration": 48711,
  "status": "passed"
});
});