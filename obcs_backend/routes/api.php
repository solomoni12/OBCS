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
    Route::get('/applications',[ApplicationController::class,'index']);
    Route::post('/applications',[ApplicationController::class,'store']);
    // Route::get('/application/verified', [ApplicationController::class, 'getVerifiedApplications']);
    Route::get('/applications/verified', [ApplicationController::class, 'getVerifiedApplications']);
    Route::get('/applications/all_verified', [ApplicationController::class, 'getVerifiedApplications']);
    Route::put('/user/{userId}', [AuthController::class, 'updateUser'])->name('user.update');

    

});

Route::get('/applications/verified_application', [ApplicationController::class, 'getAllVerifiedApplications']);
Route::get('/applications/new_application', [ApplicationController::class, 'getNewApplications']);
Route::get('/applications/rejected_application', [ApplicationController::class, 'getRejectedApplications']);
Route::get('/applications/all_application', [ApplicationController::class, 'getAllApplications']);
Route::put('applications/update-by-applicationId/{applicationId}', [ApplicationController::class, 'updateApplicationByApplicationId']);
Route::get('applications/by-applicationId/{applicationId}', [ApplicationController::class,'getAllApplicationsByApplicationId']);
Route::resource('/application',ApplicationController::class);
Route::get('/registered_user',[AuthController::class,'getAllRegisterdUsers']);
Route::delete('/users/{id}', [AuthController::class,'deleteUser']);
Route::get('/users/{id}/applications', [AuthController::class,'getAllRegisteredUsersWithApplications']);
Route::get('/applications/{applicationId}', [ApplicationController::class, 'getApplicationsByApplicationId']);
Route::post('applications/application-date-range', [ApplicationController::class,'getApplicationsByDateRange']);
