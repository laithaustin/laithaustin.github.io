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

  {
    slug: "the-magic-box",
    title: "The Magic Box",
    date: "2026-07-09",
    description: "A short fable about a carpenter who finds a box that finishes his work for him.",
    content: `There was once a young carpenter who aspired to be among the best at his work.

He spent his mornings and evenings crafting and churning without any rest.

What had once taken him months of effort now took him only weeks.

He had found his craft and his way.

The final product never mattered; in spite of the calluses and abrasions his hands had accumulated, it was the euphoria of building that gave him such joy.

The demand for his work became high, and rise to the demand he did, chipping away at projects long into every night.

One day he stumbled upon a fairly large box.

It was quite the austere wooden box, hollow and strange.

Inside it was a letter with a cryptic phrase:

"Ask and you shall receive. What is enclosed shall be turned into what you desire."

For a while he paused and contemplated what it could mean.

He took the curious box back to his garage with him and put it off to the side, forgetting about it almost overnight.

Just before he tucked in for the night, he put away some unfinished works inside the box for safekeeping, making some use of this strange box he had come upon.

Weeks went by as he continued to churn out his product for his customers, but his work began to falter as he realized time was no longer his friend and his hours of sleep were a nonrenewable resource he could no longer exhaust.

Defeated, he sat in his garage staring at the mysterious box from weeks before and opened it to find something so shocking he could hardly believe it.

His unfinished projects from before were somehow fully carved, sculpted, and finished to perfection.

An unfamiliar touch had seemingly been applied to each and every piece, and while it was stylistically incongruent with his own work, it was remarkable all the same.

Perplexed, he took out the newly minted works, and the craziest thought entered his mind: to once again place some of his unfinished works inside the box to see if something magical could happen again.

Inside the box he placed the unfinished swan he had been carving for his neighbor's daughter, along with the delicate set of seven turtles he owed another customer.

He went to sleep, eager to check the box the following morning.

Morning came and he checked the box, and to his disappointment, nothing had happened.

The carpenter criticized himself for being so foolish and slammed the box shut, frustrated that he had deluded himself into thinking such absurd things, and he went back to work.

He worked until noon on some of his other projects, and realized he had a hard deadline on the swan he owed his neighbor, which was now well over a week late.

With a heavy sigh, he stopped his current work and went back to open the box, and to his complete astonishment, the swan and the turtles had been miraculously finished.

Sculpted into an almost uncanny replica of a mute swan, the work had a level of detail and symmetry he could hardly believe.

Excited, he rushed down the street to deliver the work to his neighbor, who was thoroughly satisfied and in awe of what the young carpenter had achieved.

"No wonder you took so long. This is just about the greatest piece of woodworking I've ever seen in my life. You have an exceptional talent, my young boy," he said with the wide grin of a father proud to give his daughter a thoughtful gift.

Customers came in droves, and the carpenter began to exploit his magical box to its fullest potential.

Long gone were the days in which he would collect splinters and dust in his eyes from dawn until dusk; now he would just idly wait for the box to do its work.

One odd thing about the box was that its produced works had no consistent sense of style. Almost everything was disparate in its aesthetic, bearing no commonality to the box's other works.

The time it took varied greatly too; sometimes it would produce results immediately, and other times it would take a few days, even longer than he might have managed if he had put his own mind to it.

He grew accustomed to his new way of working: he would walk around his backyard and do chores in the house, periodically checking the box for results and refilling it with materials as needed.

Initially he would put his unfinished projects in there, but he began to regress to putting in raw materials, just the wood, as he realized the prowess of the box was such that it intuitively knew what he needed it to make each time.

His hands became soft as he stopped doing any real work on the finished products, and his business started to boom as people raved about his work.

Quickly, he became the talk of the town and very materially wealthy as his business flourished.

Yet the mornings and evenings started to fly by, and he could no longer feel any of the joy he got from selling to new customers.

People would rave about his work and the words wouldn't land at all for him.

He started his own family, and even their words of affection and praise meant nothing to him, because deep down he felt a hole that could not quite be filled by the fruits of his labor.

One evening he decided to take out his old tools and try to make a swan for his daughter, who had begged him for a lamp with a mute swan as its centerpiece.

His initial temptation was to consult his box as he usually did, but this time he felt such a visceral revulsion to it that he decided he ought to do it himself for once.

It was hard.

His hands bled as his aged, softened palms dragged against the abrasive wood, and splinters caught under his skin as chips came off with every stroke of the saw.

He worked inefficiently, tirelessly, forgetting all the basics and style he once had, from dawn until dusk, and the final product, to him... was disappointing.

It was disfigured and asymmetrical, lacking in ways that would shock even an amateur carpenter.

Frustrated, he quickly gave in to his worst instincts and put the bird into the box, as it was now his daughter's birthday and he had to deliver like he always did.

For hours he waited for the box to deliver, but deliver it did not.

His unpolished and shoddy work remained unchanged as he impatiently opened and closed the box, hoping for the best.

His emotions got the best of him, and he began to cry as he wondered about all the years he had lost to this unadorned box sitting in front of him.

He could no longer recall the days in which his capabilities as a carpenter were his main way to express himself, and here he sat, powerless and at the mercy of something so insultingly plain and unaesthetic that he wondered how he could ever have given up his own gifts and talents in pursuit of such vanity.

Tears rolled down his face, and he lay in the fetal position for hours on end as it felt like his world was crumbling and everything was coming to an end.

He woke up to the joy and happy screams of his daughter hugging her mother as she ran around with an object in her hand.

With a sense of terror he looked to the box and found it open and empty for all to see, and he hoped that the box had done its magic one last time to make his daughter happy.

She ran up to hug him.

As she got close enough that he could see the swan in her hands, he saw his original creation, untouched and unkempt, just as it was when he last placed it there, but he also saw the smile on his wife's face.

He had never lost his touch.`
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
