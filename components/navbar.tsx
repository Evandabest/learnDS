import { HoverDropdown } from "./hover-dropdown"
import Link from "next/link"

const dataStructuresItems = [
  { href: "/arrays", label: "Arrays" },
  { href: "/linkedlist", label: "Linked Lists" },
  { href: "/trees", label: "Trees" },
  { href: "/graphs", label: "Graphs" },
  { href: "/hash", label: "Hash Tables" },
]

const algorithmItems = [
  { href: "/sorting/bubble", label: "Bubble Sort" },
  { href: "/sorting/insertion", label: "Insertion Sort" },
  { href: "/sorting/selection", label: "Selection Sort" },
  { href: "/sorting/merge", label: "Merge Sort" },
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
            <Link href="/code">Code</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar