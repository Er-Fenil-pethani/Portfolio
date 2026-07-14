const config = {
  title: "Fenil Pethani | Backend Developer",
  description: {
    long: "Explore the portfolio of Fenil Pethani, a Backend Developer specializing in scalable APIs, distributed systems, full-stack web applications, and modern software engineering. Passionate about building high-performance applications with Java, Spring Boot, Node.js, React, and cloud technologies.",
    short:
      "Backend Developer building scalable APIs, modern web applications, and production-ready software.",
  },
  keywords: [
    "Fenil Pethani",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "REST API",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
  ],
  author: "Fenil Pethani",
  email: "fenilpethani2020@gmail.com",
  site: "https://your-domain.vercel.app",

  githubUsername: "Er-Fenil-pethani",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "",
    linkedin: "YOUR_LINKEDIN_URL",
    instagram: "",
    facebook: "",
    github: "YOUR_GITHUB_URL",
  },
};

export { config };