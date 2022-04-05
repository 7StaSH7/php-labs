<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getCustomers()
    {
        $users = User::all()->toJson(JSON_PRETTY_PRINT);
        return response($users, 200);
    }
}
