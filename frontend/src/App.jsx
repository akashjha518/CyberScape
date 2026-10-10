import { useState } from "react";

const API_BASE = "http://127.0.0.1:8000";
const topics = [
  {
    number: "01",
    title: "Physical security",
    description: "Notice how spaces guide access, movement, and protection.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Privacy & exposure",
    description: "Learn how everyday environments can reveal information.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Social engineering",
    description: "Recognize trust cues, persuasion, and suspicious requests.",
    icon: "⌁",
  },
  {
    number: "04",
    title: "Defensive thinking",
    description: "Practice identifying risks and proposing safer alternatives.",
    icon: "⬡",
  },
];

function App() {
  const [started, setStarted] = useState(false);
  const [duration, setDuration] = useState("10 min");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [topic, setTopic] = useState("Physical security");
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateMission() {
    setLoading(true);
    setError("");
    setMission(null);

    try {
      const response = await fetch(`${API_BASE}/api/missions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          duration_minutes: Number.parseInt(duration, 10),
          difficulty,
          topic,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "Unable to generate a mission. Please try again."
        );
      }

      setMission(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not connect to the CyberEscape API."
      );
    } finally {
      setLoading(false);
    }
  }
  function startMission() {
    setStarted(true);
    document.getElementById("mission-setup")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c110f] text-[#edf3ec]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="CyberEscape home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-xl text-emerald-300">
            ◈
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Cyber<span className="text-emerald-300">Escape</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#missions" className="transition hover:text-white">
            Missions
          </a>
          <a href="#mission-setup" className="transition hover:text-white">
            Start exploring ↗
          </a>
        </div>

        <a
          href="https://github.com/akashjha518/CyberScape"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-emerald-300/50"
        >
          GitHub ↗
        </a>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-32 lg:pt-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/6 px-4 py-2 text-xs font-medium tracking-wide text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            CYBERSECURITY, OUTSIDE THE SCREEN
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Your next security lesson is{" "}
            <span className="text-emerald-300">out there.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
            Step outside. Observe the world around you. Return with a new
            perspective on privacy, physical security, and the way defenders
            think.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={startMission}
              className="rounded-full bg-emerald-300 px-7 py-4 text-sm font-semibold text-[#0c110f] transition hover:bg-emerald-200"
            >
              Start a mission <span className="ml-2">↗</span>
            </button>
            <a
              href="#how-it-works"
              className="rounded-full border border-white/15 px-7 py-4 text-sm text-white/80 transition hover:border-white/40"
            >
              See how it works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/45">
            <span>✳ No location tracking</span>
            <span>✳ No photos required</span>
            <span>✳ Learn at your pace</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative rounded-4xl border border-white/10 bg-[#151c18] p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Today's field note
              </span>
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                Mission 001
              </span>
            </div>

            <div className="relative my-7 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-emerald-200/10 bg-linear-to-br from-[#23392c] via-[#17251d] to-[#0d1511]">
              <div className="absolute -left-8 top-5 h-48 w-28 rotate-12 rounded-full bg-emerald-300/10 blur-2xl" />
              <div className="absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-lime-300/10 blur-2xl" />
              <svg
                viewBox="0 0 320 230"
                role="img"
                aria-label="Illustration of a forest trail leading toward the horizon"
                className="relative h-full w-full"
              >
                <path
                  d="M0 120 L45 45 L85 120 L115 28 L160 120 L205 38 L250 120 L290 55 L320 120 V230 H0Z"
                  fill="#203c2b"
                />
                <path
                  d="M0 160 L60 80 L110 160 L155 65 L205 160 L260 85 L320 160 V230 H0Z"
                  fill="#2c5338"
                />
                <path
                  d="M0 200 L80 135 L125 190 L180 120 L245 200 L290 150 L320 180 V230 H0Z"
                  fill="#426847"
                />
                <path
                  d="M132 230 L150 178 L143 147 L161 115 L180 147 L172 178 L202 230Z"
                  fill="#b1bc8b"
                  opacity=".7"
                />
                <path
                  d="M0 220 Q100 190 160 213 T320 205 V230 H0Z"
                  fill="#65805b"
                />
                <circle cx="242" cy="40" r="16" fill="#c5e8a7" opacity=".9" />
                <path
                  d="M28 230 V92 M15 135 L28 112 L41 135 M12 165 L28 142 L44 165 M85 230 V120 M72 155 L85 133 L98 155"
                  stroke="#10251a"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-md">
                <p className="text-xs text-white/50">FIELD EXERCISE</p>
                <p className="mt-1 text-sm font-medium">
                  Observe. Don't interfere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">
                ◉
              </div>
              <div>
                <h2 className="font-medium">The art of noticing</h2>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  How can a space be welcoming while still protecting the people
                  who use it?
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/35">
            The best learning sometimes happens away from your phone.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/8 bg-white/2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              A different kind of learning loop
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three steps. One world beyond your screen.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Get your mission",
                description:
                  "Choose a topic, difficulty, and time that fits your day.",
              },
              {
                number: "02",
                title: "Put your phone away",
                description:
                  "Explore a safe public space. Observe without collecting or testing.",
              },
              {
                number: "03",
                title: "Reflect with AI",
                description:
                  "Return to connect your observations to defensive security concepts.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#111713] p-7"
              >
                <span className="text-sm font-medium text-emerald-300">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="missions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Learn to see differently
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The world is your classroom.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/50">
            Every mission develops a defender's mindset, without probing real
            systems or invading anyone's privacy.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-white/10 bg-[#111713] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl text-emerald-300">{item.icon}</span>
                <span className="text-xs text-white/30">{item.number}</span>
              </div>
              <h3 className="mt-7 text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="mission-setup"
        className="border-y border-white/10 bg-[#111713]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Your next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to step outside?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Set your preferences to prepare for a mission. The first version
              of this interface is a setup preview; AI generation will be
              connected to the local model in a later step.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0c110f] p-6 sm:p-8">
            <label className="block text-sm font-medium text-white/80">
              Available time
            </label>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {["5 min", "10 min", "20 min"].map((value) => (
                <button
                  key={value}
                  onClick={() => setDuration(value)}
                  className={`rounded-xl border px-3 py-3 text-sm transition ${
                    duration === value
                      ? "border-emerald-300 bg-emerald-300/10 text-emerald-200"
                      : "border-white/10 text-white/55 hover:border-white/30"
                  }`}
                >
                  {value}
                </button>
              ))}

              {error && (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200"
                >
                  {error}
                </div>
              )}
            </div>

            <label className="mt-7 block text-sm font-medium text-white/80">
              Difficulty
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {["Beginner", "Intermediate"].map((value) => (
                <button
                  key={value}
                  onClick={() => setDifficulty(value)}
                  className={`rounded-xl border px-3 py-3 text-sm transition ${
                    difficulty === value
                      ? "border-emerald-300 bg-emerald-300/10 text-emerald-200"
                      : "border-white/10 text-white/55 hover:border-white/30"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            <label
              htmlFor="topic"
              className="mt-7 block text-sm font-medium text-white/80"
            >
              Mission topic
            </label>
            <select
              id="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="mt-3 w-full rounded-xl border border-white/10 bg-[#151c18] px-4 py-3 text-sm text-white outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              {topics.map((item) => (
                <option key={item.number} value={item.title}>
                  {item.title}
                </option>
              ))}
              <option value="Network security awareness">
                Network security awareness
              </option>
            </select>

            <button
              type="button"
              onClick={generateMission}
              disabled={loading}
              aria-busy={loading}
              className="mt-7 w-full rounded-full bg-emerald-300 px-6 py-5 text-sm font-semibold text-[#0c110f] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Generating mission…
                </span>
              ) : (
                "Generate AI mission ↗"
              )}
            </button>
          </div>
          {loading && (
              <div
                className="col-span-full mt-5 w-full min-w-0 rounded-xl border border-emerald-300/20 bg-emerald-300/6 p-5"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Your mission is being prepared
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Your local AI is creating your challenge, instructions, safety
                  boundaries, and reflection question. This may take a little
                  while.
                </p>

                <div
                  className="mission-progress-track mt-4"
                  role="progressbar"
                  aria-label="Mission generation progress"
                >
                  <div className="mission-progress-bar" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Please keep this page open.
                </p>
              </div>
            )}
          {mission && (
            <article className="col-span-full mt-5 w-full min-w-0 rounded-xl border border-emerald-300/20 bg-emerald-300/6 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                AI-generated mission
              </p>

              <h3 className="mt-3 text-xl font-semibold">{mission.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                {mission.objective}
              </p>

              <p className="mt-3 text-xs text-white/50">
                {mission.duration_minutes} minutes · {mission.difficulty}
              </p>

              <h4 className="mt-6 font-medium">Your mission</h4>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-white/70">
                {mission.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>

              <h4 className="mt-6 font-medium">Safety boundaries</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-white/70">
                {mission.safety_boundaries.map((boundary, index) => (
                  <li key={index}>{boundary}</li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-emerald-200">
                  Reflect on this
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {mission.reflection_question}
                </p>
              </div>

              <p className="mt-5 text-sm font-medium text-emerald-200">
                When you're ready, put your phone away and explore safely.
              </p>
            </article>
          )}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 CyberEscape · Walk. Observe. Think like a defender.</p>
        <p>
          Privacy-first by design. Respect people, property, and local laws.
        </p>
      </footer>
    </main>
  );
}

export default App;
