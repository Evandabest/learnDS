import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Data Structure Projects</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Basic Data Structures */}
        <ProjectCard
          title="Vector"
          description="Implement a dynamic array with automatic resizing"
          href="/vector"
        />
        <ProjectCard
          title="Bag"
          description="Create an unordered collection with duplicates"
          href="/bag"
        />
        <ProjectCard
          title="Sequence"
          description="Build an ordered collection with position-based access"
          href="/sequence"
        />
        <ProjectCard
          title="Statistician"
          description="Develop a statistical calculator for number sequences"
          href="/statistician"
        />
        
        {/* Linear Data Structures */}
        <ProjectCard
          title="Set"
          description="Implement an unordered collection without duplicates"
          href="/set"
        />
        <ProjectCard
          title="Stack"
          description="Create a Last-In-First-Out (LIFO) structure"
          href="/stack"
        />
        <ProjectCard
          title="Queue"
          description="Build a First-In-First-Out (FIFO) structure"
          href="/queue"
        />
        
        {/* Tree Structures */}
        <ProjectCard
          title="Binary Tree"
          description="Implement a basic binary tree structure"
          href="/binary"
        />
        <ProjectCard
          title="Binary Search Tree"
          description="Create a sorted binary tree implementation"
          href="/bst"
        />
        <ProjectCard
          title="Heap"
          description="Build a binary heap priority queue"
          href="/heap"
        />
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  href: string
}

function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link 
      href={href}
      className="block p-6 rounded-lg border hover:border-blue-500 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}