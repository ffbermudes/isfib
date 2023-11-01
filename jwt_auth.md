# Detalhes sobre o plugin wordpress de autenticação.

## Configurações iniciais.
Antes de ativar o plugin é necessário fazer duas configurações uma no arquivo *.htaccess* e *wp-config*

>.htaccess
```
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

>wp-config
```
define('JWT_AUTH_SECRET_KEY', 'STRING AQUI');
define('JWT_AUTH_CORS_ENABLE', true);
```
Após os procedimentos acima ative o plugin e atualize as URL's do wordpress.

Caminho padrão da autenticação da API. Após o token ter sido gerado.
http://apidog.test/json/jwt-auth/v1/token/validate
>Segue abaixo o código da api fetch para validar o token gerado de acordo com o seu hash configurado.
```
	<script>

		const botaoDeBusca = document.getElementById('busca')
		botaoDeBusca.addEventListener('click', buscaFetch)

		function buscaFetch() {

			fetch('http://apidog.test/json/jwt-auth/v1/token/validate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpZG9nLnRlc3QiLCJpYXQiOjE2OTY2NTc5NDEsIm5iZiI6MTY5NjY1Nzk0MSwiZXhwIjoxNjk3MjYyNzQxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.n9z386f9O_w18tqCalEA_tv0e3jPwFbt-kGcLI4wd1o'
				}
			})
			.then(response => {
				console.log(response)
				return response.json()
			})
			.then(json => console.log(json))
		}

	</script>
```
É importante destacar que o servidor só armazena a string aleatória por 24 horas. Caso passe esse tempo ou o dispositivo que irá logar não possui no seu navegador armazenado o token, será necessário um novo login.
>Segue abaixo o código fetch para geração de um novo  para um usuário específico

O caminho para gerar o token é http://apidog.test/json/jwt-auth/v1/token

É necessário passar o username e password para o plugin gerar o token do usuário.
```
	<script>

		const botaoDeBusca = document.getElementById('busca')
		botaoDeBusca.addEventListener('click', buscaFetch)

		function buscaFetch() {
			const body = {
				"username": "freitoons",
				"password": "123456",
			}

			fetch('http://apidog.test/json/jwt-auth/v1/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body)
			})
			.then(response => {
				console.log(response)
				return response.json()
			})
			.then(json => console.log(json))
		}

	</script>
```