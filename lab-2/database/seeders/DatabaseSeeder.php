<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Address;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->count(25)
            ->has(Address::factory()->count(3))
            ->create();

        User::factory()
            ->count(25)
            ->has(Address::factory()->count(4))
            ->create();

        User::factory()
            ->count(25)
            ->has(Address::factory()->count(5))
            ->create();
        User::factory()
            ->count(24)
            ->has(Address::factory()->count(6))
            ->create();

        User::factory()
            ->count(1)
            ->has(Address::factory()->count(10))
            ->create();
    }
}
