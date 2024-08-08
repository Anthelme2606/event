@php
$cities = [
    [
        'icon' => 'flag-icon-pt', // Portugal
        'city' => 'Portugal',
        'spectateurs' => 2000000,
    ],
    [
        'icon' => 'flag-icon-us', // USA
        'city' => 'USA',
        'spectateurs' => 1000000,
    ],
    [
        'icon' => 'flag-icon-in', // India
        'city' => 'India',
        'spectateurs' => 900000,
    ],
    [
        'icon' => 'flag-icon-gn', // Guinée
        'city' => 'Guinée',
        'spectateurs' => 800000,
    ],
    [
        'icon' => 'flag-icon-gh', // Ghana
        'city' => 'Ghana',
        'spectateurs' => 700000,
    ],
    [
        'icon' => 'flag-icon-bj', // Benin
        'city' => 'Benin',
        'spectateurs' => 600000,
    ],
    [
        'icon' => 'flag-icon-tg', // Togo
        'city' => 'Togo',
        'spectateurs' => 600000,
    ],
    [
        'icon' => 'flag-icon-es', // Espagne
        'city' => 'Espagne',
        'spectateurs' => 400000,
    ],
];
@endphp

<section class="services-provided-section py-5">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <h2 class="text-center underline-green title-color">Les villes les plus visitées</h2>
        </div>
        <div class="row text-center g-2">
            @foreach($cities as $city)
                <div class="col-md-3 mb-2">
                    <x-country-card :icon="$city['icon']" :country="$city['city']" :spectateurs="$city['spectateurs']"/>
                </div>
            @endforeach
        </div>
    </div>
</section>
