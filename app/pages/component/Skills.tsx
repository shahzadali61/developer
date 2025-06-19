import { Card, Tag } from "antd"

interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      skills: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Livewire", "Authentication"],
      color: "red",
    },
    {
      title: "Frontend Development",
      skills: ["Vue.js", "React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      color: "green",
    },
    {
      title: "CSS Frameworks",
      skills: ["Tailwind CSS", "Bootstrap", "Ant Design", "SCSS", "CSS Modules"],
      color: "purple",
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Wireframing"],
      color: "orange",
    },
    {
      title: "Development Tools",
      skills: ["Git", "Composer", "NPM", "Webpack", "Vite", "Docker"],
      color: "default",
    },
    {
      title: "Database & Storage",
      skills: ["MySQL", "PostgreSQL", "Redis", "Database Design", "Query Optimization"],
      color: "blue",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-36px text-center mb-12 text-gray-900">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                title={category.title}
                className="hover:shadow-lg transition-all duration-300 bg-white border-0"
              >
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill} color={category.color} className="mb-2">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Experience Level</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
