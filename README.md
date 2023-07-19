# WaniKani Client

A TypeScript client for the [WaniKani API](https://docs.api.wanikani.com/20170710/)

## Usage

```typescript
import { WaniKani } from 'wanikani-client';

const wanikani = new WaniKani(process.env.WANIKANI_API_TOKEN);

const user = await wanikani.user.get();
```

## Need Help? Want to Contribute?

Please note that this package is community-developed and is NOT officially supported by Tofugu LLC or its staff.

If you have any questions or encounter any problems with this package, please feel free to open an Issue.

Thank you in advance for your contribution(s)!
