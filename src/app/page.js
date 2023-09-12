import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid place-items-center h-screen bg-teal-950">
        <div className="bg-teal-800 text-center py-10 px-20 rounded-2xl font-semibold tracking-wide">
          <p className="text-4xl text-red-200"> Login </p>
          <form>
            <div className="my-6">
              <input className="rounded-lg px-6 py-2" placeholder="username" type="text"></input>
            </div>
            <div className="my-6">
              <input className="rounded-lg px-6 py-2" placeholder="senha" type="password"></input>
            </div>
              <Link href="/paginaPrincipal" className="bg-teal-600 text-slate-100 px-6 py-2 rounded-lg w-full">
                Efetuar Login
              </Link>
          </form>
        </div>
      </div>
    </>
  );
}
