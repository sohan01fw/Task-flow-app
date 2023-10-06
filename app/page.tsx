import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="title dark:text-red-500">
        This is my Taskflow app with bun and hankos🚀🤖❤️😊
      </div>
      <Link href="/login">
        <button className="border shadow-md p-5 rounded-lg hover:bg-black hover:text-white transition-transform transform scale-90">
          Login to Taskflow
        </button>
      </Link>
    </main>
  );
}
