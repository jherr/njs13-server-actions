import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <div>
        <Link href="/formPost">Simple Form Post</Link>
      </div>
      <div>
        <Link href="/formPostWithStatus">Form Post With Status</Link>
      </div>
      <div>
        <Link href="/formPostWithTransition">Form Post With Transition</Link>
      </div>
      <div>
        <Link href="/pokemonSearch">Pokemon Search</Link>
      </div>
    </main>
  );
}
