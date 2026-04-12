export const profile = {
  name: 'Joseph Dubon',
  location: 'Reno, Nevada',
  tagline: 'Personal site, portfolio hub, and a place to keep current work easy to share.',
  intro:
    'This page is set up so you can quickly swap in your own bio, links, and projects without rebuilding the whole site structure each time.',
  links: [
    {
      label: 'Email Me',
      href: 'mailto:josephdubon@protonmail.com',
      primary: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/josephdubon',
      external: true,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/',
      external: true,
    },
  ],
  now: [
    'Building out a cleaner personal web presence.',
    'Using this site as a living profile and project landing page.',
    'Keeping content centralized so updates are quick.',
  ],
  bio: [
    'Use this site as your online card: who you are, what you are making, and where people should contact you.',
    'If you want to turn it into a photography page, developer portfolio, resume site, or mixed personal hub, most of the change is just editing this data object.',
  ],
  focus: [
    'Add links to current work, clients, or social accounts.',
    'Swap placeholder copy for a short personal intro.',
    'Replace these priorities with what you want visitors to notice first.',
  ],
  projects: [
    {
      name: 'Personal Website Refresh',
      type: 'Website',
      description:
        'A simple personal homepage with editable sections for bio, links, and selected projects.',
      tags: ['Next.js', 'Tailwind', 'Personal Brand'],
    },
    {
      name: 'Future Project Slot',
      type: 'Project',
      description:
        'Use this card for a real client build, a photo series, a store, or any other project worth highlighting.',
      tags: ['Placeholder', 'Easy to edit'],
    },
  ],
}
