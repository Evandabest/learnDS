import { HoverDropdown } from "./hover-dropdown"
import Link from "next/link"

const dataStructuresItems = [
  { href: "/arrays", label: "Arrays" },
  { href: "/linkedlist", label: "Linked Lists" },
  { href: "/binary", label: "Binary Trees" },
  { href: "/graphs", label: "Graphs" },
  { href: "/stack", label: "Stacks" },
  { href: "/queue", label: "Queues" },
  { href: "/heap", label: "Heaps" },
  { href: "/hash", label: "Hash Tables" },
]

const algorithmItems = [
  { href: "/sorting/bubble", label: "Bubble Sort" },
  { href: "/sorting/quick", label: "Quick Sort" },
  { href: "/sorting/insertion", label: "Insertion Sort" },
  { href: "/sorting/selection", label: "Selection Sort" },
  { href: "/sorting/merge", label: "Merge Sort" },
  { href: "/traversal/bfs", label: "Breadth First Search" },
  { href: "/traversal/dfs", label: "Depth First Search" },
  { href: "/dijkstras", label: "Dijkstra's Algorithm" },
  { href: "/dijkstras/bellmonford", label: "Bellman-Ford Algorithm" },
  { href: "/recursion", label: "Recursion" },

]

const ProjectItems = [
  { href: "/vector", label: "Vector" },
  { href: "/bag", label: "Bag" },
  { href: "/sequence", label: "Sequence" },
  { href: "/statistician", label: "Statistician" },
  { href: "/set", label: "Set" },
  { href: "/stack", label: "Stack" },
  { href: "/queue", label: "Queue" },
  { href: "/binary", label: "Binary Tree" },
  { href: "/bst", label: "Binary Search Tree" },
  { href: "/heap", label: "Heap" }
]


const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Left section */}
          <div className="flex-none">
            <Link href="/" className="text-2xl font-bold">
              LearnDS
            </Link>
          </div>
          
          {/* Right section */}
          <div className="flex-1 flex items-center justify-end space-x-8">
            <HoverDropdown trigger="Data Structures" items={dataStructuresItems} />
            <HoverDropdown trigger="Algorithms" items={algorithmItems} />
            <HoverDropdown trigger="Projects" items={ProjectItems} />
            <Link className="flex-none text-sm" href="/code">Code</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar