import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  AlertTriangle,
  Zap,
  ClipboardList,
  BarChart3,
  Lightbulb,
  Clock,
  Users,
  Target,
  ChevronRight,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import hbaLogo from "@/imports/High_Bridge_Logo.png";
import hbaLogoWhite from "@/imports/HBA-LOGO_white.png";
import mckinseyLogo from "@/imports/McKinsey.png";
import bainLogo from "@/imports/Bain.png";
import bcgLogo from "@/imports/BCG.png";
import marianaPhoto from "@/imports/Mariana-R..png";
import danielPhoto from "@/imports/Daniel-J.png";
import sofiaPhoto from "@/imports/Sofia-P.png";
import flavioPhoto from "@/imports/Flavio-Soriano.png";
import adrianoPhoto from "@/imports/Adriano-Paez.png";
import tommasoPhoto from "@/imports/Tommaso-Quagli.png";
import danielaVPhoto from "@/imports/Daniela-Vargas.png";
import julianePhoto from "@/imports/Juliane-Hoss.png";
import brunoPhoto from "@/imports/Bruno-Dias.png";
import albertPhoto from "@/imports/Albert-Rodriguez.png";
import brendanPhoto from "@/imports/Brendan-Mullen.png";
import gautamPhoto from "@/imports/Gautam-Patil.png";
import olgaPhoto from "@/imports/Olga-Nissen.png";
import michaelPhoto from "@/imports/Michael-Ruske.png";
import jamesPhoto from "@/imports/James-Piazza.png";
import afonsoPhoto from "@/imports/Afonso-Rauh.png";
import adrianePhoto from "@/imports/Adriane-Hauer.png";
import Player from "@vimeo/player";

// ─── Brand palette ─────────────────────────────────────────────────────────────
const C = {
  navy: "#0A1F44",
  navyDark: "#06122B",
  navyMid: "#1E3A6E",
  cerulean: "#1E6FA8",
  turquoise: "#00B4A6",
  porcelain: "#F5F7FA",
  blueLight: "#E8F0F8",
  textMuted: "#6B7FA0",
};

// ─── Tech background patterns ──────────────────────────────────────────────────

// Dense pattern for dark sections (Hero, Final CTA)
const darkPatternStyle: React.CSSProperties = {
  backgroundImage: [
    `radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)`,
    `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
    `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
  ].join(", "),
  backgroundSize: "20px 20px, 80px 80px, 80px 80px",
};

// Subtle pattern for porcelain sections (How It Works, Why HBA)
const porcelainPatternStyle: React.CSSProperties = {
  backgroundImage: [
    `radial-gradient(circle, rgba(30,111,168,0.08) 1px, transparent 1px)`,
    `linear-gradient(rgba(30,111,168,0.03) 1px, transparent 1px)`,
    `linear-gradient(90deg, rgba(30,111,168,0.03) 1px, transparent 1px)`,
  ].join(", "),
  backgroundSize: "24px 24px, 72px 72px, 72px 72px",
};

// Minimal pattern for white sections (Problem, Testimonials)
const whitePatternStyle: React.CSSProperties = {
  backgroundImage: `radial-gradient(circle, rgba(10,31,68,0.055) 1px, transparent 1px)`,
  backgroundSize: "28px 28px",
};

// ─── Circuit SVG decoration (Hero & Final CTA only) ────────────────────────────
function CircuitDecoration({ id }: { id: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`hexgrid-${id}`}
          x="0" y="0" width="60" height="52"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30,2 L58,17.5 L58,34.5 L30,50 L2,34.5 L2,17.5 Z"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.8"
          />
        </pattern>
      </defs>

      {/* Hex grid overlay */}
      <rect width="1200" height="560" fill={`url(#hexgrid-${id})`} />

      {/* Top-left circuit traces */}
      <g stroke="rgba(0,180,166,0.14)" strokeWidth="1" fill="none">
        <path d="M0,150 L100,150 L100,220 L200,220" />
        <path d="M0,280 L70,280 L70,360 L170,360 L170,400" />
        <circle cx="100" cy="150" r="3" fill="rgba(0,180,166,0.22)" stroke="none" />
        <circle cx="100" cy="220" r="3" fill="rgba(0,180,166,0.22)" stroke="none" />
        <circle cx="70"  cy="280" r="3" fill="rgba(0,180,166,0.22)" stroke="none" />
        <circle cx="170" cy="360" r="4.5" fill="rgba(0,180,166,0.1)"
          stroke="rgba(0,180,166,0.25)" strokeWidth="1" />
      </g>

      {/* Bottom-right circuit traces */}
      <g stroke="rgba(30,111,168,0.14)" strokeWidth="1" fill="none">
        <path d="M1200,100 L1090,100 L1090,180 L990,180" />
        <path d="M1200,340 L1110,340 L1110,420 L1010,420 L1010,470" />
        <circle cx="1090" cy="100" r="3" fill="rgba(30,111,168,0.22)" stroke="none" />
        <circle cx="1090" cy="180" r="3" fill="rgba(30,111,168,0.22)" stroke="none" />
        <circle cx="1110" cy="340" r="3" fill="rgba(30,111,168,0.22)" stroke="none" />
        <circle cx="1010" cy="470" r="4.5" fill="rgba(30,111,168,0.1)"
          stroke="rgba(30,111,168,0.25)" strokeWidth="1" />
      </g>

      {/* Corner hex outlines (decorative, larger) */}
      <g fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <path d="M70,20 L110,43 L110,90 L70,113 L30,90 L30,43 Z" />
        <path d="M1130,400 L1170,423 L1170,470 L1130,493 L1090,470 L1090,423 Z" />
        <path d="M60,480 L90,497 L90,530 L60,547 L30,530 L30,497 Z" />
      </g>

      {/* Central subtle node cluster */}
      <g fill="none">
        <circle cx="580" cy="80" r="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="580" cy="80" r="90" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        <circle cx="580" cy="80" r="4" fill="rgba(0,180,166,0.2)" />
        <line x1="580" y1="80" x2="500" y2="140" stroke="rgba(0,180,166,0.06)" strokeWidth="1" />
        <line x1="580" y1="80" x2="660" y2="130" stroke="rgba(0,180,166,0.06)" strokeWidth="1" />
        <circle cx="500" cy="140" r="2.5" fill="rgba(0,180,166,0.15)" />
        <circle cx="660" cy="130" r="2.5" fill="rgba(0,180,166,0.15)" />
      </g>
    </svg>
  );
}

// ─── Vimeo Embed (autoplay muted, restarts from beginning on first unmute) ────

function VimeoEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const restartedRef = useRef(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    restartedRef.current = false;

    player.ready().then(() => {
      player.on("volumechange", (data: { volume: number; muted?: boolean }) => {
        const isMuted = data.muted ?? data.volume === 0;

        if (!isMuted && data.volume > 0 && !restartedRef.current) {
          restartedRef.current = true;

          player
            .setCurrentTime(0)
            .then(() => player.play())
            .catch((error) => console.error(error));
        }
      });
    });

    return () => {
      player.unload().catch(() => {});
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-2xl rounded-2xl overflow-hidden mb-8 border"
      style={{
        aspectRatio: "16/9",
        borderColor: "rgba(255,255,255,0.12)",
      }}
    >
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/1226573787?autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Free Strategy Session"
      />
    </div>
  );
}

// ─── Shared components ─────────────────────────────────────────────────────────

function CTAButton({
  children,
  large = false,
  className = "",
  href,
}: {
  children: React.ReactNode;
  large?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-200",
        "hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2",
        large
          ? "px-8 py-4 text-[1.05rem] min-h-[56px]"
          : "px-6 py-3.5 text-[0.95rem] min-h-[48px]",
        "text-white shadow-lg hover:shadow-xl",
        className,
      ].join(" ")}
      style={{
        background: `linear-gradient(135deg, ${C.cerulean} 0%, ${C.turquoise} 100%)`,
        boxShadow: `0 4px 20px rgba(0,180,166,0.25)`,
      }}
    >
      {children}
    </a>
  );
}

function SectionLabel({
  icon,
  children,
  color = C.cerulean,
}: {
  icon: React.ReactNode;
  children: string;
  color?: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3"
      style={{ color }}
    >
      {icon}
      {children}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-current" style={{ color: C.turquoise }} />
      ))}
    </div>
  );
}

// ─── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(10,31,68,0.08)",
      }}
    >
      <div className="relative max-w-5xl mx-auto px-5 h-14 flex items-center justify-center">
        <ImageWithFallback
          src={hbaLogo}
          alt="High Bridge Academy"
          className="h-9 w-auto object-contain"
        />
        <a
          href="https://highbridge.typeform.com/to/JDsTUgpz"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex absolute right-5 items-center gap-1.5 font-bold text-sm px-4 py-2.5 rounded-xl transition-colors min-h-[40px]"
          style={{ background: C.navy, color: "#fff" }}
        >
          Free Diagnostic <ChevronRight size={13} />
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection({ sentinelRef }: { sentinelRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section
      className="relative pt-14 overflow-hidden"
      style={{
        background: `linear-gradient(150deg, #06172f 0%, #0A1F44 55%, #123B63 100%)`,
      }}
    >
      {/* Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          ...darkPatternStyle,
        }}
      />

      {/* Darkening layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.18)",
        }}
      />
  
      {/* Circuit SVG decoration */}
      <CircuitDecoration id="hero" />
  
      {/* Mesh blobs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 60% at 10% 80%, ${C.turquoise}, transparent),
                            radial-gradient(ellipse 50% 50% at 90% 10%, ${C.cerulean}, transparent)`,
        }}
    />

      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-14 md:pt-20 pb-0 flex flex-col items-center text-center">

        <h1
          className="text-[2.8rem] md:text-[4rem] leading-[1.08] font-black mb-5 max-w-3xl"
          style={{ color: "#fff", letterSpacing: "-0.03em" }}
        >
          Finally Automate your Life{" "}
          <span style={{ color: C.turquoise }}>with AI.</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white/70 mb-9 max-w-2xl leading-relaxed">
          Get Personal AI Agents and Workflows built for you to save time, do better work, and stay ahead with AI.
        </p>

        {/* VSL - Vimeo Video */}
        <VimeoEmbed />

        <div className="flex flex-col items-center gap-2.5 pb-10">
          <CTAButton large href="https://highbridge.typeform.com/to/JDsTUgpz">
           Free AI Gap Diagnostic <ArrowRight size={18} />
          </CTAButton>
          <p className="text-white/45 text-sm">Takes 30 seconds</p>
        </div>
      </div>

      <div ref={sentinelRef} />

      {/* Trust section */}
<div
  className="relative z-10 border-t"
  style={{
    background: "rgba(255,255,255,0.045)",
    backdropFilter: "blur(10px)",
    borderColor: "rgba(255,255,255,0.10)",
  }}
>
  <div className="max-w-5xl mx-auto px-5 py-14 md:py-18">
    <div className="flex flex-col items-center text-center">
      <p className="text-white text-sm md:text-base font-bold uppercase tracking-[0.22em] mb-9">
        Built by professionals from
      </p>

      <div className="flex items-center justify-center gap-10 md:gap-20 mb-10">
        {[
          { src: mckinseyLogo, alt: "McKinsey" },
          { src: bainLogo, alt: "Bain" },
          { src: bcgLogo, alt: "BCG" },
        ].map(({ src, alt }) => (
          <ImageWithFallback
            key={alt}
            src={src}
            alt={alt}
            className={
              alt === "McKinsey"
                ? "h-[38px] md:h-12 w-auto object-contain"
                : "h-8 md:h-10 w-auto object-contain"
            }
          />
        ))}
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────────

const youDo = [
  <>
    <strong>Draft emails,</strong> presentations, and other content.
  </>,
  <>
    <strong>Summarise documents,</strong> meetings, and research.
  </>,
  <>
    <strong>Check facts,</strong> explore ideas, and get quick answers.
  </>,
];

const youDontKnow = [
  <>
    Which <strong>automation tools</strong> are actually worth learning?
  </>,
  <>
    How to <strong>vibe code</strong> with industry-standard tools such as{" "}
    <strong>Claude Code and OpenClaw</strong>?
  </>,
  <>
    How to move beyond <strong>prompting</strong> into powerful{" "}
    <strong>AI workflows and automations</strong>?
  </>,
];

function ProblemSection() {
  return (
    <section
      className="relative bg-white py-16 md:py-20 overflow-hidden"
      style={whitePatternStyle}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="mb-10">
          <h2
            className="text-[2rem] md:text-[2.5rem] font-black leading-tight"
            style={{ color: C.navy, letterSpacing: "-0.02em" }}
          >
            AI Is Moving Fast.
            <br />
            <span style={{ color: C.cerulean }}>You Are Not.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div
            className="rounded-2xl p-6 border"
            style={{ background: C.porcelain, borderColor: "rgba(10,31,68,0.06)" }}
          >
            <p
              className="text-[11px] font-black uppercase tracking-widest mb-5"
              style={{ color: C.cerulean }}
            >
              You may already use Claude, ChatGPT, or Gemini to...
            </p>
            <ul className="space-y-3.5">
              {youDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: C.turquoise }} />
                  <span className="text-[0.9rem] leading-snug font-medium" style={{ color: `${C.navy}CC` }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-6 border"
            style={{ background: "#FFF9F6", borderColor: "rgba(232,107,58,0.12)" }}
          >
            <p
              className="text-[11px] font-black uppercase tracking-widest mb-5"
              style={{ color: "#E86B3A" }}
            >
              But do you know...
            </p>
            <ul className="space-y-3.5">
              {youDontKnow.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-4 h-4 rounded-full border-2 shrink-0 mt-0.5"
                    style={{ borderColor: "rgba(232,107,58,0.4)" }}
                  />
                  <span className="text-[0.9rem] leading-snug font-medium" style={{ color: `${C.navy}CC` }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="rounded-2xl p-7 md:p-10"
          style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)` }}
        >
          <p className="text-white/50 text-base md:text-lg font-semibold mb-2">
            Everyone is already using prompts.
          </p>
          <p
            className="text-white text-xl md:text-2xl font-black leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Those staying competitive are building{" "}
            <span style={{ color: C.turquoise }}>AI workflows.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works — Vertical Flowchart ────────────────────────────────────────

function DeliverablesAccordion({
  stepNum,
  items,
}: {
  stepNum: string;
  items: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `step-${stepNum}-deliverables`;

  return (
    <div
      className="mt-4 border-t pt-3"
      style={{ borderColor: "rgba(10,31,68,0.08)" }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 rounded-lg py-1 text-left"
      >
        <span
          className="text-[0.825rem] font-bold"
          style={{ color: C.cerulean }}
        >
          {isOpen ? "Hide details" : "See what you’ll get"}
        </span>

        <ChevronDown
          size={17}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: C.cerulean }}
        />
      </button>

      <div
        id={contentId}
        className={`grid transition-all duration-300 ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: C.turquoise }}
                />

                <span
                  className="text-[0.825rem] font-medium leading-snug"
                  style={{ color: `${C.navy}99` }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Step = {
  num: string;
  badge: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  isFree?: boolean;
  deliverables: string[];
};

const steps: Step[] = [
  {
    num: "01",
    badge: "Free · 30-min call",
    title: "Start your Free AI Gap Diagnostic",
    body: "We map your role, workflows, bottlenecks, recurring tasks, and AI opportunities.",
    icon: <ClipboardList size={22} color="#fff" strokeWidth={1.8} />,
    isFree: true,
    deliverables: [
      "Learn how your AI literacy compares to your peers",
      "Understand which of your tasks are taking up too much time",
      "Get quick tips on how to optimise your workflow",
    ],
  },
  {
    num: "02",
    badge: "After 24hrs · Written report",
    title: "Get your AI Implementation Report",
    body: "A report showing you which Personal AI Agents and Workflows can help you most, which tools are worth your attention, and how we can help you implement them.",
    icon: <BarChart3 size={22} color="#fff" strokeWidth={1.8} />,
    deliverables: [
      "1 Personal AI Implementation Report",
      "1+ Recommended AI tools and automations depending on your workflow",
      "1+ Custom prompt or AI workflow template to immediately get started",
    ],
  },
  {
    num: "03",
    badge: "After 24hrs · Implementation Plan",
    title: "Done-for-You AI Agents",
    body: "Adopt your Personal AI Agents and Workflows and learn how to stop falling behind as AI moves faster.",
    icon: <Lightbulb size={22} color="#fff" strokeWidth={1.8} />,
    deliverables: [
      "Learn what AI tools you can implement yourself",
      "Know what AI tools we can help you implement",
      "Obtain tangible methods to prevent you from falling behind",
    ],
  },
];

function HexIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: 68,
        height: 68,
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: `linear-gradient(135deg, ${C.cerulean} 0%, ${C.turquoise} 100%)`,
        filter: "drop-shadow(0 4px 12px rgba(0,180,166,0.35))",
      }}
    >
      {icon}
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: C.porcelain, ...porcelainPatternStyle }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="mb-12">
          <h2
            className="text-[2rem] md:text-[2.5rem] font-black"
            style={{ color: C.navy, letterSpacing: "-0.02em" }}
          >
            How It Works
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.num} className="flex gap-6 md:gap-8">
                {/* Left spine: hex + connector in one flex-col */}
                <div className="flex flex-col items-center shrink-0" style={{ width: 68 }}>
                  <HexIcon icon={step.icon} />
                  {!isLast && (
                    <div className="flex flex-col items-center flex-1 w-full">
                      {/* Line grows to fill right-card height */}
                      <div
                        className="flex-1 w-0.5"
                        style={{
                          background: `linear-gradient(to bottom, ${C.cerulean}, ${C.turquoise})`,
                          minHeight: 32,
                        }}
                      />
                      {/* Arrowhead at bottom of line */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderTop: `9px solid ${C.turquoise}`,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Right: card — pb creates space the connector line fills */}
                <div className={`flex-1 pt-1 ${!isLast ? "pb-12" : ""}`}>
                  <div
                    className="rounded-2xl p-6 border"
                    style={{
                      background: step.isFree
                        ? "linear-gradient(135deg, rgba(0, 180, 166, 0.10) 0%, rgba(255,255,255,0.95) 48%, rgba(255,255,255,1) 100%)"
                        : "#fff",
                      borderColor: step.isFree ? "rgba(0, 180, 166, 0.28)" : "rgba(10,31,68,0.07)",
                      boxShadow: step.isFree
                        ? "0 8px 28px rgba(0,180,166,0.12)"
                        : "0 2px 20px rgba(10,31,68,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <span
                        className="text-[11px] font-black uppercase tracking-[0.12em]"
                        style={{ color: C.turquoise }}
                      >
                        Step {step.num}
                      </span>
                      <div
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                        style={{ background: C.blueLight }}
                      >
                        <Clock size={10} style={{ color: C.cerulean }} />
                        <span className="text-[11px] font-bold" style={{ color: C.cerulean }}>
                          {step.isFree ? (
                            <>
                              <span style={{ color: "#16A34A" }}>Free</span>
                              {" · 30-min call"}
                            </>
                          ) : (
                            step.badge
                          )}
                        </span>
                      </div>
                    </div>
                    <h3
                      className="font-black text-[1.1rem] mb-2"
                      style={{ color: C.navy, letterSpacing: "-0.01em" }}
                    >
                      {step.isFree ? (
                        <>
                          {"Start your "}
                          <span style={{ color: "#16A34A" }}>Free</span>
                          {" AI Diagnostic"}
                        </>
                      ) : (
                        step.title
                      )}
                    </h3>
                    <p
                      className="text-[0.875rem] leading-relaxed mb-3"
                      style={{ color: `${C.navy}88` }}
                    >
                      {step.body}
                    </p>

                    {/* Deliverables checklist — Step 02 only */}
                    <DeliverablesAccordion
                      stepNum={step.num}
                      items={step.deliverables}
                    />
                  </div>

                  {/* Bridging text between Step 01 and Step 02 */}
                  {i === 0 && (
                    <div
                      className="mt-4 mx-1 px-4 py-3 rounded-xl border flex items-start gap-2.5"
                      style={{ background: C.blueLight, borderColor: `rgba(30,111,168,0.15)` }}
                    >
                      <div
                        className="w-1 self-stretch rounded-full shrink-0"
                        style={{ background: `linear-gradient(to bottom, ${C.cerulean}, ${C.turquoise})`, minWidth: 3 }}
                      />
                      <p className="text-[0.8rem] font-semibold leading-relaxed" style={{ color: C.cerulean }}>
                        If there is a clear use case, get a personal AI implementation report starting at $497.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center text-center gap-3 mt-12">
          <CTAButton large href="https://highbridge.typeform.com/to/JDsTUgpz">
    Free AI Gap Diagnostic <ArrowRight size={18} />
  </CTAButton>
          <p className="text-sm" style={{ color: C.textMuted }}>
            Takes 30 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Mariana R.",
    photo: marianaPhoto,
    text: (
      <>
        The coaching helped me identify where AI actually fits into my work, and{" "}
        <strong>I now save time on repetitive tasks every week.</strong>
      </>
    ),
  },
  {
    name: "Daniel J.",
    photo: danielPhoto,
    text: (
      <>
        <strong>
          The personalised tools were very helpful — could use immediately for
          research, summaries, emails, and first drafts.
        </strong>{" "}
      </>
    ),
  },
  {
    name: "Sofia P.",
    photo: sofiaPhoto,
    text: (
      <>
        I used to only use ChatGPT and Claude, {" "}<strong>but I now know better tools.</strong>
      </>
    ),
  },
];

// ─── Pricing / Value Section ───────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section
      className="relative bg-white py-16 md:py-20 overflow-hidden"
      style={whitePatternStyle}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="mb-10">
          <h2
            className="text-[2rem] md:text-[2.5rem] font-black"
            style={{ color: C.navy, letterSpacing: "-0.02em" }}
          >
            What Others Are Saying
          </h2>
        </div>

        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border flex flex-col"
              style={{ background: C.porcelain, borderColor: "rgba(10,31,68,0.06)" }}
            >
              <StarRow />
              <blockquote
                className="text-[0.9rem] leading-relaxed mt-4 mb-5 flex-1 font-medium"
                style={{ color: `${C.navy}BB` }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "rgba(10,31,68,0.07)" }}
              >
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border-2"
                  style={{ borderColor: C.blueLight }}
                >
                  <ImageWithFallback
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-sm" style={{ color: C.navy }}>
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Faculty Ribbon ────────────────────────────────────────────────────────────

const firmLogos: Record<string, string> = {
  mckinsey: mckinseyLogo,
  bain: bainLogo,
  bcg: bcgLogo,
};

const facultyData: { name: string; formerly: string; firm: string; photo: string | null }[] = [
  { name: "Flavio Soriano",  formerly: "McKinsey & Company", firm: "mckinsey", photo: flavioPhoto },
  { name: "Adriano Paez",    formerly: "Bain & Company",      firm: "bain",     photo: adrianoPhoto },
  { name: "Tommaso Quagli",  formerly: "BCG",                 firm: "bcg",      photo: tommasoPhoto },
  { name: "Olga Nissen",     formerly: "McKinsey & Company", firm: "mckinsey", photo: olgaPhoto },
  { name: "Michael Ruske",   formerly: "BCG",                 firm: "bcg",      photo: michaelPhoto },
  { name: "Daniela Vargas",  formerly: "McKinsey & Company", firm: "mckinsey", photo: danielaVPhoto },
  { name: "Juliane Hoss",    formerly: "Bain & Company",      firm: "bain",     photo: julianePhoto },
  { name: "Bruno Dias",      formerly: "BCG",                 firm: "bcg",      photo: brunoPhoto },
  { name: "James Piazza",    formerly: "BCG",                 firm: "bcg",      photo: jamesPhoto },
  { name: "Afonso Rauh",     formerly: "Bain & Company",      firm: "bain",     photo: afonsoPhoto },
  { name: "Albert Rodriguez",formerly: "BCG",                 firm: "bcg",      photo: albertPhoto },
  { name: "Brendan Mullen",  formerly: "Bain & Company",      firm: "bain",     photo: brendanPhoto },
  { name: "Gautam Patil",    formerly: "BCG",                 firm: "bcg",      photo: gautamPhoto },
  { name: "Adriane Hauer",   formerly: "McKinsey & Company", firm: "mckinsey", photo: adrianePhoto },
];

function FacultyCard({ member }: { member: typeof facultyData[number] }) {
  const initials = member.name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div
      className="flex flex-col items-center text-center shrink-0 bg-white rounded-2xl px-5 py-6"
      style={{
        width: 152,
        boxShadow: "0 2px 16px rgba(10,31,68,0.08)",
        border: "1px solid rgba(10,31,68,0.06)",
      }}
    >
      {/* Name */}
      <p
        className="font-bold text-[0.8rem] leading-tight mb-4 w-full"
        style={{ color: C.navy }}
      >
        {member.name}
      </p>

      {/* Circular photo */}
      <div
        className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 mb-4"
        style={{
          background: `linear-gradient(135deg, ${C.cerulean}, ${C.turquoise})`,
          padding: member.photo ? 0 : 0,
        }}
      >
        {member.photo ? (
          <ImageWithFallback
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white font-black text-lg">{initials}</span>
          </div>
        )}
      </div>

      {/* Formerly with */}
      <p
        className="text-[10px] font-semibold uppercase tracking-wider mb-2"
        style={{ color: C.textMuted }}
      >
        Formerly with
      </p>

      {/* Firm logo — white originals inverted to black for white card */}
      <div
        className={[
          "flex items-center justify-center",
          member.firm === "mckinsey" ? "h-[29px]" : "h-6",
        ].join(" ")}
      >
        <ImageWithFallback
          src={firmLogos[member.firm]}
          alt={member.formerly}
          className={[
            "w-auto object-contain",
            member.firm === "mckinsey"
              ? "max-h-[29px] max-w-[96px]"
              : "max-h-full max-w-[80px]",
          ].join(" ")}
          style={{ filter: "brightness(0)" }}
        />
      </div>
    </div>
  );
}

function FacultyRibbon() {
  // Duplicate the list for seamless infinite loop
  const doubled = [...facultyData, ...facultyData];

  return (
    <div className="mt-6 overflow-hidden" style={{ cursor: "grab" }}>
      {/* Inject keyframe animation */}
      <style>{`
        @keyframes hba-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hba-track {
          animation: hba-marquee 55s linear infinite;
          will-change: transform;
        }
        .hba-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="hba-track flex gap-4" style={{ width: "max-content" }}>
        {doubled.map((member, i) => (
          <FacultyCard key={`${member.name}-${i}`} member={member} />
        ))}
      </div>
    </div>
  );
}

// ─── Why HBA ───────────────────────────────────────────────────────────────────

function WhyHBASection() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: C.porcelain, ...porcelainPatternStyle }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="mb-10">
          <h2
            className="text-[2rem] md:text-[2.5rem] font-black"
            style={{ color: C.navy, letterSpacing: "-0.02em" }}
          >
            Why High Bridge Academy?
          </h2>
        </div>

        <div
          className="bg-white rounded-2xl p-7 md:p-10 border mb-5"
          style={{
            borderColor: "rgba(10,31,68,0.07)",
            boxShadow: "0 2px 16px rgba(10,31,68,0.05)",
          }}
        >
          <p
            className="text-lg md:text-[1.2rem] font-semibold leading-relaxed"
            style={{ color: C.navy }}
          >
            We come from {" "}
            <span className="font-black" style={{ color: C.cerulean }}>
              McKinsey, Bain, and BCG
            </span>
            , where professionals use AI agents where speed, structure, and judgment matter.
          </p>
        </div>

      </div>

      {/* Faculty ribbon — full-width, overflows the constrained container */}
      <FacultyRibbon />

      <div className="h-4" />
    </section>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
      <section
        className="relative pt-16 pb-10 md:pt-24 md:pb-12 overflow-hidden"
        style={{
          background: `linear-gradient(150deg, #06172f 0%, #0A1F44 55%, #123B63 100%)`,
        }}
      >
      {/* Background pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          ...darkPatternStyle,
        }}
      />

      {/* Darkening layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.18)",
        }}
      />

      {/* Circuit SVG decoration */}
      <CircuitDecoration id="cta" />

      {/* Mesh blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 70% at 80% 100%, ${C.turquoise}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <h2
          className="text-[2.1rem] md:text-[3rem] font-black text-white mb-4 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Build Your <span style={{ color: C.turquoise }}>AI Advantage</span>
        </h2>

        <p className="text-white/65 text-lg md:text-xl max-w-lg mx-auto mb-9 leading-relaxed font-semibold">
          Start with a free AI Gap Diagnostic and discover how AI can stop you from lagging behind.
        </p>

        <div className="flex flex-col items-center gap-3">
  <CTAButton large href="https://highbridge.typeform.com/to/JDsTUgpz">
    Free AI Gap Diagnostic <ArrowRight size={18} />
  </CTAButton>
  <p className="text-white/40 text-sm">Takes 30 seconds.</p>
</div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    href: "https://www.facebook.com/HighBridge-Management-Academy-104733991001428/?epa=SEARCH_BOX",
    label: "Facebook",
    icon: <Facebook size={17} />,
  },
  {
    href: "https://www.linkedin.com/company/highbridge-academy/?viewAsMember=true",
    label: "LinkedIn",
    icon: <Linkedin size={17} />,
  },
  {
    href: "https://www.instagram.com/highbridgeacademy/",
    label: "Instagram",
    icon: <Instagram size={17} />,
  },
  {
    href: "https://www.youtube.com/channel/UCJPuUlJWKc1j7tqvbdMvgNw",
    label: "YouTube",
    icon: <Youtube size={17} />,
  },
  {
    href: "https://uk.trustpilot.com/review/highbridgeacademy.com?utm_medium=trustbox&utm_source=MicroReviewCount",
    label: "Trustpilot",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.582 7.953H22l-6.29 4.567 2.582 7.954L12 17.907l-6.292 4.567 2.582-7.954L2 9.953h7.418z" />
      </svg>
    ),
  },
];

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 hover:scale-110"
      style={{
        color: "rgba(255,255,255,0.65)",
        background: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.15)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(0,180,166,0.2)";
        el.style.borderColor = "rgba(0,180,166,0.5)";
        el.style.color = C.turquoise;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(255,255,255,0.08)";
        el.style.borderColor = "rgba(255,255,255,0.15)";
        el.style.color = "rgba(255,255,255,0.65)";
      }}
    >
      {icon}
    </a>
  );
}

function Footer() {
  const footerGradient = `linear-gradient(135deg, #1a2060 0%, ${C.cerulean} 55%, ${C.turquoise} 100%)`;

  return (
    <footer className="relative overflow-hidden" style={{ background: footerGradient }}>
      {/* Main footer body */}
      <div className="max-w-5xl mx-auto px-5 pt-8 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-8">
          <div className="flex flex-col gap-5">
            <ImageWithFallback
              src={hbaLogoWhite}
              alt="High Bridge Academy"
              className="h-12 w-auto object-contain self-start"
            />

            <address
              className="not-italic text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <span className="block font-semibold text-white/75">High Bridge FZ LLC</span>
              Dubai Media City Building 5,<br />
              Al Sufouh 2<br />
              PO BOX 502944, Dubai<br />
              UAE
            </address>

            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ href, label, icon }) => (
                <SocialIcon key={label} href={href} label={label} icon={icon} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] font-black uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Contact Us
            </p>

            <a
              href="mailto:hello@highbridgeacademy.com"
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2,4 L12,13 L22,4" />
              </svg>
              hello@highbridgeacademy.com
            </a>
          </div>
        </div>

        <div
          className="w-full h-px mb-5"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />

        <p
          className="text-[12px] font-medium text-center"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          © 2026 High Bridge Management Academy
        </p>
      </div>
    </footer>
  );
}

// ─── Sticky Mobile CTA ─────────────────────────────────────────────────────────

function StickyMobileCTA({ visible }: { visible: boolean }) {
  return (
    <div
      className={[
        "md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300",
        "bg-white border-t px-4 py-3",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      style={{
        borderColor: "rgba(10,31,68,0.1)",
        paddingBottom: "max(12px, env(safe-area-inset-bottom))",
        boxShadow: "0 -4px 20px rgba(10,31,68,0.08)",
      }}
    >
      <a
        href="https://highbridge.typeform.com/to/JDsTUgpz"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 font-black text-white rounded-2xl py-3.5 text-[0.95rem] min-h-[52px] transition-all active:scale-[0.98]"
        style={{
          background: `linear-gradient(135deg, ${C.cerulean} 0%, ${C.turquoise} 100%)`,
          boxShadow: `0 4px 16px rgba(0,180,166,0.3)`,
        }}
      >
        Start Free AI Gap Diagnostic <ArrowRight size={16} />
      </a>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [showSticky, setShowSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
  <div className="min-h-screen">
    <Nav />
    <HeroSection sentinelRef={sentinelRef} />
    <ProblemSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <WhyHBASection />
    <FinalCTASection />
    <Footer />
    <div className="md:hidden h-20" />
    <StickyMobileCTA visible={showSticky} />
  </div>
);
}
