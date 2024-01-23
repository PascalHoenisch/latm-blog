import {AUTHOR, DOMAIN, MAIL, RSS_DESCRIPTION, RSS_TITLE} from "$env/static/private";
import {getPreviewPosts} from "$lib/blog/get-post-preview";
import {escapeXml} from "$lib/helper/xmlFormatter";

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
    (posts: any[]) => `<?xml version="1.0" encoding="utf-8"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        
          <channel>
            <title>${escapeXml(RSS_TITLE)}</title>
            <link>https://${DOMAIN}</link>
            <description>${escapeXml(RSS_DESCRIPTION)}</description>
            <language>de-de</language>
            <copyright>${escapeXml(AUTHOR)}</copyright>
            <pubDate>Mon, 22 Jan 2024 15:21:36 GMT</pubDate>
            <image>
              <url>https://${DOMAIN}/favicon.png</url>
              <title>${escapeXml(RSS_TITLE)}</title>
              <link>https://${DOMAIN}</link>
            </image>
        
            ${posts
        .map(
            post =>
                `
        <item>
          <title>${escapeXml(post.title['de'])}</title>
          <description>${escapeXml(post.description['de'])} </description>
          <link>https://${DOMAIN}/blog/${escapeXml(post.slug['de'])}</link>
          <guid>https://${DOMAIN}/blog/${escapeXml(post.slug['de'])}</guid>
          <author>${MAIL} (${escapeXml(post.author)})</author>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
      `,
        )
        .join('')}
            
          </channel>
        
        </rss>`.trim();