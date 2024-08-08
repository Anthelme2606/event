<link rel="stylesheet" href="{{asset('assets/components/css/cards.css')}}">
@props(['icon' => 'null', 'title' => 'null', 'description' => 'null'])

<a href="" class="card-link">
  <div class="card p-4 m-1 h-100 card-style">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class="ev-logo d-flex justify-content-center align-items-center round-card">
        <span class="mdi {{ $icon }} text-center icon-large-bold text-success"></span>
      </div>
      <div class="title">
        <h4 class="mb-0">{{ $title }}</h4>
      </div>
    </div>
    <div class="card-body">
      <p>{{ $description }}</p>
    </div>
  </div>
</a>
