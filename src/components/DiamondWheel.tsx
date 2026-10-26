import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Img } from './ui/Img'
import { diamonds, wheelCenter } from '../data/diamondWheel'
import { designPx } from '../utils/design'

const ASSETS = '/assets/08-shape-wheel/'
const STAGE = { x: 789, y: 94 }

gsap.registerPlugin(Draggable, ScrollTrigger)

const snapAngles = diamonds.map(({ bounds }, index) => {
  // Keep the initial diamond in its original rest pose.
  if (index === 0) return 0
  const angle = Math.atan2(
    bounds.y + bounds.height / 2 - wheelCenter.y,
    bounds.x + bounds.width / 2 - wheelCenter.x,
  ) * 180 / Math.PI
  return (180 - angle + 360) % 360
})

function snapRotation(rotation: number) {
  const choices = snapAngles.map(angle => angle + 360 * Math.round((rotation - angle) / 360))
  return choices.reduce((a, b) => Math.abs(a - rotation) < Math.abs(b - rotation) ? a : b)
}

export default function DiamondWheel() {
  const root = useRef<HTMLDivElement>(null)
  const rotor = useRef<HTMLDivElement>(null)
  const move = useRef<(direction: number) => void>(() => {})

  useLayoutEffect(() => {
    const target = rotor.current
    const trigger = root.current
    if (!target || !trigger) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const context = gsap.context(() => {
      let destination = 0
      const settle = (rotation: number) => {
        destination = rotation
        gsap.to(target, {
          rotation,
          duration: reducedMotion ? 0 : 0.65,
          ease: 'power3.out',
          overwrite: true,
        })
      }

      const [drag] = Draggable.create(target, {
        type: 'rotation',
        trigger,
        allowNativeTouchScrolling: true,
        onPress() { gsap.killTweensOf(target) },
        onDragEnd() { settle(snapRotation(this.rotation)) },
      })

      move.current = direction => {
        const current = gsap.isTweening(target) ? destination : Number(gsap.getProperty(target, 'rotation'))
        const turn = Math.floor(current / 360)
        const candidates = snapAngles.flatMap(angle => [-1, 0, 1].map(offset => angle + 360 * (turn + offset)))
        const next = candidates.filter(angle => direction > 0 ? angle > current + 0.5 : angle < current - 0.5)
        settle(direction > 0 ? Math.min(...next) : Math.max(...next))
      }

      if (!reducedMotion) {
        gsap.fromTo(target, { rotation: -360 }, {
          rotation: 0,
          duration: 1.2,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger, start: 'top 85%', once: true },
        })
      }

      return () => {
        drag.kill()
        gsap.killTweensOf(target)
        move.current = () => {}
      }
    }, root)

    return () => context.revert()
  }, [])

  const layer = (file: string, x: number, y: number, width: number, height: number) => (
    <Img
      loading="eager"
      src={ASSETS + file}
      className="pointer-events-none absolute max-w-none"
      style={{ left: designPx(x - STAGE.x), top: designPx(y - STAGE.y), width: designPx(width), height: designPx(height) }}
    />
  )

  return (
    <div className="shape-wheel absolute top-94 left-789 h-901 w-651 max-md:relative max-md:top-0 max-md:left-0 max-md:origin-top-left">
      <div
        ref={root}
        role="region"
        aria-label="Diamond shape wheel"
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ clipPath: 'inset(0 0 0 calc(var(--spacing) * 80))', touchAction: 'pan-y' }}
      >
        {layer('wheel/ellipse3.svg', 931.7675, 108.4106, 877.7886, 877.7886)}
        {layer('I88-5831_12819-718521_12819-717603.png', 829.4777, 450.4589, 333.2765, 130.4248)}
        {layer('I88-5831_12819-718521_12819-717605.svg', 934.251, 459.7378, 142.4189, 47.9574)}
        <div
          ref={rotor}
          className="absolute size-1"
          style={{ left: designPx(wheelCenter.x - STAGE.x), top: designPx(wheelCenter.y - STAGE.y), transformOrigin: '0 0' }}
        >
          {diamonds.map(({ id, image }) => (
            <Img
              key={id}
              loading="eager"
              src={ASSETS + `I88-5831_12819-718521_12819-${id}.png`}
              className="pointer-events-none absolute max-w-none"
              style={{
                left: designPx(image.x - wheelCenter.x),
                top: designPx(image.y - wheelCenter.y),
                width: designPx(image.width),
                height: designPx(image.height),
              }}
            />
          ))}
        </div>
      </div>
      <Img loading="eager" src={ASSETS + 'I88-5831_5407-131970.svg'} className="pointer-events-none absolute top-425.5 -left-10 h-52 w-432" />
      <button type="button" aria-label="Previous diamond shape" onClick={() => move.current(-1)} className="absolute top-434.5 left-0 size-32 cursor-pointer rounded-full focus-visible:outline-2" />
      <button type="button" aria-label="Next diamond shape" onClick={() => move.current(1)} className="absolute top-434.5 left-380 size-32 cursor-pointer rounded-full focus-visible:outline-2" />
    </div>
  )
}
