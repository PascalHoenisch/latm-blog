# Latm Blog

This blog based on SvelteKit will be used to track the journies in South America.
You can find a live version under [travel.hoenisch.eu](https://travel.hoenisch.eu/en).

It also features a RSS Feed under [travel.hoenisch.eu/api/feed.rss](https://travel.hoenisch.eu/api/feed.rss)

## Disclaimer
This blog is also my first time using Node.js / Svelte. 
So I am testing around a lot and sometimes the production server might be down ;)

# Setup

## Production

   ```shell
   npm run build && \
    HOST=127.0.0.1 PORT=4173 ORIGIN=https://travel.hoenisch.eu node -r dotenv/config build 2>/var/log/latm-blog/error.log 1>/var/log/latm-blog/access.log
   ```
  Then run ```Strg + Z``` and ```bg``` to push the task into the background.

## Development
### Env

   ```shell
    cp env.dist .env
    cp app/.env.dist .env
    cp config/thumbor.conf.example config/thumbor.conf
    make up-dev
   ```

Then change the credentials to something save.

### Seeding

Simply run this cmd:

```shell
make db-seeding
```

### Adding Images

To add images to thumbor in development simply add them to the `images` folder in the root dir.
Thumbor can access all files from there with its relative path.

For more information see the [documentation](https://thumbor.readthedocs.io/en/latest) of thumbor.

## Tech-Stack

- Svelte
- SvelteKit (nodejs)
- Tailwind
- Mongodb
- Thumbor as image CDN
- docker (only docker compose yet)

## Licenses

- Favicon:
  - CC BY Attribution License by Solar Icons
  - https://www.svgrepo.com/svg/528317/hiking-minimalistic