<section class="about-section py-5">
    <div class="container">
      <div class="row d-flex justify-content-center text-white align-items-center">
        <div class="d-flex justify-content-center align-items-center text-center mb-4">
          <h3 id="loading-text" class="text-center underline-green title-color">Événement en cours</h3>
        </div>
        
      </div>
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="{{asset('assets/images/event.png')}}" alt="About Image" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h2 class="title-color">Réalisez Votre Idée d'Événement</h2>
          <p>Nous vous aidons à concrétiser vos idées d'événements grâce à nos services professionnels.</p>
          <a href="#" class="btn btn-link">En savoir plus</a>
        </div>
        
      </div>
    </div>
  </section>
  <script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const loadingText = document.getElementById('loading-text');
        let dotCount = 0;
    
        setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            loadingText.textContent = 'Événement en cours' + '.'.repeat(dotCount);
        }, 500); 
    });
    </script>
    
  