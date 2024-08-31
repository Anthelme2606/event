<link rel="stylesheet" href="<?php echo e(asset('assets/components/css/cards.css')); ?>">
<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['image' => null, 'description' => null, 'date' => null,'spectateurs'=>null]));

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

foreach (array_filter((['image' => null, 'description' => null, 'date' => null,'spectateurs'=>null]), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars); ?>

<?php
use Illuminate\Support\Str;
?>

<a href="" class="card-link">
  <div class="card p-4 m-1 h-100 card-style">
    <div class="card-header p-0 m-0 w-100">
      <div class=" w-100">
        <?php if($image): ?>
          <img src="<?php echo e($image); ?>" class="img-fluid">
        <?php endif; ?>
      </div>
    </div>
    <div class="card-body d-flex flex-column">
        <?php if($date): ?>
          <span class="text-danger me-2">Date: <?php echo e($date); ?></span>
        <?php endif; ?>
        <?php if($description): ?>
          <p class="description text-black"><?php echo e(Str::limit($description, 100)); ?></p>
        <?php endif; ?>
    </div>
  </div>
</a>

<?php /**PATH C:\projects\event_management\event\resources\views/components/galerie.blade.php ENDPATH**/ ?>