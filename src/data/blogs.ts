export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  content: string;
}

const blogs: BlogPost[] = [
  {
    id: "why-caching-deserves-more-attention-ci-cd",
    title: "Why Caching Deserves More Attention in Your CI/CD Pipeline",
    date: "2026-04-18",
    description:
      "How adding a four-line NuGet cache step to GitHub Actions cut my database-migration job from 6m 45s down to 50s - and why every second in your pipeline has a cost.",
    coverImage: "/Pipeline%20after.png",
    content: `# Why Caching Deserves More Attention in Your CI/CD Pipeline

As developers, we often focus on shipping features and forget about pipeline efficiency - until one day you're staring at a GitHub Actions progress bar watching a single job crawl toward the seven-minute mark.

That was me, looking at my \`database-migration\` job taking **6 minutes and 45 seconds** on every push. The culprit? NuGet packages being downloaded from scratch every single time.

## The Problem

Every time a pipeline runs, the runner starts fresh. Without caching, it re-downloads every dependency regardless of whether anything changed. These packages are identical run after run, yet you're paying for the download time every single time - in engineer waiting time, cloud compute cost, and slower feedback loops.

## The Fix: Four Lines of YAML

GitHub Actions provides an official \`actions/cache\` action that solves this cleanly. The idea is simple: persist the packages directory between runs, and use a cache key based on your dependency file hash so the cache only invalidates when your dependencies actually change.

\`\`\`yaml
- name: Cache NuGet packages
  uses: actions/cache@v4
  with:
    path: ~/.nuget/packages
    key: \${{ runner.os }}-nuget-\${{ hashFiles('**/*.csproj') }}
    restore-keys: |
      \${{ runner.os }}-nuget-
\`\`\`

The \`key\` strategy here is intentional. By hashing the \`.csproj\` files, the cache is reused on every run where dependencies haven't changed - which is most of the time - and only invalidated when you actually add or update a package.

## The Result

The impact was immediate and measurable:

![Pipeline before](/Pipeline%20before.png)

| Job | Before | After |
|---|---|---|
| database-migration | 6m 45s | 50s |
| Time saved per run | — | ~6 minutes |

An 88% reduction in that job's runtime. Across a project with multiple pushes a day, this compounds into hours of saved compute time per week - and a meaningfully lower EC2 bill since the runner spins down sooner.

![Pipeline after](/Pipeline%20after.png)

## The Bigger Picture

Caching is just one lever, but it represents a mindset worth adopting: **every second in your pipeline has a cost**. Slow pipelines quietly erode developer experience - you context-switch, lose focus, and the feedback loop that should take under a minute starts eating into your flow.

If you're on GitHub Actions, check whether your dependency manager is already supported. Maven, pip, npm, Gradle, and NuGet all have well-documented cache patterns. In most cases, it's a few lines of config away from a meaningful improvement.

Small optimisations, compounded across every deploy, add up to real time and real money.`,
  },
];

export default blogs;
