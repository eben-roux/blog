---
title: "AI in music"
date: 2025-05-04
---

The absolutely brilliant Doctor Mix has a [video](https://www.youtube.com/watch?v=A94esPv2iXQ) recreating the iconic "Enjoy the silence" by Depeche Mode.

I have always been of the opinion that the day when a computer can take an audio file and output the notes for each of the instruments we would be at a truly remarkable point.

---

## ChatGPT

I asked the genie:

> If I provide an audio file containing a song to the most capable AI, of any variety, would it be able to provide me with a midi file containing the individual tracks for each instrument in the song?

And the response:

> In theory, yes—but in practice, it's complicated.

The full response is at the bottom of this article should you want to read it, but the "Bottom Line" provided:

> The best current AI can attempt to extract MIDI for each instrument, but the results will likely need manual correction or won't fully match the original. You're looking at a high-difficulty problem at the edge of current capabilities.

I may not be an accomplished musician, but I have dabbled a bit and it is something I have enjoyed doing.  It started way back in high school, around 1989, when I used a [Sound Blaster](https://en.wikipedia.org/wiki/Sound_Blaster) card and the DOS [Cakewalk](https://en.wikipedia.org/wiki/Cakewalk_(sequencer)) sequencer to "automate" my [Yamaha PSS 680](https://www.reddit.com/r/synthesizers/comments/95rgj0/the_other_unsung_portasound_hero_pss680_is_now/).

When I like a song I sometimes like to create my own version of it.  Recreating the song from scratch is rather time consuming, although finding the notes comes quite easily to someone like Doctor Mix.  Another option is to try to find a [MIDI](https://en.wikipedia.org/wiki/MIDI) file that contains something resembling the original.

Having a computer take the original recording and output the notes would, of course, be first prize.

## Limits

Artificial intelligence systems are crunching numbers.  They do not "hear".  For AI to "make sense" of a bunch of 0's and 1's representing sound waves and then bring that back to actual notes is... not easy.

What I also found fascinating about the Doctor Mix recreation is seeing just how DAW (Digital Audio Workstation) and VST (Virtual Studio Technology) software has evolved.  The fact that a single "sound" may actually consist of a number of waveforms means that identifying these as part of the same track is rather tricky.  All the knobs and levers means that music production is truly an art and it seems to have become quite a bit more complex over the years, at least in the digital space.  I guess that back in the analog days things were quite a bit different.

Perhaps part of the AI problem is that humans are analog creatures and that we do not need all the information on the Internet before we can ride a bike.

Then again, can a computer ride a bike?

---

Since AI responses will invariably vary going forward, below is the full ChatGPT response as it was produced on 4 May 2025 around 8h30.

## Can AI Convert a Song Audio File to a Multi-Track MIDI File?

### In Theory  
Yes — AI could attempt this. But...

### In Practice  
It's extremely difficult, and even the most capable AI systems today have significant limitations.

---

## The Two Main Challenges

### 1. Audio-to-MIDI Transcription

Converting raw audio (like `.mp3` or `.wav`) into a symbolic format (MIDI) is challenging because:
- Most songs are **polyphonic** (multiple notes at once).
- Instruments **overlap in frequency**, making separation hard.
- Recordings often have **noise**, **reverb**, and **effects**.

> Many tools only produce a **single-track MIDI** and fail to separate by instrument.

---

### 2. Instrument Separation (Source Separation)

This step isolates instruments into separate tracks:
- Tools like [Demucs](https://github.com/facebookresearch/demucs) and [Spleeter](https://github.com/deezer/spleeter) can split a song into:
  - Vocals  
  - Drums  
  - Bass  
  - Other

> But these generate **audio stems**, not MIDI.

---

## Combined Systems (AI-Powered)

Some tools try to do both:

| Tool           | Description                             | Notes                                     |
|----------------|-----------------------------------------|-------------------------------------------|
| Melodyne       | Audio editing with pitch detection      | Great for mono/polyphonic parts           |
| AnthemScore    | Audio-to-MIDI AI software               | Works best for piano-type input           |
| RipX           | AI stem separation + MIDI conversion    | Some success with multitrack export       |
| Research Tools | Academic models trained on datasets     | Not widely available or easy to use       |

> Most of these produce **approximate** MIDI files. Multi-track separation is rarely clean.

---

## Bottom Line

> The best current AI can **attempt** to convert a song to **multi-track MIDI**, but:
> - The result is **not accurate**  
> - You’ll likely need to **edit or fix** the output manually  
> - Simple solo instrument songs work **much better** than full mixes

---

## Want to Try It?

Let me know if you want:
- Links to the best available tools  
- Help processing a specific song  
- Guidance on MIDI editing afterward

Would you like to try this with a specific audio file?
