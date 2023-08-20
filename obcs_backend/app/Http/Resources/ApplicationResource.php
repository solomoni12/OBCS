<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'attributes' => [
                // 'id'=> $this->id,
                'applicationId'=> $this->applicationId,
                'full_name' => $this->full_name,
                'name_of_mother' => $this->name_of_mother,
                'name_of_father' => $this->name_of_father,
                'place_of_birth' =>$this->place_of_birth,
                'status' => $this->status,
                'remark' => $this->remark,
                'permanent_address' => $this->permanent_address,
                'postal_address' => $this->postal_address,
                'mbno' => $this->mbno,
                'email' => $this->email,
                'date_of_birth' => $this->date_of_birth,
                'gender' => $this->gender,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships'=>[
                'id' => (string)$this->user->id,
                'user name' => $this->user->lname,
                'user email'=> $this->user->email
            ]
        ];
    }
}
