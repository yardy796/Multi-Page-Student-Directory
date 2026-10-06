// app/page.js  (Home)
import Link from "next/link";
import StudentCard from "./components/StudentCard";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="h-24 w-24 shrink-0 rounded-full bg-shu"></div>
        <div>
          <p className="text-xs uppercase tracking-widest text-sumi/50">
            Class of BSIT
          </p>
          <h1 className="mt-1 text-4xl font-bold">Student Directory</h1>
          <p className="mt-3 max-w-md text-sumi/70">
            Welcome. Browse our class and open a profile to learn more about
            each student.
          </p>
          <Link
            href="/students"
            className="mt-5 inline-block border border-sumi px-5 py-2 text-sm uppercase tracking-widest transition hover:bg-sumi hover:text-washi"
          >
            View Students
          </Link>
        </div>
      </section>

      <h2 className="mb-4 mt-14 border-b border-sumi/20 pb-2 text-sm uppercase tracking-widest text-sumi/60">
        Featured Students
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StudentCard
          name="Juan Dela Cruz"
          yearSection="2nd Year - BSIT 2A"
          course="BS Information Technology"
        />
        <StudentCard
          name="Maria Santos"
          yearSection="2nd Year - BSIT 2A"
          course="BS Information Technology"
        />
        <StudentCard
          name="Pedro Reyes"
          yearSection="2nd Year - BSIT 2B"
          course="BS Information Technology"
        />
      </div>
    </div>
  );
}
