"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Maximize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "graphic",
    image: "/advit-graphito-logo.jpg",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    link: "https://example.com/brand-identity",
    gallery: [
      "/brand-identity-1.jpg",
      "/brand-identity-2.jpg",
      "/brand-identity-3.jpg",
      "/brand-identity-4.jpg",
      "/brand-identity-5.jpg",
    ],
  },
  {
    id: 2,
    title: "Social Media Marketing",
    category: "marketing",
    image: "/portfolio-ecommerce.png",
    description: "Strategic content creation, paid ads, campaign planning and social media management.",
    link: "https://example.com/social-media",
    gallery: [
      "/social-media-1.jpg",
      "/social-media-2.jpg",
      "/social-media-3.jpg",
      "/social-media-4.jpg",
      "/social-media-5.jpg",
    ],
  },
  {
    id: 3,
    title: "Product Packaging Design",
    category: "graphic",
    image: "/portfolio-packaging.png",
    description: "Creative packaging design for consumer products that stands out on the shelf and drives sales.",
    link: "https://example.com/packaging",
    gallery: ["/packaging-1.jpg", "/packaging-2.jpg", "/packaging-3.jpg", "/packaging-4.jpg", "/packaging-5.jpg"],
  },
  {
    id: 4,
    title: "Corporate Website Design",
    category: "web",
    image: "/portfolio-corporate-website.png",
    description: "Professional website design and development to improve user experience and conversion rates.",
    link: "https://example.com/corporate-website",
    gallery: [
      "/corporate-web-1.jpg",
      "/corporate-web-2.jpg",
      "/corporate-web-3.jpg",
      "/corporate-web-4.jpg",
      "/corporate-web-5.jpg",
    ],
  },
  {
    id: 5,
    title: "Advertising Campaigns",
    category: "marketing",
    image: "/portfolio-website.png",
    description: "Creative advertising campaigns for print, digital, and social media to grow your business.",
    link: "https://example.com/advertising",
    gallery: [
      "/advertising-1.jpg",
      "/advertising-2.jpg",
      "/advertising-3.jpg",
      "/advertising-4.jpg",
      "/advertising-5.jpg",
    ],
  },
  {
    id: 6,
    title: "Logo Design & Branding",
    category: "graphic",
    image: "/logo-design.png",
    description: "Professional logo design and complete branding solutions for businesses of all sizes.",
    link: "https://example.com/logo-design",
    gallery: ["/logo-1.jpg", "/logo-2.jpg", "/logo-3.jpg", "/logo-4.jpg", "/logo-5.jpg"],
  },
  {
    id: 7,
    title: "E-commerce Solutions",
    category: "web",
    image: "/ecommerce-design.png",
    description:
      "Complete e-commerce website design and development with payment integration and inventory management.",
    link: "https://example.com/ecommerce",
    gallery: ["/ecommerce-1.jpg", "/ecommerce-2.jpg", "/ecommerce-3.jpg", "/ecommerce-4.jpg", "/ecommerce-5.jpg"],
  },
  {
    id: 8,
    title: "Print Design Services",
    category: "graphic",
    image: "/print-design.png",
    description: "Professional print design for brochures, flyers, business cards, and marketing materials.",
    link: "https://example.com/print-design",
    gallery: ["/print-1.jpg", "/print-2.jpg", "/print-3.jpg", "/print-4.jpg", "/print-5.jpg"],
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [showGallery, setShowGallery] = useState(false)

  const filteredItems =
    activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
            <h2 className="text-3xl font-bold md:text-4xl tracking-normal">Recent Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl leading-relaxed">
              A selection of our recent projects showcasing our skills in graphic design, web development, and
              marketing.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(item)
                          setShowGallery(false)
                          setOpen(true)
                        }}
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Maximize2 className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(item)
                          setShowGallery(true)
                          setOpen(true)
                        }}
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        View More
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-colors hover:bg-primary hover:text-white hover:border-primary bg-transparent"
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {selectedItem && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl animate-scale-in max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              {showGallery ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.gallery?.map((image, index) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={
                            image ||
                            `/placeholder.svg?height=400&width=600&query=${selectedItem.title || "/placeholder.svg"} work ${index + 1}`
                          }
                          alt={`${selectedItem.title} - Work ${index + 1}`}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full"
                />
              )}
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowGallery(!showGallery)}>
                  {showGallery ? "Show Details" : "View Gallery"}
                </Button>
              </div>
              <Button asChild>
                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
