 <?php
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
?>

<section class="services-provided-section py-5">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <h2 class="text-center underline-green title-color">Nos Événements de la semaine</h2>
        </div>
        <div class="row text-center g-2">
            <?php $__currentLoopData = $galeries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $carte): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-3 mb-2">
                    <?php if (isset($component)) { $__componentOriginal2d1c7cddde1569efe7658a13bb67936b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal2d1c7cddde1569efe7658a13bb67936b = $attributes; } ?>
<?php $component = App\View\Components\Galerie::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('galerie'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\Galerie::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['image' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($carte['image']),'description' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($carte['description']),'date' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($carte['date'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal2d1c7cddde1569efe7658a13bb67936b)): ?>
<?php $attributes = $__attributesOriginal2d1c7cddde1569efe7658a13bb67936b; ?>
<?php unset($__attributesOriginal2d1c7cddde1569efe7658a13bb67936b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal2d1c7cddde1569efe7658a13bb67936b)): ?>
<?php $component = $__componentOriginal2d1c7cddde1569efe7658a13bb67936b; ?>
<?php unset($__componentOriginal2d1c7cddde1569efe7658a13bb67936b); ?>
<?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section> 
<?php /**PATH C:\projects\event_management\event\resources\views/layouts/galerie.blade.php ENDPATH**/ ?>