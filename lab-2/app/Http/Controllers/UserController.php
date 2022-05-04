<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function getCustomers()
    {
        return response(User::all(), 200);
    }
    public function getCustomer($customerId)
    {
        return response(User::with(['addresses' => function ($q) use ($customerId) {
            $q->where('user_id', '=', $customerId);
            $q->orderBy('created_at', 'DESC');
        }])->findOrFail($customerId), 200);
    }
}
