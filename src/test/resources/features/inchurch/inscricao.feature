Feature: Realizar Inscrição para Eventos da inchurch

Cenario: 01 - Criar login para o cliente realizar inscrição
	Dado que o que cliente acesse o site para inscrição
	E realize o cadastro no site
		|ticket |nome       |fone        |cpf        |
		|1	    |alvaro dias|11-4444-2222|78534769818|
		|0	    |alvaro dias|11-4444-2222|78534769818|
		|1	    |!@#$%ˆ&*()_|11-4444-2222|78534769818|
		|9999   |alvaro dias|11-4444-2222|78534769818|
		|1	    |alvaro dias|!@#$%ˆ&*()__|78534769818|
		|1	    |alvaro dias|11-4444-2222|11122233344|
		|1 	    |alvaro dias|11-4444-2222|!@#$%ˆ&*()!|
		|10 	  |alvaro dias|11-4444-2222|68484027880|
	E realiza validacao dos dados para efetivar o cadastro do cliente															
	Entao deve ser gerado um login para o cliente

Cenario: 02 - Realizar login
	Dado que o cliente esteja cadastrado
	E esteja no site
	E informa usuario e senha
	Entao deve acessar o sistema

Cenario: 03 - Tentar realizar login com usuario invalido ou inexistente
	Dados que nao exista o cliente na base
	E esteja no site
	E informa usuario e senha invalidos ou inexistentes
	Entao o sistema devera informar que o usuario eh inexistente ou invalido
	
Cenario: 04 - Realizar pagamento para o evento com cartao de credito
	Dado que o cliente esteja cadastrado na base
	E esteja no site
	E realiza o login
	E esteja no carrinho de compras
	E seleciona o meio de pagamento CARTAO
	E informa os dados de pagamento
		|cartao          |bandeira|dtexpiracao|cvv|nome           |
		|4556302487225856|visa    |09/21      |907|antonieta souza|
		|5330991798089462|master  |07/21      |765|jose santos    |
		|xxxxxxxxxxxxxxxx|error   |xx/ss      |123|!@#$%ˆ&*((     |
	E valida se o meio de pagamento eh valido
	Entao realiza pagamento e retorna voucher para o cliente
	
Cenario: 05 - Realizar pagamento para o evento com boleto
	Dado que o cliente esteja cadastrado na base
	E esteja no site
	E realiza o login
	E esteja no carrinho de compras
	E seleciona o meio de pagamento BOLETO
	Entao o sistema deve gerar o boleto para pagamento e disponibilizar ao cliente
		|boleto            |dataVencimento              |
		|valido            |dentro da data de vencimento|
		|valido            |fora da data de vencimento  |
		|invalido          |dentro da data de vencimento|
		|valido segunda via|dentro da data de vencimento|		
		|valido segunda via|fora da data de vencimento  |				
	Entao o cliente deve realizar o pagamento
	Entao o sistema valida se o pagamento foi realizado de acordo com as politicas financeiras da empresa
	Entao se o pagamento foi realizado com sucesso o sistema disponibiliza o voucher ao cliente
