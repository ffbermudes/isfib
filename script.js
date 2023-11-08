const scriptURL = 'https://script.google.com/macros/s/AKfycbzsDAbiHEWOSBltaKtXoCxVu531wrN7lMIZPxZuOKFBdTMIw2twhKain_6X2CY9EVmt/exec';
const form = document.forms['google-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      $("#form_alerts").html(
        "<div class='alert alert-success'>Mensagem enviada com sucesso</div>"
      );
			form.reset();
			
			})
    .catch(error =>
      $("#form_alerts").html(
        "<div class='alert alert-danger'>Erro ao enviar mensagem</div>"
      )
    );
});