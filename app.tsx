"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Home,
  BookOpen,
  Brain,
  Map,
  Target,
  Play,
  Pause,
  Volume2,
  Maximize,
  CheckCircle,
  Star,
  Trophy,
  Zap,
  Clock,
  Users,
  TrendingUp,
  FileText,
  Lightbulb,
  Award,
  Lock,
  Unlock,
} from "lucide-react"

type Screen = "dashboard" | "lecture" | "quiz" | "study-path" | "syllabus" | "chapter-map"

export default function EdventureApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard")
  const [userXP, setUserXP] = useState(2450)
  const [currentLevel, setCurrentLevel] = useState(12)
  const [isPlaying, setIsPlaying] = useState(false)
  const [quizProgress, setQuizProgress] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const Navigation = () => (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Edventure
            </h1>
          </div>

          <div className="flex space-x-1">
            {[
              { id: "dashboard", icon: Home, label: "Dashboard" },
              { id: "lecture", icon: BookOpen, label: "Lecture" },
              { id: "quiz", icon: Brain, label: "Quiz" },
              { id: "study-path", icon: Target, label: "Study Path" },
              { id: "syllabus", icon: FileText, label: "Syllabus" },
              { id: "chapter-map", icon: Map, label: "Map" },
            ].map(({ id, icon: Icon, label }) => (
              <Button
                key={id}
                variant={currentScreen === id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentScreen(id as Screen)}
                className={currentScreen === id ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Alex! 🚀</h2>
          <p className="opacity-90">Ready to continue your learning adventure?</p>
        </div>

        {/* XP Progress */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>Level {currentLevel} Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{userXP} XP</span>
                <span>{3000 - userXP} XP to next level</span>
              </div>
              <Progress value={(userXP % 3000) / 30} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Courses Completed</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Study Streak</p>
                  <p className="text-2xl font-bold">7 days</p>
                </div>
                <Zap className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Quiz Score</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <Brain className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span>Weekly Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { goal: "Complete 3 lectures", progress: 66, current: 2, total: 3 },
              { goal: "Score 90%+ on quizzes", progress: 100, current: 3, total: 3 },
              { goal: "Study for 10 hours", progress: 80, current: 8, total: 10 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.goal}</span>
                  <span className="text-gray-600">
                    {item.current}/{item.total}
                  </span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  action: "Completed",
                  item: "Quantum Physics Quiz",
                  time: "2 hours ago",
                  icon: CheckCircle,
                  color: "text-green-500",
                },
                {
                  action: "Started",
                  item: "Advanced Mathematics",
                  time: "1 day ago",
                  icon: Play,
                  color: "text-blue-500",
                },
                {
                  action: "Achieved",
                  item: "Study Streak Milestone",
                  time: "2 days ago",
                  icon: Award,
                  color: "text-yellow-500",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {activity.action} {activity.item}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const LectureScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Video Player */}
        <Card className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-20">
                <h3 className="text-2xl font-bold mb-2">Quantum Mechanics: Wave-Particle Duality</h3>
                <p className="text-gray-300 mb-4">Chapter 3: Advanced Physics</p>
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                >
                  {isPlaying ? <Pause className="w-6 h-6 mr-2" /> : <Play className="w-6 h-6 mr-2" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="flex items-center space-x-4 text-white">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <div className="flex-1">
                  <Progress value={35} className="h-1" />
                </div>
                <span className="text-sm">12:34 / 35:42</span>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Animated Explainer Box */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  <span>Key Concept</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white/70 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Wave-Particle Duality</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Light and matter exhibit both wave and particle characteristics. This fundamental principle
                      revolutionized our understanding of quantum mechanics and led to breakthrough discoveries in
                      modern physics.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">λ</span>
                      </div>
                      <p className="text-xs font-medium text-blue-800">Wave Properties</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">•</span>
                      </div>
                      <p className="text-xs font-medium text-green-800">Particle Properties</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Button & Progress */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-bold mb-2">Ready for Quiz?</h3>
                <p className="text-sm opacity-90 mb-4">Test your understanding of this chapter</p>
                <Button
                  onClick={() => setCurrentScreen("quiz")}
                  className="w-full bg-white text-green-600 hover:bg-gray-100"
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-sm">Chapter Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />

                  <div className="space-y-2 mt-4">
                    {[
                      { name: "Introduction", completed: true },
                      { name: "Theory", completed: true },
                      { name: "Examples", completed: true },
                      { name: "Quiz", completed: false },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        {item.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={item.completed ? "text-green-700" : "text-gray-600"}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const QuizScreen = () => {
    const questions = [
      {
        question: "What is the fundamental principle of wave-particle duality?",
        options: [
          "Light behaves only as a wave",
          "Matter exhibits both wave and particle characteristics",
          "Particles cannot have wave properties",
          "Waves and particles are completely separate phenomena",
        ],
        correct: 1,
      },
      {
        question: "Who first proposed the concept of wave-particle duality?",
        options: ["Albert Einstein", "Louis de Broglie", "Max Planck", "Niels Bohr"],
        correct: 1,
      },
    ]

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [showResult, setShowResult] = useState(false)

    const handleAnswerSelect = (index: number) => {
      setSelectedAnswer(index)
      setShowResult(true)
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setShowResult(false)
          setQuizProgress(((currentQuestion + 1) / questions.length) * 100)
        }
      }, 2000)
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Quiz Header */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Quantum Physics Quiz</h2>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Question {currentQuestion + 1} of {questions.length}
                </Badge>
              </div>
              <Progress value={quizProgress} className="h-2 bg-white/20" />
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full p-4 h-auto text-left justify-start ${
                      selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? "bg-green-100 border-green-500 text-green-800"
                          : "bg-red-100 border-red-500 text-red-800"
                        : showResult && index === questions[currentQuestion].correct
                          ? "bg-green-100 border-green-500 text-green-800"
                          : "hover:bg-gray-50"
                    }`}
                    onClick={() => !showResult && handleAnswerSelect(index)}
                    disabled={showResult}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                          selectedAnswer === index
                            ? index === questions[currentQuestion].correct
                              ? "bg-green-500 border-green-500 text-white"
                              : "bg-red-500 border-red-500 text-white"
                            : showResult && index === questions[currentQuestion].correct
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-gray-300"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {showResult && (
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center space-x-2">
                    {selectedAnswer === questions[currentQuestion].correct ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-green-800">Correct! Well done! 🎉</span>
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <span className="font-semibold text-red-800">Not quite right. Keep learning! 💪</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quiz Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-600">Time Elapsed</p>
                <p className="font-bold">2:34</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Target className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="font-bold">85%</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="text-sm text-gray-600">XP Earned</p>
                <p className="font-bold">+150</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const StudyPathGenerator = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Study Path Generator</h2>
            <p className="opacity-90">Create personalized learning paths based on your goals and interests</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Generate Your Path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject Area</Label>
                <Input id="subject" placeholder="e.g., Machine Learning, Physics, Mathematics" />
              </div>

              <div>
                <Label htmlFor="level">Current Level</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <Label htmlFor="goal">Learning Goal</Label>
                <Textarea id="goal" placeholder="What do you want to achieve?" />
              </div>

              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>1 month</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>1 year</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Generate Study Path
              </Button>
            </CardContent>
          </Card>

          {/* Real-world Use Cases */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Real-World Applications</h3>

            {[
              {
                title: "AI in Healthcare",
                description: "Learn how machine learning is revolutionizing medical diagnosis and treatment",
                icon: "🏥",
                difficulty: "Intermediate",
                duration: "6 weeks",
              },
              {
                title: "Quantum Computing",
                description: "Explore the future of computing and its applications in cryptography",
                icon: "⚛️",
                difficulty: "Advanced",
                duration: "12 weeks",
              },
              {
                title: "Sustainable Energy",
                description: "Understand renewable energy systems and their environmental impact",
                icon: "🌱",
                difficulty: "Beginner",
                duration: "4 weeks",
              },
              {
                title: "Financial Technology",
                description: "Discover how technology is transforming banking and finance",
                icon: "💰",
                difficulty: "Intermediate",
                duration: "8 weeks",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{useCase.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{useCase.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{useCase.description}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {useCase.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {useCase.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const SyllabusForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Syllabus-Based Study Plan</h2>
            <p className="opacity-90">Upload your syllabus and get a personalized study schedule</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Add Your Syllabus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="course">Course Name</Label>
                <Input id="course" placeholder="e.g., Advanced Physics, Calculus II" />
              </div>

              <div>
                <Label htmlFor="syllabus">Syllabus Content</Label>
                <Textarea
                  id="syllabus"
                  placeholder="Paste your syllabus here or describe the topics you need to cover..."
                  className="min-h-[200px]"
                />
              </div>

              <div>
                <Label htmlFor="exam-date">Exam Date</Label>
                <Input id="exam-date" type="date" />
              </div>

              <div>
                <Label htmlFor="study-hours">Available Study Hours per Day</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>1-2 hours</option>
                  <option>2-4 hours</option>
                  <option>4-6 hours</option>
                  <option>6+ hours</option>
                </select>
              </div>

              <div>
                <Label htmlFor="difficulty">Difficulty Areas</Label>
                <Textarea id="difficulty" placeholder="Which topics do you find most challenging?" />
              </div>

              <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                Generate Study Plan
              </Button>
            </CardContent>
          </Card>

          {/* Generated Plan Preview */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Your Study Plan Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Week 1-2: Foundations</h4>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Review basic concepts</li>
                    <li>• Complete practice problems</li>
                    <li>• Watch introductory videos</li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Week 3-4: Core Topics</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Deep dive into main subjects</li>
                    <li>• Solve complex problems</li>
                    <li>• Take practice quizzes</li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Week 5-6: Advanced & Review</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Advanced problem solving</li>
                    <li>• Comprehensive review</li>
                    <li>• Mock examinations</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Success Metrics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-green-700">Expected Score: 85%+</p>
                      <p className="text-green-700">Completion Rate: 95%</p>
                    </div>
                    <div>
                      <p className="text-green-700">Study Efficiency: High</p>
                      <p className="text-green-700">Confidence Level: 90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const ChapterMap = () => {
    const chapters = [
      { id: 1, name: "Introduction to Physics", unlocked: true, completed: true, x: 10, y: 80 },
      { id: 2, name: "Classical Mechanics", unlocked: true, completed: true, x: 25, y: 60 },
      { id: 3, name: "Thermodynamics", unlocked: true, completed: true, x: 40, y: 70 },
      { id: 4, name: "Electromagnetism", unlocked: true, completed: false, x: 55, y: 50 },
      { id: 5, name: "Quantum Mechanics", unlocked: true, completed: false, x: 70, y: 40 },
      { id: 6, name: "Relativity", unlocked: false, completed: false, x: 85, y: 30 },
      { id: 7, name: "Advanced Topics", unlocked: false, completed: false, x: 90, y: 20 },
    ]

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">Learning Adventure Map</h2>
              <p className="opacity-90">Navigate through your physics journey and unlock new chapters</p>
            </CardContent>
          </Card>

          {/* Map Container */}
          <Card className="bg-gradient-to-br from-blue-100 to-purple-100 border-0 shadow-lg min-h-[600px] relative overflow-hidden">
            <CardContent className="p-0 h-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>

              {/* Path Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {chapters.slice(0, -1).map((chapter, index) => {
                  const nextChapter = chapters[index + 1]
                  return (
                    <line
                      key={index}
                      x1={`${chapter.x}%`}
                      y1={`${chapter.y}%`}
                      x2={`${nextChapter.x}%`}
                      y2={`${nextChapter.y}%`}
                      stroke={chapter.completed ? "#10b981" : chapter.unlocked ? "#3b82f6" : "#d1d5db"}
                      strokeWidth="3"
                      strokeDasharray={chapter.unlocked ? "0" : "10,5"}
                    />
                  )
                })}
              </svg>

              {/* Chapter Nodes */}
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}
                >
                  {/* Chapter Circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      chapter.completed
                        ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                        : chapter.unlocked
                          ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                          : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    {chapter.completed ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : chapter.unlocked ? (
                      <Unlock className="w-8 h-8" />
                    ) : (
                      <Lock className="w-8 h-8" />
                    )}
                  </div>

                  {/* Chapter Info Card */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl min-w-[200px]">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">{chapter.name}</h4>
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          {chapter.completed && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                          {chapter.unlocked && !chapter.completed && (
                            <Badge className="bg-blue-100 text-blue-800">Available</Badge>
                          )}
                          {!chapter.unlocked && <Badge className="bg-gray-100 text-gray-600">Locked</Badge>}
                        </div>
                        {chapter.unlocked && (
                          <Button size="sm" className="w-full" onClick={() => setCurrentScreen("lecture")}>
                            {chapter.completed ? "Review" : "Start"}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Chapter Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-xs font-medium text-gray-700 bg-white/80 px-2 py-1 rounded">Ch. {chapter.id}</p>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Legend</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full" />
                    <span>Locked</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="text-sm text-gray-600">Chapters Completed</p>
                <p className="text-xl font-bold">3/7</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-600">Total XP Earned</p>
                <p className="text-xl font-bold">2,450</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-600">Class Ranking</p>
                <p className="text-xl font-bold">#12</p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <Award className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-gray-600">Achievements</p>
                <p className="text-xl font-bold">8</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />
      case "lecture":
        return <LectureScreen />
      case "quiz":
        return <QuizScreen />
      case "study-path":
        return <StudyPathGenerator />
      case "syllabus":
        return <SyllabusForm />
      case "chapter-map":
        return <ChapterMap />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderScreen()}
    </div>
  )
}
