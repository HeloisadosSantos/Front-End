function contratar() {
  let nome = document.getElementById("nome").value;
  let cnpj = document.getElementById("cnpj").value;
  let instagram = document.getElementById("instagram").value;
  let email = document.getElementById("email").value;
  let cep = document.getElementById("cep").value;

  if (nome.length == 0) {
    alert("Digite seu nome");
  } else if (cnpj.length == 0) {
    alert("Digite seu CPF ou CNPJ");
  } else if (instagram.length == 0) {
    alert("Insira o Instagram para contato");
  } else if (email.length == 0) {
    alert("Insira seu e-mail");
  } else if (cep.length == 0) {
    alert("Insira seu CEP");
  } else {
  window.location.href = "Agradeciment.html";
  alert('Sucesso, entraremos em contato!')
  }
}
function login(){
let emailLogin = document.getElementById("emailLogin").value;
let senha = document.getElementById("senha").value;


if (emailLogin.length == 0) {
  alert("Digite seu E-mail");
} else if (senha.length == 0) {
  alert("Digite sua senha");
} else{
  window.open("Index.html");
alert('Sucesso, redicionaremos você para a página inicial!');
 } 
}

function cadastrar(){
let emailCadastrar = document.getElementById("emailCadastrar").value;
let verificacao;
verificacao = emailCadastrar;
verificacao==true

if (verificacao == false) {
  alert("Digite seu email");
} else {
  window.open("cadastro.html");
  alert('Sucesso, entraremos em contato!'); 
  }
}




function criarConta(){
  let name = document.getElementById("name").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let senhaCadastro = document.getElementById("senhaCadastro").value;
  let emailCadastro = document.getElementById("emailCadastro").value;
  let confEmail = document.getElementById("confEmail").value;
  let cpf = document.getElementById("cpf").value;
  let tel = document.getElementById("tel").value;
  verificacao = name && sobrenome && senhaCadastro && emailCadastro && confEmail && cpf && tel;
  verificacao==true

  if (name.length == 0) {
    alert("Digite seu nome");
  } else if (sobrenome.length == 0) {
    alert("Digite seu sobrenome");
  } else if (senhaCadastro.length == 0) {
    alert("Insira sua senha");
  } else if (emailCadastro.length == 0) {
    alert("Insira seu e-mail");
  } else if (confEmail.length == 0) {
    alert("Insira seu e-mail para confirmar");
  } else if (cpf.length == 0) {
    alert("Insira seu CPF");
  } else if (tel.length == 0) {
    alert("Insira seu telefone");
  } else {
  window.location.href = "Index.html";
  alert("Sucesso, redicionaremos você para a página inicial!")
  }
 

}

