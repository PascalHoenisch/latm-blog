# Latm Blog

This blog based on SvelteKit will be used to track the journies in South America.

This blog is also my first time using Node.js / Svelte.

# Setup

## Production

   ```shell
   npm run build && \
    HOST=127.0.0.1 PORT=4173 ORIGIN=https://travel.hoenisch.eu node -r dotenv/config build 2>&1 /var/log/latm-blog/error.log
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

Adding Images to thumbor in development is done with:

```shell
curl -i -H "Content-Type: image/png" -H "Slug: miau.png" \
  -XPOST http://localhost:80/image --data-binary "@miau.png"
```
When the image is bigger than ~ 1mb it fails. 
The option `UPLOAD_MAX_SIZE` does not seem to work. (Properly I did something wrong).

For more information see the [documentation](https://thumbor.readthedocs.io/en/latest) of thumbor.

## Tech-Stack

- Svelte
- SvelteKit (nodejs)
- Tailwind
- Mongodb
- Thumbor as image CDN, hosted with kubernetes in production
- docker (only docker compose yet)

## Licenses

- Favicon:
  - CC BY Attribution License by Solar Icons
  - https://www.svgrepo.com/svg/528317/hiking-minimalistic