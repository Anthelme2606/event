<div class="sidebar">
    <aside class="my-side">
        <ul class="side-ul">
            <li class="mt-0  toggler visiblity  mb-4 user-type">
             <span class="fs-6">Admin</span>
            </li>
            <li class=" toggler visiblity  mb-4 navigation">
                <span class="fs-3">Navigation</span>
               </li>
            <li class=" link-item mb-4">
                <a href="<?php echo e(route('dashboard')); ?>" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-view-dashboard"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">Dashboard</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-calendar-plus"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">Créer un évènement</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-magnify"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">Trouver un évènement</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-calendar-check"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">Mes évènements</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-video"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class=""> évènement en cours ..</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-share-variant"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">Partager une information</span>

                    </div>
                </a>
            </li>
            <li class=" link-item mb-4">
                <a href="#" class="d-flex align-items-center">
                    <div class="side-icon me-2">
                        <span class="mdi mdi-help-circle"></span>
                    </div>
                    <div class="side-text toggler visiblity">
                        <span class="">FAQ</span>

                    </div>
                </a>
            </li>


        </ul>

    </aside>
</div>
<style>
   

    .active-link{
        background:var(--btn-link);
        border-left:2px solid rgb(43, 238, 43);
        border-radius:4px;
    }
   
   .user-type{
    left:0;
    text-align:center;
        background:rgb(227, 230, 221);
        border-radius:10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        padding: 3px 1px; 
        color:var(--black);
    }
    .side-ul li {
        margin-top: 5px;

        margin-left: -25px;
    }
    .side-text  {
        font-size:14px;
    color: rgb(243, 230, 230);
    transition: color 0.3s ease; 
}

a {
    text-decoration: none; /* Supprimer la décoration de lien par défaut */
    color: inherit; /* Inhérer la couleur du parent */
}
li a:hover{}







    .side-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--round-bg);
        color: var(--gold);
        display: flex;
        justify-content: center;
        align-items: center;

    }
  

    ul li {
        list-style: none;
        text-decoration: none;
    }

    li a {
        text-decoration: none;
    }

    aside {
        top: 0;
        left: 0;
        z-index: 999;
        position: fixed;
        width: 20%;
        height: 100vh;
        background: linear-gradient(to right, rgb(45, 45, 45), rgb(35, 13, 14));
        transition: all 0.4s ease;
        border-right: 1px solid rgb(38,12,25);
        box-shadow:0 4px 8px rgba(0,0,0,0.2);
        /* border-top: 1px solid rgb(155, 176, 155); */
        overflow-y: auto;
        margin-top: 40px;


    }
</style>
<script src="<?php echo e(asset('assets/components/js/sidebar.js')); ?>"></script>
<?php /**PATH C:\projects\event_management\event\resources\views\components\sidebar.blade.php ENDPATH**/ ?>