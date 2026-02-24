---
layout: post
title: "I tried OpenClaw and I liked it"
published: true
description: "My experience setting up OpenClaw as a non-technical SaaS founder, the buzz, the struggles, the Mac Mini hunt in Dubai, and what happened after 5 days of building AI agents."
keywords: openclaw, ai agents, non-technical founder, personal ai assistant, telegram ai, voice workflow, mac mini, founder productivity, micro company, ai automation
tags: tech
disqus: y
share: y
---

<img src="/assets/images/posts/openclaw-ai-team/openclaw-team-hero-v3.jpg" alt="A personal AI team workspace running on a Mac Mini" />
<b class="small">You and your AI team makes a busy desk</b>

The whole internet is buzzing with OpenClaw right now.

YouTube videos. Tweets. Discord threads. People showing off workflows that look like science fiction - 10 agents running in orchestration, browser automation, voice-first everything. The hype is real, and it caught my eye.

A bit about me: I run SaaS products at [Micro.company](https://micro.company). We have 6+ products - [Store.link](https://store.link){:target="_blank"}, [Collect.chat](https://collect.chat){:target="_blank"}, [Help.center](https://help.center){:target="_blank"}, [Course.link](https://course.link){:target="_blank"}, and more. But as the name suggests, we're a micro company. Very small team. We automate as much as possible, say no to a lot of things, and keep aside activities simply because there's not enough time and not enough human force.

When I saw OpenClaw, and especially after my co-founder [Shyjal](https://shyjal.com){:target="_blank"} dived right in and bought a Mac Mini for it, I knew this wasn't just another AI tool that can be skipped over. This could actually automate the things we *wanted* to do but never had the bandwidth for.

The only thing stopping me? The configuration sounded a little too techy. I've been living on the border of tech and non-tech for a while, and I hadn't dived deep into the technical side in a long time.

But it was time to shed those comfort clothes.

## The First Test (On a Virtual Machine)

I wasn't about to buy hardware before knowing if this was real. I was running a MacBook Pro with 16GB RAM, so I installed VMware Fusion, set up an Ubuntu virtual machine - gave it 4GB RAM and about 30GB of storage, more than enough for OpenClaw.

There are plenty of setup guides already out there, so I won't take you down the installation journey. What I actually did was open a ChatGPT session and say: *"Hey, I need your help. I'm going to be setting up OpenClaw. Guide me step by step."* And it did. Step by step.

I had a Claude subscription, added the API key, and it guided me through setting up a Telegram bot and binding the agent.

The very first time I sent "hi" in Telegram and got a reply back - that was fascinating. The idea that you can just open one of your messaging apps and chat with an AI running locally on your system. It's too simple. And yet, nobody thought of it before [Peter](https://x.com/steipete){:target="_blank"}.

Kudos to Peter, the mind behind OpenClaw, for coming up with something like this.

## The Freeze (and the Mistake)

I played around with the VM a bit, then tried browser automation. My entire MacBook froze.

Here's what happened: I saw those videos of people running 10-20 agents in orchestration and made the mistake of following that template. I spun up a bunch of Telegram bots, a bunch of agents, tried to do a lot of things at once - browser automations, parallel tasks, the works.

The VM rammed up memory and my MacBook became unusable.

OpenClaw itself doesn't require that much. It was the Chrome browser eating memory. But the lesson was clear: start small, don't copy the showreel setups.

> **Lesson:** The YouTube demos are end states, not starting points. Start with one agent.

## Hunting for a Mac Mini in Dubai

Like everybody else in this space, I decided I needed a Mac Mini. At this point, I was in Dubai.

Out of stock on Apple's website. Out of stock on Amazon. Available on noon.com, but the delivery date was too close to my travel back to Kerala - couldn't risk it.

So I went to Bur Dubai. If you know, you know. You can get anything there - any Apple product, any accessory, any iPhone.

I visited a bunch of shops looking for a specific configuration: Mac Mini M4 Pro, 24GB RAM, 512GB storage. The regular Mac Minis were available everywhere, but this particular spec? That's the hot item.

After some calls between multiple warehouses, one store said: *"We have one piece. Give us an advance and we'll bring it from the warehouse. One hour."*

I happily paid the advance and walked away.

Half an hour later, the store owner called: *"Unfortunately, we had about 80 pieces of this model. But someone just placed an order for the entire stock. It's sold out."*

That's the situation right now. People are racking up Mac Mini Pros because everyone sees the potential. The buzz is real.

I walked away disappointed. But eventually placed an order elsewhere and got my hands on it once I reached Kerala.

## Setting Up the Mac Mini

I arrived home in the evening and started unpacking at night. Plugged in the Mac Mini with a monitor, keyboard, and mouse. Updates. The usual.

One thing I'd already done with my Ubuntu VM was export the OpenClaw config files. I just moved them to the new machine, and that handled most of the initial setup. Head start.

This time around, I spent a lot of time optimizing the **soul file** of my main agent. The soul is what gives your AI agent its personality. I iterated on it multiple times. I also found a tweet by Peter that was shared in a WhatsApp community - used that to optimize it further.

After some iterations, I genuinely started enjoying the conversations. It felt right.

## Things Broke (A Lot)

Let me be honest: the gateway went down. Multiple times.

I was doing random experiments - trying to set up different models, install new features, edit configurations. And sometimes the agent didn't have the right knowledge to guide me. I'd follow its instructions in Telegram chat, and end up messing up my config files.

One time I tried to manually edit `openclaw.json` to add Telegram channels. **I would not recommend this unless you are very sure of what you're doing.** I messed up the config again. Thankfully, OpenClaw creates `.bak` backup files in the same folder, so you can revert. If it hadn't done that, I don't know what I'd have been doing.

> **Tip:** After setting up your main agent, the first thing you should do is feed it the OpenClaw documentation. Tell it to learn everything about itself. That saves you from a lot of bad self-advice later.

## Voice Changed Everything

Typing long instructions to AI gets old fast. There's a lot you want the agent to do, and typing it all out is painful.

So I asked: *"How can I have speech-to-text and text-to-speech?"*

The agent said it would set up Whisper and Microsoft Edge TTS. I don't know what it did behind the scenes, but about a minute later it was active. I could just start sending voice notes.

That changed the pace of everything.

<img src="/assets/images/posts/openclaw-ai-team/openclaw-team-voice-v2.jpg" alt="Voice-first workflow - speaking to AI agents through Telegram" />
<b class="small">Voice made this system practical: less typing, faster context, smoother execution.</b>

## Spinning Up More Agents

With voice working, I spun up a few more agents with dedicated Telegram bots:

- A **fitness agent** - I wanted to test if AI could track my workouts and keep me accountable. I gave it a David Goggins-like personality in the soul file. Now every time I give an excuse, it pushes me back. It actually works.
- A **developer agent** - for coding and building tasks. (It's not really necessary, unless you want to run it on a lower model and save some tokens.)

A few things I learned about running multiple agents:

**Each agent has its own workspace and context.** They only know what's in their own conversations. If you want agents dedicated for different purposes, you need to modify each soul file for the specific problem you're solving.

**Shared files need explicit setup.** I wanted all agents to know about all our products. So instead of saving product info in each agent's default workspace, I told the main agent to save it in a shared folder - `/Documents/products/` - with a README for each product. That actually worked well.

**Fallback models are essential.** I hit Claude's API rate limit, and the gateway just stopped. Later I realized you need fallback models - if Opus hits a limit, fall back to Sonnet or even GPT-5.3. The quality may change, but you get uninterrupted work. Set this up early.

## The Memory Problem (and My Approach)

Everyone using OpenClaw is struggling with context and memory. I'm not saying I solved it, but here's what I did:

**QMD for semantic memory.** My co-founder Shyjal shared an article about it. I gave the documentation link to the agent, and it implemented it.

**Project memory state.** Every project I ask the AI to work on gets a `.memory/STATE.md` file - a brief of what the project is, what actions were performed, and what's planned next. It's a short markdown file that gets updated whenever something happens in the project. I even created a custom skill for reading and writing to it.

Five days in, the agent hasn't missed any context. That's promising.

**Obsidian journaling.** I set up a cron job that runs three times a day. It journals whatever's in the context of all agents into an Obsidian vault. This isn't for memory - it's for future search. If I ever want to look back and see what happened, I can query Obsidian. It also gives you that beautiful graph view with linked notes.

People have started sharing smarter solutions - SuperMemory, Mem0, and others. But for now, this combination is working.

## Security Matters

One thing I'd strongly recommend: **set up a cron job for security audits and OpenClaw updates.** OpenClaw can have security issues from time to time, and you don't want to discover them the hard way. A weekly automated check gives you peace of mind.

## What I Learned From Things Breaking

A lot broke in the first few days. The gateway would stop. Configs would get corrupted. APIs would rate-limit at the worst times.

And that's when I really got my hands deep into the CLI. Started learning the commands one by one - `openclaw gateway restart`, `openclaw doctor fix`, `openclaw models list`, `openclaw agents list`. Started getting familiar.

> **Things will break.** And when you fix them, you get a much better understanding of how OpenClaw actually works. I wouldn't trade that learning for a smooth installation.

## Where I Am Now

Five days in. I'm genuinely enjoying this.

The fitness agent pushes me to work out. The main agent helps me think through product decisions. I'm trying to build a marketing engine with custom skills - automated creative concepts for our products, generated every few hours.

I explored something called Lobster workflows, but that might be overdoing it. Custom skills should be enough for most things.

## The Bigger Picture

Here's what I think you should understand: **your AI assistant will only be an extension of your abilities.** The smarter people in the room will come up with smarter automation strategies that do what you're aiming to do in a much simpler way. There are multiple ways to solve a problem.

To my non-technical friends: just keep at it. Keep optimizing. Keep researching. I've been at this for 3-4 days, and I've learned more than I ever could from just Googling. I learned the most after things broke. So I'm glad they did.

It takes time to figure out proper use cases, but I'm sure we'll get there.

One more thing that came to mind: we've reached a point where you can look at a vibe-coded app and tell which tool built it. Lovable products look like Lovable. Gemini products look like Gemini. Design still matters. Fresh ideas still matter. AI is fast - it connects the dots quickly and automates at speed. But I don't think it's solved the creativity and design thinking problem yet.

For now, humans are still in the game. We just have to master a new set of skills.

<img src="/assets/images/posts/openclaw-ai-team/openclaw-team-conclusion-v2.jpg" alt="Humans and AI working together" />
<b class="small">We didn't lose our jobs. We just got superpowers.</b>

---

To my friends who haven't heard about OpenClaw yet, or who've been on the fence - this might be the beginning of a wave that drastically changes how we work. A lot of repetitive human tasks can now genuinely be automated. That's not a statement said for the sake of saying it. It's actually being done.

So let's prepare. Upskill. Because the future, in my perspective, is a place where AI and humans work together to solve problems. 

Problems will always exist. The way we solve them has just changed.

And turns out, we just got superpowers.
