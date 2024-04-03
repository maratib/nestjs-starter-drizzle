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

// Add to package.json jest enabling @imports
"jest": {
  ...
   "moduleNameMapper": {
      "^@/(.*)": "<rootDir>/$1"
    }
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
