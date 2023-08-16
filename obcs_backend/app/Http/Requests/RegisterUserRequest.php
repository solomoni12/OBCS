<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'fname' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z]+$/'],
            'lname' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z]+$/'],
            'address' => ['required', 'string', 'max:255'],
            'mbno' => ['required', 'string', 'digits:10', 'regex:/^0\d{9}$/'],
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()]
        ];
    }
}
