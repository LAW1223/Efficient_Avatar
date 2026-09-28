/*
 * All editable page content lives here. The page logic in index.html reads
 * window.SITE_DATA and never hardcodes content.
 *
 * Rules:
 *  - Leave a value as null until it is verified. Anything null is hidden
 *    on the page, so a placeholder can never go live by accident.
 *  - The benchmark section only appears once hardware, the required settings
 *    and the baseline + headline rows all have measured values.
 *  - Speed-up and memory reduction are computed from the table, never typed in.
 */
window.SITE_DATA = {
  content: {
    title: "Efficient Half-Body Talking Avatar Generation",
    tagline: "Expressive, speech-driven half-body avatars, engineered for efficient inference.",
    description:
      "A research collaboration between HKUST and ASTRI on half-body talking avatar generation, using model distillation and quantization to reduce the cost of inference.",
    whyNow:
      "Talking-avatar generation has advanced rapidly with modern generative video models, but these models are often slow and memory-intensive to run. This project focuses on the efficiency side: making generation lighter so it is practical to deploy.",
  },

  hero: {
    video: "videos/hero/hero-avatar.mp4",
    poster: "images/posters/hero-avatar.webp",
    // Width / height of the hero clip. Half-body clips are usually portrait.
    aspect: "3 / 4",
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
      text: "Distillation and quantization are applied to reduce the computation and memory needed at inference time.",
      video: null,
      poster: null,
    },
  ],

  // Tabs are built from `category`, in the order they first appear.
  // Set hasAudio: true when the clip keeps its soundtrack (lip-sync clips should).
  demos: [
    { id: "speech-01", category: "Speech", title: "Speech clip 1", video: "videos/demos/speech-01.mp4", poster: "images/posters/speech-01.webp", hasAudio: true },
    { id: "speech-02", category: "Speech", title: "Speech clip 2", video: "videos/demos/speech-02.mp4", poster: "images/posters/speech-02.webp", hasAudio: true },
    { id: "expression-01", category: "Expression", title: "Expression clip 1", video: "videos/demos/expression-01.mp4", poster: "images/posters/expression-01.webp", hasAudio: true },
    { id: "expression-02", category: "Expression", title: "Expression clip 2", video: "videos/demos/expression-02.mp4", poster: "images/posters/expression-02.webp", hasAudio: true },
    { id: "motion-01", category: "Upper-body motion", title: "Motion clip 1", video: "videos/demos/motion-01.mp4", poster: "images/posters/motion-01.webp", hasAudio: true },
    { id: "motion-02", category: "Upper-body motion", title: "Motion clip 2", video: "videos/demos/motion-02.mp4", poster: "images/posters/motion-02.webp", hasAudio: true },
  ],
  demoAspect: "3 / 4",

  benchmark: {
    hardware: null, // e.g. "NVIDIA H100 80GB × 1"
    baselineDefinition: null, // e.g. "Original model, FP16, identical sampling settings"
    settings: {
      resolution: null, // e.g. "512 × 512"
      frames: null, // e.g. 49
      durationSec: null,
      batchSize: null,
      steps: null, // inference / sampling steps; describe per config if they differ
      runtime: null, // e.g. "PyTorch 2.4, CUDA 12.4"
      includesModelLoading: null, // true / false
      includesPrePostProcessing: null, // true / false
      runs: null, // e.g. "Mean of 5 runs after 1 warm-up"
    },
    rows: [
      { name: "Baseline", precision: null, latencySec: null, memoryGB: null, role: "baseline" },
      { name: "Distilled", precision: null, latencySec: null, memoryGB: null },
      { name: "Distilled + Quantized", precision: null, latencySec: null, memoryGB: null, role: "headline" },
    ],
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
};
