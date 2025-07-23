"use client"

import { useState } from "react"
import { Search, Home, Calendar, Tag, Clock, User, Github, Twitter, Mail, Rss, Linkedin } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Autopsy - Tutorial for N00bs",
    description: 'This post consists of an article "Autopsy - Tutorial for N00bs"',
    date: "Jul 23, 2025",
    tags: ["Tutorial"],
    category: "Tutorial",
  },
  {
    id: 2,
    title: "picoGym Forensics - Easy writeups",
    description: "This post consists of writeups of the challenges CYB3R_B01 had solved in PicoCTF practice.",
    date: "May 8, 2025",
    tags: ["CTF", "PicoCTF"],
    category: "CTF",
  },
  {
    id: 3,
    title: "TsukuCTF 2025 writeups",
    description: "This post consists of writeups of the challenges CYB3R_B01 had solved in TsukuCTF 2025.",
    date: "May 4, 2025",
    tags: ["CTF", "TsukuCTF"],
    category: "CTF",
  },
  {
    id: 4,
    title: "WolvCTF 2025 writeups",
    description: "This post consists of writeups of the challenges CYB3R_B01 had solved in WolvCTF 2025.",
    date: "Mar 27, 2025",
    tags: ["CTF", "WolvCTF"],
    category: "CTF",
  },
]

const recentlyUpdated = [
  "Autopsy - Tutorial for N00bs",
  "TsukuCTF 2025 writeups",
  "picoGym Forensics - Easy writeups",
  "WolvCTF 2025 writeups",
  "Welcome to My Blog 👋",
]

const trendingTags = [
  "cybersecurity",
  "ctf",
  "forensics",
  "writeups",
  "cryptography",
  "pwn",
  "osint",
  "reverse-engineering",
  "steganography",
  "welcome",
]

export default function CybersecurityBlog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("HOME")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`bg-gray-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`bg-gray-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`bg-gray-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
          ></span>
        </div>
      </button>

      <div className="flex">
        {/* Left Sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-800 border-r border-gray-700 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            {/* Profile Section */}
            <div className="p-6 text-center border-b border-gray-700">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="CYB3R_B01 Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-100 mb-1">CYB3R_B01</h2>
              <p className="text-gray-400 text-sm italic">No Quirk. Just skill.</p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {[
                  { name: "HOME", icon: Home },
                  { name: "CTFS", icon: Tag },
                  { name: "TAGS", icon: Tag },
                  { name: "TIMELINE", icon: Clock },
                  { name: "ABOUT", icon: User },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setActiveSection(item.name)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                        activeSection === item.name
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Mail, href: "#" },
                  { icon: Rss, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Top Navigation */}
          <header className="bg-gray-800 border-b border-gray-700 px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 ml-12 lg:ml-0">Home</span>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-md pl-10 pr-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row">
            {/* Blog Posts */}
            <main className="flex-1 p-4 lg:p-6">
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors duration-200"
                  >
                    <h2 className="text-xl font-semibold text-gray-100 mb-3 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-80 p-4 lg:p-6 space-y-6">
              {/* Recently Updated */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Recently Updated</h3>
                <ul className="space-y-2">
                  {recentlyUpdated.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trending Tags */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-1 rounded-full text-xs transition-colors duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
