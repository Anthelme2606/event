<?php
  $events = [
      [
          'icon' => 'mdi-microphone',
          'title' => 'Musique',
          'description' => 'Profitez d une expérience musicale inoubliable.'
      ],
      [
          'icon' => 'mdi-gamepad-variant',
          'title' => 'Jeux',
          'description' => 'Découvrez les derniers jeux et divertissements.'
      ],
      [
          'icon' => 'mdi-glass-cocktail',
          'title' => 'Vie nocturne',
          'description' => 'Vivez des soirées inoubliables.'
      ],
      [
          'icon' => 'mdi-party-popper',
          'title' => 'Fêtes',
          'description' => 'Célébrez avec style et amusement.'
      ],
      [
          'icon' => 'mdi-heart',
          'title' => 'Rencontre',
          'description' => 'Rencontrez des personnes formidables.'
      ],
      [
          'icon' => 'mdi-bike',
          'title' => 'Loisirs',
          'description' => 'Participez à des activités de loisirs passionnantes.'
      ],
      [
          'icon' => 'mdi-briefcase',
          'title' => 'Affaires',
          'description' => 'Boostez votre carrière avec nos événements d\'affaires.'
      ],
      [
          'icon' => 'mdi-silverware-fork-knife',
          'title' => 'Gastronomie',
          'description' => 'Dégustez des plats délicieux et variés.'
      ]
  ];
?>

<section class="services-section py-5">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center mb-2">
        <h3 class="text-center title-color underline-green">Categories d'évenements</h3>
      </div>
      
      <div class="row text-center g-1">
        <?php $__currentLoopData = $events; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $event): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-md-4 mb-4">
          <?php if (isset($component)) { $__componentOriginale48bfee2ca33fb4b712d01177cf76909 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale48bfee2ca33fb4b712d01177cf76909 = $attributes; } ?>
<?php $component = App\View\Components\EventCard::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('event-card'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\EventCard::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['icon' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($event['icon']),'title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($event['title']),'description' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($event['description'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale48bfee2ca33fb4b712d01177cf76909)): ?>
<?php $attributes = $__attributesOriginale48bfee2ca33fb4b712d01177cf76909; ?>
<?php unset($__attributesOriginale48bfee2ca33fb4b712d01177cf76909); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale48bfee2ca33fb4b712d01177cf76909)): ?>
<?php $component = $__componentOriginale48bfee2ca33fb4b712d01177cf76909; ?>
<?php unset($__componentOriginale48bfee2ca33fb4b712d01177cf76909); ?>
<?php endif; ?>
        </div>
      
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      
        
      </div>
    </div>
  </section>
  <?php /**PATH C:\projects\event_management\event\resources\views\layouts\services.blade.php ENDPATH**/ ?>