// app/students/page.js
import Link from "next/link";
import StudentCard from "../components/StudentCard";
import { students } from "../data/students";

export default function StudentsPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-sumi/50">Directory</p>
      <h1 className="mt-1 text-3xl font-bold">Students</h1>
      <p className="mb-8 mt-2 text-sumi/60">Select a card to view the profile.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((s) => (
          <Link key={s.id} href={`/students/${s.id}`}>
            <StudentCard
              name={s.name}
              yearSection={s.yearSection}
              course={s.course}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
