<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ApplicationResource;
use App\Http\Requests\ApplicationUserRequest;
use App\Http\Controllers\ApplicationController;

class ApplicationController extends Controller
{

    use HttpResponses;


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $application = Application::where('user_id',Auth::user()->id)->get();
        return $this->success([
            'user' => $application
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApplicationUserRequest $request)
    {
        $request->validated($request->all());
        // generate 8 integer
        $applicationId = mt_rand(10000000, 99999999); 

        // return  $applicationId;

        $application = Application::create([
            'user_id' => Auth::user()->id,
            'applicationId'=>$applicationId,
            'full_name' => $request->full_name,
            'name_of_mother' => $request->name_of_mother,
            'name_of_father' => $request->name_of_father,
            'place_of_birth' => $request->place_of_birth,
            'permanent_address' => $request->permanent_address,
            'postal_address' => $request->postal_address,
            'mbno' => $request->mbno,
            'email' => $request->email, 
            'date_of_birth' => $request->date_of_birth,
            'gender' => $request->gender
        ]);
        return new ApplicationResource($application);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        return $this->isNotAuthorized($application) ? $this->isNotAuthorized($application) : new ApplicationResource($application);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        if(Auth::user()->id !== $application->user_id){
            return $this->error('','You are not Authorized to make request',403);
        }
        
        $application->update($request->all());

        return new ApplicationResource($application);
    }

    public function updateApplicationByApplicationId(Request $request, $applicationId)
{
    $application = Application::where('applicationId', $applicationId)->first();

    // if (!$application) {
    //     return $this->error('Application not found', 404);
    // }

    // $this->isNotAuthorized($application);

    $application->update($request->all());

    return new ApplicationResource($application);
}



    // verified data 
    public function getVerifiedApplications(){

        $verifiedApplications = Application::where('user_id', Auth::user()->id)
                                        ->where('status', 'verified')
                                        ->get();
        return $this->success([
            'verified_applications' => $verifiedApplications
        ]);
}
// only for admin
    public function getAllVerifiedApplications(){

        $verifiedApplications = Application::where('status', 'verified')
                                        ->get();
        return $this->success([
            'verified_applications' => $verifiedApplications
        ]);
    }
    public function getAllApplications(){

        $verifiedApplications = Application::get();
        return $this->success([
            'verified_applications' => $verifiedApplications
        ]);
    }

    public function getRejectedApplications(){

        $verifiedApplications = Application::where('status', 'rejected')
                                        ->get();
        return $this->success([
            'verified_applications' => $verifiedApplications
        ]);
    }
    public function getNewApplications(){

        $verifiedApplications = Application::where('status', 'still pending')
                                        ->get();
        return $this->success([
            'verified_applications' => $verifiedApplications
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find the application by ID
        $application = Application::find($id);

        // Check if the application exists
        if (!$application) {
            return response()->json(['error' => 'Application not found'], 404);
        }

        // Delete the application
        $application->delete();

        return response()->json(['message' => 'Appllication deleted successfully']);
    
    }


    private function isNotAuthorized($application){
         
        if(Auth::user()->id !== $application->user_id){
            return $this->error('','You are not Authorized to make request',403);
        }
    }
}
