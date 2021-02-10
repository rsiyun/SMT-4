<?php

namespace Database\Seeders;

use App\Models\Pelanggan;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class PelangganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            //
            $data = [
                'pelanggan' => $faker->name,
                'alamat' => $faker->address,
                'telp' => $faker->phoneNumber
            ];
            Pelanggan::create($data);
        }
    }
}
