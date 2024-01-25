import GoogleIcon from "icons/brand-google-filled.tsx";

export default function Login() {
  return (
    <>
      <header class="w-screen p-4 shadow fixed flex gap-4">
        <a href="/" class="font-titan-one text-xl uppercase">Risposta</a>
      </header>
      <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold">Welcome Back!</h1>
          <p>We missed you. Sign in to continue.</p>
        </div>
        <a
          href="/api/auth/login"
          class="px-4 py-2 border rounded flex gap-4 hover:bg-gray-200 transition-all"
        >
          <GoogleIcon /> Continue with Google
        </a>
      </div>
    </>
  );
}
