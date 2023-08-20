<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Requests\ChangePasswordRequest;

class AuthController extends Controller
{
    use HttpResponses;

    public function register(RegisterUserRequest $request){
       
        $request->validated($request->all());   

        $user = User::create([
            'fname'=>$request->fname,
            'lname'=>$request->lname,
            'mbno'=>$request->mbno,
            'address'=>$request->address,
            'email'=>$request->email,
            'password'=> Hash::make($request->password),
        ]);


        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API token of' . $user->lname)->plainTextToken
        ]);
    }

    public function login(LoginUserRequest $request){

        $request->validated($request->all());  
        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return $this->error('','Credential do not match', 401);
        }

        $user = User::where('email', $request->email)->first();
        
        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('API token of' . $user->name)->plainTextToken
        ]);
    }

     // Function to find logged user
     public function logged_user(){
        $logged_user = auth()->user();

        return $this->success([
            'user' => $logged_user,
            'message' => 'logged user'
        ]);
    }
    

     // Function to change password of user
     public function change_password(ChangePasswordRequest $request){
        
        $request->validated([
            'password' => 'required|confirmed',
        ]);

        $user = auth()->user();
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'Password changed successfully',
        ]);
    }


    public function logout(){
        
        Auth::user()->currentAccessToken()->delete();

        return $this->success([
            'message'=>'You have been successfuly logged out and your token has been deleted'
        ]);
    }



    public function forgotPassword(Request $request){

        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return $this->error('', 'Invalid email. Plaese Try again', 404);
        }

        $token = Str::random(60);

        DB::table('password_resets')->updateOrInsert(
            ['email' => $request->email],
            ['email' => $request->email, 'token' => $token]
        );

        return $this->success([
            'message' => 'Password reset token generated',
            'token' => $token,
        ]);
    }

    public function resetPassword(Request $request){

        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $resetRecord = DB::table('password_resets')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$resetRecord) {
            return $this->error('', 'Invalid reset token or emal!', 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return $this->error('', 'Invalid email. Plaese Try again', 404);
        }

        $user->forceFill([
            'password' => Hash::make($request->password),
        ])->setRememberToken(Str::random(60));

        $user->save();

        DB::table('password_resets')
            ->where('email', $request->email)
            ->delete();

        return $this->success([
            'message' => 'Password reset successfully',
        ]);
    }

    public function getAllRegisterdUsers(){

        $registeredUser = User::get();
        return $this->success([
            'registeredUser' => $registeredUser
        ]);
    }

    public function getAllRegisteredUsersWithApplications($userId) {
        $user = User::with('application')->find($userId);
    
        if (!$user) {
            return $this->error('', 'User not found', 404);
        }
    
        return $this->success([
            'user' => $user
        ]);
    }
    

    public function deleteUser($id) {
        $user = User::find($id);

        if (!$user) {
            return $this->error('', 'User not found', 404);
        }

        if ($user->delete()) {
            return $this->success(['message' => 'User deleted successfully']);
        } else {
            return $this->error('', 'Failed to delete user', 500);
        }
    }

}
