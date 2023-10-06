import ThemeSwitcher from "@/utils/Themeswitcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="title">
        This is my Taskflow app with bun and hanko🚀🤖❤️😊
      </div>
      <Link href="/login">
        <button className="border shadow-md p-5 rounded-lg hover:bg-black hover:text-white transition-transform transform scale-90">
          Login to Taskflow
        </button>
      </Link>

      <div className="themebtn m-10 border bg-black ">
        <ThemeSwitcher />
      </div>
    </main>
  );
}
