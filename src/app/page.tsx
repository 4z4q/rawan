"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Calendar,
  CheckCircle,
  MessageCircle,
  PenTool,
  User,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the event date (7 days from now for demo purposes)
  useEffect(() => {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 7);
    eventDate.setHours(19, 0, 0, 0); // 7:00 PM

    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatingIcons = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        yoyo: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* القسم النصي */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-sky-900/30 text-sky-300 text-sm"
                variants={fadeInUp}
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>جاهزة لتنفيذ فكرتك الآن</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                اطلب تصميمك <span className="text-sky-400">باحترافية</span>{" "}
                وإبداع
              </motion.h1>

              <motion.p
                className="text-lg text-gray-300 max-w-xl"
                variants={fadeInUp}
              >
                المصممة <strong>روان علي</strong> تجمع بين الذوق الفني وأدوات
                Adobe المتقدمة وتقنيات الذكاء الاصطناعي، لتمنحك تصميماً عصريًا
                يعكس رؤيتك. سواء كنت صاحب مشروع، فعالية، أو علامة تجارية – هنا
                يبدأ التميز البصري.
              </motion.p>

              {/* نموذج التسجيل */}
              <motion.div
                className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 space-y-4"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold">
                  ابدأ بطلب تصميمك الآن{" "}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم</Label>
                    <Input
                      id="name"
                      placeholder="اسمك الكامل"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                  اطلب الآن <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* صورة روان علي + الأيقونات المتحركة */}
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden border-2 border-sky-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/hand-drawn-empowered-muslim-woman-illustration.png"
                  width={500}
                  height={600}
                  alt="Rawan Ali"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* أيقونات Adobe المتحركة */}
              <motion.div
                className="absolute top-10 -left-8 bg-purple-600 rounded-full p-3 shadow-lg shadow-purple-500/20"
                variants={floatingIcons}
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span className="font-bold">AI</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-6 bg-blue-600 rounded-full p-3 shadow-lg shadow-blue-500/20"
                variants={floatingIcons}
                animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <span className="font-bold">PS</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 -left-10 bg-green-600 rounded-full p-3 shadow-lg shadow-green-500/20"
                variants={floatingIcons}
                animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <span className="font-bold">XD</span>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-10 bg-orange-600 rounded-full p-3 shadow-lg shadow-orange-500/20"
                variants={floatingIcons}
                animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              >
                <span className="font-bold">LR</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              لماذا تختار روان؟
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              عندما يتعلق الأمر بالتصميم، فأنت لا تحتاج فقط إلى مظهر جميل — بل
              إلى هوية تعبّر عنك. روان تجمع بين الإبداع والاحترافية لتصميم
              مشروعك كما يستحق.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <Brush className="w-6 h-6 text-sky-400" />, // 🎨
                title: "تصميم حسب الطلب",
                description:
                  "كل مشروع يُصمم خصيصًا ليناسب ذوقك واحتياجاتك، بدون قوالب جاهزة.",
              },
              {
                icon: <ZoomIn className="w-6 h-6 text-sky-400" />, // 🔍
                title: "تفاصيل دقيقة",
                description:
                  "اهتمام كبير بالتفاصيل، من الألوان والخطوط إلى التوازن البصري الكامل.",
              },
              {
                icon: <PenTool className="w-6 h-6 text-sky-400" />, // ✒️
                title: "احترافية Adobe",
                description:
                  "تصميمات باستخدام أدوات Adobe المتقدمة مثل Photoshop وIllustrator.",
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-sky-400" />, // 💬
                title: "تواصل وتعديلات مريحة",
                description:
                  "روان تستمع لرأيك، وتوفر لك تجربة تواصل مريحة وتعديلات حتى رضاك التام.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-sky-500/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg h-auto">
              اطلب تصميمك الآن <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Who This Is For Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              هل هذه الخدمة مناسبة لك؟
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              إذا كنت تبحث عن تصميم يعكس هويتك، ويجمع بين الجمال والاحترافية –
              فأنت في المكان المناسب.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                number: "01",
                title: "أصحاب المشاريع",
                description:
                  "إذا كنت تطلق مشروعًا جديدًا وتحتاج لهوية بصرية تعكس رؤيتك وتلفت الأنظار.",
              },
              {
                number: "02",
                title: "المتاجر الإلكترونية",
                description:
                  "تصميم جذاب للمنتجات، البانرات، والمحتوى التسويقي الذي يعزز المبيعات.",
              },
              {
                number: "03",
                title: "المبدعين والمؤثرين",
                description:
                  "تصميم منشورات سوشيال ميديا احترافية تعكس أسلوبك وتُميز علامتك الشخصية.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-sky-400 mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About the Speaker Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            {/* صورة المصممة */}
            <motion.div className="relative" variants={fadeInUp}>
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden border-2 border-sky-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/hand-drawn-empowered-muslim-woman-illustration.png"
                  width={500}
                  height={600}
                  alt="Rawan Designer"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* أيقونات عائمة تمثل المهارات */}
              <motion.div
                className="absolute top-10 -right-8 bg-purple-600 rounded-full p-3 shadow-lg shadow-purple-500/20"
                variants={floatingIcons}
                animate={{
                  y: [0, -15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <span className="font-bold">AI</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-6 bg-blue-600 rounded-full p-3 shadow-lg shadow-blue-500/20"
                variants={floatingIcons}
                animate={{
                  y: [0, 20, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <span className="font-bold">PS</span>
              </motion.div>
            </motion.div>

            {/* النص التعريفي */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-sky-900/30 text-sky-300 text-sm"
                variants={fadeInUp}
              >
                <User className="w-4 h-4 mr-2" />
                <span>مصممتك المبدعة</span>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl font-bold"
                variants={fadeInUp}
              >
                تعرف على <span className="text-sky-400">روان</span>
              </motion.h2>

              <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
                روان مصممة محترفة تجمع بين الذوق الفني والدقة التقنية. بخبرة
                تمتد لسنوات في مجال التصميم، تقدم لك أعمالاً تعكس هويتك بأفضل
                صورة.
              </motion.p>

              <motion.ul
                className="space-y-3 text-gray-300"
                variants={staggerContainer}
              >
                {[
                  "خبرة واسعة في تصميم الهويات البصرية والشعارات",
                  "تصاميم احترافية لمواقع التواصل الاجتماعي والإعلانات",
                  "أسلوب عصري ومتفرد يُبرز جمال علامتك",
                  "تعاون شخصي لضمان رضاك الكامل",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="w-5 h-5 text-sky-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Countdown Timer Section */}
      {/* <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e17] to-[#0f172a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              احجز موعدك الآن
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              سارع بحجز تصميمك القادم مع المصممة روان – الأماكن محدودة والحجوزات
              تُغلق قريبًا!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            variants={staggerContainer}
          >
            {[
              { label: "أيام", value: timeLeft.days },
              { label: "ساعات", value: timeLeft.hours },
              { label: "دقائق", value: timeLeft.minutes },
              { label: "ثواني", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl font-bold text-sky-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="text-gray-300 mt-2">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex items-center justify- flex-col  text-center space-y-6 overflow-hidden w-fit mx-auto" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-sky-900/30 text-sky-300 text-sm"
              variants={fadeInUp}
            >
              <Clock className="w-4 h-4 mr-2" />
              <span>أماكن محدودة • سيتم إغلاق الحجوزات قريبًا</span>
            </motion.div>

            <motion.button
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg h-auto rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              احجز الآن <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

          </motion.div>
            <p className=" text-gray-400">
              الحجز يتم إلكترونيًا بالكامل • ستحصل على تأكيد فوري عبر البريد
            </p>
        </div>
      </motion.section> */}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} روان – جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              الشروط والأحكام
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
