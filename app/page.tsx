"use client"

import { Copy, Github, Package } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section - Sky Blue */}
      <section className="relative bg-sky-200 pb-24">
        {/* Curved background elements */}
        <div className="absolute top-0 right-0 w-full h-[600px] overflow-hidden z-0">
          <div className="absolute -top-[350px] -right-[150px] w-[700px] h-[700px] rounded-full bg-emerald-100/50 blur-3xl"></div>
          <div className="absolute top-[100px] -left-[150px] w-[500px] h-[500px] rounded-full bg-sky-100/50 blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="container relative mx-auto px-4 py-8 md:py-16 z-10">
          <div className="flex flex-col items-center text-center">
            {/* <div className="mb-4 rounded-full bg-emerald-100 p-3"> */}
              {/* <Package className="h-8 w-8 text-emerald-600" /> */}
              <img src="/logo.svg" className="translate-y-[-4px]"/>
            {/* </div> */}
            <h1 className="mb-2 text-4xl font-bold text-emerald-800 md:text-6xl">Bivvy</h1>
            <p className="mb-6 max-w-2xl text-lg text-emerald-700 md:text-xl">
              A Zero-Dependency Stateful PRD Framework for AI-Driven Development
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/taggartbg/bivvy"
                className="flex items-center gap-2 rounded-full bg-amber-700 px-5 py-2 text-white transition-colors hover:bg-amber-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href="#get-in-touch"
                className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-white transition-colors hover:bg-emerald-500"
              >
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="container relative z-10 mx-auto mb-12 flex flex-wrap justify-center gap-4 rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <a href="#quickstart" className="text-emerald-600 hover:underline">
            Quickstart
          </a>
          <a href="#supported-clients" className="text-emerald-600 hover:underline">
            Supported Clients
          </a>
          <a href="#how-it-works" className="text-emerald-600 hover:underline">
            How it Works
          </a>
          <a href="#file-structure" className="text-emerald-600 hover:underline">
            File Structure
          </a>
          <a href="#interacting" className="text-emerald-600 hover:underline">
            Interacting
          </a>
          <a href="#contributing" className="text-emerald-600 hover:underline">
            Contributing
          </a>
        </nav>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#ecfdf5" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Quickstart Section - Emerald Green */}
      <section id="quickstart" className="bg-emerald-50 pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">Quickstart</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 rounded-xl bg-slate-100 p-4 relative">
              <pre className="overflow-x-auto text-sm text-slate-800">
                <code>npx bivvy init --cursor</code>
              </pre>
              <button
                onClick={() => copyToClipboard("npx bivvy init --cursor", "quickstart")}
                className="absolute right-3 top-3 p-1 rounded-md hover:bg-slate-200 transition-colors"
                aria-label="Copy to clipboard"
              >
                <Copy className="h-5 w-5 text-slate-500" />
              </button>
              {copied === "quickstart" && (
                <div className="absolute -top-10 right-0 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm">
                  Copied to Clipboard 👍
                </div>
              )}
            </div>
            <p className="text-slate-600">
              Then ask your AI agent to create a new{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">climb</code> and you're ready to go!
            </p>
            <p className="mt-4 text-sm italic text-slate-500">
              (NOTE: We suggest you commit the created Bivvy files before making additional changes)
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24 scale-y-[-1]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#e0f2fe" d="M0,100 C240,20 480,0 720,20 C960,40 1200,80 1440,20 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Supported Clients Section - Sky Blue */}
      <section id="supported-clients" className="bg-sky-100 pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">Supported Clients</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-slate-600">Currently, Bivvy supports:</p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
              <li>
                <a
                  href="https://cursor.sh"
                  className="text-emerald-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cursor
                </a>{" "}
                (✅ Available now)
              </li>
              <li>Windsurf (🚧 Coming soon)</li>
            </ul>
            <p className="text-slate-600">
              Want to see Bivvy support another client?{" "}
              <a
                href="https://github.com/taggartbg/bivvy/issues"
                className="text-emerald-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open an issue
              </a>
              !
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#d1fae5" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* How it Works Section - Emerald Green */}
      <section id="how-it-works" className="bg-[#d1fae5] pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">How it Works</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-6 text-slate-600">
              Bivvy provides a structured framework for AI-driven development through a combination of Product
              Requirements Documents (PRDs) and task management. Here's how it works:
            </p>

            <h3 className="mb-3 text-xl font-semibold text-emerald-700">Initialization</h3>
            <p className="mb-4 text-slate-600">
              When you run <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">bivvy init --cursor</code>, Bivvy:
            </p>
            <ol className="mb-6 list-inside list-decimal space-y-2 text-slate-600">
              <li>
                Creates a <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.cursor/rules/bivvy.mdc</code> file
                with the AI interaction rules
              </li>
              <li>
                Sets up a <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.bivvy</code> directory with
                example files
              </li>
              <li>
                Creates a <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.bivvy/complete</code> directory
                for finished work
              </li>
            </ol>

            <h3 className="mb-3 text-xl font-semibold text-emerald-700">The Climb Concept</h3>
            <p className="mb-4 text-slate-600">
              A "Climb" is Bivvy's term for a development project, which can be a feature, bug fix, task, or
              exploration. Each Climb consists of two key components:
            </p>

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="mb-2 font-medium text-emerald-700">
                  1. PRD (<code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.bivvy/[id]-climb.md</code>)
                </h4>
                <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                  <li>Contains the project requirements and specifications</li>
                  <li>Includes metadata like ID, type, and description</li>
                  <li>Documents dependencies, prerequisites, and relevant files</li>
                  <li>Structured as a markdown file with YAML frontmatter</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-emerald-700">
                  2. Moves (<code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.bivvy/[id]-moves.json</code>)
                </h4>
                <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                  <li>A JSON file containing the task list</li>
                  <li>
                    Each move has a status: <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">todo</code>,{" "}
                    <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">climbing</code>,{" "}
                    <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">skip</code>, or{" "}
                    <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">complete</code>
                  </li>
                  <li>
                    Moves can be marked with{" "}
                    <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">rest: true</code> for mandatory
                    checkpoints
                  </li>
                  <li>Tasks are executed in strict order</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24 scale-y-[-1]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#e0f2fe" d="M0,100 C240,20 480,0 720,20 C960,40 1200,80 1440,20 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* File Structure Section - Sky Blue */}
      <section id="file-structure" className="bg-sky-100 pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">File Structure</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="rounded-xl bg-slate-100 p-4">
              <pre className="overflow-x-auto text-sm text-slate-800">
                <code>{`.bivvy/
├── [id]-climb.md      # Active PRD
├── [id]-moves.json    # Active task list
└── complete/          # Completed climbs
    ├── [id]-climb.md
    └── [id]-moves.json`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#ecfdf5" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Interacting with the Agent Section - Emerald Green */}
      <section id="interacting" className="bg-emerald-50 pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">Interacting with the Agent</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-emerald-700">1. Starting a Climb</h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                <li>Ask your AI agent to create a new climb</li>
                <li>The agent will help you draft the PRD</li>
                <li>You must approve the initial PRD before proceeding</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-emerald-700">2. During Development</h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                <li>The agent works through moves one at a time</li>
                <li>
                  Stops for approval at <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">rest: true</code>{" "}
                  checkpoints
                </li>
                <li>
                  Skips tasks marked as <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">skip</code> (can
                  return to them later)
                </li>
                <li>Updates move statuses in real-time</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-emerald-700">3. Completing a Climb</h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                <li>
                  When all moves are done, the agent will:
                  <ul className="list-inside list-disc pl-6 text-slate-600">
                    <li>Ask to mark the climb as complete</li>
                    <li>
                      Move files to <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">.bivvy/complete/</code>
                    </li>
                    <li>Stop tracking the climb</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-emerald-700">Example Workflow</h3>
              <ol className="list-inside list-decimal space-y-1 pl-4 text-slate-600">
                <li>
                  Initialize Bivvy:{" "}
                  <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">npx bivvy init --cursor</code>
                </li>
                <li>Start a new climb: "Create a new feature climb for adding user authentication"</li>
                <li>Review and approve the PRD</li>
                <li>Review and approve the moves list</li>
                <li>Let the agent work through the moves</li>
                <li>Review and approve each significant change</li>
                <li>Complete the climb when done</li>
              </ol>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-700">Best Practices</h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                <li>Always review PRDs and moves lists before approval</li>
                <li>
                  Use <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">rest: true</code> for important
                  checkpoints
                </li>
                <li>
                  Mark non-critical tasks as <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">skip</code> to
                  focus on core functionality
                </li>
                <li>Keep moves small and focused (2-3 code changes)</li>
                <li>Trust the process and follow moves in order</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#e0f2fe" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Running Locally Section - Sky Blue */}
      <section id="running-locally" className="bg-sky-100 pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">Running Without NPX / NPM</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-slate-600">
              Want to try out changes or contribute? Clone the repo and copy the files manually:
            </p>
            <div className="mb-4 rounded-xl bg-slate-100 p-4 relative">
              <pre className="overflow-x-auto text-sm text-slate-800">
                <code>{`git clone https://github.com/taggartbg/bivvy.git
mkdir your-project/.bivvy
cp -r bivvy/src/example/* your-project/.bivvy
cp bivvy/src/rules/.cursor.mdc your-project/.cursor/rules/bivvy.mdc`}</code>
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(
                    `git clone https://github.com/taggartbg/bivvy.git
mkdir your-project/.bivvy
cp -r bivvy/src/example/* your-project/.bivvy
cp bivvy/src/rules/.cursor.mdc your-project/.cursor/rules/bivvy.mdc`,
                    "local",
                  )
                }
                className="absolute right-3 top-3 p-1 rounded-md hover:bg-slate-200 transition-colors"
                aria-label="Copy to clipboard"
              >
                <Copy className="h-5 w-5 text-slate-500" />
              </button>
              {copied === "local" && (
                <div className="absolute -top-10 right-0 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm">
                  Copied to Clipboard 👍
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#d1fae5" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Contributing Section - Emerald Green */}
      <section id="contributing" className="bg-[#d1fae5] pb-24 relative">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold text-emerald-800">Contributing</h2>
          <div className="mb-4 rounded-xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-slate-600">
              While Bivvy is a small project, I'd love to see it grow! Contributions are welcome through:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-slate-600">
              <li>Pull Requests for new features or improvements</li>
              <li>Issues for bug reports or feature requests</li>
              <li>Discussions in the Issues section</li>
            </ul>
            <p className="text-slate-600">Let's make AI-driven development more structured and efficient together!</p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#fef3c7" d="M0,0 C240,80 480,100 720,80 C960,60 1200,20 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* CTA Section - Amber */}
      <section id="get-in-touch" className="bg-amber-100 pb-16">
        <div className="mx-auto max-w-[768px] px-4 py-16">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-center text-white shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Ready to Start Climbing?</h2>
            <p className="mb-6 text-emerald-100">
              Get started with Bivvy today and streamline your AI-driven development workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative flex items-center gap-2 rounded-full bg-white px-5 py-2 text-emerald-700 transition-colors hover:bg-emerald-50">
                <span>npx bivvy init --cursor</span>
                <button
                  onClick={() => copyToClipboard("npx bivvy init --cursor", "cta")}
                  className="p-1 rounded-md hover:bg-emerald-100 transition-colors"
                  aria-label="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
                {copied === "cta" && (
                  <div className="absolute -top-10 right-0 bg-emerald-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
                    Copied to Clipboard 👍
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-16 -mb-16 text-3xl text-amber-900">
            <p>Get in touch: <a href="https://x.com/taggartbg" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">taggartbg on X</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 py-8 text-center text-amber-200">
        <div className="container mx-auto px-4">
          <p className="mb-2">Bivvy - A Zero-Dependency Stateful PRD Framework for AI-Driven Development</p>
          <p className="mb-4 text-sm">MIT License</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/taggartbg/bivvy"
              className="text-amber-200 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
