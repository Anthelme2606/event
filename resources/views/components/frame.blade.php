<link rel="stylesheet" href="{{asset('assets/components/css/frame.css?'). '?' . time() }}">

 
    {{-- <button class="opner btn btn-primary">Opner</button> --}}
    <div class="btm-frame close">
        <div class="d-flex position-relative justify-content-center align-items-center flex-column">
            <button class="close-btn">
                <span class="mdi mdi-close"></span>
            </button>
            <div class="frame-container">
                <div class="services-grid">
                    <div class="service-card">
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
                    <div class="service-card">
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
                    <div class="service-card">
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
                    <div class="service-card">
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
                    <div class="service-card">
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
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        const closer = document.querySelector('.close-btn');
        const frame = document.querySelector('.btm-frame');
        const opener = document.querySelector('.opner');

        closer.addEventListener('click', () => {
            frame.classList.add('close');
        });
        opener.addEventListener('click', () => {
            frame.classList.toggle('close');
        });
        document.addEventListener('click', (event) => {
    // Vérifie si le clic est à l'extérieur de la `btm-frame` et du bouton `opener`
    if (!frame.contains(event.target) && !opener.contains(event.target) && !closer.contains(event.target)) {
        frame.classList.add('close');
    }
});
    </script>
  
