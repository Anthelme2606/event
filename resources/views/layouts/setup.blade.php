<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }} | @yield('title')</title>
    @if(Route::is('welcome') || Route::is('login') || Route::is('signup'))
    @include('layouts.head-b-4')
    @else
    @include('layouts.head-b5')
    @endif
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css@4.1.7/css/flag-icons.min.css"
        integrity="sha256-8qup5VqQKcE2cLILwBU2zpXUkT+eW5tI1ZLzJjh/TdY=" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
   
        <link rel="stylesheet" href="{{ asset('assets/css/index.css'). '?' . time()  }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css'). '?' . time()  }}">
    
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
</head>

<body>
  
    <x-loader/>
    <div class="contents">
        @yield('navbar')
        @yield('sidebar')
        @yield('nav-brand')
        @yield('contents')
        <x-toastr/>
    </div>
    <script src="{{asset('assets/js/script.js?'). '?' . time() }}"></script>
    
    @if(Route::is('welcome') || Route::is('login') || Route::is('signup'))
    @include('layouts.script-b-4')
    @else
    @include('layouts.script-b-5')
    @endif
  
</body>

</html>
