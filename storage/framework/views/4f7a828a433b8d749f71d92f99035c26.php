<?php
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
?>

<section class="services-provided-section py-5">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <h2 class="text-center underline-green title-color">Les villes les plus visitées</h2>
        </div>
        <div class="row text-center g-2">
            <?php $__currentLoopData = $cities; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $city): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-3 mb-2">
                    <?php if (isset($component)) { $__componentOriginala06733426251a6eb0d1dd20622ac32e7 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginala06733426251a6eb0d1dd20622ac32e7 = $attributes; } ?>
<?php $component = App\View\Components\CountryCard::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('country-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\CountryCard::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['icon' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($city['icon']),'country' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($city['city']),'spectateurs' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($city['spectateurs'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginala06733426251a6eb0d1dd20622ac32e7)): ?>
<?php $attributes = $__attributesOriginala06733426251a6eb0d1dd20622ac32e7; ?>
<?php unset($__attributesOriginala06733426251a6eb0d1dd20622ac32e7); ?>
<?php endif; ?>
<?php if (isset($__componentOriginala06733426251a6eb0d1dd20622ac32e7)): ?>
<?php $component = $__componentOriginala06733426251a6eb0d1dd20622ac32e7; ?>
<?php unset($__componentOriginala06733426251a6eb0d1dd20622ac32e7); ?>
<?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section>
<?php /**PATH C:\projects\event_management\event\resources\views/layouts/city-famous.blade.php ENDPATH**/ ?>