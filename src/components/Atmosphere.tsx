import { useEffect, useRef } from 'react'

/**
 * React Bits–inspired offline background (Canvas 2D only).
 * Combines aurora ribbons, soft light rays, and a constellation particle field.
 * No WebGL / no CDN — safe for intranet deploy.
 */
export default function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let raf = 0
    let scrollY = 0
    let last = performance.now()

    const mouse = { x: 0.5, y: 0.35, tx: 0.5, ty: 0.35, inside: false }
    const ripples: { x: number; y: number; age: number }[] = []

    type Particle = {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      r: number
      hue: number
      tw: number
      ph: number
    }

    let particles: Particle[] = []

    const colors = {
      teal: [62, 207, 178] as const,
      amber: [232, 165, 75] as const,
      blue: [110, 168, 255] as const,
      mist: [242, 239, 230] as const,
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(160, Math.round((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.35 + Math.random() * 0.65,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.04 - Math.random() * 0.12,
        r: 0.6 + Math.random() * 1.8,
        hue: Math.random(),
        tw: 0.5 + Math.random() * 1.5,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    const mix = (a: readonly number[], b: readonly number[], t: number): number[] => [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
    ]

    const rgba = (c: readonly number[], a: number) =>
      `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`

    /** Soft flowing aurora bands (Liquid Ether / Aurora vibe) */
    const drawAurora = (time: number) => {
      const bands = [
        { y: 0.18, amp: 0.07, speed: 0.22, color: colors.teal, alpha: 0.22 },
        { y: 0.42, amp: 0.1, speed: 0.16, color: colors.blue, alpha: 0.16 },
        { y: 0.68, amp: 0.08, speed: 0.2, color: colors.amber, alpha: 0.14 },
      ]

      const mx = (mouse.x - 0.5) * 80
      const my = (mouse.y - 0.5) * 40

      for (const band of bands) {
        const baseY = band.y * h + my * 0.35 + scrollY * 0.02
        ctx.beginPath()
        ctx.moveTo(-40, h + 40)
        ctx.lineTo(-40, baseY)

        const steps = Math.ceil(w / 18) + 2
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * (w + 80) - 40
          const n1 = Math.sin(x * 0.0035 + time * band.speed + band.y * 4)
          const n2 = Math.sin(x * 0.008 + time * band.speed * 1.4 + 1.7)
          const n3 = Math.cos(x * 0.002 + time * 0.11)
          const y =
            baseY +
            (n1 * 0.55 + n2 * 0.3 + n3 * 0.15) * band.amp * h +
            mx * 0.15 * Math.sin(i * 0.2)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(w + 40, h + 40)
        ctx.closePath()

        const g = ctx.createLinearGradient(0, baseY - h * 0.25, 0, baseY + h * 0.45)
        g.addColorStop(0, rgba(band.color, 0))
        g.addColorStop(0.35, rgba(band.color, band.alpha))
        g.addColorStop(0.7, rgba(band.color, band.alpha * 0.35))
        g.addColorStop(1, rgba(band.color, 0))
        ctx.fillStyle = g
        ctx.fill()
      }
    }

    /** Volumetric light rays from top (LightRays vibe) */
    const drawRays = (time: number) => {
      const originX = w * (0.5 + (mouse.x - 0.5) * 0.25)
      const originY = -h * 0.05
      const rayCount = 9

      ctx.save()
      ctx.globalCompositeOperation = 'lighter'

      for (let i = 0; i < rayCount; i++) {
        const t = i / (rayCount - 1)
        const sway = Math.sin(time * 0.35 + i * 0.7) * 0.04
        const angle = -0.55 + t * 1.1 + sway + (mouse.x - 0.5) * 0.2
        const length = h * (1.15 + Math.sin(time * 0.4 + i) * 0.08)
        const spread = 0.035 + t * 0.02

        const tipX = originX + Math.sin(angle) * length
        const tipY = originY + Math.cos(angle) * length
        const ox = Math.cos(angle) * spread * w
        const oy = -Math.sin(angle) * spread * w

        const g = ctx.createLinearGradient(originX, originY, tipX, tipY)
        const c = mix(colors.mist, i % 2 === 0 ? colors.teal : colors.amber, 0.55)
        g.addColorStop(0, rgba(c, 0.14))
        g.addColorStop(0.45, rgba(c, 0.045))
        g.addColorStop(1, rgba(c, 0))

        ctx.beginPath()
        ctx.moveTo(originX - ox * 0.2, originY - oy * 0.2)
        ctx.lineTo(originX + ox * 0.2, originY + oy * 0.2)
        ctx.lineTo(tipX + ox, tipY + oy)
        ctx.lineTo(tipX - ox, tipY - oy)
        ctx.closePath()
        ctx.fillStyle = g
        ctx.fill()
      }

      // Source glow
      const glow = ctx.createRadialGradient(originX, 0, 0, originX, 0, w * 0.35)
      glow.addColorStop(0, rgba(colors.teal, 0.18))
      glow.addColorStop(0.4, rgba(colors.amber, 0.06))
      glow.addColorStop(1, rgba(colors.amber, 0))
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h * 0.55)
      ctx.restore()
    }

    /** Constellation particles (Particles vibe) */
    const drawParticles = (time: number, dt: number) => {
      const mx = mouse.x * w
      const my = mouse.y * h
      const linkDist = Math.min(140, w * 0.12)

      for (const p of particles) {
        // gentle drift + mouse attract/repel
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.hypot(dx, dy) || 1
        if (mouse.inside && dist < 220) {
          const f = ((220 - dist) / 220) * 0.035 * p.z
          p.vx += (dx / dist) * f * (mouse.inside ? 1 : 0)
          p.vy += (dy / dist) * f
        }

        p.x += p.vx * p.z * 60 * dt
        p.y += p.vy * p.z * 60 * dt + Math.sin(time * p.tw + p.ph) * 0.08
        p.vx *= 0.985
        p.vy = p.vy * 0.985 - 0.002

        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
      }

      // links
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d > linkDist) continue
          const nearMouse =
            mouse.inside && Math.hypot((a.x + b.x) / 2 - mx, (a.y + b.y) / 2 - my) < 180
          const alpha = (1 - d / linkDist) * (nearMouse ? 0.35 : 0.12) * Math.min(a.z, b.z)
          ctx.strokeStyle = rgba(nearMouse ? colors.teal : colors.mist, alpha)
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // dots
      for (const p of particles) {
        const tw = 0.55 + 0.45 * Math.sin(time * p.tw + p.ph)
        const c =
          p.hue < 0.33 ? colors.teal : p.hue < 0.66 ? colors.amber : colors.mist
        const r = p.r * p.z * (0.85 + tw * 0.25)
        ctx.globalAlpha = (0.35 + 0.45 * tw) * p.z
        ctx.fillStyle = rgba(c, 1)
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
        if (r > 1.2) {
          ctx.globalAlpha = 0.12 * tw * p.z
          ctx.beginPath()
          ctx.arc(p.x, p.y, r * 3.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    /** Click ripples */
    const drawRipples = (dt: number) => {
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.age += dt
        if (r.age > 1.4) {
          ripples.splice(i, 1)
          continue
        }
        const t = r.age / 1.4
        const radius = 20 + t * 180
        const alpha = (1 - t) * 0.35
        ctx.strokeStyle = rgba(colors.teal, alpha)
        ctx.lineWidth = 2 * (1 - t)
        ctx.beginPath()
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.strokeStyle = rgba(colors.amber, alpha * 0.6)
        ctx.beginPath()
        ctx.arc(r.x, r.y, radius * 0.65, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    /** Fine film grain */
    const drawGrain = () => {
      const step = 4
      ctx.globalAlpha = 0.035
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          if (Math.random() > 0.55) continue
          const v = Math.random() * 255
          ctx.fillStyle = `rgb(${v},${v},${v})`
          ctx.fillRect(x, y, 1, 1)
        }
      }
      ctx.globalAlpha = 1
    }

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const time = now / 1000

      // smooth mouse
      mouse.x += (mouse.tx - mouse.x) * (1 - Math.exp(-dt * 6))
      mouse.y += (mouse.ty - mouse.y) * (1 - Math.exp(-dt * 6))

      ctx.clearRect(0, 0, w, h)

      // deep base wash
      const base = ctx.createRadialGradient(
        w * 0.5,
        h * 0.15,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.85,
      )
      base.addColorStop(0, '#14110e')
      base.addColorStop(0.55, '#0c0b09')
      base.addColorStop(1, '#070706')
      ctx.fillStyle = base
      ctx.fillRect(0, 0, w, h)

      drawAurora(time)
      drawRays(time)
      drawParticles(time, dt)
      drawRipples(dt)
      drawGrain()

      // vignette
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.45, h * 0.15, w * 0.5, h * 0.5, h * 0.95)
      vig.addColorStop(0, 'rgba(12,11,9,0)')
      vig.addColorStop(1, 'rgba(12,11,9,0.72)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, w, h)

      raf = requestAnimationFrame(frame)
    }

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / Math.max(1, w)
      mouse.ty = e.clientY / Math.max(1, h)
      mouse.inside = true
    }
    const onLeave = () => {
      mouse.inside = false
      mouse.tx = 0.5
      mouse.ty = 0.35
    }
    const onDown = (e: PointerEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, age: 0 })
      if (ripples.length > 6) ripples.shift()
    }
    const onScroll = () => {
      scrollY = window.scrollY || 0
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })

    if (reduce) {
      // static frame only
      ctx.fillStyle = '#0c0b09'
      ctx.fillRect(0, 0, w, h)
      drawAurora(0)
      drawRays(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  )
}
