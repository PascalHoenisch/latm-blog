# Latm Blog

This blog based on SvelteKit will be used to track the journies in South America.

This blog is also my first time using Node.js / Svelte.

## Setup

### Env

   ```shell
    cp env.dist .env   
   ```

Then change the credentials to something save.

### Seeding

Simply run this cmd:

```shell
make db-seeding
```

## Tech-Stack

- Svelte
- SvelteKit (nodejs)
- Tailwind
- Mongodb
- Nginx as readonly image file server (can also be used as a CDN later on)
- docker (only docker compose yet)