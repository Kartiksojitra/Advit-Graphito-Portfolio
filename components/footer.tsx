import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="font-bold">
            Advit Graphito
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Advit Graphito. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com/advitgraphito" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://instagram.com/advitgraphito" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://github.com/advitgraphito" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/company/advitgraphito" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://facebook.com/advitgraphito" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
