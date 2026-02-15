"use client";
import {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Facebook,
  Sparkles,
  Copy,
  Check,
  Globe,
  Zap,
  Heart,
  ArrowRight,
  X,
  PartyPopper,
  AlertCircle,
  Clock,
  CheckCircle,
  Award,
  Coffee,
  Smile,
  Rocket,
  Star,
  Compass,
  MessageSquare,
  Brain,
  Cpu,
  Bell,
  BellRing,
  ThumbsUp,
  Timer,
  Gift,
  Crown,
  Sparkle,
} from "lucide-react";

// ==================== TOAST TYPES ====================
type ToastType = {
  id: string;
  variant:
    | "success"
    | "error"
    | "info"
    | "warning"
    | "celebrate"
    | "coffee";
  title: string;
  message: string;
  duration?: number;
};

// ==================== CUSTOM TOAST HOOK ====================
const useToast = () => {
  const [toasts, setToasts] = useState<
    ToastType[]
  >([]);

  const addToast = (
    toast: Omit<ToastType, "id">
  ) => {
    const id = Math.random()
      .toString(36)
      .substring(2, 9);
    setToasts((prev) => [
      ...prev,
      { ...toast, id },
    ]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  };

  return { toasts, addToast, removeToast };
};

// ==================== PREMIUM TOAST COMPONENT ====================
const PremiumToast = ({
  toast,
  onClose,
}: {
  toast: ToastType;
  onClose: () => void;
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return (
          prev -
          (100 /
            ((toast.duration || 4000) / 100)) *
            0.1
        );
      });
    }, 100);

    return () => clearInterval(timer);
  }, [toast.duration]);

  // Variant configurations
  const variantConfig = {
    success: {
      icon: PartyPopper,
      gradient:
        "from-emerald-500 via-green-500 to-teal-500",
      glow: "from-emerald-400/30 to-green-400/30",
      border: "border-emerald-400/50",
      title: "Success! 🎉",
    },
    error: {
      icon: AlertCircle,
      gradient:
        "from-rose-500 via-red-500 to-pink-500",
      glow: "from-rose-400/30 to-red-400/30",
      border: "border-rose-400/50",
      title: "Oops! Something went wrong",
    },
    info: {
      icon: Bell,
      gradient:
        "from-blue-500 via-cyan-500 to-sky-500",
      glow: "from-blue-400/30 to-cyan-400/30",
      border: "border-blue-400/50",
      title: "Heads up!",
    },
    warning: {
      icon: AlertCircle,
      gradient:
        "from-amber-500 via-orange-500 to-yellow-500",
      glow: "from-amber-400/30 to-orange-400/30",
      border: "border-amber-400/50",
      title: "Warning!",
    },
    celebrate: {
      icon: Crown,
      gradient:
        "from-purple-500 via-pink-500 to-rose-500",
      glow: "from-purple-400/30 to-pink-400/30",
      border: "border-purple-400/50",
      title: "Amazing! ✨",
    },
    coffee: {
      icon: Coffee,
      gradient:
        "from-amber-700 via-amber-600 to-amber-500",
      glow: "from-amber-600/30 to-amber-500/30",
      border: "border-amber-500/50",
      title: "Coffee Time! ☕",
    },
  };

  const config = variantConfig[toast.variant];
  const Icon = config.icon;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.3,
        rotateX: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
        scale: 0.5,
        rotateX: 30,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
        mass: 0.8,
      }}
      className="relative w-full max-w-md"
    >
      {/* Main Toast Container */}
      <div
        className={`relative overflow-hidden rounded-2xl backdrop-blur-xl shadow-2xl border ${config.border}`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))`,
        }}
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className={`absolute inset-0 bg-gradient-to-r ${config.glow} blur-2xl`}
        />

        {/* Animated Gradient Border */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30`}
          style={{ transform: "skewX(-25deg)" }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${config.gradient}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative p-5">
          <div className="flex items-start gap-4">
            {/* Icon Container with Animation */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex-shrink-0"
            >
              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-xl`}
              >
                <Icon className="w-7 h-7 text-white" />

                {/* Ring Animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-white/50"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-lg">
                  {toast.title || config.title}
                </h3>

                {/* Time Indicator */}
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Timer size={12} />
                  <span>just now</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {toast.message}
              </p>

              {/* Progress Bar with Gradient */}
              <div className="relative h-2 bg-gray-200/50 rounded-full mt-3 overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{
                    width: `${progress}%`,
                  }}
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${config.gradient}`}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                </motion.div>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </motion.button>
          </div>

          {/* Action Buttons (for specific variants) */}
          {toast.variant === "celebrate" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 mt-3 pt-3 border-t border-gray-200"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-lg"
              >
                Share Achievement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
              >
                View Details
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div
            className={`absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 ${config.border} rounded-tl-2xl`}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 ${config.border} rounded-br-2xl`}
          />
        </div>
      </div>
    </motion.div>
  );
};

// ==================== TOAST CONTAINER ====================
const ToastContainer = ({
  toasts,
  removeToast,
}: {
  toasts: ToastType[];
  removeToast: (id: string) => void;
}) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 max-w-md w-full">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <PremiumToast
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// ==================== FLOATING ELEMENTS COMPONENT ====================
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, ${Math.random() * 0.3})`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// ==================== MESSAGE SENT MODAL ====================
const MessageSentModal = ({
  isOpen,
  onClose,
  formData,
}: {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}) => {
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti
      const colors = [
        "#3b82f6",
        "#8b5cf6",
        "#ec4899",
        "#10b981",
        "#f59e0b",
        "#ef4444",
      ];
      const newConfetti = [];
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setConfetti(newConfetti);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Confetti Animation */}
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: `${piece.x}vw`,
              y: -20,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              y: "120vh",
              rotate: 720,
              scale: [0, 1, 0.8, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              left: `${piece.x}%`,
              backgroundColor: piece.color,
              boxShadow: `0 0 10px ${piece.color}`,
            }}
          />
        ))}

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.5, y: 100, rotateX: -30 }}
          animate={{ scale: 1, y: 0, rotateX: 0 }}
          exit={{ scale: 0.5, y: -100, rotateX: 30 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
          
          {/* Main Modal */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 15,
                delay: 0.2,
              }}
              className="relative mx-auto w-32 h-32 mb-8"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-2 rounded-full bg-white flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <PartyPopper className="w-16 h-16 text-purple-600" />
                </motion.div>
              </motion.div>

              {/* Checkmark Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Message Sent!
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Your message has been delivered successfully
              </p>
            </motion.div>

            {/* Message Details Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">{formData.email}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg mt-1">
                    <MessageSquare className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Subject</p>
                    <p className="text-gray-800 font-medium">{formData.subject}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-100 rounded-lg mt-1">
                    <Send className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Message Preview</p>
                    <p className="text-gray-800 line-clamp-2">{formData.message}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Time Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                <Timer className="w-5 h-5" />
                <span className="font-medium">I'll respond within 24 hours</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open("https://t.me/Abbaabiyyaa2", "_blank");
                }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Chat on Telegram
              </motion.button>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-40 h-40 border-4 border-blue-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 w-40 h-40 border-4 border-purple-200 rounded-full opacity-20"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ==================== MAIN CONTACT COMPONENT ====================
export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState<
    string | null
  >(null);
  const [isSending, setIsSending] =
    useState(false);
  const [focusedField, setFocusedField] =
    useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] =
    useState<string | null>(null);
  const [mousePosition, setMousePosition] =
    useState({ x: 0, y: 0 });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { toasts, addToast, removeToast } =
    useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect =
          sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x:
            ((e.clientX - rect.left) /
              rect.width) *
            100,
          y:
            ((e.clientY - rect.top) /
              rect.height) *
            100,
        });
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );
    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setShowSuccessModal(true);
      
      // Add success toast
      addToast({
        variant: "success",
        title: "Message Delivered! 🎉",
        message:
          "Your message has been sent! Check the modal for details.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const handleCopy = (
    text: string,
    label: string
  ) => {
    navigator.clipboard.writeText(text);
    setCopied(label);

    addToast({
      variant: "info",
      title: "Copied to Clipboard! 📋",
      message: `${label} has been copied to your clipboard.`,
      duration: 3000,
    });

    setTimeout(() => setCopied(null), 2000);
  };

  const handleSocialClick = (social: string) => {
    addToast({
      variant: "info",
      title: `Connecting on ${social} 🤝`,
      message: `You'll be redirected to ${social} to connect with me.`,
      duration: 3000,
    });
  };

  // Demo function to show different toast variants
  const showDemoToasts = () => {
    addToast({
      variant: "success",
      title: "Success! 🎉",
      message:
        "Operation completed successfully!",
      duration: 3000,
    });

    setTimeout(() => {
      addToast({
        variant: "info",
        title: "New Message",
        message:
          "You have a new notification from your portfolio.",
        duration: 3000,
      });
    }, 500);

    setTimeout(() => {
      addToast({
        variant: "warning",
        title: "Almost There!",
        message:
          "Please complete your profile to unlock all features.",
        duration: 3000,
      });
    }, 1000);

    setTimeout(() => {
      addToast({
        variant: "coffee",
        title: "Coffee Break! ☕",
        message:
          "Time for a coffee break? You've earned it!",
        duration: 3000,
      });
    }, 1500);
  };

  // Stats for the header
  const stats = [
    {
      icon: Coffee,
      label: "Coffee consumed",
      value: "1000+",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Smile,
      label: "Happy clients",
      value: "50+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      label: "Projects done",
      value: "30+",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      label: "Avg response",
      value: "<2h",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Gemeda4927",
      link: "https://github.com/Gemeda4927",
      gradient: "from-gray-800 to-gray-900",
      color: "#333",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Gemeda Tamiru",
      link: "https://www.linkedin.com/in/gemeda-tamiru-8863b635a",
      gradient: "from-blue-600 to-blue-700",
      color: "#0077b5",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      username: "@Abbaabiyyaa2",
      link: "https://t.me/Abbaabiyyaa2",
      gradient: "from-sky-500 to-blue-600",
      color: "#0088cc",
    },
    {
      icon: Facebook,
      label: "Facebook",
      username: "Gemada Tamiru",
      link: "https://web.facebook.com/gemada.tamiru.77",
      gradient: "from-blue-500 to-indigo-600",
      color: "#1877f2",
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@GemedaTamiru",
      link: "https://twitter.com/GemedaTamiru",
      gradient: "from-sky-400 to-blue-500",
      color: "#1da1f2",
    },
  ];

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
      />

      {/* Success Modal */}
      <MessageSentModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        formData={formData}
      />

      {/* Main Section */}
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient that follows mouse */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.15) 0%, transparent 50%)`,
            }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Floating Particles */}
          <FloatingElements />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* ===== HEADER SECTION ===== */}
          <div className="text-center mb-20">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              className="flex justify-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LET'S CREATE SOMETHING AMAZING
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Get in touch
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                let's create magic
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind? I'm always
              excited to collaborate on innovative
              ideas and bring them to life with
              clean code and beautiful design.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <Icon
                      className={`w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.label}
                    </div>

                    {/* Sparkle on hover */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="absolute -top-1 -right-1"
                    >
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ===== MAIN CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* ===== LEFT COLUMN - CONTACT FORM ===== */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Form Header with Demo Toast Button */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                    >
                      <Send className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Send a message
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        I'll respond within 24
                        hours
                      </p>
                    </div>
                  </div>

                  {/* Demo Toast Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={showDemoToasts}
                    className="group relative px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-lg shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <Sparkle size={12} />
                      Demo Toasts
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{
                        duration: 0.5,
                      }}
                    />
                  </motion.button>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 block">
                        Your name *
                      </label>
                      <motion.div
                        whileTap={{ scale: 0.99 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() =>
                            setFocusedField(
                              "name"
                            )
                          }
                          onBlur={() =>
                            setFocusedField(null)
                          }
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                          placeholder="John Doe"
                        />
                        {focusedField ===
                          "name" && (
                          <motion.div
                            layoutId="focus"
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ width: 0 }}
                            animate={{
                              width: "100%",
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 block">
                        Email address *
                      </label>
                      <motion.div
                        whileTap={{ scale: 0.99 }}
                        className="relative"
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() =>
                            setFocusedField(
                              "email"
                            )
                          }
                          onBlur={() =>
                            setFocusedField(null)
                          }
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                        {focusedField ===
                          "email" && (
                          <motion.div
                            layoutId="focus-email"
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ width: 0 }}
                            animate={{
                              width: "100%",
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Subject *
                    </label>
                    <motion.div
                      whileTap={{ scale: 0.99 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField(
                            "subject"
                          )
                        }
                        onBlur={() =>
                          setFocusedField(null)
                        }
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                        placeholder="What would you like to discuss?"
                      />
                      {focusedField ===
                        "subject" && (
                        <motion.div
                          layoutId="focus-subject"
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                          initial={{ width: 0 }}
                          animate={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Message *
                    </label>
                    <motion.div
                      whileTap={{ scale: 0.99 }}
                      className="relative"
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField(
                            "message"
                          )
                        }
                        onBlur={() =>
                          setFocusedField(null)
                        }
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none resize-none"
                        placeholder="Tell me about your project, idea, or collaboration..."
                      />
                      {focusedField ===
                        "message" && (
                        <motion.div
                          layoutId="focus-message"
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                          initial={{ width: 0 }}
                          animate={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>
                            Sending message...
                          </span>
                        </>
                      ) : (
                        <>
                          <Send
                            size={18}
                            className="group-hover:rotate-12 transition-transform"
                          />
                          <span>
                            Send Message
                          </span>
                          <motion.span
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                            className="absolute right-4 opacity-0 group-hover:opacity-100"
                          >
                            ✨
                          </motion.span>
                        </>
                      )}
                    </span>

                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                    />
                  </motion.button>

                  {/* Privacy Note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xs text-center text-gray-400 mt-4"
                  >
                    Your information is safe and
                    will never be shared. I'll
                    respond within 24 hours.
                  </motion.p>
                </form>
              </div>
            </motion.div>

            {/* ===== RIGHT COLUMN - CONTACT INFO & SOCIAL ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="space-y-6"
            >
              {/* Social Links Grid - Colorful Version */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl overflow-hidden relative border border-white/50"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2)_0%,transparent_50%)]" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_10deg,#a855f7_20deg,transparent_30deg)] opacity-10"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                    >
                      <Rocket className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Connect With Me
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {socialLinks.map(
                      (social, index) => {
                        const Icon = social.icon;
                        const isHovered =
                          hoveredSocial ===
                          social.label;

                        return (
                          <motion.a
                            key={social.label}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onHoverStart={() =>
                              setHoveredSocial(
                                social.label
                              )
                            }
                            onHoverEnd={() =>
                              setHoveredSocial(
                                null
                              )
                            }
                            onClick={() =>
                              handleSocialClick(
                                social.label
                              )
                            }
                            whileHover={{
                              y: -6,
                              scale: 1.05,
                            }}
                            whileTap={{
                              scale: 0.95,
                            }}
                            className="group relative p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${social.color}10, ${social.color}20)`,
                            }}
                          >
                            {/* Hover Gradient Background */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            />

                            {/* Glow Effect on Hover */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                background: `radial-gradient(circle at center, ${social.color}30 0%, transparent 70%)`,
                              }}
                            />

                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <motion.div
                                animate={
                                  isHovered
                                    ? {
                                        rotate: 360,
                                        scale: [
                                          1, 1.2,
                                          1,
                                        ],
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 0.5,
                                }}
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{
                                  color:
                                    social.color,
                                }}
                              >
                                <Icon
                                  size={22}
                                  className="group-hover:scale-110 transition-transform"
                                />
                              </motion.div>
                              <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                {social.label}
                              </span>
                            </div>

                            {/* Tooltip on hover */}
                            <AnimatePresence>
                              {isHovered && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    y: 10,
                                    scale: 0.8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    y: 10,
                                    scale: 0.8,
                                  }}
                                  transition={{
                                    type: "spring",
                                    damping: 15,
                                  }}
                                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-white text-xs font-medium whitespace-nowrap shadow-lg"
                                  style={{
                                    background:
                                      social.color,
                                  }}
                                >
                                  {
                                    social.username
                                  }
                                  <div
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                                    style={{
                                      background:
                                        social.color,
                                    }}
                                  />
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Decorative corner accent */}
                            <motion.div
                              initial={{
                                scale: 0,
                              }}
                              whileHover={{
                                scale: 1,
                              }}
                              className="absolute top-0 right-0 w-6 h-6"
                            >
                              <div
                                className="absolute top-0 right-0 w-3 h-3 rounded-bl-lg"
                                style={{
                                  background:
                                    social.color,
                                }}
                              />
                            </motion.div>
                          </motion.a>
                        );
                      }
                    )}
                  </div>

                  {/* Availability Status */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="w-2.5 h-2.5 rounded-full bg-green-500"
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 opacity-50"
                        />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          Available for freelance
                        </span>
                        <p className="text-xs text-gray-500">
                          Let's build something
                          amazing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-xs font-medium">
                      <Globe size={12} />
                      <span>Remote</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,white_10deg,transparent_20deg)]"
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Heart
                      className="w-8 h-8 text-pink-300 mb-4"
                      fill="currentColor"
                    />
                  </motion.div>

                  <p className="text-lg font-light leading-relaxed">
                    "Every great project starts
                    with a conversation. Let's
                    make yours next."
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                      <span className="text-sm font-bold">
                        GT
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Gemeda Tamiru
                      </p>
                      <p className="text-xs text-white/60">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-white/10 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-10 -left-10 w-16 h-16 border-2 border-white/10 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}