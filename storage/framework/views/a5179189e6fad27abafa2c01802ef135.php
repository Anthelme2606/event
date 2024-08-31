<div class="nav-brand">
    <nav>
        <ul class="d-flex justify-content-between align-items-center">
            <li class="d-flex align-items-center">
                <ul class="d-flex justify-content-between align-items-center m-0 p-0">
                    <li class="app-name">
                        <a href="<?php echo e(route('welcome')); ?>">Gevent</a>
                    </li>
                    <li class="mx-4 toggle-btn">
                        <button class="border-0">
                            <span class="mdi mdi-menu fw-5"></span>
                        </button>
                    </li>
                </ul>
            </li>
            <li class="position-relative avatar-container">
                <img class="img-fluid avatar" src="<?php echo e(asset('assets/images/avatar.png')); ?>" alt="Avatar">
                <div class="online position-absolute"></div>
                <div class="frame-brand position-absolute">
                    <span class="d-block mb-2 auth-user">User</span>
                    <a href="#" class="d-block mb-1 link-f">Paramètre</a>
                    <a href="#" class="d-block link-f out">Déconnecter</a>
                </div>
            </li>
        </ul>
    </nav>
</div>

<style>
    .auth-user {
    font-weight: bold;
    color: #333;
    background-color: #f5f5f5; 
    padding: 5px 10px; 
    border-radius: 20px; 
    border: 1px solid #ddd; 
    font-size: 14px; 
    text-transform: capitalize;
    display: inline-block; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
}

.auth-user:hover {
    background-color: #e0e0e0; 
    color: #000; 
}

    .link-f{
        background:var(--gray-btn);
        color:var(--white) !important;
        padding:4px 2px;
        border-radius:4px;
        font-size:14px;
        transition:background 0.3s ease ;
    }
    .link-f:hover{
        background:var(--btn-link); 
    }
    .out:hover{
        background:var(--red);
    }
    .nav-brand {
        height: 40px;
        padding: 0;
        border-bottom: 1px solid rgb(149, 153, 143);
        background:linear-gradient(to right, rgb(48, 29, 29), rgb(31, 12, 25));
        z-index: 999;
        /* background: rgb(155, 176, 155); */
        width: 100%;
    }

    .app-name {
        margin-left: -28px;
    }

    .avatar-container {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        right:5px;
    }

    .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
    }

    .online {
        width: 10px;
        height: 10px;
        background: rgb(71, 244, 71);
        border-radius: 50%;
        top: 0;
        right: 0;
    }

    .frame-brand {
        display: none;
        width: 200px;
        padding: 10px;
        background: #2e1125;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        right: 0;
        top: 30px;
        z-index: 9999;
    }

    .frame-brand a, .frame-brand span {
        color: black;
        text-decoration: none;
    }

    .avatar-container:hover .frame-brand,
    .frame-brand:hover {
        display: block;
    }

    ul li {
        list-style: none;
        color: white;
    }

    li a {
        color: white;
        text-decoration: none;
    }

    li span {
        cursor: pointer;
        padding: 4px 2px;
    }
</style>
<?php /**PATH C:\projects\event_management\event\resources\views\components\nav-brand.blade.php ENDPATH**/ ?>