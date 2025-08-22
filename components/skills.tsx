import { CheckCircle2 } from "lucide-react"

import { Progress } from "@/components/ui/progress"

export function Skills() {
  const designSkills = [
    { name: "Adobe Photoshop", level: 90 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe XD", level: 80 },
    { name: "Figma", level: 95 },
  ]

  const developmentSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-left">
            <h3 className="text-xl font-semibold mb-6">Design Skills</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="animate-slide-right">
            <h3 className="text-xl font-semibold mb-6">Development Skills</h3>
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 100 + 200}ms` }} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 animate-fade-in animate-delay-500">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "UI/UX Design",
              "WordPress",
              "SEO Optimization",
              "Brand Strategy",
              "Typography",
              "Color Theory",
              "Git/GitHub",
            ].map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 border rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 50 + 600}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
