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


            
   
    <div class="dashboard">
        <div class="dashboard-container">
            

    <div class="container-fluid p-4 mt-4">
        <h1 class="text-orange mb-4">Tableau de bord de gestion d'événements</h1>
        
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h6 class="card-subtitle text-muted">Total Utilisateurs</h6>
                            <i class="bi bi-people text-orange"></i>
                        </div>
                        <h2 class="card-title">1234</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h6 class="card-subtitle text-muted">Événements à venir</h6>
                            <i class="bi bi-calendar-event text-orange"></i>
                        </div>
                        <h2 class="card-title">15</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h6 class="card-subtitle text-muted">Événements passés</h6>
                            <i class="bi bi-calendar-check text-orange"></i>
                        </div>
                        <h2 class="card-title">42</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h6 class="card-subtitle text-muted">Événements non validés</h6>
                            <i class="bi bi-calendar-x text-orange"></i>
                        </div>
                        <h2 class="card-title">7</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 mb-4">
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header">
                        <h5 class="card-title text-orange">Statistiques des événements</h5>
                    </div>
                    <div class="card-body">
                        <canvas id="eventsChart" width="400" height="200"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header h-100">
                        <h5 class="card-title text-orange">Calendrier des événements</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-wrap">
                            <div class="calendar-day text-center py-1"><span class="date">Dim</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Lun</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Mar</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Mer</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Jeu</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Ven</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">Sam</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">1</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">2</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">3</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">4</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">5</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">6</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">7</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">8</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">9</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">10</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">11</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">12</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">13</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">14</span></div>
                            <div class="calendar-day has-event text-center py-1">
                                <span class="date">15</span>
                                <div class="event">Conférence Tech</div>
                            </div>
                            <div class="calendar-day text-center py-1"><span class="date">16</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">17</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">18</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">19</span></div>
                            <div class="calendar-day has-event text-center py-1">
                                <span class="date">20</span>
                                <div class="event">Meetup Développeurs</div>
                            </div>
                            <div class="calendar-day text-center py-1"><span class="date">21</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">22</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">23</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">24</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">25</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">26</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">27</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">28</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">29</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">30</span></div>
                            <div class="calendar-day text-center py-1"><span class="date">31</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="text-orange">Événements à venir</h2>
            <button class="btn btn-orange"><i class="bi bi-plus-circle me-2"></i>Créer un événement</button>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nom de l'événement</th>
                                <th>Date</th>
                                <th>Organisateur</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Conférence Tech</td>
                                <td>2023-07-15</td>
                                <td>John Doe</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-orange me-2"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-orange"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Hackathon</td>
                                <td>2023-08-01</td>
                                <td>Jane Smith</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-orange me-2"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-orange"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Atelier Design</td>
                                <td>2023-08-15</td>
                                <td>Bob Johnson</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-orange me-2"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-sm btn-outline-orange"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <h2 class="text-orange mb-4">Liste des utilisateurs</h2>

        <div class="card mb-4">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alice Cooper</td>
                                <td>alice@example.com</td>
                            </tr>
                            <tr>
                                <td>Bob Marley</td>
                                <td>bob@example.com</td>
                            </tr>
                            <tr>
                                <td>Charlie Chaplin</td>
                                <td>charlie@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <h2 class="text-orange mb-4">Demandes de nouvelles catégories</h2>

        <div class="card mb-4">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Catégorie</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>David Bowie</td>
                                <td>david@example.com</td>
                                <td>Musique</td>
                                <td>Événements musicaux en live</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-success me-2"><i class="bi bi-check"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-x"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Emma Stone</td>
                                <td>emma@example.com</td>
                                <td>Cinéma</td>
                                <td>Projections de films indépendants</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-success me-2"><i class="bi bi-check"></i></button>
                                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-x"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <h2 class="text-orange mb-4">Commentaires récents</h2>

        <div class="card h-100">
            <div class="card-body">
                <ul class="list-unstyled">
                    <li class="mb-3 pb-3 border-bottom">
                        <div class="d-flex">
                            <i class="bi bi-chat-square-text text-orange me-2 mt-1"></i>
                            <div>
                                <p class="mb-0 fw-bold">Anthelme sur Conférence Tech</p>
                                <p class="mb-0">Très instructif !</p>
                                <small class="text-muted">2023-07-16</small>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3 pb-3 border-bottom">
                        <div class="d-flex">
                            <i class="bi bi-chat-square-text text-orange me-2 mt-1"></i>
                            <div>
                                <p class="mb-0 fw-bold">Innes sur Hackathon</p>
                                <p class="mb-0">Super ambiance !</p>
                                <small class="text-muted">2023-08-02</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex">
                            <i class="bi bi-chat-square-text text-orange me-2 mt-1"></i>
                            <div>
                                <p class="mb-0 fw-bold">Achille sur Atelier Design</p>
                                <p class="mb-0">J'ai beaucoup appris.</p>
                                <small class="text-muted">2023-08-16</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

   

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        
        var ctx = document.getElementById('eventsChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
                datasets: [{
                    label: 'Nombre d\'événements',
                    data: [4, 3, 2, 6, 8, 5],
                    backgroundColor: '#f97316',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
    {{-- <script src="{{ asset('assets/js/container.js') }}"></script> --}}
@endsection
