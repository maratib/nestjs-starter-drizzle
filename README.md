# Nest.js Starter

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
```

#### git branches

- nestjs-fresh
- nestjs-pre-config-with-alias
