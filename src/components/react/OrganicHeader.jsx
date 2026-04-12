import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Journal' },
];

export default function OrganicHeader({ currentPath = '/' }) {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        className="site-mark"
        href="/"
        whileHover={{ x: 2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        <span className="site-mark-dot"></span>
        Joseph Dubon
      </motion.a>

      <NavigationMenu.Root className="site-nav-root">
        <NavigationMenu.List className="site-nav" aria-label="Primary">
          {links.map((link, index) => {
            const active = currentPath === link.href;

            return (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Link asChild active={active}>
                  <motion.a
                    href={link.href}
                    className={active ? 'is-active' : undefined}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                  </motion.a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </motion.header>
  );
}
