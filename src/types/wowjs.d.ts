declare module "wowjs" {
  export class WOW {
    constructor(options?: Record<string, unknown>);
    init(): void;
  }
}

