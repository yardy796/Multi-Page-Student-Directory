import Link from "next/link";
import { students } from "../../data/students";
import LikeButton from "../../components/LikeButton";

export default function StudentProfile({ params }) {
  const student = students.find((s) => s.id === Number(params.id));

  if (!student) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Student #{params.id} not found</h1>
        <Link href="/students" className="mt-4 inline-block text-ai underline">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/students" className="text-sm uppercase tracking-widest text-ai hover:text-shu">
        Back to Students
      </Link>

      <div className="mt-6 border border-sumi/20 bg-white/70 p-6 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-shu text-4xl font-bold text-washi">
            {student.name.charAt(0)}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-sumi/50">
              Viewing profile of student #{params.id}
            </p>
            <h1 className="mt-1 text-3xl font-bold">{student.name}</h1>
            <p className="mt-2 text-sumi/70">{student.yearSection}</p>
            <p className="text-sumi/70">{student.course}</p>
          </div>
        </div>

        <p className="mt-8 border-t border-sumi/20 pt-6 leading-relaxed text-sumi/80">
          {student.bio}
        </p>

        <div className="mt-6">
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
