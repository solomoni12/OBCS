<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApplicationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('password/forgot', [AuthController::class, 'forgotPassword']);
Route::post('password/reset', [AuthController::class, 'resetPassword'])->name('password.reset');

// protected routes
Route::group(['middleware' => ['auth:sanctum']], function (){
    Route::get('/logged', [AuthController::class, 'logged_user']);
    Route::post('/changepassword', [AuthController::class, 'change_password']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('/application',ApplicationController::class);
    // Route::get('/application/verified', [ApplicationController::class, 'getVerifiedApplications']);
    Route::get('/applications/verified', [ApplicationController::class, 'getVerifiedApplications']);
    Route::get('/applications/all_verified', [ApplicationController::class, 'getVerifiedApplications']);

    

});

Route::get('/applications/verified_application', [ApplicationController::class, 'getAllVerifiedApplications']);
Route::get('/applications/new_application', [ApplicationController::class, 'getNewApplications']);
Route::get('/applications/rejected_application', [ApplicationController::class, 'getRejectedApplications']);
Route::get('/applications/all_application', [ApplicationController::class, 'getAllApplications']);
Route::put('applications/update-by-applicationId/{applicationId}', [ApplicationController::class, 'updateApplicationByApplicationId']);
