import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: "rauljcamacho.online",
    description:
      "Cuaderno de campo sobre IA, tecnología y cómo construimos software.",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/posts/${post.id}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>es-ES</language>`,
  });
}
