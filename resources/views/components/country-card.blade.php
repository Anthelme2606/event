<link rel="stylesheet" href="{{asset('assets/components/css/cards.css')}}">
@props(['icon' => null, 'country' => null,'spectateurs'=>null])

<a href="" class="card-link">
  <div class="card p-4 m-1 h-100 card-style">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class=" d-flex justify-content-center align-items-center ev-logo">
        <span class="flag-icon  {{ $icon }} text-center me-2"></span>
      </div>
      <div class="title">
        <h4 class="mb-0">{{ $country }}</h4>
      </div>
    </div>
    <div class="card-body">
        <p>Spectateurs: {{ number_format($spectateurs) }}</p>
    </div>
  </div>
</a>
