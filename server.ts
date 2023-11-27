import Hapi from "@hapi/hapi";
import { redisClient } from "./src/utils/redis";
import { stringRoute } from "./src/modules/string/string.route";
import dotenv from 'dotenv'
dotenv.config();

class App {
  private server!: any;
  private Port!: string|number |undefined;

  constructor() {
    this.startapp();
  }
  private async startapp() {
    this.Port = <string>(process.env.PORT || process.env.INSTANT_PORT);
    this.startserver();
    await redisClient.connect();
    this.localRoutes();
  }
  private localRoutes() {
    this.server.route(stringRoute)
  }
  private async startserver() {
    this.server = Hapi.server({ port: this.Port });
    await this.server.start();
    this.callback();
  }

  private callback = () => {
    console.log(`server is started on this port ${this.Port}`);
  };
}

new App();
