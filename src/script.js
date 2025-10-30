function executar(event) {
  event.preventDefault();

  const form = event.target;
  const formdata = new FormData(form);
  const dados = Object.fromEntries(formdata);

  const { peso, altura } = dados;

  dados.imc = peso / (altura * altura);

  form.elements.imc.value = dados.imc;
}
