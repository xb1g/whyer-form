"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 min-h-[90vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto text-center max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 leading-tight">
            Not Sure If University Is the Right Path? You're Not Alone.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore how university affects your sense of purpose—and discover alternative ways to grow, learn, and build a meaningful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/thinks/working">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Take the Whyer Quiz
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 text-lg px-8 py-6">
              Explore Alternative Paths
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            University Isn't for Everyone—But That Doesn't Mean You're Lost.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">73%</h3>
              <p className="text-gray-600">of students regret their major choice</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">65%</h3>
              <p className="text-gray-600">feel lost even after graduation</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">82%</h3>
              <p className="text-gray-600">choose major without clear purpose</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Find Your Purpose, Your Way.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Project-Based Learning</h3>
              <p className="text-gray-600">Work on meaningful real-world problems</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Apprenticeships & Internships</h3>
              <p className="text-gray-600">Learn by doing, not by sitting in a classroom</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="text-3xl mb-4">🏕️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Gap Year Exploration</h3>
              <p className="text-gray-600">Take time to discover what truly excites you</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Entrepreneurship</h3>
              <p className="text-gray-600">Build something real instead of just getting a degree</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-white px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Real Students. Real Struggles. Real Stories.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-blue-50">
              <p className="text-gray-600 mb-4">"I felt like I was wasting time in university. Now I'm learning through real experiences."</p>
              <p className="font-bold text-blue-800">- Sarah, 22</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <p className="text-gray-600 mb-4">"Taking a gap year helped me find my true passion in sustainable agriculture."</p>
              <p className="font-bold text-blue-800">- Mike, 20</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <p className="text-gray-600 mb-4">"Starting my own business taught me more than any classroom could."</p>
              <p className="font-bold text-blue-800">- Lisa, 23</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600">
              Share Your Story
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Not Sure What's Right for You? Start Here.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/thinks/working">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Take the Whyer Quiz
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
              Join the Community
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
              Talk to a Mentor
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg mb-4">
              Whyer is a movement to rethink education. Join thousands of students finding purpose beyond the classroom.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-blue-300">Instagram</a>
              <a href="#" className="hover:text-blue-300">TikTok</a>
              <a href="#" className="hover:text-blue-300">Discord</a>
            </div>
          </div>
          <div className="text-center text-blue-300 text-sm">
            <a href="#" className="hover:text-white mx-2">Contact</a>
            <a href="#" className="hover:text-white mx-2">FAQs</a>
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

