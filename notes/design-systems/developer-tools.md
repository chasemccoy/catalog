---
title: Developer tools
modified: 2019-09-14
---

## Splash zones

In this case, a "splash zone" refers to the parts of a system affected by a change to the system. If I edit a component, what other components are affected?

Some devs at Shopify have built a `yarn splash` command that determines the splash zone of changes to their component library:

<blockquote data-dnt="true"><p lang="en" dir="ltr">Introducing a new “observability” tool to the <a href="https://twitter.com/Shopify?ref_src=twsrc%5Etfw">@Shopify</a> Polaris React developer workflow: `yarn splash` 💦 (beta), a command-line utility that shows the splash zone of a change across the component library 👩‍💻<br/><br/>Next: looking into ways to integrate it with <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@github</a> and <a href="https://twitter.com/storybookjs?ref_src=twsrc%5Etfw">@storybookjs</a>. <a href="https://t.co/Owpq1Ff7wr">pic.twitter.com/Owpq1Ff7wr</a></p>&mdash; Kaelig (@kaelig) <a href="https://twitter.com/kaelig/status/1172579203893456896?ref_src=twsrc%5Etfw">September 13, 2019</a></blockquote>

Their tools is conveniently open sourced:

<Bookmark url='https://github.com/Shopify/polaris-react/tree/master/scripts/splash' />