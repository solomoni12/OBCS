<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Application extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'applicationId',
        'date_of_birth',
        'full_name',
        'gender',
        'name_of_father',
        'place_of_birth',
        'name_of_mother',
        'permanent_address',
        'postal_address',
        'mbno',
        'email',
        'status',
        'remark'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
