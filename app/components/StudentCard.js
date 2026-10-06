// app/components/StudentCard.js
// Function component: receives props and only reads them (never reassigns).
export default function StudentCard({ name, yearSection, course }) {
  return (
    <div className="flex items-center gap-4 border border-sumi/20 border-l-4 border-l-shu bg-white/70 p-4 transition hover:border-shu hover:shadow-md">
      {/* hanko-style seal with the first letter of the name */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-shu text-xl font-bold text-washi">
        {name.charAt(0)}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-sumi">{name}</h2>
        <p className="text-sm text-sumi/60">{yearSection}</p>
        <p className="text-sm text-sumi/60">{course}</p>
      </div>
    </div>
  );
}
