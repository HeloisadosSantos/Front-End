function pagar(){
    let nome = document.getElementById("nome").value;
    let nCartao = document.getElementById("nCartao").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let chave = document.getElementById("chave").value;

    
if (nome.length == 0) {
    alert("Digite o nome que está no seu cartão");
  } else if (nCartao.length == 0) {
    alert("Digite o número do seu cartão");
  } else if (nCartao.length>16  || nCartao.length<16) {
    alert("Seu cartão precisa ter 16 números");
  } else if (mes.length == 0) {
    alert("Digite o mês de expedição do seu cartão");
  }else if (mes.length!=2) {
    alert("O mês são 2 números");
  }else if (ano.length == 0) {
    alert("Digite o ano de expedição do seu cartão");
  } else if (ano.length!=2) {
    alert("O ano são 2 números");
  } else if (chave.length == 0) {
    alert("Digite a chave de segurança do seu cartão");
  }else if (chave.length!=3) {
    alert("A chave de segurança são 3 números");
  } else{
    window.open("compraRealizada.html");
 
   } 
}
function cancelar(){
    window.open("Index.html");
}