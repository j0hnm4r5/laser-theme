# Laser Theme

## To Develop

### Files

* `colors.js`: all of the defined colors for the theme
* `theme.js`: color customization definitions for syntax and the workbench
* `compiled/Lasers.json`: the compiled color theme

### Scripts

* `yarn start`: watches `colors.js` and `theme.js` for changes, and then compiles those changes to `themes/Laser-color-theme.json`
* `yarn build`: compiles `theme.js` to `themes/Laser-color-theme.json`

### Developing

To test color changes, run the VSCode debugger with `Debug > Start Debugging`, then set the new window's theme to `Lasers`. Every time a change is made, reload the debugger to see it.

### Contributing

Please make sure any code you contribute is prettified and linted, using the included settings. The easiest way to do this is to install [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and ensure you have the following line in your VSCode preferences:

```json
{
	"eslint.autoFixOnSave": true,
}
```