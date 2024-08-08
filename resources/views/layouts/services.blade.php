@php
  $events = [
      [
          'icon' => 'mdi-microphone',
          'title' => 'Musique',
          'description' => 'Profitez d une expérience musicale inoubliable.'
      ],
      [
          'icon' => 'mdi-gamepad-variant',
          'title' => 'Jeux',
          'description' => 'Découvrez les derniers jeux et divertissements.'
      ],
      [
          'icon' => 'mdi-glass-cocktail',
          'title' => 'Vie nocturne',
          'description' => 'Vivez des soirées inoubliables.'
      ],
      [
          'icon' => 'mdi-party-popper',
          'title' => 'Fêtes',
          'description' => 'Célébrez avec style et amusement.'
      ],
      [
          'icon' => 'mdi-heart',
          'title' => 'Rencontre',
          'description' => 'Rencontrez des personnes formidables.'
      ],
      [
          'icon' => 'mdi-bike',
          'title' => 'Loisirs',
          'description' => 'Participez à des activités de loisirs passionnantes.'
      ],
      [
          'icon' => 'mdi-briefcase',
          'title' => 'Affaires',
          'description' => 'Boostez votre carrière avec nos événements d\'affaires.'
      ],
      [
          'icon' => 'mdi-silverware-fork-knife',
          'title' => 'Gastronomie',
          'description' => 'Dégustez des plats délicieux et variés.'
      ]
  ];
@endphp

<section class="services-section py-5">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center mb-2">
        <h3 class="text-center title-color underline-green">Categories d'évenements</h3>
      </div>
      
      <div class="row text-center g-1">
        @foreach ($events as $event)
        <div class="col-md-4 mb-4">
          <x-event-card :icon="$event['icon']" :title="$event['title']" :description="$event['description']" />
        </div>
      
        @endforeach
      
        
      </div>
    </div>
  </section>
  