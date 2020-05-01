---
title: Quinto Post
description: Descrição do quinto Post
date: 2020-05-01T05:41:59.000Z
author: jack970
image: /assets/img/back.png
tags:
  - Gatsby
---
## Add tags to your `markdown` files

You add tags by defining them in the `frontmatter `of your Markdown file. The `frontmatter` is the area at the top surrounded by dashes that includes post data like the title and date.

```markdown
---
title: "A Trip To the Zoo"
---
I went to the zoo today. It was terrible.
```

Fields can be strings, numbers, or arrays. Since a post can usually have many tags, it makes sense to define it as an array. Here you add your new tags field:

```markdown
---
title: "A Trip To the Zoo"
tags: ["animals", "Chicago", "zoos"]
---
I went to the zoo today. It was terrible.
```

If `gatsby develop `is running, restart it so Gatsby can pick up the new fields.