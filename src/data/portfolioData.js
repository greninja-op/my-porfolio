export const personalInfo = {
  name: "Arjun Sabu",
  handle: "greninja-op",
  shortHandle: "greninja",
  title: "AI Systems & Full-Stack Reliability Engineer",
  tagline: "Building self-preventing reliability loops, agent observability & high-performance Web systems.",
  location: "India",
  email: "arjun.sabu@example.com",
  github: "https://github.com/greninja-op",
  linkedin: "https://linkedin.com/in/arjun-sabu",
  twitter: "https://twitter.com/greninja_op",
  bio: "Passionate AI systems engineer focused on autonomous agent reliability, telemetry-driven self-healing, high-throughput pipelines, and crafting modern visual web experiences. Creator of ChronoLens (Agents of SigNoz track entry) and active open-source contributor.",
  stats: [
    { label: "Projects Completed", value: "18+" },
    { label: "Hackathons & Tracks", value: "3 Winners" },
    { label: "Telemetry & Agent Loops", value: "99.9% Uptime" },
    { label: "Code Commits", value: "1,400+" }
  ]
};

export const projectCategories = [
  "All",
  "AI & Observability",
  "Reliability Systems",
  "Full-Stack & Web",
  "Dev Tools"
];

export const projects = [
  {
    id: "chronolens",
    title: "ChronoLens",
    subtitle: "Self-Preventing Reliability Loop for AI-Native Systems",
    category: "AI & Observability",
    featured: true,
    badge: "SigNoz Hackathon",
    github: "https://github.com/greninja-op/ChronoLens",
    demo: "https://chronolens-demo.example.com",
    shortDescription: "Predicts SLO breaches and AI agent failures from live SigNoz telemetry, executes reversible mitigation, and verifies outcome automatically.",
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
    id: "foresight",
    title: "Foresight",
    subtitle: "Predictive AI Maintenance & Telemetry Engine",
    category: "Reliability Systems",
    featured: true,
    badge: "Core Systems",
    github: "https://github.com/greninja-op/foresight",
    demo: "https://foresight.example.com",
    shortDescription: "AI observability system predicting service latency anomalies and memory leaks before impact.",
    description: "Foresight correlates metric streams across distributed microservices to detect subtle performance degradation trends. Uses light time-series models to forecast resource exhaustion hours before threshold breaches.",
    features: [
      "Real-time time-series anomaly forecasting",
      "Distributed trace correlation across agent networks",
      "Custom alert routing to Slack, PagerDuty, & Webhooks",
      "Interactive telemetry metrics dashboard"
    ],
    techStack: ["Python", "PyTorch", "OpenTelemetry", "React", "PostgreSQL"]
  },
  {
    id: "designsoul",
    title: "DesignSoul",
    subtitle: "AI-Powered UI/UX Design & Generation Suite",
    category: "Full-Stack & Web",
    featured: true,
    badge: "Web App",
    github: "https://github.com/greninja-op/DesignSoul",
    demo: "https://designsoul.example.com",
    shortDescription: "Interactive web app transforming natural language prompts into responsive glassmorphic UI components.",
    description: "DesignSoul leverages custom generative LLM prompts to synthesize full HTML/CSS design systems, UI wireframes, and production-ready component code on the fly.",
    features: [
      "Instant HTML/CSS layout synthesis with visual preview",
      "Glassmorphism & dark mode design token generator",
      "Exportable React component boilerplate",
      "Interactive design canvas with live editing"
    ],
    techStack: ["React", "Vite", "JavaScript", "Node.js", "WebSockets", "CSS3"]
  },
  {
    id: "gigapipe",
    title: "GigaPipe",
    subtitle: "High-Throughput Telemetry Stream Pipeline",
    category: "Reliability Systems",
    featured: false,
    badge: "High Performance",
    github: "https://github.com/greninja-op/gigapipe",
    demo: null,
    shortDescription: "Sub-millisecond event streaming pipeline capable of processing 100k+ spans/sec.",
    description: "GigaPipe is a lightweight, zero-allocation log and trace aggregator engineered for high-cardinality telemetry payloads. Features in-memory buffer pools and lock-free queue primitives.",
    features: [
      "100k+ events/sec throughput with ultra-low memory overhead",
      "Sub-millisecond log parsing and regex pattern matching",
      "Plug-and-play ClickHouse & Kafka sinks"
    ],
    techStack: ["Go", "Kafka", "ClickHouse", "OpenTelemetry", "Docker"]
  },
  {
    id: "graphify",
    title: "Graphify",
    subtitle: "Codebase Knowledge Graph & Dependency Visualizer",
    category: "Dev Tools",
    featured: false,
    badge: "Developer Tool",
    github: "https://github.com/greninja-op/graphify",
    demo: "https://graphify-demo.example.com",
    shortDescription: "Generates interactive structural dependency graphs for multi-file codebases.",
    description: "Graphify parses source code ASTs to render full structural maps of functions, imports, class hierarchies, and call cycles, enabling instant architecture comprehension for AI agents and developers.",
    features: [
      "AST code analysis for Python & JavaScript/TypeScript",
      "Interactive 2D/3D force-directed network visualizer",
      "Cycle detection and architectural bottleneck highlighting"
    ],
    techStack: ["TypeScript", "React", "D3.js", "Python AST", "Canvas API"]
  }
];

export const skillCategories = [
  {
    name: "AI & Agent Systems",
    skills: [
      { name: "LLM Agents & Watchdogs", level: 92 },
      { name: "OpenTelemetry & SigNoz", level: 95 },
      { name: "Self-Healing Reliability Loops", level: 90 },
      { name: "Prompt Engineering & Evaluation", level: 88 }
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Python / FastAPI", level: 94 },
      { name: "Go / High-Throughput Pipelines", level: 85 },
      { name: "REST & WebSockets APIs", level: 90 },
      { name: "SQL & Time-Series DBs", level: 86 }
    ]
  },
  {
    name: "Frontend & UI",
    skills: [
      { name: "React.js / Vite", level: 92 },
      { name: "Modern CSS & Glassmorphism", level: 95 },
      { name: "JavaScript / ES Next", level: 94 },
      { name: "Responsive & Fluid Design", level: 96 }
    ]
  },
  {
    name: "DevOps & Tooling",
    skills: [
      { name: "Git & Multi-Repo Subtrees", level: 90 },
      { name: "Docker & Containerization", level: 85 },
      { name: "CI/CD & PowerShell Automation", level: 88 },
      { name: "Linux / Shell Environment", level: 90 }
    ]
  }
];

export const timelineEvents = [
  {
    year: "2026",
    title: "ChronoLens Released — SigNoz Hackathon",
    role: "Lead Systems Architect",
    description: "Built ChronoLens, a self-preventing reliability loop that uses live OpenTelemetry feeds to intercept AI agent cost spirals and predicted SLO breaches before outages occur."
  },
  {
    year: "2025",
    title: "Foresight & GigaPipe Telemetry Stack",
    role: "Core Developer",
    description: "Engineered high-throughput event processing pipelines handling distributed trace aggregation and predictive latency modeling."
  },
  {
    year: "2025",
    title: "DesignSoul AI UI Generator",
    role: "Full-Stack Developer",
    description: "Created a real-time web application converting prompt specifications into dynamic, accessible visual UI systems."
  },
  {
    year: "2024",
    title: "Open Source & Graphify Dev Tooling",
    role: "Open Source Contributor",
    description: "Developed AST parsing and graph visualization tools for complex codebase navigation."
  }
];

export const terminalHelp = [
  { cmd: "whoami", desc: "Displays bio & role summary" },
  { cmd: "projects", desc: "Lists all featured projects & repositories" },
  { cmd: "skills", desc: "Displays technical skills matrix" },
  { cmd: "contact", desc: "Shows contact email and handles" },
  { cmd: "stats", desc: "Prints engineering metrics" },
  { cmd: "clear", desc: "Clears the terminal screen" },
  { cmd: "help", desc: "Lists available CLI commands" }
];
