"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Stage = "start" | "questions" | "form" | "thanks";

const questions = [
  "คุณเคยมีประสบการณ์อะไรในมหาวิทยาลัยที่ทำให้คุณรู้สึกมีจุดมุ่งหมายในชีวิต?",
  "มีช่วงเวลาไหนในมหาวิทยาลัยที่ทำให้คุณสงสัยว่าคุณเลือกเส้นทางที่ถูกต้องหรือไม่?",
  "คุณคิดว่าการเรียนในมหาวิทยาลัยช่วยให้คุณค้นพบตัวเองมากขึ้นหรือไม่? อย่างไร?",
  "หากย้อนเวลากลับไปได้ คุณจะเลือกเรียนมหาวิทยาลัยอีกครั้งหรือไม่? เพราะอะไร?",
];

export default function WorkingForm() {
  const [stage, setStage] = useState<Stage>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");

  const handleStart = () => {
    setStage("questions");
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage("form");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, university, faculty, answers }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStage("thanks");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    setStage("thanks");
  };

  const renderStage = () => {
    switch (stage) {
      case "start":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center space-y-8 font-thai"
          >
            <h1 className="text-3xl font-bold text-blue-800 mb-8 leading-relaxed font-thai">
              ยินดีต้อนรับสู่การสำรวจประสบการณ์มหาวิทยาลัย
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-thai">
              การสำรวจนี้มีวัตถุประสงค์เพื่อศึกษาความสัมพันธ์ระหว่างประสบการณ์ในมหาวิทยาลัยและความรู้สึกถึงจุดมุ่งหมายในชีวิต
              คำตอบของคุณจะช่วยให้เราเข้าใจผลกระทบระยะยาวของการศึกษาระดับอุดมศึกษาต่อชีวิตของบัณฑิต
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-thai">
              การสำรวจนี้ประกอบด้วยคำถาม 4 ข้อ และจะใช้เวลาประมาณ 10-15 นาที
              คำตอบของคุณจะถูกเก็บเป็นความลับและใช้เพื่อการวิจัยเท่านั้น
            </p>
            <Button
              onClick={handleStart}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              เริ่มการสำรวจ
            </Button>
          </motion.div>
        );
      case "questions":
        return (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8 font-thai"
          >
            <div className="space-y-4 font-thai">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 font-thai">
                คำถามที่ {currentQuestion + 1}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-thai">
                {questions[currentQuestion]}
              </p>
            </div>
            <Textarea
              value={answers[currentQuestion] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="พิมพ์คำตอบของคุณที่นี่..."
              className="w-full min-h-[200px] text-gray-500 p-4 text-lg rounded-xl border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all duration-300 shadow-sm"
            />
            <div className="flex justify-between pt-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="px-8 py-4 rounded-xl transition-all duration-300"
              >
                ย้อนกลับ
              </Button>
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? "ถัดไป" : "เสร็จสิ้น"}
              </Button>
            </div>
          </motion.div>
        );
      case "form":
        return (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-4 font-thai"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-700 font-thai">
              ขอบคุณสำหรับการมีส่วนร่วม!
            </h2>
            <p className="text-gray-600 mb-4 font-thai">
              หากคุณต้องการรับผลการวิจัยและข้อมูลเชิงลึกจากการศึกษานี้
              กรุณากรอกข้อมูลของคุณด้านล่าง
            </p>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="ชื่อ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 text-gray-600 rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-300 "
              />
              <Input
                type="email"
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 text-gray-600 rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-300"
              />
              <Input
                type="university"
                placeholder="มหาวิทยาลัย"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full p-3 text-gray-600 rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-300"
              />
              <Input
                type="faculty"
                placeholder="คณะ"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                className="w-full p-3 text-gray-600 rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-300"
              />
              <Input
                type="email"
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 text-gray-600 rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-300"
              />
            </div>
            <div className="flex justify-between gap-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                ส่งข้อมูล
              </Button>
              <Button
                onClick={handleSkip}
                variant="outline"
                className="w-full px-8 py-4 rounded-xl transition-all duration-300 border-gray-300 hover:border-blue-400 hover:text-blue-400 text-gray-500"
              >
                ข้ามไป
              </Button>
            </div>
          </motion.form>
        );
      case "thanks":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center font-thai"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-700 font-thai">
              ขอบคุณสำหรับการมีส่วนร่วม!
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-thai">
              คำตอบของคุณมีค่าอย่างยิ่งต่อการวิจัยของเรา
              และจะช่วยให้เราเข้าใจผลกระทบของการศึกษาระดับอุดมศึกษาต่อชีวิตของบัณฑิตได้ดียิ่งขึ้น
            </p>
            <p className="text-lg text-gray-600 mb-6 font-thai">
              หากคุณได้ให้อีเมลไว้
              เราจะส่งผลการวิจัยและข้อมูลเชิงลึกให้คุณเมื่อการศึกษาเสร็จสิ้น
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 mx-4"
      >
        <AnimatePresence mode="wait">{renderStage()}</AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-gray-500 mb-2 font-thai" lang="th">
          ขอบคุณที่ช่วยให้นักศึกษาไทยเลือกอนาคตที่ดีกว่า
        </p>
        <img
          src="/whyer-logo.png"
          alt="Whyer Logo"
          className="h-8 mx-auto opacity-80"
        />
      </motion.div>
    </div>
  );
}
