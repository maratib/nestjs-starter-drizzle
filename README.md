# Nest.js Starter

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
