<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel-Vue-Spa</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="app">
    <ol class="breadcrumb">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>

    </ol>
    <router-view></router-view>
</div>
<script src="/js/app.js"></script>
</body>
</html>
