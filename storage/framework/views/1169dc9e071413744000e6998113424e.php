<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo e(config('app.name')); ?> | <?php echo $__env->yieldContent('title'); ?></title>
    <?php if(Route::is('welcome') || Route::is('login') || Route::is('signup')): ?>
    <?php echo $__env->make('layouts.head-b-4', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php else: ?>
    <?php echo $__env->make('layouts.head-b5', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endif; ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css@4.1.7/css/flag-icons.min.css"
        integrity="sha256-8qup5VqQKcE2cLILwBU2zpXUkT+eW5tI1ZLzJjh/TdY=" crossorigin="anonymous">
   
        <link rel="stylesheet" href="<?php echo e(asset('assets/css/index.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/style.css')); ?>">
    
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
</head>

<body>
  
    <?php if (isset($component)) { $__componentOriginal9b0da1ce4a7273760fcbfd5667774437 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9b0da1ce4a7273760fcbfd5667774437 = $attributes; } ?>
<?php $component = App\View\Components\Loader::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('loader'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\Loader::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9b0da1ce4a7273760fcbfd5667774437)): ?>
<?php $attributes = $__attributesOriginal9b0da1ce4a7273760fcbfd5667774437; ?>
<?php unset($__attributesOriginal9b0da1ce4a7273760fcbfd5667774437); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9b0da1ce4a7273760fcbfd5667774437)): ?>
<?php $component = $__componentOriginal9b0da1ce4a7273760fcbfd5667774437; ?>
<?php unset($__componentOriginal9b0da1ce4a7273760fcbfd5667774437); ?>
<?php endif; ?>
    <div class="contents">
        <?php echo $__env->yieldContent('navbar'); ?>
        <?php echo $__env->yieldContent('sidebar'); ?>
        <?php echo $__env->yieldContent('nav-brand'); ?>
        <?php echo $__env->yieldContent('contents'); ?>
        <?php if (isset($component)) { $__componentOriginalcf93f3ed30076ee062bd95434e5b07b9 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalcf93f3ed30076ee062bd95434e5b07b9 = $attributes; } ?>
<?php $component = App\View\Components\Toastr::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('toastr'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\Toastr::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalcf93f3ed30076ee062bd95434e5b07b9)): ?>
<?php $attributes = $__attributesOriginalcf93f3ed30076ee062bd95434e5b07b9; ?>
<?php unset($__attributesOriginalcf93f3ed30076ee062bd95434e5b07b9); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalcf93f3ed30076ee062bd95434e5b07b9)): ?>
<?php $component = $__componentOriginalcf93f3ed30076ee062bd95434e5b07b9; ?>
<?php unset($__componentOriginalcf93f3ed30076ee062bd95434e5b07b9); ?>
<?php endif; ?>
    </div>
    <script src="<?php echo e(asset('assets/js/script.js')); ?>"></script>
    <?php if(Route::is('welcome') || Route::is('login') || Route::is('signup')): ?>
    <?php echo $__env->make('layouts.script-b-4', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php else: ?>
    <?php echo $__env->make('layouts.script-b-5', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endif; ?>
  
</body>

</html>
<?php /**PATH C:\projects\event_management\event\resources\views\layouts\setup.blade.php ENDPATH**/ ?>