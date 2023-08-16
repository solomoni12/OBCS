<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->integer('applicationId');
            $table->date('date_of_birth');
            $table->string('full_name');
            $table->string('gender');
            $table->string('name_of_father');
            $table->string('place_of_birth');
            $table->string('name_of_mother');
            $table->string('permanent_address');
            $table->string('postal_address');
            $table->integer('mbno');
            $table->string('email')->unique();
            $table->string('status')->default('still pending');
            // $table->string('status');
            $table->string('remark');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
};
