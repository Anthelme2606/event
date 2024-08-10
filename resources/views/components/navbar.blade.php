<link rel="stylesheet" href="{{asset('assets/components/css/navbar.css')}}"/>
<nav class="navbar navbar-expand-lg navbar-dark navbar-color">
    <a class="navbar-brand" href="">Gevent</a>
    <input type="search" class="search-input" placeholder="Rechercher ...">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="{{route('welcome')}}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Trouver un évenement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Créer un évenemnt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Aide</a>
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
  <script src="{{asset('assets/components/js/navbar.js')}}"></script>
  