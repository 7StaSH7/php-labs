<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'street' => $this->faker->streetName(),
            'house' => $this->faker->buildingNumber(),
            'floor' => $this->faker->buildingNumber(),
            'flat' => $this->faker->buildingNumber(),
            'code' => $this->faker->buildingNumber(),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}
