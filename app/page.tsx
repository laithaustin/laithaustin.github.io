import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] font-mono">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="space-y-8">
          <h1 className="text-2xl font-normal text-black">Laith Altarabishi</h1>

          {/* Main Content */}
          <div className="space-y-6 text-base leading-relaxed text-black">
            <p>Software engineer | MS ECE @ UT Austin | ML systems and infrastructure</p>

            <div className="space-y-2">
              <p>Currently:</p>
              <ul className="ml-6 space-y-2 list-none">
                <li>
                  <span className="mr-2">α.</span>Software Engineer at Capital One (Microservices, 
                  AI and Cloud Infra)
                </li>
                <li>
                  <span className="mr-2">γ.</span>Founder of{" "}
                  <Link
                    href="https://www.youtube.com/@fspodofficial"
                    className="underline hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    From Scratch Podcast
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p>Previously:</p>
              <ul className="ml-6 space-y-2 list-none">
                <li>
                  <span className="mr-2">β.</span>Software Engineer Intern at Aristocrat (Agentic Systems & AI
                  Infrastructure)
                </li>
                <li>
                  <span className="mr-2">•</span>Software Engineer Intern at Capital One (Enterprise ML tooling &
                  Kubeflow)
                </li>
                <li>
                  <span className="mr-2">•</span>Research Assistant at UT Austin Nuclear and Applied Robotics Group
                </li>
              </ul>
            </div>

            <p>
              <span className="mr-2">•</span>Education: BS & MS in Electrical and Computer Engineering from UT Austin
              (2020-2025)
            </p>

            <p>
              <span className="mr-2">•</span>Based in Austin, TX
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-300" />

            <div className="space-y-2">
              <p>Projects:</p>
              <ul className="ml-6 space-y-2 list-none">
                <li>
                  <span className="mr-2">•</span>
                  <Link
                    href="https://github.com/omeedcs/tinyrl-tetris"
                    className="underline hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TinyRL-Tetris
                  </Link>{" "}
                  - From-scratch RL training system with custom CUDA kernels
                </li>
                <li>
                  <span className="mr-2">•</span>
                  <Link
                    href="https://github.com/laithaustin/rlox"
                    className="underline hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RLox
                  </Link>{" "}
                  - Lox interpreters in Rust (tree-walk & bytecode VM)
                </li>
                <li>
                  <span className="mr-2">•</span>Ad-Hoc Federated Learning - Optimizing FL algorithms for device dropout
                </li>
                <li>
                  <span className="mr-2">•</span>Nera - Real-time business recommendation platform
                </li>
              </ul>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-300" />

            <p>
              <span className="mr-2">•</span>
              <Link href="/blog" className="underline hover:text-gray-600 transition-colors">
                Blog
              </Link>
            </p>

            <p>
              <span className="mr-2">•</span>
              <Link
                href="https://www.youtube.com/@fromscratchpodcast"
                className="underline hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                From Scratch Podcast
              </Link>{" "}
              - Technical conversations with engineers and researchers. Guests include Matt Klein (Envoy), Gleb Zarin
              (Humanoid), and Areg Melik-Adamyan (Modular)
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-300" />

            <p>
              <span className="mr-2">•</span>Contact:{" "}
              <Link href="mailto:laithaustin@utexas.edu" className="underline hover:text-gray-600 transition-colors">
                laithaustin@utexas.edu
              </Link>
            </p>

            <p>
              <span className="mr-2">•</span>Social:{" "}
              <Link
                href="https://github.com/laithaustin"
                className="underline hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              ,{" "}
              <Link
                href="https://www.linkedin.com/in/laithaustin/"
                className="underline hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
