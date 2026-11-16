// ============================================================
//  EDIT THIS FILE. Everything on the site comes from here.
// ============================================================

export const content = {
  herName: "♥️ Summaiya ♥️", // <- her name
  yourName: "Wasique", // <- your name
  age: 29, // <- the age she turns (set to null to hide)

  // Moment the surprise unlocks. +05:00 = Karachi time.
  unlockAt: "2026-11-17T00:00:00+05:00",

  // Shown while the countdown is running
  teaser: "Something is compiling for you...",

  // Big message that appears at midnight
  heroTitle: "Happy Birthday My Love!",
  heroSubtitle: "Build successful. Deploying love to production.",

  // Personal letter shown after the reveal (use \n\n for paragraphs)
  letter: `Summaiya,

Every year I think I could not possibly love you more, and every year you prove me wrong.

Since the 25th of September 2021, when we met, my life has had a better rhythm. Two months later we were engaged, and then you became my wife. You gave me Zouraiz, our little boy, and watching you love him is my favorite thing in the world.

I remember our first flight together to the UAE. Somewhere over the clouds I realized that home is not a place for me. It is wherever you are, whether that is a mountain, a beach, or the couch with Stranger Things on and fries between us.

This year I want more of everything you love: more mountains, more beaches, more steak and mashed potatoes, more Atif Aslam on the drive, and a lot more sleeping in. You have earned every bit of rest.

Red roses fade, but I will love you for longer than they last.

Happy Birthday, my love.

Forever yours,
Wasique`,

  // The "git log" of your relationship. Newest first.
  commits: [
    { date: "2026-11-17", type: "feat", message: "another year of you. Best release yet" },
    { date: "2024-02-29", type: "feat", message: "first flight together to the UAE. Deployed to a new region" },
    { date: "2023-10-30", type: "feat", message: "Zouraiz joined the team. Our best feature yet" },
    { date: "2022-12-23", type: "BREAKING CHANGE", message: "got married. Two configs merged, no conflicts" },
    { date: "2021-11-20", type: "feat", message: "engaged. Pull request approved" },
    { date: "2021-09-25", type: "feat", message: "met you. git init" },
  ] as { date: string; type: string; message: string }[],

  // Time capsule: letters that unlock on future birthdays.
  // Write the real text here. Locked ones stay hidden until that date.
  capsules: [
    {
      unlockAt: "2027-11-17T00:00:00+05:00",
      title: "Birthday 2027",
      body: "Another year, another reason. Red roses, steak and mashed potatoes, and a quiet day of sleeping in are waiting for you. I love you more than last year. (Replace with your own words.)",
    },
    {
      unlockAt: "2028-11-17T00:00:00+05:00",
      title: "Birthday 2028",
      body: "Happy 31st, my love. Zouraiz is growing so fast, and every day I see more of your kindness in him. Thank you for being the heart of our home. Wherever we are this year, a mountain top or a beach at sunset, I hope you feel how deeply you are loved. Now go get some sleep, you have earned it. Red roses are on their way.",
    },
    {
      unlockAt: "2029-11-17T00:00:00+05:00",
      title: "Birthday 2029",
      body: "Happy 32nd, Summaiya. Look at everything we have built since September 2021: a family, a home, and a thousand small memories. I would choose you again in every version of my life. Tonight, steak, mashed potatoes, and an Atif Aslam song for the two of us. I love you.",
    },
    {
      unlockAt: "2031-11-17T00:00:00+05:00",
      title: "Birthday 2031 (five years from now)",
      body: "Five years since this letter was locked away, and I hope it finds you smiling. You are still the person I want to tell everything to first. Thank you for every year, every trip, every quiet evening and every laugh. My love for you has only grown. Happy Birthday, my forever.",
    },
    {
      unlockAt: "2036-11-17T00:00:00+05:00",
      title: "Birthday 2036 (ten years from now)",
      body: "Ten years. If you are reading this, we got to grow older together, exactly as I hoped. Zouraiz is a young man now, and you are still the best thing that ever happened to me. From a Stranger Things night on the couch to all of these years, you have been my home. Happy Birthday, my love, my always.",
    },
  ] as { unlockAt: string; title: string; body: string }[],

  // Photos: drop files in /public/media and list them here.
  photos: [
    // { src: "/media/first-date.jpg", caption: "Where it started" },
  ] as { src: string; caption: string }[],

  // Optional: a song/voice note in /public/media (e.g. "/media/message.mp3")
  audio: "" as string,
};
