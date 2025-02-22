"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const questions = [
  "มองย้อนกลับไปในช่วงมหาวิทยาลัย ประสบการณ์หรือความสัมพันธ์ใดที่ส่งผลกระทบมากที่สุดต่อตัวคุณในวันนี้?",
  "ทักษะที่คุณได้เรียนรู้ในมหาวิทยาลัย - ทั้งทักษะทางเทคนิคและทักษะทางสังคม - คุณใช้มันในบทบาทและความสัมพันธ์ปัจจุบันของคุณมากน้อยเพียงใด?",
  "เมื่อคุณนึกถึงช่วงเวลาที่มีความสุขที่สุดในมหาวิทยาลัยเทียบกับช่วงเวลาที่มีความสุขที่สุดในปัจจุบัน คุณสังเกตเห็นรูปแบบอะไรบ้าง?",
  "หากคุณจะให้คำแนะนำแก่ใครสักคนเกี่ยวกับการค้นหาจุดมุ่งหมายในชีวิต คุณจะให้ความสำคัญกับการศึกษาในมหาวิทยาลัยเทียบกับประสบการณ์ชีวิตอื่นๆ อย่างไร?",
]

type Stage = "start" | "questions" | "form" | "thanks"

export default function Home() {
  const [stage, setStage] = useState<Stage>("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleStart = () => {
    setStage("questions")
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStage("form")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitting:", { name, email, answers })
    setStage("thanks")
  }

  const handleSkip = () => {
    setStage("thanks")
  }

  const renderStage = () => {
    switch (stage) {
      case "start":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-purple-800 mb-4">ยินดีต้อนรับสู่การสำรวจประสบการณ์มหาวิทยาลัย</h1>
            <p className="text-lg text-gray-600 mb-6">
              การสำรวจนี้มีวัตถุประสงค์เพื่อศึกษาความสัมพันธ์ระหว่างประสบการณ์ในมหาวิทยาลัยและความรู้สึกถึงจุดมุ่งหมายในชีวิต
              คำตอบของคุณจะช่วยให้เราเข้าใจผลกระทบระยะยาวของการศึกษาระดับอุดมศึกษาต่อชีวิตของบัณฑิต
            </p>
            <p className="text-lg text-gray-600 mb-6">
              การสำรวจนี้ประกอบด้วยคำถาม 4 ข้อ และจะใช้เวลาประมาณ 10-15 นาที คำตอบของคุณจะถูกเก็บเป็นความลับและใช้เพื่อการวิจัยเท่านั้น
            </p>
            <Button onClick={handleStart} size="lg">
              เริ่มการสำรวจ
            </Button>
          </motion.div>
        )
      case "questions":
        return (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-700">คำถามที่ {currentQuestion + 1}</h2>
            <p className="text-lg mb-4 text-gray-700">{questions[currentQuestion]}</p>
            <Textarea
              value={answers[currentQuestion] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="พิมพ์คำตอบของคุณที่นี่..."
              className="w-full h-32 mb-4"
            />
            <div className="flex justify-between">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
                ย้อนกลับ
              </Button>
              <Button onClick={handleNext}>{currentQuestion < questions.length - 1 ? "ถัดไป" : "เสร็จสิ้น"}</Button>
            </div>
          </motion.div>
        )
      case "form":
        return (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-700">ขอบคุณสำหรับการมีส่วนร่วม!</h2>
            <p className="text-gray-600 mb-4">หากคุณต้องการรับผลการวิจัยและข้อมูลเชิงลึกจากการศึกษานี้ กรุณากรอกข้อมูลของคุณด้านล่าง</p>
            <Input
              type="text"
              placeholder="ชื่อ"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
            <Input
              type="email"
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between">
              <Button type="submit" className="w-full mr-2">
                ส่งข้อมูล
              </Button>
              <Button onClick={handleSkip} variant="outline" className="w-full ml-2">
                ข้ามไป
              </Button>
            </div>
          </motion.form>
        )
      case "thanks":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">ขอบคุณสำหรับการมีส่วนร่วม!</h2>
            <p className="text-lg text-gray-600 mb-6">
              คำตอบของคุณมีค่าอย่างยิ่งต่อการวิจัยของเรา และจะช่วยให้เราเข้าใจผลกระทบของการศึกษาระดับอุดมศึกษาต่อชีวิตของบัณฑิตได้ดียิ่งขึ้น
            </p>
            <p className="text-lg text-gray-600 mb-6">
              หากคุณได้ให้อีเมลไว้ เราจะส่งผลการวิจัยและข้อมูลเชิงลึกให้คุณเมื่อการศึกษาเสร็จสิ้น
            </p>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8"
      >
        <AnimatePresence mode="wait">{renderStage()}</AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-gray-600 mb-2">ขอบคุณที่ช่วยให้นักศึกษาไทยเลือกอนาคตที่ดีกว่า</p>
        <img src="/whyer-logo.png" alt="Whyer Logo" className="h-8 mx-auto" />
      </motion.div>
    </div>
  )
}

