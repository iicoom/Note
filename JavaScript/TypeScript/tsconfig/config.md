[tsconfig参数](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## example
```js
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2020",
    "sourceMap": true,
    "allowJs": true,
    "outDir": "out",
    "allowSyntheticDefaultImports": true
  },
	"compileOnSave": true,
	"include": [
		"src/**/*"
	],
  "exclude": [
    "node_modules",
    "out"
  ]
}
```

allowJs	 boolean	true	允许编译javascript文件。

compileOnSave  boolean  Setting a top-level property compileOnSave signals to the IDE to generate all files for a given tsconfig.json upon saving.