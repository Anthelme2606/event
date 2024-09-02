@php
$travaux = [
    [
        'image' => 'charite.png',
        'title' => "Gala de charité annuel",
        'text' => "Organisation complète d'un gala de charité pour 500 invités, incluant la planification, la décoration et la coordination des fournisseurs.",
        'service' => "Planification d'événements"
    ],
    [
        'image' => 'mariage.png',
        'title' => "Mariage élégant en plein air",
        'text' => "Gestion complète des invitations et des RSVP pour un mariage de 200 personnes, avec un système de suivi personnalisé.",
        'service' => "Gestion des invitations"
    ],
    [
        'image' => 'tech.png',
        'title' => "Lancement de produit high-tech",
        'text' => "Coordination sur site pour le lancement d'un produit technologique majeur, gérant une équipe de 50 personnes et 1000 participants.",
        'service' => "Coordination le jour de l'événement"
    ],
    [
        'image' => 'decoration.png',
        'title' => "Décoration thématique pour gala",
        'text' => "Création d'une ambiance 'Sous l'océan' pour un gala d'entreprise, transformant complètement une salle de bal standard.",
        'service' => "Décoration et ambiance"
    ],
    [
        'image' => 'budget.png',
        'title' => "Optimisation budgétaire",
        'text' => "Réduction de 20% du budget d'un festival de musique tout en augmentant la qualité des prestations et la satisfaction des participants.",
        'service' => "Gestion du budget"
    ],
    [
        'image' => 'coordinate.png',
        'title' => "Coordination de fournisseurs pour un salon professionnel",
        'text' => "Gestion de 50 fournisseurs différents pour un salon professionnel de 3 jours, assurant une logistique sans faille.",
        'service' => "Gestion des fournisseurs"
    ],
    [
        'image' => 'evening-gala.png',
        'title' => "Soirée de gala avec spectacle immersif",
        'text' => "Organisation d'un spectacle immersif mêlant cirque et technologie pour une soirée de gala d'entreprise de 300 personnes.",
        'service' => "Divertissement"
    ],
    [
        'image' => 'analyse.png',
        'title' => "Analyse et amélioration post-conférence",
        'text' => "Collecte et analyse détaillée des retours après une conférence internationale, menant à une amélioration de 30% de la satisfaction pour l'édition suivante.",
        'service' => "Service après-événement"
    ]
];
@endphp
<link rel="stylesheet" href="{{asset('assets/components/css/frame-2.css?'). '?' . time() }}">

 
    {{-- <button class="opner btn btn-primary">Opner</button> --}}
    <div class="btm-trav-frame close">
        <div class=" position-relative  flex-column vh-100">
            <button class="close-trav-btn">
                <span class="mdi mdi-close"></span>
            </button>
            <div class="frame-container">
                {{-- <div class=" services-grid">
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #3B82F6;">Planification d'événements</h3>
                            <p class="service-description">Nous vous aidons à planifier chaque étape de votre événement, de la conception à l'exécution.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #10B981;">Gestion des invitations</h3>
                            <p class="service-description">Envoi et suivi des invitations, gestion des RSVP et des listes d'invités.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #8B5CF6;">Coordination le jour de l'événement</h3>
                            <p class="service-description">Coordination sur site pour assurer le bon déroulement de votre événement.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="13.5" cy="6.5" r=".5" />
                                    <circle cx="17.5" cy="10.5" r=".5" />
                                    <circle cx="8.5" cy="7.5" r=".5" />
                                    <circle cx="6.5" cy="12.5" r=".5" />
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #EC4899;">Décoration et ambiance</h3>
                            <p class="service-description">Création d'une ambiance unique avec une décoration personnalisée.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #F59E0B;">Gestion du budget</h3>
                            <p class="service-description">Optimisation des coûts pour rester dans votre budget sans sacrifier la qualité.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #EF4444;">Gestion des fournisseurs</h3>
                            <p class="service-description">Sélection et coordination des meilleurs fournisseurs pour votre événement.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #6366F1;">Divertissement</h3>
                            <p class="service-description">Organisation d'animations et de spectacles pour divertir vos invités.</p>
                        </div>
                    </div>
                    <div class="service-card mb-2">
                        <div class="service-content">
                            <div class="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <h3 class="service-title" style="color: #059669;">Service après-événement</h3>
                            <p class="service-description">Suivi post-événement, collecte de retours et analyse pour amélioration continue.</p>
                        </div>
                    </div>

                </div> --}}
                <div class="row row-cols-1 row-cols-md-3 g-2">
                    @foreach($travaux as $travail)
                    <div class="col mb-2">
                        <div class="card h-100 shadow">
                            <img src="{{asset('assets/images/'.$travail['image'])}}" class="card-img-top img-fluid" alt="Gala de charité">
                            <div class="card-body">
                                <h5 class="card-title">{{$travail['title']}}</h5>
                                <p class="card-text">{{$travail['text']}}.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">{{$travail['service']}}</small>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="info-section">
                    <h2>Nos Travaux : L'Excellence Événementielle en Action</h2>
                    <p>Chez EVENTLYTIC, chaque projet que nous réalisons est le reflet de notre engagement envers l'excellence et l'innovation dans l'industrie événementielle. Notre portfolio diversifié témoigne de notre capacité à transformer des concepts en expériences mémorables, quelles que soient l'échelle ou la nature de l'événement.</p>
                    <p>Nos réalisations couvrent un large éventail d'événements, du gala de charité annuel rassemblant 500 invités au lancement de produit high-tech gérant 1000 participants. Chaque projet démontre notre expertise en planification méticuleuse, en gestion logistique complexe et en création d'ambiances uniques. Par exemple, notre décoration thématique "Sous l'océan" pour un gala d'entreprise a complètement transformé une salle de bal standard en un monde sous-marin enchanteur.</p>
                    <p>La personnalisation est au cœur de notre approche. Que ce soit pour un mariage élégant en plein air ou une soirée de gala avec un spectacle immersif, nous veillons à ce que chaque détail reflète la vision unique de nos clients. Notre système de gestion des invitations sur mesure pour un mariage de 200 personnes illustre parfaitement notre capacité à allier technologie et service personnalisé.</p>
                    <p>Notre expertise s'étend également à la gestion efficace des ressources. Nous sommes fiers d'avoir optimisé le budget d'un festival de musique, réduisant les coûts de 20% tout en améliorant la qualité des prestations et la satisfaction des participants. De même, notre coordination de 50 fournisseurs différents pour un salon professionnel de 3 jours démontre notre maîtrise de la logistique à grande échelle.</p>
                    <p>L'innovation est un pilier de notre travail. Que ce soit dans l'intégration de technologies de pointe pour un lancement de produit ou dans la création d'un spectacle immersif mêlant cirque et technologie pour une soirée de gala d'entreprise, nous repoussons constamment les limites de ce qui est possible dans l'événementiel.</p>
                    <p>Enfin, notre engagement ne s'arrête pas à la fin de l'événement. Notre analyse post-conférence pour un événement international a conduit à une amélioration de 30% de la satisfaction des participants pour l'édition suivante, illustrant notre approche data-driven et notre volonté d'amélioration continue.</p>
                    <p>Choisir EVENTLYTIC, c'est opter pour un partenaire qui transforme vos idées en réalités spectaculaires, créant des moments inoubliables et des impacts durables. Découvrez comment nous pouvons faire de votre prochain événement un succès retentissant.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
       
        const trav_closer = document.querySelector('.close-trav-btn');
        const trav_frame = document.querySelector('.btm-trav-frame');
        const trav_opener = document.querySelector('.opner-trav');
      
        trav_closer.addEventListener('click', () => {
            console.log(trav_opener);
            trav_frame.classList.add('close');
        });
        trav_opener.addEventListener('click', () => {
            console.log(trav_opener);
            trav_frame.classList.toggle('close');
        });
        document.addEventListener('click', (event) => {
    // Vérifie si le clic est à l'extérieur de la `btm-frame` et du bouton `opener`
    if (!trav_frame.contains(event.target) && !trav_opener.contains(event.target) && !trav_closer.contains(event.target)) {
        trav_frame.classList.add('close');
    }
});
    </script>
  
