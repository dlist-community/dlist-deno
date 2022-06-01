import {dlistWrapper} from "./mod.ts"

const API = ""
const BOT_ID = ""
const a = new dlistWrapper(BOT_ID, API);

console.log(await a.setServers(3000))
console.log(await a.setServers(3000))