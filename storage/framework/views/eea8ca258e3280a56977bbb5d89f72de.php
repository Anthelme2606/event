
<?php $__env->startSection('title', 'Inscription'); ?>
<?php $__env->startSection('navbar'); ?>
<?php if (isset($component)) { $__componentOriginalb9eddf53444261b5c229e9d8b9f1298e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb9eddf53444261b5c229e9d8b9f1298e = $attributes; } ?>
<?php $component = App\View\Components\Navbar::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('navbar'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\Navbar::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb9eddf53444261b5c229e9d8b9f1298e)): ?>
<?php $attributes = $__attributesOriginalb9eddf53444261b5c229e9d8b9f1298e; ?>
<?php unset($__attributesOriginalb9eddf53444261b5c229e9d8b9f1298e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb9eddf53444261b5c229e9d8b9f1298e)): ?>
<?php $component = $__componentOriginalb9eddf53444261b5c229e9d8b9f1298e; ?>
<?php unset($__componentOriginalb9eddf53444261b5c229e9d8b9f1298e); ?>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('contents'); ?>
<style>
    .bg-custom-gray { background-color: rgb(243, 242, 242); }
    .bg-custom-purple { background-color: rgb(131, 39, 131); }
    .bg-custom-dark { background-color: rgb(46, 13, 40); }
    .icon-container {
        padding: 16px;
        border-radius: 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        margin-right: 15px; /* Espace entre les icônes */
    }
    .icon-custom {
        width: 24px;
        height: 24px;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
    .btn-custom {
        background-color: rgb(131, 39, 131);
        color: rgb(243, 242, 242);
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .btn-custom:hover {
        background-color: rgba(131, 39, 131, 0.9);
    }
    .form-control:focus {
        border-color: rgb(131, 39, 131);
        box-shadow: 0 0 0 0.2rem rgba(131, 39, 131, 0.25);
    }
    /* Ajout du clip-path en forme de polygone */
    .clip-path-container {
        clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
        background-color: rgba(0, 0, 0, 0.05); /* Optionnel : ajout d'une légère couleur de fond */
        padding: 20px;
        border-radius: 15px; /* Ajout de coins arrondis */
        margin-bottom: 20px; /* Espacement en bas pour une meilleure disposition */
    }
</style>

<div class="container-fluid">
    <div class="row min-vh-100">
        <div class="col-lg-6 d-flex flex-column align-items-center justify-content-center bg-custom-gray p-5">
            <!-- Ajout du clip-path à la section contenant les icônes -->
            <div class="clip-path-container d-flex justify-content-center">
                <div class="icon-container bg-custom-purple">
                    <svg class="icon-custom" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                </div>
                <div class="icon-container bg-secondary">
                    <svg class="icon-custom" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="orange" viewBox="0 0 24 24">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                    </svg>
                </div>
                <div class="icon-container bg-accent">
                    <svg class="icon-custom" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="blue" viewBox="0 0 24 24">
                        <path d="m2 2 8 8" />
                        <path d="m22 2-8 8" />
                        <ellipse cx="12" cy="9" rx="10" ry="5" />
                        <path d="M7 13.4v7.9" />
                        <path d="M12 14v8" />
                        <path d="M17 13.4v7.9" />
                        <path d="M2 9v8a10 5 0 0 0 20 0V9" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center bg-custom-dark p-5">
            <div class="w-100" style="max-width: 400px;">
                <div class="text-center mb-4">
                    <h1 class="text-light">Inscription</h1>
                    <p class="text-light">Remplissez les informations ci-dessous pour créer un compte.</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="first_name" class="text-light">Prénom</label>
                        <input type="text" id="first_name" class="form-control" placeholder="John" required>
                    </div>
                    <div class="form-group">
                        <label for="last_name" class="text-light">Nom</label>
                        <input type="text" id="last_name" class="form-control" placeholder="Doe" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="text-light">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="m@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-light">Mot de passe</label>
                        <input type="password" id="password" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="confirm_password" class="text-light">Confirmer le mot de passe</label>
                        <input type="password" id="confirm_password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-custom btn-block mt-4">S'inscrire</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.setup', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\projects\event_management\event\resources\views/authentification/signup.blade.php ENDPATH**/ ?>