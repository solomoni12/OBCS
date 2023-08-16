<?php

namespace App\Traits;

trait HttpResponses{
    
    protected function success($data, $message = null, $code = 200){

        return response()->json([
            'status'=> 1,
            'message'=>'successful',
            'data'=>$data
        ], $code);
    }

    protected function error($data, $message = null, $code){

        return response()->json([
            'status'=>'error has occured',
            'message'=>$message,
            'data'=>$data
        ], $code);
    }
}