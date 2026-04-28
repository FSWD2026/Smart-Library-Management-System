import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const stats = [
  { label: "Books managed", value: "10,000+" },
  { label: "Active members", value: "1,200+" },
  { label: "Loans this month", value: "340+" },
  { label: "Fines collected", value: "₹18,000+" },
];

const features = [
  {
    title: "Book management",
    desc: "Add, edit and track all books with categories, shelf locations and availability.",
    color: "bg-blue-50",
    dot: "bg-blue-500",
  },
  {
    title: "Member management",
    desc: "Register members, manage profiles, membership expiry and borrowing limits.",
    color: "bg-purple-50",
    dot: "bg-purple-500",
  },
  {
    title: "Loan & return",
    desc: "Issue and return books, track due dates and overdue loans in real time.",
    color: "bg-green-50",
    dot: "bg-green-500",
  },
  {
    title: "Fines & payments",
    desc: "Auto-calculate overdue fines and mark them as paid, waived or pending.",
    color: "bg-amber-50",
    dot: "bg-amber-500",
  },
  {
    title: "Reservations",
    desc: "Members can reserve unavailable books and get notified when ready.",
    color: "bg-pink-50",
    dot: "bg-pink-500",
  },
  {
    title: "Reports & analytics",
    desc: "View charts for most issued books, active members and monthly stats.",
    color: "bg-teal-50",
    dot: "bg-teal-500",
  },
];

const roles = [
  {
    role: "Admin",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    perms: [
      "Full system access",
      "Manage librarians",
      "View all reports",
      "Configure settings",
    ],
  },
  {
    role: "Librarian",
    color: "border-purple-200 bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
    perms: [
      "Issue & return books",
      "Manage members",
      "Handle fines",
      "View loan history",
    ],
  },
  {
    role: "Member",
    color: "border-green-200 bg-green-50",
    badge: "bg-green-100 text-green-700",
    perms: [
      "Search books",
      "View borrowed books",
      "Reserve books",
      "Check fines",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Create account",
    desc: "Register as admin and set up your library profile.",
  },
  {
    step: "02",
    title: "Add your books",
    desc: "Import or manually add books with categories and copies.",
  },
  {
    step: "03",
    title: "Register members",
    desc: "Add members and assign unique membership codes.",
  },
  {
    step: "04",
    title: "Start issuing",
    desc: "Issue books, track returns and manage fines automatically.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-white to-gray-50">
        <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-4 border border-blue-100">
          Free & open source library system
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight mb-5">
          The smarter way to run your{" "}
          <span className="text-blue-600">library</span>
        </h1>
        <p className="text-gray-500 text-base max-w-lg mb-10 leading-relaxed">
          Issue books, track members, manage fines and reservations — all from
          one clean, fast dashboard built for librarians.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg text-sm font-medium transition"
          >
            Get started free
          </Link>
          <Link
            to="/login"
            className="border border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-7 py-3 rounded-lg text-sm font-medium transition"
          >
            Sign in to dashboard
          </Link>
        </div>

        {/* Hero image placeholder */}
        <div className="mt-16 w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-gray-400">
              LibraryMS — Dashboard
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 p-6">
            {[
              {
                label: "Total books",
                value: "4,280",
                color: "bg-blue-50 text-blue-600",
              },
              {
                label: "Active loans",
                value: "128",
                color: "bg-green-50 text-green-600",
              },
              {
                label: "Members",
                value: "340",
                color: "bg-purple-50 text-purple-600",
              },
              {
                label: "Pending fines",
                value: "₹2,400",
                color: "bg-amber-50 text-amber-600",
              },
            ].map((card) => (
              <div key={card.label} className={`rounded-xl p-4 ${card.color}`}>
                <p className="text-lg font-bold">{card.value}</p>
                <p className="text-xs mt-1 opacity-70">{card.label}</p>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6 grid grid-cols-3 gap-3">
            {[
              "Clean Sans Serif",
              "Introduction to Algorithms",
              "Wings of Fire",
            ].map((book) => (
              <div
                key={book}
                className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500 border border-gray-100"
              >
                {book}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6 py-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100"
          >
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs text-blue-600 font-medium text-center mb-2 uppercase tracking-wider">
          Features
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Everything you need to manage a library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} rounded-2xl p-6 border border-transparent hover:border-gray-200 transition`}
            >
              <div className={`w-3 h-3 rounded-full ${f.dot} mb-4`} />
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 px-6">
        <p className="text-xs text-blue-600 font-medium text-center mb-2 uppercase tracking-wider">
          How it works
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-12">
          Up and running in 4 steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mb-4">
                {s.step}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs text-blue-600 font-medium text-center mb-2 uppercase tracking-wider">
          Access control
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Built for every role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.role} className={`border rounded-2xl p-6 ${r.color}`}>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${r.badge}`}
              >
                {r.role}
              </span>
              <ul className="mt-5 space-y-2">
                {r.perms.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Ready to modernise your library?
        </h2>
        <p className="text-blue-100 text-sm mb-8 max-w-md mx-auto">
          Set up your library system in minutes. No credit card required. Free
          forever for small libraries.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/register"
            className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg text-sm hover:bg-blue-50 transition"
          >
            Create free account
          </Link>
          <Link
            to="/login"
            className="border border-blue-400 text-white px-8 py-3 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Sign in
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">LM</span>
            </div>
            <span className="text-white font-medium text-sm">LibraryMS</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LibraryMS. Built with React + Vite +
            Tailwind CSS.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/home" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/login" className="hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="hover:text-white transition">
              Register
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
