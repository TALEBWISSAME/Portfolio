import { motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1200 }}
      initial={reduced ? false : { opacity: 0, y: -72, rotateX: -7, scale: 0.985, filter: 'blur(7px)' }}
      whileInView={reduced ? {} : { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
