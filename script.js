const scriptURL = "";
const form = document.forms["google-form"];

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response =>
      $("#form_alerts").html(
        "<div class='alert-sucess'>Mensagem enviada com sucesso</div>"
      )
    )
    .catch(error =>
      $("#form_alerts").html(
        "<div class='alert alert-danger'>Erro ao enviar mensagem</div>"
      )
    );
});
