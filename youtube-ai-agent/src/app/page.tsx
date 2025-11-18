'use client';

import { useMemo, useState } from 'react';

type FormState = {
  niche: string;
  audience: string;
  platform: string;
  goal: string;
  vibe: string;
};

type ScriptVariation = {
  label: string;
  short: string;
  long: string;
  cta: string;
};

type PostingSlot = {
  label: string;
  window: string;
  reason: string;
};

type AutomationStep = {
  step: string;
  tool: string;
  how: string;
};

type Plan = {
  id: number;
  topic: string;
  virality: string;
  titles: string[];
  hooks: string[];
  scripts: ScriptVariation[];
  visuals: string[];
  voiceover: string[];
  tags: string[];
  hashtags: string[];
  posting: PostingSlot[];
  automation: AutomationStep[];
};

const DEFAULT_STATE: FormState = {
  niche: '',
  audience: '',
  platform: 'YouTube Shorts',
  goal: 'Explosive channel growth',
  vibe: 'High-energy storyteller',
};

const PLATFORMS: string[] = ['YouTube Shorts', 'Instagram Reels', 'TikTok'];

const GOALS: string[] = [
  'Explosive channel growth',
  'Lead generation launch',
  'Community authority build',
];

const VIBES: string[] = [
  'High-energy storyteller',
  'Relatable friend next door',
  'Smart but chill coach',
];

export default function Home() {
  const [form, setForm] = useState<FormState>(DEFAULT_STATE);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const canSubmit = useMemo(() => form.niche.trim().length > 1, [form.niche]);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);
    const generated = generatePlans(form);
    setPlans(generated);
  };

  const formattedPlans = useMemo(
    () => plans.map((plan) => toBlock(plan)).join('\n\n'),
    [plans],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
        <header className="flex flex-col gap-3 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Agentic Creator Stack
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            YouTube AI Automation Agent
          </h1>
          <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
            Input karo apna niche aur ye agent seedha Hinglish me viral-ready
            ideas, scripts aur automation workflows deliver karega — Shorts aur
            Reels ke liye optimised.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label className="flex items-center justify-between text-sm font-medium text-zinc-200">
              Niche focus
              <span className="text-xs font-normal uppercase tracking-wide text-emerald-300">
                required
              </span>
            </label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              placeholder="e.g. Bollywood fitness transformations"
              value={form.niche}
              onChange={(event) => handleChange('niche', event.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-200">Target audience</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              placeholder="e.g. Busy young professionals"
              value={form.audience}
              onChange={(event) => handleChange('audience', event.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-200">Primary platform</label>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              value={form.platform}
              onChange={(event) => handleChange('platform', event.target.value)}
            >
              {PLATFORMS.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-200">Core goal</label>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              value={form.goal}
              onChange={(event) => handleChange('goal', event.target.value)}
            >
              {GOALS.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-200">Creator vibe</label>
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              value={form.vibe}
              onChange={(event) => handleChange('vibe', event.target.value)}
            >
              {VIBES.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="mt-2 w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-800 sm:col-span-2"
          >
            Generate Viral Blueprint
          </button>
        </form>

        <section className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl shadow-emerald-500/10">
          {!hasSubmitted && (
            <p className="text-sm text-zinc-400">
              Kuch input do aur yeh block instantly Hinglish me tumhare liye
              full automation gameplan ready karega.
            </p>
          )}
          {hasSubmitted && plans.length === 0 && (
            <p className="text-sm text-emerald-300">
              Bas niche likho aur main viral strategy nikaal deta hoon.
            </p>
          )}
          {plans.length > 0 && (
            <pre className="whitespace-pre-wrap text-sm leading-6 text-emerald-100">
              {formattedPlans}
            </pre>
          )}
        </section>
      </div>
    </div>
  );
}

function generatePlans(form: FormState): Plan[] {
  const niche = clean(form.niche);
  const audience = clean(form.audience || 'fresh eyeballs');
  const platform = form.platform;
  const goal = form.goal;
  const vibe = form.vibe;

  const baseTags = buildTags(niche);
  const baseHashtags = buildHashtags(niche, platform);

  const seeds = [
    buildSeedOne(niche, audience, platform, goal, vibe),
    buildSeedTwo(niche, audience, platform, goal, vibe),
    buildSeedThree(niche, audience, platform, goal, vibe),
  ];

  return seeds.map((seed, index) => ({
    id: index + 1,
    topic: seed.topic,
    virality: seed.virality,
    titles: seed.titles,
    hooks: seed.hooks,
    scripts: seed.scripts,
    visuals: seed.visuals,
    voiceover: seed.voiceover,
    tags: uniqueMerge(seed.tags, baseTags),
    hashtags: uniqueMerge(seed.hashtags, baseHashtags),
    posting: seed.posting,
    automation: seed.automation,
  }));
}

function buildSeedOne(
  niche: string,
  audience: string,
  platform: string,
  goal: string,
  vibe: string,
) {
  const angle = titleCase(niche);
  return {
    topic: `Flash Myth Smash: ${angle} facts tumhare feed ke liye ready`,
    virality: `Rapid-fire myth busting ${platform} par insane retention deta hai: comment wars ignite, curiosity loop set hota hai, aur ${goal.toLowerCase()} ko push karta hai.`,
    titles: [
      `${angle} myths jo tum maanta tha — ab khatam!`,
      `1 Minute me ${angle}: sach vs hype`,
      `${angle} ke 3 sach jo kisi ne on-cam nahi bola`,
    ],
    hooks: [
      `Pehla myth tum definitely believe karte ho... aur wahi tumhe peeche kheench raha hai.`,
      `Agar tum ${audience} ho to ye 60-second truth bomb tumhari growth double karega.`,
      `Camera on karo: chalo ek viral ${angle} reality check karte hain.`,
    ],
    scripts: [
      {
        label: 'Explosive Debunk',
        short: `Cold open: "Myth: ${angle} me ye hi chal raha hai... WRONG!" Quick cuts me teen myths smash karo visual receipts ke saath. Each beat me ek hooky stat drop karo.`,
        long: `Intro punchy rakho: "Sun, ${audience}, ye 3 myths tum swarg samajh rahe the par channel ko rok rahe hain." Har myth ke liye side-by-side proof shot dikhao, phir CTA: "Agar ye expose pasand aaya to agle reel me aur kara rahe hain." Loop close karo teaser ke saath.`,
        cta: `Comment me batao kaunsa myth tum abhi tak follow kar rahe the, main next drop usko upgrade banaunga.`,
      },
      {
        label: 'Side-by-Side Reveal',
        short: `Screen split: left side "Myth Shortcut", right side "Reality Hack". Ek timer overlay se urgency build karo.`,
        long: `Storyline: har myth break ke baad instantly show karo kya replace kare. Voiceover me friendly but authoritative tone rakho taaki vibe ${vibe.toLowerCase()} feel ho.`,
        cta: `Save karo isko aur DM share karo apne creator dost ko — hum sab milke myths khatam karte hain.`,
      },
      {
        label: 'Challenge Flip',
        short: `Hook karo "Try this live abhi": audience ko prompt do comment me proof dalne ka.`,
        long: `Script me on-screen text + captions use karo. Finale me mashup karo viewers ki reaction clips compile karne ka promise.`,
        cta: `Jo sabse zyada savage myth drop karega, usko main next video me shoutout dunga.`,
      },
    ],
    visuals: [
      'B-roll of fast headline screenshots + green screen pointing for myth reveal',
      'Kinetic typography overlays highlighting TRUE / CAP',
      'Countdown timer animation to keep pace tight',
    ],
    voiceover: [
      'Snappy Hinglish delivery: 120-140 wpm, micro-pauses post revelation',
      'Layer ek subtle bass boost + light distortion for hype energy',
      'End me vocal rise plus signature sound sting for brand recall',
    ],
    tags: [
      `${angle} myths`,
      `${angle} truth`,
      `viral ${niche} shorts`,
    ],
    hashtags: [
      '#viralmyths',
      '#factcheckshorts',
      '#learnin60',
    ],
    posting: [
      {
        label: 'Drop 1',
        window: 'Monday 7:45 PM IST',
        reason: 'Commute ke baad doomscroll window — retention spikes for hot takes.',
      },
      {
        label: 'Drop 2',
        window: 'Wednesday 1:05 PM IST',
        reason: 'Lunch break crowd comment fights accelerate.',
      },
      {
        label: 'Drop 3',
        window: 'Saturday 11:30 AM IST',
        reason: 'Weekend creators research mode me hote hain — saves shoot up.',
      },
    ],
    automation: [
      {
        step: 'Research sweep',
        tool: 'perplexity.ai',
        how: 'Trending myth queries dump karo aur 3 bullet summaries auto-generate karo.',
      },
      {
        step: 'Script polishing',
        tool: 'Notion AI + ElevenLabs',
        how: 'Script template paste karo, Notion AI se Hinglish tighten karo, phir voice clone me export.',
      },
      {
        step: 'Publishing & clips',
        tool: 'opus.pro',
        how: 'Long form recording ko drop karo, auto-caption + vertical crops ready lo, schedule to Shorts/IG.',
      },
    ],
  };
}

function buildSeedTwo(
  niche: string,
  audience: string,
  platform: string,
  goal: string,
  vibe: string,
) {
  const angle = titleCase(niche);
  return {
    topic: `Glow-Up Journey Sprint: ${angle} roadmap start-to-finish`,
    virality: `Before-after storytelling ${platform} par watch time beast mode leta hai, aur transformation narratives ${goal.toLowerCase()} me trust inject karte hain.`,
    titles: [
      `${angle} 30-day glow-up plan (Day 0 to hero)`,
      `POV: Tum ${angle} start kar rahe ho — yeh turbo guide follow karo`,
      `${angle} roadmap jo creators secretly follow karte hain`,
    ],
    hooks: [
      `Ye 5-step map tumhe zero se viral ${angle} creator bana dega — bina burnout ke.`,
      `Scroll mat karo, ye hi woh template hai jo top ${angle} channels use karte hain.`,
      `${audience} ke liye fastest ${angle} momentum hack yahin hai.`,
    ],
    scripts: [
      {
        label: 'Hero Timeline',
        short: `0-5 seconds: throwback clip drop karo, text overlay "Week 1 vs Week 4" with trending sound.`,
        long: `Narrative ko day buckets me break karo. Har bucket me ek actionable micro-task mention karo + "proof of progress" idea attach karo. Finale me CTA teaser: "Full toolkit comment me."`,
        cta: `Full roadmap PDF chahiye? "MAP" comment karo aur auto-DM bot tumhe bhej dega.`,
      },
      {
        label: 'Checklist Carousel',
        short: `Use rapid carousel edits: har point par big bold keyword + you acting it out.`,
        long: `Voiceover me do line hook, phir each phase explain with 6-7 second micro story. Bridge scenes add karo showing roadblocks.`,
        cta: `Jo bhi step tum kal try kar rahe ho, comments me drop karo — best reply ko personal video response milega.`,
      },
      {
        label: 'Community POV',
        short: `Open with DM screenshot style: "Bro, main ${angle} start kaise karu?"`,
        long: `Q&A narration karo, audience angle highlight karo, har solution ke baad show karo kitna time lagta hai aur kya resource chahiye.`,
        cta: `Iss template ko friend ko send karo jo stuck hai — team effort se glow-up jaldi aata hai.`,
      },
    ],
    visuals: [
      'Progress bar overlay updating through the video',
      'Photo dump montage + kinetic captions for each milestone',
      'Google Calendar style shots to visualise schedule commitment',
    ],
    voiceover: [
      'Conversational Hinglish with aspirational upswing, maintain warm tone',
      'Light background groove + subtle riser before each phase',
      `End sentence me confident whisper + beat drop for retention hook — delivery ka vibe ${vibe.toLowerCase()} jaisa rakho`,
    ],
    tags: [
      `${angle} roadmap`,
      `${angle} transformation`,
      `${niche} glow up`,
    ],
    hashtags: [
      '#glowuptemplate',
      '#dayzerochallenge',
      '#buildinpublic',
    ],
    posting: [
      {
        label: 'Drop 1',
        window: 'Tuesday 8:30 PM IST',
        reason: 'Prime binge slot for aspirational content, high completion.',
      },
      {
        label: 'Drop 2',
        window: 'Thursday 12:45 PM IST',
        reason: 'Lunch break aspirational scroll, great for saves.',
      },
      {
        label: 'Drop 3',
        window: 'Sunday 9:15 PM IST',
        reason: 'Sunday reset vibe — planning mode audience ready to commit.',
      },
    ],
    automation: [
      {
        step: 'Trend mining',
        tool: 'vidIQ Trend Alerts',
        how: 'Set niche keywords, fetch top-performing Shorts headings daily.',
      },
      {
        step: 'Storyboard wizard',
        tool: 'Gamma.app',
        how: 'Prompt ke through auto-create slide storyboards for each phase, export to notion.',
      },
      {
        step: 'Scheduling',
        tool: 'Hootsuite + Zapier',
        how: 'Zap configure karo: Notion status = "Approved" -> auto schedule to Shorts/Reels/TikTok.',
      },
    ],
  };
}

function buildSeedThree(
  niche: string,
  audience: string,
  platform: string,
  goal: string,
  vibe: string,
) {
  const angle = titleCase(niche);
  return {
    topic: `Smart Stack Breakdown: AI tools jo ${angle} ko autopilot pe daal de`,
    virality: `People love tool stacks: swipe-friendly explainer format ${platform} algorithm ko signal deta hai ki ye shareable knowledge bomb hai, aur ${goal.toLowerCase()} ke liye trust anchor build hota hai.`,
    titles: [
      `${angle} ke liye mere top 3 AI copilots`,
      `Iss stack se tum 5x fast ${angle} content banaoge`,
      `${angle} ops ka full automation layout`,
    ],
    hooks: [
      `Ye trio tumhare ${angle} workflow se editing stress hatayega — ab sirf shoot karo aur drop karo.`,
      `Imagine karo ${audience}: tum so rahe ho aur ye stack tumhara channel grow kar raha hai.`,
      `Main jo backend use karta hoon ${angle} ke liye, woh sab reveal kar raha hoon — steal it.`,
    ],
    scripts: [
      {
        label: 'Stack Spotlight',
        short: `Countdown format use karo: 3...2...1... har AI tool ke liye 5-second demo clip.`,
        long: `Narration me pain point → tool → instantly measurable win structure rakho. Screen recording snippets overlay karo.`,
        cta: `Ye stack ka Notion template free chahiye? "STACK" comment karo, auto-DM trigger hai.`,
      },
      {
        label: 'Workflow Flythrough',
        short: `Start with kanban board shot, arrows animate showing automation flow.`,
        long: `Each step me "If This → Tool handles" format explain karo. Show quick macro of you reviewing final cut sip of coffee.`,
        cta: `Iss automation ko plug karne ke liye 10-minute loom walkthrough telegram channel me drop kar raha hoon — join link bio me.`,
      },
      {
        label: 'Cost Breakdown',
        short: `Hook: "Pure stack cost? ₹0 se ₹2999 tak."`,
        long: `Bullet levels me teenager, starter, pro tiers explain karo. Screen text me tool logos + price flashes.`,
        cta: `Comment me apna budget likho, main tumhare liye custom combo recommend karunga.`,
      },
    ],
    visuals: [
      'Overhead desk shots with colourful sticky UI callouts',
      'Dynamic screen recordings with zoom cuts synced to beat',
      'Animated flowchart transitions (Use Canva / Figma smart animate)',
    ],
    voiceover: [
      'Confident but chill tone, emphasise tool names with mini pauses',
      'Add glitch swoosh SFX between tool reveals for dopamine hits',
      `Outro me quick recap chant: "Shoot. Drop. Scale." remixed with beat tag — voice delivery ${vibe.toLowerCase()} flavour me rakho`,
    ],
    tags: [
      `${angle} ai tools`,
      `${niche} workflow`,
      `creator automation stack`,
    ],
    hashtags: [
      '#aitoolbox',
      '#creatoreconomy',
      '#nocodeautomation',
    ],
    posting: [
      {
        label: 'Drop 1',
        window: 'Monday 11:50 AM IST',
        reason: 'B2B style productivity slot — tool hunters active.',
      },
      {
        label: 'Drop 2',
        window: 'Friday 9:20 PM IST',
        reason: 'Weekend planning energy — best for checklists.',
      },
      {
        label: 'Drop 3',
        window: 'Sunday 4:40 PM IST',
        reason: 'Sunday systems setup window, high DM conversions.',
      },
    ],
    automation: [
      {
        step: 'Outline autogen',
        tool: 'PromptLayer + GPT-4o mini',
        how: 'Preset prompt create karo jisme niche inject karo; output ko auto-sync karo Google Docs me.',
      },
      {
        step: 'Voiceover synth',
        tool: 'ElevenLabs + Descript',
        how: 'Script paste karo, instant Hinglish voiceover export, Descript me filler clean karo.',
      },
      {
        step: 'Asset sync',
        tool: 'make.com',
        how: 'Drive folder drop = auto push to Canva template + Notion status update.',
      },
    ],
  };
}

function clean(value: string) {
  return value.trim();
}

function titleCase(value: string) {
  if (!value) return '';
  return value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function sanitizeForTag(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .replace(/^[^a-z]+/, '')
    .slice(0, 24) || 'creator';
}

function buildTags(niche: string): string[] {
  const base = sanitizeForTag(niche);
  return [
    `${base} tips`,
    `${base} strategy`,
    `${base} content`,
    'yt automation',
    'short form growth',
  ];
}

function buildHashtags(niche: string, platform: string): string[] {
  const base = sanitizeForTag(niche);
  const platformTag = platform.toLowerCase().includes('youtube')
    ? '#ytshorts'
    : platform.toLowerCase().includes('instagram')
      ? '#reels'
      : '#tiktok';
  return [
    `#${base}`,
    `#${base}tips`,
    '#contentgrowth',
    '#shortform',
    platformTag,
    '#creatorhustle',
  ];
}

function uniqueMerge(primary: string[], secondary: string[]): string[] {
  const seen = new Set<string>();
  const merged: string[] = [];
  [...primary, ...secondary].forEach((item) => {
    const trimmed = item.trim();
    if (!trimmed) return;
    if (seen.has(trimmed.toLowerCase())) return;
    seen.add(trimmed.toLowerCase());
    merged.push(trimmed);
  });
  return merged;
}

function toBlock(plan: Plan): string {
  const lines: string[] = [];
  lines.push(`Variation ${plan.id}`);
  lines.push(`├─ Topic / Idea: ${plan.topic}`);
  lines.push(`├─ Virality Potential: ${plan.virality}`);
  lines.push('├─ Titles:');
  plan.titles.forEach((title, index) => {
    lines.push(`│  ${index + 1}. ${title}`);
  });
  lines.push('├─ Hook:');
  plan.hooks.forEach((hook, index) => {
    lines.push(`│  ${index + 1}. ${hook}`);
  });
  lines.push('├─ Script:');
  plan.scripts.forEach((script, index) => {
    lines.push(`│  Variation ${index + 1} — ${script.label}`);
    lines.push(`│    • Short-form: ${script.short}`);
    lines.push(`│    • Long-form: ${script.long}`);
    lines.push(`│    • CTA: ${script.cta}`);
  });
  lines.push('├─ Visual Plan:');
  plan.visuals.forEach((visual, index) => {
    lines.push(`│  ${index + 1}. ${visual}`);
  });
  lines.push('├─ Voiceover:');
  plan.voiceover.forEach((voice, index) => {
    lines.push(`│  ${index + 1}. ${voice}`);
  });
  lines.push('├─ Tags + Hashtags:');
  lines.push(`│  Tags: ${plan.tags.join(', ')}`);
  lines.push(`│  Hashtags: ${plan.hashtags.join(' ')}`);
  lines.push('├─ Posting Strategy:');
  plan.posting.forEach((slot) => {
    lines.push(`│  ${slot.label}: ${slot.window} — ${slot.reason}`);
  });
  lines.push('├─ Tools for automation:');
  plan.automation.forEach((step) => {
    lines.push(`│  ${step.step}: ${step.tool} → ${step.how}`);
  });
  return lines.join('\n');
}
