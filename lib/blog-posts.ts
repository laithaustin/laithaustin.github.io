export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "narrowing-path-software-engineering-llms",
    title: "The Narrowing Path of Software Engineering in the Age of LLMs",
    date: "2025-01-28",
    description: "Exploring how LLMs are reshaping software engineering and what it means for the future of the field.",
    content: `I had a very interesting conversation with Matt Klein the other day (check out the From Scratch Podcast episode if you're curious), and we had a really interesting tidbit in the podcast regarding the application of LLMs on critical, low-level, systems software.

Matt claims that the current SOTA in LLMs is pretty much useless when it comes to the type of work he does. To some extent, I do think this can be a comforting claim that goes against the grain of what some of the doomers out there say when it comes to whether the software engineering field is effectively void and bound for inevitable obsolescence in the coming years. Maybe LLMs fundamentally can't replace the rigorous tasks that require deep, first-principles thinking. However, I must admit this isn't really something that I believe but I'd like to explore the thread of what the world of software engineering is potentially shaping up to be in the coming years.

## Most of Software Engineering is Not Critical

It should go without saying, that the overwhelming majority of work done by software engineers in the field is nowhere near the level of criticality that Matt Klein is talking about. Most engineers can't claim to have built an edge proxy from the ground up in C++, or have worked on a novel part of an operating system that millions of people use on the day to day. The overwhelming majority of software engineering is a translation of business problems to code that is easily repeatable and scalable. Eliminating the need for bespoke solutions is a key trend in the modern world of software engineering at most tech companies that are trying to innovate on in house solutions. This of course comes with the somewhat implicit assumption that novel solutions are not needed because the problems that are being solved are not new and are rather permutations of many existing solutions that have already been created in-house.

In fact, probably the greatest bottleneck for many large companies these days is the overwhelming amount of tech debt from the various CRUD apps and bespoke solutions that simply dangle around in the product ecosystem. This need to either migrate solutions or simply build better more scalable ones is not something that would require much human thinking, more than it require human toiling. And if we're being frank, this is what LLMs are arguably the best at. It's not really hard to imagine how easy it might be to someday ask an LLM agentic system to simply clone a repository and reconstruct another one with new compliance, requirements, and engineering practices (just see how good Claude Code is at building a greenfield product without human interception for example).

Truthfully, I think the tough pill to swallow is that even putting aside the idea that LLMs might not be capable of truly novel and advanced thinking, it's possible that most software engineering really doesn't need that in the first place.

## What's to Come?

Okay. So what does that mean for the average software engineer? One might argue that we will still need human intervention and understanding in the event these systems produce something that no one really understands. Imagine "vibe coding" (quick, casual coding guided by intuition or AI — source) an entire suite of products overnight and having to manage all of these deployments if you let the LLMs deploy them to production. That would probably be a horrendous idea nowadays.

That being said, it's not hard to imagine that if the real issue here is observability and understanding what the LLMs are writing and deploying to production, this is also probably something that an LLM is getting increasingly better at than a human. While it's definitely true we collectively would all prefer to still have some humans in the loop, there's no denying that what was once the original task of a software engineering team working for weeks on end, has become something much more like a session on Cursor where a senior software engineer can simply hit accept, accept, accept, until they are just rapidly approving away at these PRs that are being written at superhuman speed, with all the context and consideration in the world for best engineering practices (if prompted correctly). I simply don't see how at least in the short to near term, this isn't the minimum of what most software engineering is going to be.

Yes, we'll see a lot of quickly generated, mediocre software being written that has no where near the performance considerations and design subtleties of the best systems that have been deployed today. But unfortunately, due to the rapidly decreasing overhead of just iterating and prompting a model to fix something and refactor other things; this isn't really a problem that I think most software is going run into. A product manager that just wants to make something that compliments an existing enterprise solution, and provide a clean, client-facing UI simply may not need a team of frontend developers anymore.

Just imagine, instead of needing to deliberate and wait for the full stack team to execute on just one idea for a product, you could get virtually dozens or even hundreds of variations of the same product finished within a day and compare the ideas and products in a rapid succession that you could never do before. PMs could employ evolutionary approaches to the ideas they choose to move forward with, and we end up with a suite of software that gets rapidly prototyped, tested, and deployed all within days. It's honestly a product manager's dream. Owning a product that has essentially won the darwinian battle for best idea amongst an ensemble of many ideas that have all been made and generated seemingly by an army of programmers that can work 24/7.

At least for me, it's hard to imagine this going a significantly different way. The future of software engineering for most of these companies is going to look much closer to a competitive marketplace of ideas and a survival of the fittest environment where the best ideas survive and get resources (where the exceptional engineering talent get allocated to update/work with LLMs to rigorously improve the product) and the worst ideas disappear into the infinite void of AI generated software slop. It will be cheaper, faster, and in all likelihood much better to ship entire projects and ideas than it will be to have a traditional agile methodology of people deliberately building a software product from scratch.

## A Grim Conclusion

So while my friend Matt may be correct that his job and the job of the top 1% of engineers is safe from the grasp of LLMs for the coming years, it should be fairly obvious that this is not something that will hold for the remainder of us who are still climbing our way from the trenches of small ideas and products to making real impact and growing as we develop throughout our career.

I would argue this is the greatest crime of the recent developments of this technology.

The crime that many who have an earnest interest in becoming excellent programmers and shaping the field in ways similar to the greats like Matt, may never have the same opportunities to iterate through various projects and find themselves on teams where they can be appropriately challenged. Not every new graduate has the ability to work on the hard problems without some guidance along the way first, or some significant amount of experience working on progressively harder projects. How could any new graduate hope to compete with the ostensible wave of LLM agents that can work day and night to generate thousands of times the code that any other human could write in the same time span?

If there's any light at the end of the tunnel, it's what Matt said immediately after his opening preface about LLMs in the podcast:

> "If LLMs are very useful for writing code that you're working on, you're probably not working on very interesting things..."

So perhaps that's the key. Aggressively pursuing the most interesting problems that have likely never been solved—problems that demand the utmost human ingenuity and deepest thinking—is our best hope of staying relevant and finding a place in this evolving landscape of technology. We may have a short buffer of time before we unlock the last few breakthroughs needed to create something like an agentic Chris Lattner or Linus Torvalds that can replace us all, so I believe that in this final chapter of what we presently understand to be software engineering, it will be taste and a hunger for important problems that will be our golden ticket to keeping our place as engineers.`
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
