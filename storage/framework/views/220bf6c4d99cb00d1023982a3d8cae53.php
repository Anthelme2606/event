<link rel="stylesheet" href="<?php echo e(asset('assets/components/css/cards.css')); ?>">
<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['icon' => null, 'country' => null,'spectateurs'=>null]));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter((['icon' => null, 'country' => null,'spectateurs'=>null]), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars); ?>

<a href="" class="card-link">
  <div class="card p-4 m-1 h-100 card-style">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class=" d-flex justify-content-center align-items-center ev-logo">
        <span class="flag-icon  <?php echo e($icon); ?> text-center me-2"></span>
      </div>
      <div class="title">
        <h4 class="mb-0"><?php echo e($country); ?></h4>
      </div>
    </div>
    <div class="card-body">
        <p>Spectateurs: <?php echo e(number_format($spectateurs)); ?></p>
    </div>
  </div>
</a>
<?php /**PATH C:\projects\event_management\event\resources\views\components\country-card.blade.php ENDPATH**/ ?>