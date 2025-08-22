"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      opacity: number
    }> = []

    // Create floating 3D elements
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        if (particle.z < 0 || particle.z > 1000) particle.vz *= -1

        const scale = 1000 / (1000 + particle.z)
        const x = particle.x * scale
        const y = particle.y * scale
        const size = particle.size * scale

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(239, 68, 68, ${particle.opacity * scale})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen py-20 md:py-32 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)" }}
      />

      {/* Additional 3D geometric elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-red-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-red-400/40 animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-white/10 transform rotate-12 animate-pulse"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none text-white tracking-normal">
                Design With Purpose...
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                We don't just design, we solve problems. Blending creativity with strategy to build brands that truly
                connect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-scale-in animate-delay-300">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-red-500/50 w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-pulse-slow bg-white/10 backdrop-blur-sm">
              <Image
                src="/advit-graphito-logo.jpg"
                alt="Advit Graphito Logo"
                fill
                className="object-cover p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
