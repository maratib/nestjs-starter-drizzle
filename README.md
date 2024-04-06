# Nest.js Starter

### Nestjs Drizzle

```bash
yarn add drizzle-orm pg @nestjs/config
yarn add -D drizzle-kit @types/pg @faker-js/faker tsx
nest g mo drizzle
# Run
yarn schema
yarn migrate # to push schema to db
yarn seed # for seeding
yarn studio # for exploring db
```

### Nestjs Logging

Nest.js built in logger cannot do FILE loggings.
[Winston for nest](https://github.com/kimkimani/logging-nestjs-with-winston/tree/main)

```bash
# Add winston to project
yarn add nest-winston winston
# Go through logger folder and main.ts (check import 'dotenv/config' is added to force the .env to be loaded globally)
# .env Log file Path and enable disable fileLogging by 0, 1
FILE_LOGGING=0
LOG_PATH='/logs/app.log'
```

```javascript
// Add to main.ts
const app = await NestFactory.create(AppModule, {
  logger: ['error', 'warn'],
});
```

### Nestjs Config

```bash
yarn add @nestjs/config joi
```

```javascript
//1. environment loaded from .env at first place
//2. config/config.schema.ts using joi validate the config environment
//3. config/index.ts environment further customized and loaded for using the default ConfigService.
//4. Check .env.example

// Add this to app.module.ts
ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      load: [config],
    }),

//Loading ConfigService in main.ts
import { ConfigService } from '@nestjs/config';
const configService: ConfigService = app.get(ConfigService);
const port = configService.get('port')
```

### Nestjs preConfig with alias

```javascript
// Add to tsconfig.json
    "lib": ["ES2022"],
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]

// Add to package.json jest enabling @imports, and move it to jest.json
"jest": {
  ...
   "moduleNameMapper": {
      "^@/(.*)": "<rootDir>/$1"
    }
}

// Add to .vscode/settings.json to run jest on demand
{
  "jest.runMode": "on-demand"
}

```

#### git commands

```bash
# git checkout with new branch
git checkout -b newBranchName

# git merge
git checkout main
git merge newBranchName

# get to see local branches
git branch

# get to see remote branches
git branch -r

# get to see all branches
git branch -a



```

#### git branches

- nestjs-fresh
- nestjs-pre-config-with-alias
- nestjs-config
- nestjs-logging
- nestjs-drizzle
