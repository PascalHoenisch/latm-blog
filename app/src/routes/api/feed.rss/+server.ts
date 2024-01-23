import {AUTHOR, DOMAIN, MAIL, RSS_DESCRIPTION, RSS_IMAGE_TITLE, RSS_TITLE} from "$env/static/private";
import {getPreviewPosts} from "$lib/blog/get-post-preview";

export async function GET() {
    const posts = await getPreviewPosts();
    const body:string = xml(posts);

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    };

    return new Response(
        body,
        {
            headers: headers
        }
    );
}

const xml =
    posts => `<?xml version="1.0" encoding="utf-8"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        
          <channel>
            <atom:link href="https://${DOMAIN}/api/feed.rss" rel="self" type="application/rss+xml" />
            <title>${RSS_TITLE}</title>
            <link>https://${DOMAIN}</link>
            <description>${RSS_DESCRIPTION}</description>
            <language>de-de</language>
            <copyright>${AUTHOR}</copyright>
            <pubDate>Mon, 22 Jan 2024 15:21:36 GMT</pubDate>
            <image>
              <url>https://${DOMAIN}/favicon.png</url>
              <title>${RSS_TITLE}</title>
              <link>https://${DOMAIN}</link>
            </image>
        
            ${posts
        .map(
            post =>
                `
        <item>
          <title>${post.title['de']}</title>
          <description>${post.description['de']} </description>
          <link>https://${DOMAIN}/blog/${post.slug['de']}</link>
          <guid>https://${DOMAIN}/blog/${post.slug['de']}</guid>
          <author>${MAIL} (${post.author.replace('&',"&#38;")})</author>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
      `,
        )
        .join('')}
            
          </channel>
        
        </rss>`.trim();