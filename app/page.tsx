import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, GitFork } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            LearnDS
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn Data Structures and Algorithms with C++
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/classes">Get Started</Link>
          </Button>
        </section>

        {/* Main Navigation */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Data Structures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Arrays & Linked Lists</li>
                <li>• Binary Trees & Graphs</li>
                <li>• Stacks & Queues</li>
                <li>• Heaps</li>
                <li>• Hash Tables</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Algorithms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Bubble & Quick Sort</li>
                <li>• Insertion & Selection Sort</li>
                <li>• Merge Sort</li>
                <li>• BFS & DFS</li>
                <li>• Dijkstra &apos;s Algorithm</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitFork className="h-5 w-5" />
                Book Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Vector & Bag</li>
                <li>• Sequence & Set</li>
                <li>• Stack & Queue</li>
                <li>• Binary Trees & BST</li>
                <li>• Heap Implementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Visual demonstrations and step-by-step guides
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Projects</CardTitle>
                <CardDescription>
                  10 complete data structure implementations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>C++ Implementation</CardTitle>
                <CardDescription>
                  Professional-grade code with documentation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}