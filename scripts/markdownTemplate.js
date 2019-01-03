const markdownTemplate = (args) => `---
title: ${args.title}
subtitle: ${args.subtitle}
date: ${args.date}
path: ${args.path}
draft: true
---

## Getting Started

Start writing something awesome here!
`;

module.exports = markdownTemplate;
