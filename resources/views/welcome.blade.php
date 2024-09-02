@extends('layouts.setup')
@section('title','HOME')
@section('navbar')
<x-navbar/>
@endsection
@section('contents')
@include('layouts.hero')
@include('layouts.services')
@include('layouts.about')
@include('layouts.city-famous')
@include('layouts.galerie')

<div class="bg-body">
<x-footer/>
</div>

<!--frame opner-->
<x-frame/>
<x-frame-tr/>

@endsection
