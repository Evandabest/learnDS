"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PageNavigationProps {
  previousPage?: {
    href: string
    label: string
  }
  nextPage?: {
    href: string
    label: string
  }
  relatedPages?: {
    href: string
    label: string
  }[]
  projects?: {
    href: string
    label: string
  }[]
}

export function PageNavigation({ 
  previousPage, 
  nextPage, 
  relatedPages, 
  projects 
}: PageNavigationProps) {
  const hasNavigation = previousPage || nextPage
  const hasRelated = relatedPages && relatedPages.length > 0
  const hasProjects = projects && projects.length > 0

  return (
    <div className="mt-12 space-y-8">
      {hasNavigation && (
        <div className="border-t pt-8">
          <div className="flex justify-between">
            {previousPage ? (
              <Button variant="outline" asChild>
                <Link href={previousPage.href}>← {previousPage.label}</Link>
              </Button>
            ) : (
              <div />
            )}
            {nextPage ? (
              <Button variant="outline" asChild>
                <Link href={nextPage.href}>{nextPage.label} →</Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}

      {hasRelated && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
          <div className="grid grid-cols-2 gap-4">
            {relatedPages.map((page) => (
              <Button key={page.href} variant="ghost" asChild>
                <Link href={page.href}>{page.label}</Link>
              </Button>
            ))}
          </div>
        </Card>
      )}

      {hasProjects && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Practice Projects</h3>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <Button key={project.href} variant="ghost" asChild>
                <Link href={project.href}>{project.label}</Link>
              </Button>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}