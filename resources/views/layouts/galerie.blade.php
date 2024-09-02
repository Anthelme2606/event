 @php
$galeries = [
    [
        'image' => asset('assets/images/event.png'),
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
        'date' => '2024-08-01',
    ],
    [
        'image' => asset('assets/images/event.png'),
        'description' => 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus.',
        'date' => '2024-08-02',
    ],
    [
        'image' => asset('assets/images/event.png'),
        'description' => 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        'date' => '2024-08-03',
    ],
    [
        'image' => asset('assets/images/event.png'),
        'description' => 'Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.',
        'date' => '2024-08-04',
],
];
@endphp

<section class="services-provided-section py-5">
    <div class="px-2">
        <div class="row d-flex justify-content-center align-items-center">
            <h2 class="text-center underline-green title-color">Nos Événements de la semaine</h2>
        </div>
        <div class="row text-center g-2">
            @foreach($galeries as $carte)
                <div class="col-md-3 mb-2">
                    <x-galerie :image="$carte['image']" :description="$carte['description']" :date="$carte['date']"/>
                </div>
            @endforeach
        </div>
    </div>
</section> 
