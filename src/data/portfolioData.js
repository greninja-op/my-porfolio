export const personalInfo = {
  name: "Arjun Sabu",
  handle: "greninja-op",
  shortHandle: "greninja",
  title: "AI Systems & Full-Stack Reliability Engineer",
  tagline: "Building self-preventing reliability loops, AI agent memory graphs & high-performance distributed systems.",
  location: "India",
  email: "arjun.sabu@example.com",
  github: "https://github.com/greninja-op",
  linkedin: "https://linkedin.com/in/arjun-sabu",
  twitter: "https://twitter.com/greninja_op",
  bio: "Passionate AI systems engineer focused on autonomous agent reliability, telemetry-driven self-healing, high-throughput distributed protocols, and zero-trust cloud vaults. Creator of ChronoLens, Nuvault, Memoire, and CFLS.",
  stats: [
    { label: "Featured Projects", value: "4 Core Systems" },
    { label: "Hackathons & Tracks", value: "Agents of SigNoz" },
    { label: "Telemetry & Agent Loops", value: "99.9% Uptime" },
    { label: "Code Commits", value: "1,400+" }
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
    subtitle: "Self-Preventing Reliability Loop for AI-Native Systems",
    category: "AI & Observability",
    featured: true,
    badge: "SigNoz Hackathon Winner",
    github: "https://github.com/greninja-op/ChronoLens.git",
    demo: null,
    shortDescription: "Predicts SLO breaches and AI agent cost spirals from live SigNoz telemetry, executes reversible mitigation, and verifies outcome automatically.",
    description: "ChronoLens is an autonomous reliability engine built for AI-native stacks. It monitors live OpenTelemetry spans, predicts model cost spirals and latency drift, takes reversible circuit-breaker actions, and logs verifiable digital audit receipts of 'outages that never happened'.",
    features: [
      "Predictive SLO Breach Detection using live telemetry feeds",
      "Reversible automated mitigation & instant rollback capabilities",
      "Agent Watch: loop detection & LLM cost-spiral breaker",
      "Native SigNoz & OpenTelemetry integrations (Query Builder, alerts, saved views)"
    ],
    techStack: ["Python", "OpenTelemetry", "SigNoz API", "FastAPI", "React", "Docker"]
  },
  {
    id: "memoire",
    title: "Memoire",
    subtitle: "AI Memory Graph & Long-Term Context Retention Engine",
    category: "AI & Agents",
    featured: true,
    badge: "AI Infrastructure",
    github: "https://github.com/greninja-op/Memoire.git",
    demo: null,
    shortDescription: "Semantic context graph and long-term memory persistence engine for autonomous LLM agents.",
    description: "Memoire empowers AI agents with long-term episodic and semantic memory retention. Features vector-based similarity search, dynamic graph pruning, and contextual memory recall across extended conversation trajectories.",
    features: [
      "Vector embeddings & semantic graph memory indexing",
      "Context pruning & relevance decay algorithms",
      "Low-latency memory retrieval for LLM agent prompts",
      "Seamless integration with agentic frameworks"
    ],
    techStack: ["Python", "Vector DB", "FastAPI", "LLM Embeddings", "TypeScript"]
  },
  {
    id: "nuvault",
    title: "Nuvault",
    subtitle: "Zero-Trust Cloud Vault & Encrypted Asset Platform",
    category: "Security & Cloud",
    featured: true,
    badge: "Security & Storage",
    github: "https://github.com/greninja-op/Nuvault.git",
    demo: null,
    shortDescription: "High-security cloud storage vault utilizing client-side zero-knowledge encryption and tenant key isolation.",
    description: "Nuvault is an enterprise-grade cloud vault engineered for zero-trust data protection. Assets are encrypted client-side before transmission, ensuring end-to-end privacy and cryptographic tenant key security.",
    features: [
      "Client-side AES-GCM 256-bit encryption",
      "Zero-knowledge architecture & isolated key management",
      "High-throughput chunked file uploads and stream decryption",
      "Granular access permissions & audit logs"
    ],
    techStack: ["TypeScript", "Node.js", "React", "WebCrypto API", "PostgreSQL", "Docker"]
  },
  {
    id: "cfls",
    title: "CFLS (Collaborative File Lock Sync)",
    subtitle: "Real-Time Distributed File Locking & Synchronization Protocol",
    category: "Distributed Systems",
    featured: true,
    badge: "Distributed Systems",
    github: "https://github.com/greninja-op/CFLS-Collaborative-File-Lock-Sync.git",
    demo: null,
    shortDescription: "Conflict-free file locking protocol ensuring atomic multi-user synchronization across remote workspaces.",
    description: "CFLS solves file collision and state desynchronization in real-time collaborative development environments. Utilizes distributed consensus leases, heartbeat locks, and delta-sync propagation.",
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
