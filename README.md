# dlist-deno
Just a lightweight wrapper for the dlist API written for Deno (should work with Node too).

## Usage

```js
import { dlistWrapper } from "https://deno.land/x/dlist@v1.0.0/mod.ts"

const API = "fasdfdsfg07pghniure4wstgh798ht7z4es8uht28" // YOUR API KEY
const BOT_ID = "724571620676599838" // YOUR BOT ID

const dlistStuff = new dlistWrapper(BOT_ID, API);

await dlistStuff.setServers(3000)
// returns true if successful. False if failed.
```

This wrapper requires `--allow-run`.