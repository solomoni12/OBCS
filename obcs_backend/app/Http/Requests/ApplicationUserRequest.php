<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplicationUserRequest extends FormRequest
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
            'full_name' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z\s]+$/'],
            'name_of_mother' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z\s]+$/'],
            'name_of_father' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z\s]+$/'],
            'place_of_birth' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z\s]+$/'],
            // 'remark' => ['required', 'string', 'max:255', 'regex:/^[A-Za-z]+$/'],
            'permanent_address' => ['required', 'string', 'max:255'],
            'postal_address' => ['required', 'string', 'max:255'],
            'mbno' => ['required', 'string', 'digits:10', 'regex:/^0\d{9}$/'],
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'date_of_birth' => 'required|date',
            'gender' => ['required', 'string', 'max:6', 'regex:/^(male|female)$/i'],
        ];
    }
}
