import {AUTHOR, DOMAIN, RSS_DESCRIPTION, RSS_IMAGE_TITLE, RSS_TITLE} from "$env/static/private";
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
    posts => `
		<?xml version="1.0" encoding="utf-8"?>
        <rss version="2.0">
        
          <channel>
            <title>${RSS_TITLE}</title>
            <link>${DOMAIN}</link>
            <description>${RSS_DESCRIPTION}</description>
            <language>de-de</language>
            <copyright>${AUTHOR}</copyright>
            <pubDate>Erstellungsdatum("Jan, 22 Jul 2024 22:42:19")</pubDate>
            <image>
              <url>https://${DOMAIN}/favicon.png</url>
              <title>${RSS_IMAGE_TITLE}</title>
              <link>https://${DOMAIN}/de</link>
            </image>
        
            ${posts
        .map(
            post =>
                `
        <item>
          <title>${post.title['de']}</title>
          <description>${post.description['de']} </description>
          <link>https://${DOMAIN}/blog/${post.slug['de']}/</link>
          <pubDate>${new Date(post.date)}</pubDate>
        </item>
      `,
        )
        .join('')}
            
          </channel>
        
        </rss>`.trim();