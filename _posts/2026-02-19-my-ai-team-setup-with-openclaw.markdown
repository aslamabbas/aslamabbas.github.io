---
layout: post
title: "My AI Team Setup with OpenClaw"
published: true
description: "I built a team of 5 AI agents in 4 days on a Mac Mini. Here's what actually happened — the late nights, the things that broke, and the workflows that changed everything."
keywords: openclaw, ai agents, non-technical founder, personal ai assistant, telegram ai, voice workflow, whisper cpp, founder productivity, micro company, ai team
tags: tech
disqus: y
share: y
---

<center><img src="/assets/images/posts/openclaw-ai-team/openclaw-team-hero-v2.jpg" alt="Founder operating a personal AI team workspace with three assistant panels" /></center>
<center><b class="small">The moment you realize you're building something real.</b></center>

<br>

I run multiple SaaS products at [Micro.company](https://micro.company). Store.link, Collect.chat, Help.center, Course.link — the list keeps growing. And the context switching never stops.

I'd been watching OpenClaw for a while. Not as a toy, but as something that could genuinely change how I work. One evening, I decided to stop watching and start building.

What followed was four days of late nights, broken configs, and small breakthroughs that added up to something I now can't imagine working without.

This is that story.

## Day 1: The Late Night Sprint

It started at night. That's when I do my best building — fewer interruptions, clearer thinking.

I set up OpenClaw on my Mac Mini, connected it to Telegram, and created my first agent. Named him Dumbledore. Wise, warm, slightly eccentric. I wanted an advisor, not a chatbot.

The first version of his personality was too corporate. Polite, hedging, safe. So I rewrote it. Then rewrote it again. Gave him opinions. Permission to push back. Permission to swear when something deserved it.

**Lesson: Your agent's personality isn't cosmetic. It determines whether you'll actually use it or ignore it.**

Then came voice. I set up Whisper.cpp for speech-to-text (runs locally, zero cost) and Edge TTS for text-to-speech. Connected everything through Telegram.

That changed the entire dynamic. Instead of typing 200 words of context, I'd just talk for 30 seconds. Faster input, richer context, more natural thinking.

By 2 AM, I had a working agent that could hear me, respond intelligently, and remember what we'd discussed. Not bad for a first night.

I also hit my first wall: Brave Search API rate limit. Mid-conversation, the search just stopped working. No warning, no graceful fallback. Session context was saved, nothing was lost — but it was a reminder that things break, and you need to plan for it.

## Day 2: Too Many Agents, Too Fast

Riding the momentum from Day 1, I went all in. Created four more agents in a single day:

- **Merlin** — content and dev work
- **Mad-Eye** — fitness coach (yes, really)
- **Snape** — SaaS mentor for product strategy
- **Hermione** — coding and research

Five agents total. It felt productive. It also felt like chaos.

The problem wasn't creating them — that's easy. The problem was that each agent started from zero. They didn't know my products. They didn't know my priorities. They didn't know each other existed.

So I built a shared product knowledge base. One folder per product, with README files containing positioning, features, audience, competitors. Every agent could read them. Instantly, the quality of responses improved.

**Lesson: Agents without shared context are just five strangers in a room. Give them the same briefing documents.**

I also reorganized my Todoist that day — four clean projects instead of the mess it had been. Small thing, but it meant agents could actually add tasks to the right place.

## Day 3: When Things Break (and You Learn the Most)

Saturday. What started as "let's see what happens" became the most productive day of the whole experiment.

Merlin studied my old blog posts and created a proper writing style guide. That was a first — my voice, codified. Warm, conversational, story-first, scene-to-lesson loops, no corporate filler. Every future piece of writing now had a reference point.

Meanwhile, Hermione was building an OpenTalk MVP — a macOS voice app with local Whisper transcription that relays messages to any agent. SwiftUI, actual audio processing, the whole thing.

Then I tried building the OpenClaw macOS app from source. Swift macros needed full Xcode — not just the command line tools. That's a 12GB download. Nobody tells you that upfront.

The bigger lesson came mid-afternoon. Anthropic started rate-limiting my main agent (Opus). My fallback was set to Sonnet — also Anthropic. When the whole provider is in cooldown, falling back to the same provider doesn't help.

We redesigned every agent's fallback chain to cross provider boundaries. Anthropic → OpenAI → Google. Redundancy only works if it's actually different.

**Lesson: Same-provider fallbacks are not fallbacks. They're just hope.**

<center><img src="/assets/images/posts/openclaw-ai-team/openclaw-team-voice-v2.jpg" alt="Voice-first workflow with founder speaking while AI output updates live" /></center>
<center><b class="small">Voice made this system practical: less typing, faster context, smoother thinking.</b></center>

## Day 4: The Day Everything Shipped

This was the day it stopped feeling like a project and started feeling like a team.

**Mad-Eye got me to the gym.** I hadn't trained in a while. I tried every stall tactic — asking about the weather, looking up banana calories, suggesting I reorganize my Obsidian vault first. Mad-Eye called out every single one. "That's a stall. Get dressed." Smith machine squats, bench press, overhead press. Fasted training during Ramadan. No pain, moderate effort. First real session in months.

An AI agent got me to the gym. I did not see that coming.

**The marketing engine went live.** I set up a cron job that runs every three hours: pick a random product, read its docs, generate one Instagram ad concept. Not "Sign up for free" garbage — I wanted Apple and KFC-level creative. Visual metaphor, implied meaning, minimal copy.

First concept that landed: Course.link. Visual of a phone showing 1.4 million YouTube views next to a crumpled ATM receipt showing $0.00. Copy: "1.4 million students. Zero tuition." No product mention. No CTA. Just the gut punch that every creator knows.

**Slack went live.** My co-founder Shyjal tested it. First time anyone besides me interacted with the agents. That triggered a whole security review — prompt injection protection, identity locking, authorized sender lists. If your agents touch real business context, security is day-one work.

**Hermione redesigned the dashboard.** Clean Straude-inspired design, usage heatmaps, skills management, cache tracking. From functional to something you'd actually want to look at.

**Merlin shipped two videos.** An Orders.app explainer and a Store.link tutorial, both built programmatically with Remotion. Rendered and delivered to Telegram.

One day. Five agents. All shipping.

## Day 5: The Boring Day (That Proved It Works)

Day 5 was quiet. And that was the point.

The marketing cron was humming — Store.link, Help.center, Collect.chat concepts dropping every few hours. Cron delivery had some issues (jobs ran fine but couldn't announce to Telegram), so I fixed the routing. Cleaned up dead jobs. Tuned prompts.

No drama. No late night debugging. Just a system running in the background while I did other work.

**That's when you know the setup is working — when you stop thinking about the setup.**

## What I Got Wrong

- **Too many agents too fast.** I should have run one agent for a week before creating more.
- **No shared context on Day 1.** Each agent was an island until I built the product knowledge base.
- **Same-provider fallbacks.** Useless when the provider itself is down.
- **Config version mismatches.** Different OpenClaw versions writing to the same config file wiped my API keys twice.
- **Ignoring delivery routing.** Cron jobs ran perfectly but nobody saw the results because Telegram delivery wasn't configured right.

## What Actually Worked

- **Voice notes.** The single biggest unlock. 30 seconds of talking replaces 5 minutes of typing.
- **Shared product docs.** One knowledge base, all agents.
- **Project memory files.** `.memory/STATE.md` in every project so any agent can pick up where another left off.
- **Agent-to-agent delegation.** One conversation, background execution, consolidated result.
- **The fitness coach.** Sounds silly. Actually works. Accountability doesn't care if it's human or AI.
- **Creative automation.** The marketing cron generates concepts I wouldn't have thought of. Not all gems, but enough to build on.

## The Honest Take

Was this worth the setup time? For me, yes.

I'm not deeply technical. I can follow docs, debug config, and ship with help — but I'm not writing frameworks from scratch. OpenClaw made it possible to build a practical AI setup without becoming a prompt engineer.

The approach that worked:

1. Start with one agent. Make it genuinely useful.
2. Add shared context before adding more agents.
3. Design around workflows, not capabilities.
4. Build for daily use, not demos.
5. Let it compound.

A morning briefing that gets 1% better each day compounds. A memory system that gets 1% better at context switching compounds. A marketing engine that generates concepts while you sleep compounds.

This is not about replacing human work. It's about amplifying the work only you can do — and letting agents handle the rest.

<center><img src="/assets/images/posts/openclaw-ai-team/openclaw-team-conclusion-v2.jpg" alt="Founder and AI team visualizing long-term workflow compounding" /></center>
<center><b class="small">Start simple, make it useful daily, and let the gains compound.</b></center>

---

Four days. Five agents. One Mac Mini.

Not perfect. Not finished. But genuinely useful — and getting better every day.
