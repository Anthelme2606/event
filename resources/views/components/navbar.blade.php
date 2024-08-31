<link rel="stylesheet" href="{{asset('assets/components/css/navbar.css?'). '?' . time() }}"/>
<nav class="navbar navbar-expand-lg navbar-dark navbar-color">
    <a class="navbar-brand" href="{{route('welcome')}}">EVENTLYTIC</a>
    <input type="search" class="search-input" placeholder="Rechercher ...">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="{{route('welcome')}}">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Trouver un évènement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Créer un évènement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('login')}}">Se connecter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('signup')}}">Ouvrir un compte</a>
        </li>
      </ul>
    </div>
  </nav>
  <script src="{{asset('assets/components/js/navbar.js?'). '?' . time() }}"></script>
  