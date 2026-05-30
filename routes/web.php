<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['web'])->group(function() {
    Route::get('/', function () {
        return Inertia::render('Pages/Landing/Home');
    });
    Route::get('/about', function () {
        return Inertia::render('Pages/Landing/About');
    });
    Route::get('/service', function () {
        return Inertia::render('Pages/Landing/Service');
    });
    Route::get('/catalog', function () {
        return Inertia::render('Pages/Landing/Catalog');
    });
    Route::get('/outlet', function () {
        return Inertia::render('Pages/Landing/Outlet');
    });
    Route::get('/blog', function () {
        return Inertia::render('Pages/Landing/Blog');
    });
    Route::get('/contact', function () {
        return Inertia::render('Pages/Landing/Contact');
    });
});