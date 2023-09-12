<?php
session_start();

if (!empty($_POST['email']) && !empty($_POST['senha'])) {
    include("conexao.php");
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM cadastro WHERE email = '$email' AND senha = '$senha'";



    $result = $conexao->query($sql);




    if (mysqli_num_rows($result) < 1) {
        //n existe
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        echo "<script language ='javascript' type='text/javascript'>
            alert('Login e/ou senha incorreta'; window.location.href='cadastro.html';</script>";
        die();
    } else {
        $_SESSION['email'] = $email;
        $_SESSION['senha'] = $senha;
        $logado = $email;

        echo "<script language= 'javascript' type= 'text/javascript'>
            alert('Logado como: $logado'); window.location.href='Index.html';</script>";
    }
} else {
    echo "<script language='javascript' type='text/javascript'>
        alert('Os campos devem ser preenchidos para prosseguir'); window.location.href='login.html';</script>";
}if($senha==$senha){
    
}
