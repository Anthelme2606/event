<style>
        .mode-toggle {
            width: 200px;
            height: 60px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            font-size: 20px;
            cursor: pointer;
            margin: 20px auto;
        }
        .day-mode {
            background-color: rgb(21,2,21);
            color: white;
        }
        .night-mode {
            background-color: var(--background-body);
            color: #fff;
        }
        .mode-icon {
            font-size: 30px;
        }
        .our-mode{
            position:fixed;
            right:0;
            top:50%;
            transform: translateY(-50%);
            transform: translateX(22%);
            

        }
    </style>
</head>


<div class="container text-center mt-5 our-mode">
    <div class="mode-toggle day-mode">
        <span class="mode night-mode">MODE BARBIE</span>
        <span class="mode-icon">&#9790;</span>
    </div>
    {{-- <div class="mode-toggle night-mode">
        <span class="mode-icon">&#9790;</span>
        <span>NIGHT MODE</span>
    </div> --}}
</div>
<script>
    document.querySelector('.mode-toggle').addEventListener('click', (ev) => {
        let modeToggle = ev.currentTarget;
        let modeText = modeToggle.querySelector('span:first-child');
        let modeIcon = modeToggle.querySelector('.mode-icon');
        let body=document.body;
        
        modeToggle.classList.toggle('night-mode');
        modeToggle.classList.toggle('day-mode');

        if (modeToggle.classList.contains('night-mode')) {
            modeText.textContent = "MODE BARBIE";
            modeIcon.innerHTML = "&#9790;"; // Moon icon
            modeIcon.style.color='#fff';
            body.style.setProperty('--background-body','rgb(46,13,40)');
        } else {
            modeText.textContent = "MODE CLAIR";
            modeIcon.innerHTML = "&#9728;"; // Sun icon
            modeIcon.style.color='#fee';
            body.style.setProperty('--background-body','rgb(243,242,242)');
        }
    });
</script>

