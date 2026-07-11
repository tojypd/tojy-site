import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  Mail,
  MapPin,
  Play,
  X,
} from "lucide-react";
import { TEAM, WORKS, HERO_IMAGE } from "./data";

// ─────────────────────────────────────────────────────────────────────────────
// Noise texture (SVG inline)
// ─────────────────────────────────────────────────────────────────────────────
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ─────────────────────────────────────────────────────────────────────────────
// Data는 ./data.ts 에서 관리합니다 (사진 교체·작품 추가는 그 파일에서)
// ─────────────────────────────────────────────────────────────────────────────
// 카테고리 뱃지는 모두 동일한 붉은 톤으로 통일 표시합니다.
const CATEGORY_BADGE_STYLE =
  "bg-red-900/60 text-red-300 border-red-700/50";

// ─────────────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    "전체",
    ...Array.from(new Set(WORKS.map((w) => w.category))),
  ];
  const filtered =
    activeFilter === "전체"
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const NAV_ITEMS = [
    { id: "home", label: "홈" },
    { id: "about", label: "소개" },
    { id: "team", label: "팀" },
    { id: "works", label: "작품" },
    { id: "contact", label: "연락" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur border-b border-white/10 shadow-lg shadow-black/60" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3"
          >
            <span
              className="text-2xl font-black tracking-[0.2em] text-white"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              T<span className="text-red-600">O</span>JY
            </span>
            <span className="hidden sm:inline text-[10px] text-white/40 tracking-[0.3em] font-mono uppercase">
              투제이와이
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs text-white/50 hover:text-white transition-colors tracking-[0.15em] uppercase font-mono"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-xs text-white/70 py-1 uppercase tracking-widest font-mono"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <img
          src={HERO_IMAGE}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-red-600" />
              <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                Video Content Production
              </p>
            </div>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-8 text-white tracking-tight"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              20년의 경험,
              <br />
              최고의 콘텐츠
            </h1>
            <div className="w-20 h-1 bg-red-600 mb-8" />
            <p className="text-lg sm:text-xl text-white/60 mb-12 leading-relaxed font-light">
              영상 콘텐츠 기획 · 제작 전문 프로덕션
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("works")}
                className="group flex items-center gap-3 px-7 py-4 bg-red-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-red-500 transition-colors"
              >
                <Play
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />{" "}
                작품 보기
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-3 px-7 py-4 border border-white/20 text-white/70 hover:border-white/50 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors"
              >
                <Mail size={15} /> 문의하기
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/70 transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-28 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          TOJY
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-red-600" />
                <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                  About Us
                </p>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                투제이와이에 대하여
              </h2>
              <div className="w-12 h-0.5 bg-red-600 mb-8" />
              <p className="text-white/60 leading-loose text-base sm:text-lg">
                투제이와이(TOJY)는 20년 경력의 두 프로듀서,
                정지윤과 조재영이 함께 설립한 영상 콘텐츠
                기획·제작 전문 회사입니다. 방송, OTT, 리얼리티,
                유튜브 채널, 라이브 커머스까지 다양한 플랫폼에서
                검증된 크리에이티브로 시청자와 마켓이 모두
                인정하는 콘텐츠를 만들어갑니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "2022", label: "설립 연도" },
                { value: "20년+", label: "제작 경력" },
                { value: "50+", label: "주요 프로그램" },
                { value: "15+", label: "방송사 파트너" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative border border-white/10 p-6 hover:border-red-600/40 transition-colors group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p
                    className="text-3xl sm:text-4xl font-black text-red-500 mb-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 tracking-widest uppercase font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* ── TEAM ────────────────────────────────────────────────────────── */}
      <section
        id="team"
        className="py-28 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="absolute -right-20 top-0 bottom-0 w-64 bg-red-600/5 -skew-x-12 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-red-600" />
              <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                Our Team
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              대표 프로듀서
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="border border-white/10 hover:border-red-600/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
                <div className="p-6 sm:p-8 bg-[#0d0d0d]">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden border-2 border-white/10">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-black text-white mb-1"
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-red-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-1.5">
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-white/40 hover:text-white/70 text-xs font-mono transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[10px] text-white/30 font-mono tracking-[0.3em] uppercase mb-3">
                      주요 작품
                    </p>
                    <ul className="space-y-1.5">
                      {member.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                        >
                          <span className="text-red-600 mt-0.5 shrink-0 font-bold">
                            ▸
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* ── WORKS ───────────────────────────────────────────────────────── */}
      <section
        id="works"
        className="py-28 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-red-600" />
              <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                Portfolio
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              주요 작품
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 text-[11px] font-mono tracking-widest uppercase border transition-all ${activeFilter === cat ? "bg-red-600 text-white border-red-600" : "border-white/15 text-white/40 hover:border-red-600/40 hover:text-white/70"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((work) => (
              <div
                key={work.id}
                className="border border-white/10 hover:border-red-600/30 hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-[#0d0d0d]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-44 object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 border font-mono uppercase tracking-wider ${CATEGORY_BADGE_STYLE}`}
                    >
                      {work.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 border border-white/10 px-2 py-0.5">
                    <span className="text-[10px] text-white/60 font-mono">
                      {work.network}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-1.5 text-sm leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-3">
                    {work.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[10px] text-white/30 font-mono">
                      {work.year}
                    </span>
                    <span className="text-[10px] text-red-500/70 font-mono">
                      {work.producer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-red-600" />
              <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                Contact
              </p>
              <div className="w-8 h-px bg-red-600" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              함께 만들어요
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mx-auto mb-8" />
            <p className="text-white/50 leading-relaxed mb-12 text-base sm:text-lg">
              방송 프로그램, OTT 콘텐츠, 유튜브 채널, 라이브
              커머스 등<br className="hidden sm:inline" />
              모든 영상 콘텐츠 기획·제작 관련 문의를 환영합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {[
                {
                  label: "정지윤 대표",
                  email: "jjungpd@gmail.com",
                },
                {
                  label: "조재영 대표",
                  email: "Jojaeyoung.pd@gmail.com",
                },
              ].map(({ label, email }) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 border border-white/10 hover:border-red-600/40 px-6 py-4 transition-colors group"
                >
                  <Mail
                    size={16}
                    className="text-red-500 shrink-0"
                  />
                  <div className="text-left">
                    <p className="text-[10px] text-white/30 mb-1 font-mono uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {email}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-lg font-black tracking-[0.2em] text-white"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              T<span className="text-red-600">O</span>JY
            </span>
            <span className="text-[10px] text-white/30 font-mono">
              투제이와이
            </span>
          </div>
          <p className="text-[11px] text-white/25 font-mono">
            © 2024 투제이와이(TOJY). All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-white/30 font-mono">
            <MapPin size={11} />
            <span>Republic of Korea</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
