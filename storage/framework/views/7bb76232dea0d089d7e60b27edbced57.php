
<?php $__env->startSection('title', 'DASHBOARD'); ?>
<?php $__env->startSection('sidebar'); ?>
    <?php if (isset($component)) { $__componentOriginald31f0a1d6e85408eecaaa9471b609820 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginald31f0a1d6e85408eecaaa9471b609820 = $attributes; } ?>
<?php $component = App\View\Components\Sidebar::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('sidebar'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\Sidebar::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginald31f0a1d6e85408eecaaa9471b609820)): ?>
<?php $attributes = $__attributesOriginald31f0a1d6e85408eecaaa9471b609820; ?>
<?php unset($__attributesOriginald31f0a1d6e85408eecaaa9471b609820); ?>
<?php endif; ?>
<?php if (isset($__componentOriginald31f0a1d6e85408eecaaa9471b609820)): ?>
<?php $component = $__componentOriginald31f0a1d6e85408eecaaa9471b609820; ?>
<?php unset($__componentOriginald31f0a1d6e85408eecaaa9471b609820); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('nav-brand'); ?>
    <?php if (isset($component)) { $__componentOriginal2dd98d3e8d78705d613d4b659c0d7e4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal2dd98d3e8d78705d613d4b659c0d7e4f = $attributes; } ?>
<?php $component = App\View\Components\NavBrand::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('nav-brand'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\NavBrand::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal2dd98d3e8d78705d613d4b659c0d7e4f)): ?>
<?php $attributes = $__attributesOriginal2dd98d3e8d78705d613d4b659c0d7e4f; ?>
<?php unset($__attributesOriginal2dd98d3e8d78705d613d4b659c0d7e4f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal2dd98d3e8d78705d613d4b659c0d7e4f)): ?>
<?php $component = $__componentOriginal2dd98d3e8d78705d613d4b659c0d7e4f; ?>
<?php unset($__componentOriginal2dd98d3e8d78705d613d4b659c0d7e4f); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('contents'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/container.css')); ?>">
    <?php
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

    ?>
    <div class="dashboard">
        <div class="dashboard-container">
            <div class="row row-cols-1 row-cols-md-1 mb-1">
                <div class="col">
                    <div class="card card-info ">
                        <div class="card-body d-flex position-relative ">
                            <div class="close-btn position-absolute">&times;</div>

                            <div class=" share">
                                <img class="img-fluid" src="<?php echo e(asset('assets/images/share.png')); ?>">
                            </div>
                            <div class="info-text me-2 mx-4">
                                <span class="text-pretty">Un nouveau évènement vient d'etre crée.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 mb-1 g-1">
                <?php $__currentLoopData = $dashboardCards; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $card): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col">
                        <div class="card height-100">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div class=""> <span><?php echo e($card['value']); ?></span></div>
                                    <div class="round-50"> <span class="icon-card mdi <?php echo e($card['mdi_icon']); ?>"></span></div>

                                </div>
                                <div class="text-card desc-card d-flex justify-content-center align-items-center flex-column">
                                    <?php echo e($card['title']); ?>

                                </div>
                            </div>

                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
            <div class="mt-1 mb-1 d-flex justify-content-between">
                <span class="title">Statistiques Mensuelles</span>
                <span class="title">Calendrier</span>
            </div>
            <div class="row mb-1 g-1">

                <div class="col-md-8">
                    <div class="row row-cols-2 g-1 row-cols-md-4">
                        <?php $__currentLoopData = $stats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $stat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col">
                        
                        <div class="card height-100">
                            <div class="card-body  d-flex 
                                justify-content-center
                                flex-column
                                 align-items-center">
                                <div class="circle-50 mt-1"
                                 data-set-progress="<?php echo e($stat['percent']); ?>">
                                    <div class="progress"></div>
                                    <div class="progress-text"><?php echo e($stat['percent']); ?>%</div>
                                </div>
                                <div class="bar-100 mt-1 ">
                                    <div class="progress-b">

                                    </div>

                                </div>
                                <div class="mt-1 d-flex 
                                justify-content-center
                                flex-column
                                 align-items-center">
                                    <span class="desc-stat"><?php echo e($stat['title']); ?></span>
                                </div>
                            </div>

                        </div>
                        
                       </div>
                       <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>

                </div>
                

            </div>
        </div>
    </div>
    <script src="<?php echo e(asset('assets/js/container.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.setup', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\projects\event_management\event\resources\views/layouts/dashboard.blade.php ENDPATH**/ ?>