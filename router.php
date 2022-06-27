<?php
// La partie à partir du premier / dans l'url
$uri = $_SERVER['REQUEST_URI'];

//permet de ne pas se balader dans le site sans session user
// si $uri == /entrer.php
if ($uri == '/entrer.php') {
    //si pas de session user
    if (!isset($_SESSION['user'])) {
        //je vais à login
        header('Location: /login');
        exit;
    } else { //sinon je vais à projet
        header('Location: /projet');
        exit;
    }
// sinon si $uri différent de login ou sign_in
} else if ($uri != '/login' && $uri != '/sign_in') {
    //si pas de session user
    if (!isset($_SESSION['user'])) {
        //je vais à login
        header('Location: /login');
        exit;
    }
}


//si $uri
switch ($uri) {
    case '/login': // est égale à login
        //depuis la racine va chercher login.php
        require_once __DIR__ . '/php_partial/login.php'; 
        break;
    case '/sign_in':// est égale à sign_in
        //depuis la racine va chercher sign_in.php
        require_once __DIR__ . '/php_partial/sign_in.php';
        break;
    case '/projet':// est égale à projet
        //depuis la racine va chercher projet.php
        require_once __DIR__ . '/php_partial/projet.php';
        break;
    case "/new_project":// est égale à new_project
        //depuis la racine va chercher New_project
        require_once __DIR__ . '/php_partial/new_project.php';
        break;
    case "/load_project":// est égale à load_project
        //depuis la racine va chercher loed_project.php
        require_once __DIR__ . '/php_partial/load_project.php';
        break;
    default: //sinon
        http_response_code(404); //erreur 404
        $content = file_get_contents(__DIR__ . '/html_partial/alerts/404.php');
}
//j'appelle la base html qui affichera $content (voir dans les fichiers dans php_partial)
require_once __DIR__ . '/html_partial/bases_html.php';
?>
