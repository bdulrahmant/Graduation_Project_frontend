import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Bot,
  User,
  Menu,
  X,
  Phone,
  Mail,
  Paperclip,
  Mic,
  MoreVertical,
  Home,
  Calendar,
  Stethoscope,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";

const initialMessages = [
  {
    id: 1,
    text: "أهلاً بك! أنا رفيق، مساعدك الصحي الذكي. كيف يمكنني مساعدتك اليوم؟",
    sender: "bot",
    time: "الآن",
  },
];

const quickQuestions = [
  "أعاني من صداع مستمر",
  "أريد حجز موعد طبيب",
  "ما هي أعراض السكري؟",
  "أريد استشارة طبية",
];

function getBotResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("صداع") || lowerMessage.includes("رأس")) {
    return "الصداع المستمر قد يكون ناتجاً عن عدة أسباب مثل:\n\n• الإجهاد والتوتر\n• قلة النوم\n• مشاكل في النظر\n• الجفاف\n\nهل تريد أن أساعدك في تحديد موعد مع طبيب الأعصاب؟";
  }

  if (lowerMessage.includes("موعد") || lowerMessage.includes("حجز")) {
    return "بالتأكيد! يمكنني مساعدتك في حجز موعد مع الطبيب.\n\n• اختر التخصص الطبي\n• اختر الطبيب المناسب\n• حدد الموعد المناسب لك\n\nهل تريد المتابعة؟";
  }

  if (lowerMessage.includes("سكري") || lowerMessage.includes("سكر")) {
    return "أعراض السكري تشمل:\n\n• العطش المستمر\n• التبول المتكرر\n• الإرهاق\n• فقدان الوزن المفاجئ\n• تشوش الرؤية\n\nإذا كنت تعاني من هذه الأعراض، أنصحك بزيارة طبيب الغدد الصماء لإجراء الفحوصات اللازمة.";
  }

  if (lowerMessage.includes("استشارة") || lowerMessage.includes("استفسر")) {
    return "أنا هنا لمساعدتك! يمكنك أن تسألني عن:\n\n• الأعراض المرضية\n• التخصصات الطبية المناسبة\n• نصائح صحية عامة\n• كيفية حجز المواعيد\n\nما هو سؤالك؟";
  }

  return "بناءً على الأعراض، يُفضل استشارة طبيب باطنة";
}

function getSpeechRecognitionConstructor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const inputValueRef = useRef("");
  const speechPrefixRef = useRef("");
  const speechSessionFinalRef = useRef("");

  inputValueRef.current = inputValue;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          /* ignore */
        }
        recognitionRef.current = null;
      }
    };
  }, []);

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* ignore */
      }
      recognitionRef.current = null;
    }
    setIsListening(false);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = getSpeechRecognitionConstructor();
    if (!SpeechRecognition) {
      setSpeechError("المتصفح لا يدعم التعرف على الصوت. جرّب Chrome أو Edge.");
      return;
    }

    setSpeechError(null);
    speechPrefixRef.current = inputValueRef.current;
    speechSessionFinalRef.current = "";

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* ignore */
      }
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ar-SA";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const res = event.results[i];
        const piece = res[0].transcript;
        if (res.isFinal) {
          speechSessionFinalRef.current += piece;
        } else {
          interim += piece;
        }
      }
      setInputValue(
        speechPrefixRef.current + speechSessionFinalRef.current + interim
      );
    };

    recognition.onerror = (event) => {
      if (event.error === "aborted" || event.error === "no-speech") {
        return;
      }
      setSpeechError(
        event.error === "not-allowed"
          ? "يُرجى السماح باستخدام الميكروفون من إعدادات المتصفح."
          : "حدث خطأ أثناء التعرف على الصوت. حاول مرة أخرى."
      );
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    try {
      recognition.start();
      recognitionRef.current = recognition;
      setIsListening(true);
    } catch {
      setSpeechError("تعذر بدء التعرف على الصوت.");
      setIsListening(false);
    }
  };

  const toggleMicrophone = () => {
    if (isListening) {
      stopSpeechRecognition();
    } else {
      startSpeechRecognition();
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const attachmentMessage = {
      id: Date.now(),
      text: `📎 ${file.name}`,
      sender: "user",
      time: "الآن",
      isAttachment: true,
    };

    setMessages((prev) => [...prev, attachmentMessage]);
  };

  const handleSendMessage = (rawText) => {
    const text = typeof rawText === "string" ? rawText : inputValue;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      time: "الآن",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(text.trim()),
        sender: "bot",
        time: "الآن",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  const sidebarLinks = (
    <>
      <ul className="space-y-3">
        <li>
          <Link
            to="/patient-home"
            className="flex items-center gap-3 text-gray-600 hover:text-[#468EEC] transition-colors p-2 rounded-lg hover:bg-blue-50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Home size={20} />
            <span>الرئيسية</span>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-[#468EEC] transition-colors p-2 rounded-lg hover:bg-blue-50"
          >
            <Stethoscope size={20} />
            <span>احجز موعد</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-[#468EEC] transition-colors p-2 rounded-lg hover:bg-blue-50"
          >
            <Calendar size={20} />
            <span>حجوزاتي</span>
          </a>
        </li>
        <li>
          <Link
            to="/chatbot"
            className="flex items-center gap-3 text-[#468EEC] font-bold bg-blue-50 p-2 rounded-lg"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Bot size={20} />
            <span>رفيقك الصحي</span>
          </Link>
        </li>
      </ul>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 font-changa">تواصل معنا</h3>
        <div className="space-y-3">
          <a
            href="tel:+201000000000"
            className="flex items-center gap-3 text-gray-600 hover:text-[#468EEC]"
          >
            <Phone size={18} />
            <span className="text-sm" dir="ltr">
              +20 100 000 0000
            </span>
          </a>
          <a
            href="mailto:support@rafiq.com"
            className="flex items-center gap-3 text-gray-600 hover:text-[#468EEC]"
          >
            <Mail size={18} />
            <span className="text-sm">support@rafiq.com</span>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-cairo flex flex-col">
      <Navbar
        showAuthButtons={false}
        onMobileMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 font-changa">
                الصفحات
              </h3>
              {sidebarLinks}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden min-h-[480px] lg:h-[600px] flex flex-col border border-gray-100">
              <div className="bg-gradient-to-r from-[#468EEC] to-[#2563EB] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-changa">رفيق</h3>
                    <p className="text-sm text-blue-100">متاح الآن</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 hover:bg-white/10 rounded-lg"
                  aria-label="المزيد"
                >
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-[280px]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-end gap-2 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          message.sender === "bot"
                            ? "bg-[#468EEC]"
                            : "bg-gray-300"
                        }`}
                      >
                        {message.sender === "bot" ? (
                          <Bot size={16} className="text-white" />
                        ) : (
                          <User size={16} className="text-gray-600" />
                        )}
                      </div>
                      <div
                        className={`p-4 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-[#468EEC] text-white rounded-br-md"
                            : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">
                          {message.text}
                        </p>
                        <span
                          className={`text-xs mt-1 block ${
                            message.sender === "user"
                              ? "text-blue-200"
                              : "text-gray-400"
                          }`}
                        >
                          {message.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#468EEC] flex items-center justify-center shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-bl-md shadow-sm p-4">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <span
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <span
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length === 1 && (
                <div className="px-4 pb-2 bg-gray-50">
                  <p className="text-sm text-gray-500 mb-2">أسئلة سريعة:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((q) => (
                      <Button
                        key={q}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-auto py-2 px-4 text-xs rounded-full"
                        onClick={() => handleSendMessage(q)}
                      >
                        {q}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-white border-t border-gray-100">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*,application/pdf,.pdf,*/*"
                  onChange={handleFileChange}
                  aria-hidden="true"
                />
                {speechError && (
                  <p className="text-xs text-red-600 mb-2 text-right" role="alert">
                    {speechError}
                  </p>
                )}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
                    aria-label="إرفاق ملف"
                    onClick={openFilePicker}
                  >
                    <Paperclip size={20} />
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded-lg transition-colors ${
                      isListening
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "hover:bg-gray-100 text-gray-500"
                    }`}
                    aria-label={
                      isListening ? "إيقاف التسجيل الصوتي" : "تسجيل صوتي"
                    }
                    aria-pressed={isListening}
                    onClick={toggleMicrophone}
                  >
                    <Mic size={20} />
                  </button>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendMessage(inputValue);
                    }}
                    placeholder="اكتب سؤالك هنا..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#468EEC] focus:ring-opacity-50 text-right"
                  />
                  <Button
                    type="button"
                    variant="primary"
                    className="rounded-full !p-3 min-w-[48px] h-[48px]"
                    onClick={() => handleSendMessage(inputValue)}
                    aria-label="إرسال"
                  >
                    <Send size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          role="presentation"
        >
          <div
            className="absolute right-0 top-0 w-64 h-full bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#468EEC] font-changa">
                  رفيق
                </h2>
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 text-gray-600 hover:bg-gray-100 rounded-lg"
                  aria-label="إغلاق القائمة"
                >
                  <X size={24} />
                </button>
              </div>
              {sidebarLinks}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
