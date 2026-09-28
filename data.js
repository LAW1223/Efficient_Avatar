/*
 * All editable page content lives here. The page logic in index.html reads
 * window.SITE_DATA and never hardcodes content.
 *
 * Rules:
 *  - Only publish figures that are backed by a measurement record.
 *    Leave a value as null to hide it rather than guessing.
 *  - Speed-up ratios are computed from the raw throughput values, never typed in.
 */
window.SITE_DATA = {
  content: {
    title: "Efficient Half-Body Talking Avatar Generation",
    tagline: "Expressive, speech-driven half-body avatars, engineered for efficient inference.",
    description:
      "A research collaboration between HKUST and ASTRI. We cut video generation from 40 denoising steps to 4 through distillation, and run attention in 4-bit precision to make each step faster.",
    whyNow:
      "Talking-avatar generation has advanced rapidly with modern generative video models, but these models are often slow and memory-intensive to run. This project focuses on the efficiency side: making generation lighter so it is practical to deploy.",
  },

  // Width / height of all clips (1344 × 768).
  aspect: "1344 / 768",

  hero: {
    video: "videos/hero/hero-avatar.mp4",
    poster: "images/posters/hero-avatar.webp",
  },

  capabilities: [
    {
      title: "Expressive",
      text: "Generates facial expressions and upper-body motion together with speech, not only a moving mouth.",
      video: "videos/capabilities/expression.mp4",
      poster: "images/posters/expression.webp",
    },
    {
      title: "Synchronized",
      text: "Lip movements are driven directly by the input speech audio.",
      video: "videos/capabilities/lipsync.mp4",
      poster: "images/posters/lipsync.webp",
    },
    {
      title: "Efficient",
      text: "Distillation reduces generation from 40 denoising steps to 4, and 4-bit attention makes each step faster.",
      video: null,
      poster: null,
    },
  ],

  // Tabs are built from `category`, in the order they first appear.
  demos: [
    { id: "halfbody-01", category: "Half-body", video: "videos/demos/halfbody-01.mp4", poster: "images/posters/halfbody-01.webp", hasAudio: true, model: "8-step model" },
    { id: "halfbody-02", category: "Half-body", video: "videos/demos/halfbody-02.mp4", poster: "images/posters/halfbody-02.webp", hasAudio: true, model: "8-step model" },
    { id: "halfbody-03", category: "Half-body", video: "videos/demos/halfbody-03.mp4", poster: "images/posters/halfbody-03.webp", hasAudio: true, model: "8-step model" },
    { id: "expression-01", category: "Expression", video: "videos/demos/expression-01.mp4", poster: "images/posters/expression-01.webp", hasAudio: true, model: "4-step model, 4-bit attention" },
    { id: "expression-02", category: "Expression", video: "videos/demos/expression-02.mp4", poster: "images/posters/expression-02.webp", hasAudio: true, model: "4-step model, 4-bit attention" },
    { id: "speech-01", category: "Close-up speech", video: "videos/demos/speech-01.mp4", poster: "images/posters/speech-01.webp", hasAudio: true, model: "4-step model, 4-bit attention" },
    { id: "speech-02", category: "Close-up speech", video: "videos/demos/speech-02.mp4", poster: "images/posters/speech-02.webp", hasAudio: true, model: "4-step model, 4-bit attention" },
  ],

  // Paired outputs: same 4-step model, same prompt, same seed; only the attention precision differs.
  compare: {
    aLabel: "16-bit attention",
    bLabel: "4-bit attention",
    pairs: [
      { id: "p008", a: { video: "videos/compare/p008-fp16.mp4", poster: "images/posters/p008-fp16.webp" }, b: { video: "videos/compare/p008-fp4.mp4", poster: "images/posters/p008-fp4.webp" } },
      { id: "p004", a: { video: "videos/compare/p004-fp16.mp4", poster: "images/posters/p004-fp16.webp" }, b: { video: "videos/compare/p004-fp4.mp4", poster: "images/posters/p004-fp4.webp" } },
    ],
  },

  // Source: kernel benchmark in the team's paper (under review); see deliverables/benchmark.
  performance: {
    steps: { before: 40, after: 4, note: "Denoising steps per video: original MiniMax H3 vs our distilled model" },
    attention: {
      hardware: "NVIDIA RTX PRO 6000D",
      workload: "Non-causal multi-head attention, 24 heads, head dimension 128",
      metric: "End-to-end attention throughput (TOPS), higher is better",
      scope: "Measures the attention computation only, not total video generation time.",
      sequences: ["8K", "16K", "24K", "32K", "42K"],
      baseline: { name: "FlashAttention", values: [139, 141, 141, 142, 142] },
      ours: { name: "Ours (4-bit attention)", values: [324, 300, 316, 309, 299] },
    },
    // Add verified peak-memory figures here when measured; the page shows nothing until then.
    memory: null,
  },

  applications: [
    { title: "Digital reception", text: "Interactive avatars for visitor centres, campuses and service desks." },
    { title: "Virtual presenters", text: "Generated presenters for educational, corporate and media content." },
    { title: "Information services", text: "Expressive digital agents that deliver information and answer questions." },
    { title: "Interactive entertainment", text: "Avatar-driven characters for immersive media and virtual experiences." },
  ],

  collaboration: {
    partners: [
      { name: "HKUST", full: "The Hong Kong University of Science and Technology", logo: null },
      { name: "ASTRI", full: "Hong Kong Applied Science and Technology Research Institute", logo: null },
    ],
    text: "Developed through a collaboration between HKUST and ASTRI, connecting generative-AI research with the practical requirements of deploying avatar systems.",
  },

  // affiliation: null hides the line. Confirm every affiliation before publishing.
  team: [
    { name: "Harry Yang", title: "Professor", affiliation: "HKUST" },
    { name: "Bing Li", title: "Professor", affiliation: "Jilin University" },
    { name: "Yaofu Liu", title: null, affiliation: "HKUST" },
    { name: "Jiajun Zha", title: null, affiliation: "HKUST" },
    { name: "Yexin Liu", title: null, affiliation: "HKUST" },
    { name: "Xuran Ma", title: null, affiliation: "HKUST" },
  ],

  contact: {
    email: null, // e.g. "someone@ust.hk"; the contact line is hidden while null
  },

  credits: "Avatar generation is built on the MiniMax H3 video model.",
};
