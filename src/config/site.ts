export const siteConfig = {
  name: "Ombra",
  title: "Ombra - A Restaurant by Elia Marchetti",
  description:
    "Ombra is a two-Michelin-star tasting counter in the old quarter. Twelve seats, one fire, one season at a time.",
  url: "https://ombra-astro.vercel.app",
  locale: "en_US",
  address: {
    street: "No. 14 Vico dei Fonditori",
    locality: "Milan",
    postalCode: "20121",
    country: "Italy",
  },
  phone: "+39 02 4477 0014",
  email: "house@ombra.rest",
  nav: [
    { label: "Concept", href: "#concept" },
    { label: "Menu", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Sala", href: "#interior" },
  ],
  reservation: {
    formAction: "mailto:house@ombra.rest",
    method: "post",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Journal", href: "https://substack.com/" },
    { label: "Spotify", href: "https://open.spotify.com/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
