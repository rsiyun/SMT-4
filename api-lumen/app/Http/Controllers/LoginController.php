<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        $data = User::where('level', '<>', 'pelanggan')->get();
        return response()->json($data);
    }
    public function register(Request $request)
    {
        // Validation
        $this->validate($request, [
            'email' => 'required|unique:users',
        ]);
        $token = Str::random(40);
        $data = [
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'level' => $request->input('level'),
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
        if (isset($user)) {
            if ($user->status === 1) {
                if (Hash::check($password, $user->password)) {
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
            } else {
                return response()->json([
                    'pesan' => 'Login Gagal',
                    'data' => ''
                ]);
            }
        } else {
            return response()->json([
                'pesan' => 'Login Gagal',
                'data' => ''
            ]);
        }
    }
    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->update($request->all());
        if ($user) {
            return response()->json([
                'pesan' => "Data sudah di ubah !"
            ]);
        }
    }

    //
}
