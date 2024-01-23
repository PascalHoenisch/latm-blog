import {AUTHOR, DOMAIN, RSS_DESCRIPTION, RSS_IMAGE_TITLE, RSS_TITLE} from "$env/static/private";

export async function GET() {
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    };

    return new Response(
        `
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
        
            <item>
              <title>Titel des Eintrags</title>
              <description>Kurze Zusammenfassung des Eintrags</description>
              <link>Link zum vollständigen Eintrag</link>
              <author>Autor des Artikels, E-Mail-Adresse</author>
              <guid>Eindeutige Identifikation des Eintrages</guid>
              <pubDate>Datum des Items</pubDate>
            </item>
        
          </channel>
        
        </rss>`.trim(),
        {
            headers: headers
        }
    );
}