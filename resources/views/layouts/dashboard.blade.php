@extends('layouts.setup')
@section('title', 'DASHBOARD')
@section('sidebar')
    <x-sidebar />
@endsection
@section('nav-brand')
    <x-nav-brand />
@endsection
@section('contents')
    <link rel="stylesheet" href="{{ asset('assets/css/container.css') }}">
    @php
        $dashboardCards = [
            [
                'title' => 'Nombre total d\'événements organisés',
                'mdi_icon' => 'mdi-calendar-check',
                'value' => 120, // Exemple de valeur
                'description' => 'Total des événements créés et organisés via la plateforme.',
            ],
            [
                'title' => 'Nombre d\'utilisateurs inscrits',
                'mdi_icon' => 'mdi-account-multiple',
                'value' => 3500, // Exemple de valeur
                'description' => 'Nombre total d\'utilisateurs inscrits sur la plateforme.',
            ],
            // [
            //     'title' => 'Événements à venir',
            //     'mdi_icon' => 'mdi-calendar-clock',
            //     'value' => 15, // Exemple de valeur
            //     'description' => 'Nombre d\'événements programmés pour les jours ou semaines à venir.',
            // ],
            [
                'title' => 'Événements en attente de validation',
                'mdi_icon' => 'mdi-timer-sand',
                'value' => 5, // Exemple de valeur
                'description' => 'Nombre d\'événements en attente d\'approbation par l\'administrateur.',
            ],
            // [
            //     'title' => 'Revenus générés',
            //     'mdi_icon' => 'mdi-currency-usd',
            //     'value' => 12500, // Exemple de valeur
            //     'description' => 'Total des revenus générés par les inscriptions ou ventes de billets.',
            // ],
            [
                'title' => 'Nombre de billets vendus',
                'mdi_icon' => 'mdi-ticket-confirmation',
                'value' => 850, // Exemple de valeur
                'description' => 'Nombre total de billets vendus pour tous les événements.',
            ],
            // [
            //     'title' => 'Notifications non lues',
            //     'mdi_icon' => 'mdi-bell',
            //     'value' => 8, // Exemple de valeur
            //     'description' => 'Nombre de notifications importantes non lues.',
            // ],
            // [
            //     'title' => 'Messages des utilisateurs',
            //     'mdi_icon' => 'mdi-email',
            //     'value' => 12, // Exemple de valeur
            //     'description' => 'Nombre de messages ou demandes de contact reçus des utilisateurs.',
            // ],
        ];
        $stats=[
            [
                'title'=>'Evènements ',
                'percent'=>30,
],
            
            [
                'title'=>'Clients inscrits',
                'percent'=>70,
],
            [
                'title'=>'Evènements en attente',
                'percent'=>15,
],
            [
                'title'=>'Billets vendus',
                'percent'=>80,
],
            
];
        $events=[
            [
               'image'=> 'avatar.png',
            ]
            ,
            [
               'image'=> 'avatar.png',
            ]
            ,
            [
               'image'=> 'avatar.png',
            ]
            ,
            [
               'image'=> 'avatar.png',
            ]
            ,
            [
               'image'=> 'avatar.png',
            ]
            ,
            [
               'image'=> 'avatar.png',
            ]
            ,
];

    @endphp
    <div class="dashboard">
        <div class="dashboard-container">
            <div class="row row-cols-1 row-cols-md-1 mb-1">
                <div class="col">
                    <div class="card card-info ">
                        <div class="card-body d-flex position-relative ">
                            <div class="close-btn position-absolute">&times;</div>

                            <div class=" share">
                                <img class="img-fluid" src="{{ asset('assets/images/share.png') }}">
                            </div>
                            <div class="info-text me-2 mx-4">
                                <span class="text-pretty">Un nouveau évènement vient d'etre crée.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 mb-1 g-1">
                @foreach ($dashboardCards as $card)
                    <div class="col">
                        <div class="card height-100">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div class=""> <span>{{ $card['value'] }}</span></div>
                                    <div class="round-50"> <span class="icon-card mdi {{ $card['mdi_icon'] }}"></span></div>

                                </div>
                                <div class="text-card desc-card d-flex justify-content-center align-items-center flex-column">
                                    {{ $card['title'] }}
                                </div>
                            </div>

                        </div>
                    </div>
                @endforeach
            </div>
            <div class="mt-1 mb-1 d-flex justify-content-between">
                <span class="title">Statistiques Mensuelles</span>
                <span class="title">Calendrier</span>
            </div>
            <div class="row mb-1 g-1">

                <div class="col-md-8">
                    <div class="row row-cols-2 g-1 row-cols-md-4">
                        @foreach($stats as $stat)
                        <div class="col">
                        
                        <div class="card height-100">
                            <div class="card-body  d-flex 
                                justify-content-center
                                flex-column
                                 align-items-center">
                                <div class="circle-50 mt-1"
                                 data-set-progress="{{$stat['percent']}}">
                                    <div class="progress"></div>
                                    <div class="progress-text">{{$stat['percent']}}%</div>
                                </div>
                                <div class="bar-100 mt-1 ">
                                    <div class="progress-b">

                                    </div>

                                </div>
                                <div class="mt-1 d-flex 
                                justify-content-center
                                flex-column
                                 align-items-center">
                                    <span class="desc-stat">{{$stat['title']}}</span>
                                </div>
                            </div>

                        </div>
                        
                       </div>
                       @endforeach
                    </div>

                </div>
                {{-- <div class="col-md-4">
                 <div class="card database-card height-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <img src="{{asset('assets/images/incoming.jfif')}}" alt="Database Icon" class="icon">
                    <h5 class="card-title">Evènement</h5>
                    <p class="card-text">évenement à venir</p>
                </div>
                <div class="avatars">
                    @foreach($events as $event)
                    <img src="{{asset('assets/images/'.$event['image'])}}" class="avatar">
                    @endforeach
                </div>
            </div>
        </div>
    </div>
                </div> --}}

            </div>
        </div>
    </div>
    <script src="{{ asset('assets/js/container.js') }}"></script>
@endsection
