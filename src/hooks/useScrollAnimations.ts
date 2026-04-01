'use client'

import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    const elements = document.querySelectorAll('[data-animate], [data-animate-left], [data-animate-right]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
