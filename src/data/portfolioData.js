export const personalInfo = {
  name: "Arjun Sabu",
  handle: "greninja-op",
  shortHandle: "greninja",
  title: "AI Systems & Full-Stack Reliability Engineer",
  tagline: "Building self-preventing reliability loops, AI agent memory graphs, zero-trust cloud vaults & distributed lock sync protocols.",
  location: "India",
  email: "arjun.sabu@example.com",
  github: "https://github.com/greninja-op",
  linkedin: "https://linkedin.com/in/arjun-sabu",
  twitter: "https://twitter.com/greninja_op",
  bio: "Passionate AI systems engineer focused on autonomous agent reliability, telemetry-driven self-healing, high-throughput distributed protocols, and zero-trust cloud vaults. Creator of ChronoLens, Nuvault, Memoire, and CFLS.",
  stats: [
    { label: "Proud Core Projects", value: "4 Apps" },
    { label: "Hackathons", value: "Agents of SigNoz Winner" },
    { label: "Reliability Uptime", value: "99.9%" },
    { label: "GitHub Commits", value: "1,400+" }
  ]
};

export const projectCategories = [
  "All",
  "AI & Observability",
  "AI & Agents",
  "Security & Cloud",
  "Distributed Systems"
];

export const projects = [
  {
    id: "chronolens",
    title: "ChronoLens",
    icon: "⚡",
    logoImg: "/assets/chronolens-logo.png",
    bannerImg: "/assets/chronolens-banner.png",
    subtitle: "Closed-Loop Predictive SRE Control Plane on SigNoz",
    category: "AI & Observability",
    badge: "SigNoz Hackathon Winner",
    github: "https://github.com/greninja-op/ChronoLens.git",
    website: "https://github.com/greninja-op/ChronoLens",
    shortDescription: "Predicts SLO breaches and AI agent cost spirals from live SigNoz telemetry, executes reversible mitigation, and verifies outcome automatically.",
    description: "ChronoLens is an autonomous, closed-loop reliability control plane built for AI-native stacks on SigNoz OpenTelemetry feeds. It monitors live telemetry traces, predicts model cost spirals and latency drift before impact, takes reversible circuit-breaker actions, and logs verifiable digital audit receipts of 'outages that never happened'.",
    features: [
      "Predictive SLO Breach Detection using live SigNoz OpenTelemetry feeds",
      "Reversible automated mitigation & instant rollback capabilities",
      "Agent Watch: loop detection & LLM cost-spiral breaker",
      "Native SigNoz Query Builder & OTel span integrations",
      "Digital audit receipt logging for verified failure prevention"
    ],
    techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"]
  },
  {
    id: "memoire",
    title: "Memoire",
    icon: "🧠",
    subtitle: "AI Memory Graph & Long-Term Context Retention Engine",
    category: "AI & Agents",
    badge: "AI Infrastructure",
    github: "https://github.com/greninja-op/Memoire.git",
    website: "https://github.com/greninja-op/Memoire",
    shortDescription: "Semantic context graph and long-term memory persistence engine for autonomous LLM agents.",
    description: "Memoire empowers AI agents with long-term episodic and semantic memory retention. It indexes multi-step conversation trajectories into a vector similarity memory graph, solving LLM context window overflow and memory decay across extended agent tasks.",
    features: [
      "Vector embeddings & semantic graph memory indexing",
      "Dynamic context pruning & relevance decay algorithms",
      "Low-latency sub-millisecond memory retrieval for LLM agent prompts",
      "Seamless integration with agentic frameworks & vector stores"
    ],
    techStack: ["Python", "Vector DB", "FastAPI", "LLM Embeddings", "TypeScript"]
  },
  {
    id: "nuvault",
    title: "Nuvault",
    icon: "🔐",
    subtitle: "Zero-Trust Cloud Vault & Encrypted Asset Platform",
    category: "Security & Cloud",
    badge: "Security & Storage",
    github: "https://github.com/greninja-op/Nuvault.git",
    website: "https://github.com/greninja-op/Nuvault",
    shortDescription: "High-security cloud storage vault utilizing client-side zero-knowledge encryption and tenant key isolation.",
    description: "Nuvault is an enterprise-grade cloud storage vault engineered for zero-trust data protection. Assets are encrypted client-side using WebCrypto AES-GCM 256-bit keys before transmission, ensuring end-to-end privacy and cryptographic key isolation where servers hold zero unencrypted bytes.",
    features: [
      "Client-side WebCrypto AES-GCM 256-bit encryption",
      "Zero-knowledge architecture & isolated tenant key management",
      "High-throughput chunked file uploads and stream decryption",
      "Granular access permissions & cryptographic audit logs"
    ],
    techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"]
  },
  {
    id: "cfls",
    title: "CFLS",
    icon: "🔒",
    subtitle: "Real-Time Distributed File Locking & Synchronization Protocol",
    category: "Distributed Systems",
    badge: "Distributed Systems",
    github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
    website: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync",
    shortDescription: "Conflict-free file locking protocol ensuring atomic multi-user synchronization across remote workspaces.",
    description: "CFLS (Collaborative File Lock Sync) solves file collision and desynchronization in real-time collaborative development environments. Utilizes atomic heartbeat leases, lock TTL expiration, and sub-millisecond gRPC / WebSockets delta propagation across distributed developer nodes.",
    features: [
      "Atomic distributed file lock acquisition & heartbeat expiration",
      "Sub-millisecond delta synchronization over WebSockets / gRPC",
      "Conflict resolution & lock escalation primitives",
      "Built for multi-user worktrees & collaborative IDEs"
    ],
    techStack: ["Go", "gRPC", "WebSockets", "Distributed Consensus", "Linux Systems"]
  }
];

export const skillCategories = [
  {
    name: "AI & Agent Systems",
    skills: [
      { name: "ChronoLens Telemetry & Reliability", level: 95 },
      { name: "Memoire Semantic Graph Memory", level: 92 },
      { name: "OpenTelemetry & SigNoz API", level: 95 },
      { name: "LLM Agent Loop Breakers", level: 90 }
    ]
  },
  {
    name: "Distributed Systems & Security",
    skills: [
      { name: "CFLS Distributed File Locking", level: 94 },
      { name: "Nuvault Zero-Trust Encryption", level: 90 },
      { name: "Go / High-Throughput Streams", level: 88 },
      { name: "gRPC & WebSockets Protocols", level: 92 }
    ]
  },
  {
    name: "Full-Stack & Web UI",
    skills: [
      { name: "React.js / Vite Applications", level: 94 },
      { name: "Modern CSS & Glassmorphism UI", level: 96 },
      { name: "JavaScript / TypeScript", level: 94 },
      { name: "REST & FastAPI Services", level: 92 }
    ]
  },
  {
    name: "DevOps & Systems Tooling",
    skills: [
      { name: "Git & Multi-Repo Subtree Routing", level: 95 },
      { name: "Docker & Containerization", level: 88 },
      { name: "CI/CD & PowerShell Automation", level: 90 },
      { name: "Linux Worktrees & Shell Environment", level: 92 }
    ]
  }
];

export const timelineEvents = [
  {
    year: "2026",
    title: "ChronoLens Released — Agents of SigNoz Hackathon",
    role: "Lead Systems Architect",
    description: "Architected ChronoLens, a self-preventing reliability loop that uses live OpenTelemetry feeds to intercept AI agent cost spirals and predicted SLO breaches before outages occur."
  },
  {
    year: "2025",
    title: "Memoire & Nuvault Security Stack",
    role: "Core Systems Developer",
    description: "Built Memoire semantic context memory engine for AI agents and Nuvault zero-trust encrypted cloud storage vault."
  },
  {
    year: "2025",
    title: "CFLS Collaborative File Lock Protocol",
    role: "Distributed Systems Engineer",
    description: "Engineered CFLS, a real-time distributed file locking protocol preventing workspace state conflicts across remote team environments."
  }
];

export const terminalHelp = [
  { cmd: "whoami", desc: "Displays bio & role summary" },
  { cmd: "projects", desc: "Lists all 4 core featured repositories" },
  { cmd: "skills", desc: "Displays technical skills matrix" },
  { cmd: "contact", desc: "Shows contact email and handles" },
  { cmd: "stats", desc: "Prints engineering metrics" },
  { cmd: "clear", desc: "Clears the terminal screen" },
  { cmd: "help", desc: "Lists available CLI commands" }
];
