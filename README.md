1. Run `yarn` command
2. Setup database settings inside `data-source.ts` file
3. Run `yarn dev` command

___

## Migration

- Create:
```javascript
yarn typeorm -- migration:create ./src/database/migrations/${migration_name}
```


- Generate:
```javascript
yarn typeorm -- -d ./src/database/data-source.ts migration:generate ./src/database/migrations/${migration_name}
```


- Run:
```javascript
yarn typeorm migration:run -- -d ./src/database/data-source.ts
```


- Revert:
```javascript
yarn typeorm -- -d ./src/database/data-source.ts migration:revert
```

