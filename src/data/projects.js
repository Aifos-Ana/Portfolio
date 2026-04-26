const pub = process.env.PUBLIC_URL;

export const projects = [
  {
    id: 1,
    name: "SprintHive",
    desc: "Full-stack project management platform. I designed the database schema, built the REST API with Laravel, and implemented the task assignment and sprint planning views.",
    tags: ["PHP", "Laravel", "MySQL"],
    url: "https://github.com/Aifos-Ana/SprintHive",
    img: `${pub}/assets/images/sprinthive1.jpg`,
  emoji: "🐝",
  },
  {
    id: 2,
    name: 'Compiler "Java--"',
    desc: "End-to-end compiler for a Java subset. I implemented the full pipeline: ANTLR grammar, semantic analysis, OLLIR IR generation, and Jasmin JVM bytecode output.",
    tags: ["Java", "ANTLR", "OLLIR", "Jasmin"],
    url: "https://github.com/Aifos-Ana/java--",
    img: `${pub}/assets/images/compiler.webp`,
    emoji: "⚙️",
  },
  {
    id: 3,
    name: "ChatRoomServer",
    desc: "Distributed chat system in Java SE 21 with AI-powered rooms, TLS encryption, and fault tolerance via consensus algorithms.",
    tags: ["Java", "LLM", "Security", "Fault Tolerance"],
    url: "https://github.com/Aifos-Ana/ChatRoomServer",
    img: `${pub}/assets/images/chat.webp`,
    emoji: "💬",
  },
  {
    id: 4,
    name: "Yinish Game AI",
    desc: "Board game with multiple modes and adversarial AI. I implemented minimax with alpha-beta pruning and tuned heuristics to beat human players consistently.",
    tags: ["Python", "Minimax", "Alpha-Beta"],
    url: "https://github.com/Aifos-Ana/Yinish-AI",
    img: `${pub}/assets/images/yinish.png`,
    emoji: "♟️",
  },
  {
    id: 5,
    name: "Uni-Calendar",
    desc: "Flutter mobile app integrating with FEUP's Uni platform to display personal calendar events. I built the API integration layer and the cross-platform UI.",
    tags: ["Dart", "Flutter", "Android", "iOS"],
    url: "https://github.com/Aifos-Ana/Uni",
    img: `${pub}/assets/images/uni.webp`,
    emoji: "📅",
  },
  {
    id: 6,
    name: "Routing Algorithm",
    desc: "Graph-based routing solution for ocean shipping and urban deliveries in C++, optimized and benchmarked against large real-world datasets.",
    tags: ["C++", "Graph Theory", "Algorithms"],
    url: "https://github.com/Aifos-Ana/Routing-Algorithm",
    img: `${pub}/assets/images/routing.jpg`,
    emoji: "🗺️",
  },
  {
    id: 7,
    name: "Tron++",
    desc: "Arcade Tron clone built in pure Java with a custom rendering pipeline and game loop — no engines, everything from scratch.",
    tags: ["Java", "Game Dev"],
    url: "https://github.com/Aifos-Ana/TronLookAlike",
    img: `${pub}/assets/images/tron.jpg`,
    emoji: "🕹️",
  },
];

export const skills = [
  {
    icon: "fas fa-code",
    title: "Languages",
    items: ["C / C++", ".NET", "Java", "Python", "JavaScript", "PHP", "HTML / CSS", "Dart", "Haskell"],
  },
  {
    icon: "fas fa-layer-group",
    title: "Frameworks",
    items: ["Laravel", "React", "Flutter", "Android / iOS"],
  },
  {
    icon: "fas fa-wrench",
    title: "Tools",
    items: ["Git", "Docker", "REST APIs", "SQL / NoSql", "Agile / Scrum", "Jira"],
  },
  {
    icon: "fas fa-brain",
    title: "Domains",
    items: ["Full-Stack Development", "Database Design", "Distributed Systems", "Systems Design" ,"AI / Search", "Network Administration/Security", "Compilers"]
  },
  {
    icon: "fas fa-users",
    title: "Soft Skills",
    items: ["Leadership", "Teamwork", "Adaptability", "Problem Solving"],
  },
];
