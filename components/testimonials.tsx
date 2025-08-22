"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/client-sarah.png",
    content:
      "Working with this designer was an absolute pleasure. They delivered a stunning website that perfectly captured our brand identity. Their attention to detail and creativity exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "StartupX",
    image: "/client-michael.png",
    content:
      "I hired this freelancer for our logo design and brand identity. The results were outstanding! They took the time to understand our vision and translated it into a perfect visual representation of our brand.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    company: "Fashion Boutique",
    image: "/client-emily.png",
    content:
      "Our online store needed a complete redesign, and this developer delivered beyond our expectations. The site is not only beautiful but also performs exceptionally well, leading to increased sales.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Creative Director",
    company: "Design Studio",
    image: "/client-david.png",
    content:
      "As a fellow designer, I have high standards. This freelancer met and exceeded them. Their technical skills combined with creative vision make them stand out in the industry.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold md:text-4xl tracking-normal">What Clients Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl leading-relaxed">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0 && totalPages === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex === totalPages - 1}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
