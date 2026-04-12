import { motion } from 'framer-motion';

export default function MotionSection({
  as = 'section',
  className,
  delay = 0,
  children,
}) {
  const Component = motion[as] ?? motion.section;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
