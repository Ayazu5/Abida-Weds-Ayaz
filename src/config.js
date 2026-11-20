export const weddingConfig = {
  meta: {
    slug: "abida-weds-ayaz",
  },
  couple: {
    brideName: "Abida",
    brideParents: "Daughter of Naeem Ahmed",
    groomName: "Ayaz",
    groomParents: "Son of Nawab Ahmed",
  },
  wedding: {
    displayDate: "December 07, 2026",
    isoDateTime: "2026-12-07T20:00:00",
    day: "Monday",
    time: "08:00 PM Onwards",
  },
  venue: {
    name: "Titanic Banquet",
    address: "New Delhi",
    note: "Nikah Ceremony Venue",
    mapsUrl: "https://maps.app.goo.gl/yFFUpgdmuCoGnM6T6",
  },
  intro: {
    namesAppearAtSeconds: 5.5,
  },
  media: {
    introVideo: "./assets/video/intro.mp4",
    introPoster: "./assets/video/intro.webp",
    backgroundMusic: "./assets/audio/bgm1.mp3",
    gallery: [
      { src: "./assets/gallery/gallery-01.jpg", alt: "Abida and Ayaz" }
    ]
  },
  copy: {
    heroBismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    heroIntroLineOne: "Together with their families",
    heroIntroLineTwo: "Invite you to celebrate",
    heroIntroLineThree: "Their Nikah Ceremony",
    heroClosingLine: "We await your gracious presence",
    welcomeTitle: "A Celebration of Love",
    welcomeBody: "Join us as we mark the beginning of our lifelong journey together.",
    dateIntro: "Save the date for the celebration",
    datePrompt: "Scratch to reveal the date",
    dateRevealed: "December 07, 2026",
    galleryTitle: "Our Moments",
    countdownTitle: "Counting Down to Forever",
    timelineTitle: "Nikah Program",
    venueTitle: "The Venue",
    closingTitle: "With Love",
    closingBody: "We look forward to celebrating with you.",
  },
  program: [
    { time: "08:00 PM", title: "Dinner", detail: "Welcome and Dinner" },
    { time: "09:00 PM", title: "Baraat Arrival", detail: "Arrival of the Baraat & Nikah Ceremony" },
    { time: "11:00 PM", title: "Rukhsati", detail: "Farewell" }
  ],
  familyGroups: [
    {
      title: "R.S.V.P",
      names: [
        "With Best Compliments from Family & Friends"
      ]
    }
  ],
  sections: {
    welcome: true,
    scratchReveal: true,
    gallery: false,
    countdown: true,
    timeline: true,
    venue: true,
    dressCode: false,
    preWeddingEvents: false,
    gifts: false,
    rsvp: true,
    closing: true,
  },
  theme: {
    colors: {
      ivory: "#f3ead9",
      emerald: "#123f35",
      emeraldDeep: "#0b2b24",
      gold: "#d5b875",
      goldDeep: "#aa8742",
      ink: "#17312c",
      muted: "#6b746f",
    },
    fonts: {
      arabic: "'Noto Naskh Arabic', serif",
      names: "'Great Vibes', serif",
      display: "'Noto Serif Display', serif",
      body: "'Manrope', sans-serif",
    },
  },
};