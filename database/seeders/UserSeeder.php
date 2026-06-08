<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userData =  [
            [
                'name' => 'Nama Blogger',
                'phone' => '082233445577',
                'role' => 'blogger',
                'email' => 'blogger@example.com',
                'password' => bcrypt('password'),
                'address' => 'Jl. Raya No. 1',
                'image' => null, 
            ],
        ];

        foreach ($userData as $data) {
            User::create($data);
        }
    }
}
