// ============================================================
// EDIT THIS FILE to change text, prices, photos and settings.
// ============================================================
window.SITE = {
  name: "Sunnyside Mobile Bar",          // WORKING NAME - replace
  city: "Sunnyside, Washington",
  serviceArea: "Sunnyside, Yakima Valley and the Tri-Cities",
  phone: "(509) 555-0100",               // replace
  email: "hello@example.com",            // replace (also used as form fallback)
  instagram: "",                          // full URL, leave "" to hide

  // HERO VIDEO - drop your path here when ready, e.g. "assets/hero.mp4"
  heroVideo: "assets/hero.mp4",
  heroPoster: "assets/hero-poster.jpg",                         // optional still image shown while loading

  // SUPABASE - paste project URL + anon (public) key. Leave "" to use email fallback.
  supabaseUrl: "",
  supabaseKey: "",

  // GALLERY beside the quote form (first image is shown wide). Swap in real event photos.
  gallery: [
    { src: "assets/gallery-1.jpg", alt: "Cocktail being poured over ice with a rosemary garnish" },
    { src: "assets/gallery-2.jpg", alt: "Rosemary sprig and salted rim close up" },
    { src: "assets/gallery-3.jpg", alt: "Ice and fresh pour in a rocks glass" }
  ],

  // TICKER BANNER between the bartenders and Packages. Placeholder numbers - use your real ones.
  ticker: [
    "200+ events poured",
    "10,000+ cocktails crafted",
    "Weddings, parties and corporate events",
    "Serving Sunnyside and the Yakima Valley",
    "Two bartenders, one standard"
  ],

  // PORTFOLIO of past events. Add a photo path to each, e.g. "assets/event-1.jpg". Placeholders until then.
  events: [
    { title: "Garden wedding", type: "Wedding", place: "Prosser", guests: 140, photo: "assets/wedding.jpg", note: "Signature cocktails for the couple and a full champagne toast." },
    { title: "Winery harvest party", type: "Private party", place: "Yakima Valley", guests: 90, photo: "assets/private.jpg", note: "A seasonal menu built around local fruit and herbs." },
    { title: "Company holiday gala", type: "Corporate event", place: "Tri-Cities", guests: 200, photo: "assets/corporate.jpg", note: "Two bars running at once with no line at the rail." },
    { title: "Backyard 40th birthday", type: "Birthday", place: "Sunnyside", guests: 60, photo: "assets/birthday.jpg", note: "Mocktail menu for the kids and a custom drink for the guest of honor." },
    { title: "Barn rehearsal dinner", type: "Rehearsal dinner", place: "Grandview", guests: 75, photo: "assets/dinner.jpg", note: "Rustic styling with real glassware and a hand-lettered menu." },
    { title: "Fundraiser evening", type: "Corporate event", place: "Sunnyside", guests: 150, photo: "assets/event.jpg", note: "Raised a record night with a donor-only cocktail." }
  ],

  bartenders: [
    { name: "Bartender One", role: "Co-owner, lead mixologist", photo: "assets/bartender1.jpg",
      bio: "Short bio goes here. Where they trained, what they love to pour." },
    { name: "Bartender Two", role: "Co-owner, bar service", photo: "assets/bartender2.jpg",
      bio: "Short bio goes here. Signature drinks, event experience, personality." }
  ],

  // QUOTE ESTIMATOR - placeholder numbers, set your real rates
  pricing: {
    perBartenderHour: 100,       // $ per bartender per hour
    minHours: 4,
    guestsPerBartender: 60,     // 61+ guests automatically books both bartenders
    packages: [
      { id: "essential", name: "Essential", desc: "Bar setup, bartending, ice, garnishes and cups. You supply the alcohol.", perGuest: 0 },
      { id: "signature", name: "Signature", desc: "Everything in Essential, plus a custom cocktail menu with mixers and syrups.", perGuest: 8 },
      { id: "full",      name: "Full bar",  desc: "Everything in Signature, plus premium glassware and a styled bar.", perGuest: 14 }
    ],
    addons: [
      { id: "mocktail", name: "Mocktail menu",         price: 150 },
      { id: "glass",    name: "Real glassware",        price: 200 },
      { id: "sign",     name: "Custom menu sign",      price: 75 }
    ]
  },

  eventTypes: ["Wedding", "Corporate event", "Birthday or party", "Rehearsal dinner", "Other"]
};
