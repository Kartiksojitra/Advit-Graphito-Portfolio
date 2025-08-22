import { Badge } from "@/components/ui/badge"

export function OurTeam() {
  const teamMembers = [
    {
      name: "Advit Graphito",
      designation: "Creative Director & Founder",
      image: "/professional-creative-director.png",
      skills: ["Brand Strategy", "Creative Direction", "UI/UX Design"],
    },
    {
      name: "Priya Sharma",
      designation: "Senior Designer",
      image: "/professional-graphic-designer.png",
      skills: ["Graphic Design", "Illustration", "Typography"],
    },
    {
      name: "Rahul Patel",
      designation: "Frontend Developer",
      image: "/professional-woman-developer.png",
      skills: ["React", "Next.js", "CSS Animation"],
    },
    {
      name: "Arjun Singh",
      designation: "Motion Designer",
      image: "/professional-motion-designer.png",
      skills: ["After Effects", "3D Animation", "Video Editing"],
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold md:text-4xl tracking-normal">Meet Our Creative Team</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl leading-relaxed">
              Talented professionals working together to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-xl bg-card border transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.designation}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
