<link rel="stylesheet" href="{{asset('assets/components/css/cards.css?'). '?' . time() }}">
@props(['image' => null, 'description' => null, 'date' => null,'spectateurs'=>null])

@php
use Illuminate\Support\Str;
@endphp

<a href="" class="card-link">
  <div class="card p-4 m-1 h-100 card-style">
    <div class="card-header p-0 m-0 w-100">
      <div class=" w-100">
        @if($image)
          <img src="{{ $image }}" class="img-fluid">
        @endif
      </div>
    </div>
    <div class="card-body d-flex flex-column">
        @if($date)
          <span class="text-danger me-2">Date: {{ $date }}</span>
        @endif
        @if($description)
          <p class="description text-black">{{ Str::limit($description, 100) }}</p>
        @endif
    </div>
  </div>
</a>

