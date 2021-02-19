<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Provider\bg_BG\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function register(Request $request)
    {
        // Validation
        $this->validate($request, [
            'email' => 'required|unique:users',
        ]);
        $token = Str::random(40);
        $data = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'level' => 'pelanggan',
            'api_token' => $token,
            'status' => '1',
            'relasi' => $request->input('email')
        ];
        User::create($data);
        return response()->json($data);
    }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::where('email', $email)->first();
        if ($user->password === $password) {
            $token = Str::random(40);

            $user->update([
                'api_token' => $token
            ]);
            return response()->json([
                'pesan' => 'Login Berhasil',
                'token' => $token,
                'data' => $user
            ]);
        } else {
            return response()->json([
                'pesan' => 'Login Gagal',
                'data' => ''
            ]);
        }
    }

    //
}
