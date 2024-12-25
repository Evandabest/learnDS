import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { BookOpen, Code, Brain, GitFork } from "lucide-react"

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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
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
                <li>• Arrays & Dynamic Arrays</li>
                <li>• Linked Lists</li>
                <li>• Stacks & Queues</li>
                <li>• Trees & Graphs</li>
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
                <li>• Searching Algorithms</li>
                <li>• Sorting Algorithms</li>
                <li>• Tree Traversals</li>
                <li>• Graph Algorithms</li>
                <li>• Dynamic Programming</li>
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
                <li>• Sequence Class</li>
                <li>• Set Implementation</li>
                <li>• Binary Search Tree</li>
                <li>• Priority Queue</li>
                <li>• Vector Implementation</li>
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
                  Step-by-step explanations with visual examples
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practice Problems</CardTitle>
                <CardDescription>
                  Exercises from the textbook with solutions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>C++ Implementation</CardTitle>
                <CardDescription>
                  Complete source code and explanations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}