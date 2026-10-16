const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js"],
  },
  {
    title: "Web",
    skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Delivery & operations",
    skills: ["CI/CD", "Automation", "System optimization", "Git"],
  },
];

const Skills = () => (
  <section className="mt-24 border-t border-dark/10 pt-12 dark:border-light/10 md:mt-16">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary dark:text-primaryDark">
      Technical toolkit
    </p>
    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-2xl">
      Skills & technologies
    </h2>

    <div className="mt-7 grid grid-cols-3 gap-4 md:grid-cols-1">
      {skillGroups.map(({ title, skills }) => (
        <article
          key={title}
          className="rounded-2xl border border-dark/10 p-6 dark:border-light/10"
        >
          <h3 className="text-base font-bold">{title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-dark/5 px-3 py-1.5 text-sm text-dark/70 dark:bg-light/10 dark:text-light/75"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
