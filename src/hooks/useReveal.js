import { useEffect } from 'react'

// Adds an `is-visible` class to any element with the `reveal` class
// once it scrolls into view. Powers the fade/slide-in animations.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    // Respect users who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
