export class dlistWrapper {
  id: string;
  token: string;
  lastTime: number;
  /**
   * Initialize the wrapper.
   * @param {string} id - ID of the Discord bot.
   * @param {string} token - API key from dlist.gg.
   */
  constructor(id: string, token: string) {
    this.id = id;
    this.token = token;
    this.lastTime = 0;
  }
  /**
   * Set server count in the API.
   * @param count - Number of servers to post.
   * @returns {Promise<boolean>} Whether it succeeded.
   */
  async setServers(count: number): Promise<boolean> {
      if(Date.now() - this.lastTime < 300000) return false;
    const res = await fetch(
      `https://api.discordlist.gg/v0/bots/${this.id}/guilds?count=${count}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`,
        },
        method: "PUT",
      },
    );
    if(res.status === 200) {
        this.lastTime = Date.now()
        return true;
    }
//    console.log("res", res);
//    console.log("re", await res.json());
    return false;
  }
}
