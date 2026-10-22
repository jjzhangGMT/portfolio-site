import { useMemo, useState } from 'react'
import SplitText from '@/components/SplitText'
import GradientText from '@/components/GradientText'
import CountUp from '@/components/CountUp'
import CardNav from '@/components/CardNav'
import CardSwap, { Card } from '@/components/CardSwap'
import SpotlightCard from '@/components/SpotlightCard'
import AnimatedContent from '@/components/AnimatedContent'
import DecryptedText from '@/components/DecryptedText'
import ColorBends from '@/components/ColorBends'
import {
  education,
  experiences,
  navItems,
  portfolioFilters,
  portfolioItems,
  profile,
  projects,
  stats,
  strengths,
  type PortfolioCat,
} from '@/data/portfolio'
import { skillSections } from '@/data/skills'

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string
  title: string
  sub?: string
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-14">
      <p className="mb-3 font-[family-name:var(--font-mono)] text-xs tracking-[0.22em] text-[var(--color-accent)] uppercase">
        {eyebrow}
      </p>
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] font-bold tracking-tight">
        {title}
      </h2>
      {sub ? <p className="text-[1.05rem] leading-relaxed text-[var(--color-ink-dim)]">{sub}</p> : null}
    </div>
  )
}

export default function App() {
  const [filter, setFilter] = useState<PortfolioCat>('all')
  const [activeProject, setActiveProject] = useState(0)

  const filtered = useMemo(
    () => (filter === 'all' ? portfolioItems : portfolioItems.filter((p) => p.cat === filter)),
    [filter],
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      {/* React Bits Color Bends — source vendored locally, runs via three.js */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <ColorBends
          className="h-full w-full"
          colors={['#070605', '#0f2e2a', '#1a4a42', '#3d2a12', '#1a2740', '#0c0b09']}
          rotation={30}
          speed={0.22}
          scale={1.15}
          frequency={1.05}
          warpStrength={1.1}
          mouseInfluence={0.5}
          parallax={0.4}
          noise={0.1}
          intensity={0.72}
          bandWidth={1.05}
          transparent
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(7,6,5,0.72)_100%)]" />
      </div>

      <div className="relative z-10">
        <CardNav
          logo={
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
              jjzhang<em className="not-italic text-[var(--color-accent)]">.zone</em>
            </span>
          }
          logoHref="#top"
          items={navItems}
          cta={{ label: '联系', href: '#contact' }}
          theme="dark"
          surface="glass"
          openOn="click"
          cardEffect="unfold"
          accentColor="#e8a54b"
          maxWidth={1120}
          className="!fixed top-0 right-0 left-0 z-50"
        />

        <header id="top" className="relative flex min-h-[100svh] flex-col justify-end px-6 pt-28 pb-16 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mb-6 font-[family-name:var(--font-mono)] text-xs tracking-[0.28em] text-[var(--color-accent-2)] uppercase">
              {profile.kicker}
            </p>

            <div className="mb-2 font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,8.5rem)] leading-[0.92] font-bold tracking-[-0.04em]">
              <GradientText
                colors={['#f2efe6', '#e8a54b', '#3ecfb2', '#f2efe6']}
                animationSpeed={6}
                variant="flow"
                className="!text-[clamp(3rem,12vw,8.5rem)] !leading-[0.92] !font-bold"
              >
                {profile.brand}
              </GradientText>
            </div>

            <div className="mb-8 max-w-3xl">
              <SplitText
                text={`${profile.name} · ${profile.role}`}
                tag="h1"
                className="font-[family-name:var(--font-display)] text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold text-[var(--color-ink)]"
                splitType="chars"
                effect="rise"
                trigger="load"
                delay={40}
                duration={0.7}
              />
            </div>

            <AnimatedContent distance={24} duration={0.8} blur={3}>
              <p className="mb-12 max-w-2xl text-base leading-[1.85] text-[var(--color-ink-dim)] md:text-lg">
                {profile.lead}
              </p>
            </AnimatedContent>

            <div className="grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-[var(--color-line)] pt-5">
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-accent)] md:text-4xl">
                    <CountUp to={s.value} duration={1.6} suffix={s.suffix} trigger="view" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-faint)]">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 font-[family-name:var(--font-mono)] text-sm leading-relaxed text-[var(--color-ink-dim)]">
              技术栈{' '}
              <span className="text-[var(--color-ink)]">React / TypeScript / Vue / Electron / Python</span>
              <span className="mx-3 text-[var(--color-ink-faint)]">·</span>
              邮箱{' '}
              <a className="text-[var(--color-accent-2)] hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
          </div>
        </header>

        {/* STRENGTHS — clean spotlight cards, no demo visuals */}
        <section id="strengths" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="01 — Strengths"
              title="核心优势"
              sub="从需求到落地的全链路交付，而不只是写页面。"
            />
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {strengths.map((item, i) => (
                <AnimatedContent key={item.label} distance={28} delay={i * 0.08} duration={0.7}>
                  <SpotlightCard
                    theme="dark"
                    spotlightColor="rgba(232, 165, 75, 0.16)"
                    className="!h-full !rounded-2xl !p-7 md:!p-8"
                  >
                    <span className="mb-4 block font-[family-name:var(--font-mono)] text-xs tracking-wide text-[var(--color-accent)]">
                      {item.label}
                    </span>
                    <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.8] text-[var(--color-ink-dim)]">{item.description}</p>
                  </SpotlightCard>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS — static full listing */}
        <section id="skills" className="border-y border-[var(--color-line)] bg-[var(--color-surface-2)]/80 px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="02 — Skills"
              title="相关技能"
              sub="React / Vue 双生态，可视化与工程化是主战场，向后端与 Agent 延伸。"
            />
            <div className="space-y-12">
              {skillSections.map((group, i) => (
                <AnimatedContent key={group.title} distance={24} delay={i * 0.06} duration={0.65}>
                  <div>
                    <h3 className="mb-5 text-sm font-semibold tracking-wide text-[var(--color-accent-2)]">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {group.chips.map((chip) => (
                        <span
                          key={chip.label}
                          className={`rounded-lg border px-3.5 py-1.5 text-sm transition ${
                            chip.major
                              ? 'border-[rgba(110,168,255,0.4)] bg-[var(--color-panel)] text-[var(--color-ink)]'
                              : 'border-[var(--color-line)] bg-[var(--color-panel)]/60 text-[var(--color-ink-dim)] hover:border-[rgba(62,207,178,0.4)] hover:text-[var(--color-ink)]'
                          }`}
                        >
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE — clean timeline */}
        <section id="experience" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="03 — Experience"
              title="工作经历"
              sub="从业务开发到技术负责人：先做深交付，再做宽体系。"
            />
            <div className="relative flex flex-col gap-16 pl-2 md:gap-20 md:pl-4">
              <div
                className="absolute top-3 bottom-8 left-[11px] w-px bg-gradient-to-b from-[var(--color-accent-2)] via-[var(--color-accent-3)] to-transparent md:left-[19px]"
                aria-hidden="true"
              />
              {experiences.map((exp, i) => (
                <AnimatedContent key={exp.company} distance={36} delay={i * 0.1} duration={0.75}>
                  <article className="relative pl-10 md:pl-14">
                    <span
                      className="absolute top-2 left-0 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--color-accent-2)] bg-[var(--color-surface)] md:left-2"
                      aria-hidden="true"
                    />
                    <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{exp.company}</h3>
                      <span className="text-sm font-semibold text-[var(--color-accent-3)]">{exp.role}</span>
                      <span className="w-full font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)] md:ml-auto md:w-auto">
                        {exp.time}
                      </span>
                    </div>
                    <p className="mb-6 max-w-3xl text-[0.95rem] leading-[1.85] text-[var(--color-ink-dim)]">{exp.desc}</p>
                    <ul className="max-w-3xl space-y-3.5">
                      {exp.points.map((p) => (
                        <li
                          key={p}
                          className="relative pl-4 text-[0.95rem] leading-[1.8] text-[var(--color-ink-dim)] before:absolute before:left-0 before:text-[var(--color-accent)] before:content-['▸']"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-[var(--color-line)] px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="04 — Projects"
              title="代表项目"
              sub="四个项目，覆盖智能体平台、标准化体系、政务大屏与研发效能。"
            />
            <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div className="relative mx-auto flex h-[460px] w-full max-w-lg items-center justify-center lg:sticky lg:top-28 lg:h-[520px]">
                <CardSwap
                  width={340}
                  height={420}
                  cardDistance={68}
                  verticalDistance={70}
                  skewAmount={8}
                  delay={4200}
                  autoplay
                  pauseOnHover
                  draggable
                  theme="dark"
                  onChange={setActiveProject}
                  onCardClick={setActiveProject}
                >
                  {projects.map((p, i) => (
                    <Card
                      key={p.title}
                      customClass="!overflow-hidden !border !border-white/10 !bg-[#16130f] !p-6 !text-[#f2efe6]"
                    >
                      <p className="mb-2 font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-[var(--color-accent)] uppercase">
                        0{i + 1} · {p.tag}
                      </p>
                      <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl leading-snug font-bold">
                        {p.title}
                      </h3>
                      <p className="mb-4 line-clamp-4 text-sm text-[var(--color-ink-dim)]">{p.summary}</p>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)]">
                        {p.time}
                      </p>
                    </Card>
                  ))}
                </CardSwap>
              </div>

              <AnimatedContent distance={40} duration={0.8} blur={4} key={activeProject}>
                <div className="max-w-2xl">
                  <p className="mb-3 font-[family-name:var(--font-mono)] text-xs tracking-widest text-[var(--color-accent)] uppercase">
                    {projects[activeProject].tag} · {projects[activeProject].time}
                  </p>
                  <h3 className="mb-8 font-[family-name:var(--font-display)] text-3xl leading-snug font-bold">
                    {projects[activeProject].title}
                  </h3>

                  <div className="mb-8">
                    <h4 className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-accent-2)]">
                      项目背景
                    </h4>
                    <p className="text-[0.95rem] leading-[1.85] text-[var(--color-ink-dim)]">
                      {projects[activeProject].bg}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-semibold tracking-wide text-[var(--color-accent-2)]">
                      核心贡献
                    </h4>
                    <ul className="space-y-4 text-[0.95rem] text-[var(--color-ink-dim)]">
                      {projects[activeProject].points.map((pt) => (
                        <li
                          key={pt}
                          className="border-l-2 border-[var(--color-accent-2)] py-0.5 pl-4 leading-[1.85]"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-accent-2)]">
                      项目成果
                    </h4>
                    <p className="text-[0.95rem] leading-[1.85] text-[var(--color-ink-dim)]">
                      {projects[activeProject].outcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3.5"
                      >
                        <div className="font-[family-name:var(--font-mono)] text-lg text-[var(--color-accent-2)]">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs text-[var(--color-ink-faint)]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="bg-[var(--color-surface-2)]/60 px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="05 — Portfolio"
              title="智慧园区项目集"
              sub="智汇元产品线前端仓库一瞥 —— 25+ 个微前端子应用与独立产品，按业务域筛选。"
            />
            <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="项目分类筛选">
              {portfolioFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`rounded-md border px-3.5 py-1.5 text-sm transition ${
                    filter === f.id
                      ? 'border-transparent bg-[var(--color-accent)] font-semibold text-[#0c0b09]'
                      : 'border-[var(--color-line)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <SpotlightCard
                  key={item.en}
                  theme="dark"
                  spotlightColor="rgba(232, 165, 75, 0.18)"
                  className="!rounded-2xl !p-5"
                >
                  <span className="mb-2 block text-[11px] tracking-wide text-[var(--color-accent)]">
                    {item.catLabel}
                  </span>
                  <h4 className="mb-1 font-[family-name:var(--font-display)] text-lg font-semibold">{item.title}</h4>
                  <span className="mb-3 block font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-ink-faint)]">
                    {item.en}
                  </span>
                  <p className="mb-4 text-sm text-[var(--color-ink-dim)]">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-[rgba(110,168,255,0.12)] px-2 py-0.5 text-[11px] text-[var(--color-accent-3)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-28 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-xs tracking-[0.22em] text-[var(--color-accent)] uppercase">
              06 — Contact
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
              <DecryptedText
                text="一起做点靠谱的产品"
                animateOn="view"
                sequential
                speed={35}
                className="font-[family-name:var(--font-display)]"
                encryptedClassName="text-[var(--color-accent)]"
              />
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-[var(--color-ink-dim)]">
              如果你在看智慧园区、数据可视化或智能体方向的前端负责人 / 资深工程师机会，欢迎聊聊。
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--color-ink-dim)]">
              <span>
                {education.school} · {education.major}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)]">
                {education.time}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
              >
                <span className="text-[var(--color-accent-2)]">Phone</span>
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
              >
                <span className="text-[var(--color-accent-2)]">Email</span>
                {profile.email}
              </a>
              <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-[var(--color-ink-dim)]">
                <span className="text-[var(--color-accent-2)]">Base</span>
                {profile.location}
              </span>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--color-line)] px-6 py-10 text-center">
          <code className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)]">
            React · Vue · ECharts · Cesium · FastAPI · LLM Agent — {profile.name}个人主页
          </code>
        </footer>
      </div>
    </div>
  )
}
