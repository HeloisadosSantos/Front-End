<?php
include("conexao.php");

$nome=$_POST['nome'];
$sobrenome=$_POST['sobrenome'];
$email=$_POST['email'];
$confirmaemail=$_POST['confirmaemail'];
$senha=$_POST['senha'];
$cpf=$_POST['cpf'];
$telefone=$_POST['telefone'];

$sql="INSERT INTO cadastro(nome,sobrenome,email,confirmaemail,senha,cpf,telefone) 
VALUES ('$nome','$sobrenome','$email','$confirmaemail','$senha','$cpf','$telefone')";

if(mysqli_query($conexao, $sql)){
    echo "Usuário Cadastrado com sucesso!";
}else {
    echo "Erro!" .mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>