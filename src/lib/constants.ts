// Locked categories - hardcoded, do NOT pull from database
// Diane cannot add new categories - must contact developer

export const PURPOSES = [
  "AI Image Generation",
  "AI Video Generation",
  "LLMs/AI Text Generation",
  "Content Creation",
  "Business Operations",
  "Website & SEO",
  "Trusted Coaches & Courses",
  "AI Editing/Enhancement",
  "AI Voice & Audio",
  "AI Photoshoots",
  "Productivity",
  "Compliance & Legal",
  "Branding",
  "AI Avatars"
] as const;

export const PRICING_TIERS = [
  "Free",
  "Under $10/month",
  "$10-20/month",
  "$20-50/month",
  "$50-100/month",
  "$100+/month",
  "One-time purchase"
] as const;

export const BUSINESS_STAGES = [
  "Getting started (Under $20/month)",
  "Growing Your Business ($30-55/month)",
  "Scaling Operations ($100+/month)"
] as const;

export const BUSINESS_STAGE_DESCRIPTIONS: Record<string, { intro: string; tools: string[]; whenToUpgrade?: string[] }> = {
  "Getting started (Under $20/month)": {
    intro: "We all have times where we need to limit what we invest in education and tools. If now is that time for you, it's totally okay. You can get a ton of value from these lessons with free and inexpensive resources. Here's what I recommend:",
    tools: [
      "(free) ChatGPT or Claude - you can get away with the free versions of either for a while. Your output won't be as good as the paid versions, but you can still practice your prompting and get help with your content with the free version.",
      "($10 a month) Midjourney Basic Plan - unfortunately, Midjourney doesn't have a free version, but the least expensive paid version is only $10 a month. You can start there and do a lot for yourself and clients with that subscription. You likely won't be able to do much with video, but you'll be able to create a lot with images.",
      "(free) ChatGPT image gen with Bing - Bing has just paired up with ChatGPT's image creator, Sora, so you can use it for free within Bing. You're limited to how many images you can create, but it's a good place to start.",
      "(free) Picsi.ai - In my opinion, picsi doesn't work quite as well as Krea (in the next tier below) for AI Photoshoots, but it does have a free plan and can create some beautiful images with Midjourney. (You'll create them in Midjourney first, and then face swap in Picsi.)",
      "(free) Gamma - I honestly just love this app. I don't have a module on it (yet!), but there are so many fun, easy, impressive things you can do with it for clients. I have the paid plan, but the free version is still amazing. It's perfect for link-in-bio pages, course slides (like the ones in here!), freebies, workbooks, lead magnet web pages, reports, etc.",
      "All-in-One Bundle Apps: (Krea and Galaxy) - Aggregator apps are platforms that bundle multiple AI models into one place. Instead of signing up and paying for each tool separately, you can access different models (like Flux or Midjourney) through a single interface. The upside: cheaper, simpler, and less time spent learning different systems. The tradeoff: you don't always get the full set of features each model offers when used natively, and you can hit usage limits fast.",
      "($10 a month) Krea Basic Plan - Krea has a free version, but to be able to 'train' the model for AI Portraits and AI Product Photos, you'll need the paid version. Like, Midjourney, the least expensive version is $10 a month.",
      "Another great all-in-one AI platform is Galaxy.ai. It includes every major (and several minor) AI platforms. If you start using it for work, you'll likely outgrow the low monthly subscription quickly, but if you're just starting out, this is a great money saver. It also includes LLMs (unlike Krea), so really a great deal if you're just starting out."
    ],
    whenToUpgrade: [
      "You're spending more than 5 hours/week on content creation",
      "You've landed your first paying AI client",
      "Free tool limitations are constraining your client work"
    ]
  },
  "Growing Your Business ($30-55/month)": {
    intro: "This is where you'll be able to consistently do the client work I've outlined in the course. To make the most of your money and give a significant number of clients really stellar results (and save yourself a lot of time and energy), here's what I'd recommend:",
    tools: [
      "($20 a month) ChatGPT or Claude - The paid versions of either of these platforms will give you way better results than the free version. Once you get this, you won't know how you survived without it, and it will seriously help you with your content and content for clients. (I have both at this plan, but it's not necessary to have both.) And the paid plan of ChatGPT also gives you image generation with Sora, their image generation model.",
      "($10 a month) Krea Basic Plan - Krea has a free version, but to be able to 'train' the model for AI Portraits and AI Product Photos, you'll need the paid version. Like Midjourney, the least expensive version is $10 a month. If you want to do AI Photoshoots for clients, this is the version you'll want long term; if not, you can just get it for a month to do your own shoot, and then let it go.",
      "($25 a month) Midjourney Standard Plan - This one isn't as necessary as the others, but if you find that you're running out of hours a lot with client work, you'll love the Standard Plan. You'll never run out of hours because you can run unlimited \"Relaxed\" hours if you're not in a hurry."
    ],
    whenToUpgrade: [
      "You're consistently booking 3+ clients per month",
      "Midjourney hours run out before month-end for three months in a row",
      "Clients are asking for video content or advanced features",
      "Monthly revenue exceeds $1,000 from AI services"
    ]
  },
  "Scaling Operations ($100+/month)": {
    intro: "If you really need to save time, and you're going all-in on AI services for your clients, here are the tools I'd recommend (in no particular order):",
    tools: [
      "($60 a month) Midjourney Pro Plan - This is the only plan with a \"Stealth\" mode, meaning you can hide your generated images from the Midjourney website. (That used to make my clients feel better about the AI Photoshoots. I find it's not as necessary these days.) But if you're planning on creating a lot of video, this might be the best plan for you.",
      "($10 a month) Gamma - I love this tool! The paid version gives you unlimited cards/slides for each project, and gives you unlimited projects."
    ]
  }
};

// Type exports
export type Purpose = typeof PURPOSES[number];
export type PricingTier = typeof PRICING_TIERS[number];
export type BusinessStage = typeof BUSINESS_STAGES[number];
