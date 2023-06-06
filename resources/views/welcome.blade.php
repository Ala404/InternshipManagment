<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <script src="{{ asset('css/app.css') }}"></script>



    </head>
    <body>
        <div id="app">

        </div>
        <script src="{{ asset('vue/js/chunk-vendors.js') }}"></script>
        <script src="{{ asset('vue/js/app.js') }}"></script>
</html>
