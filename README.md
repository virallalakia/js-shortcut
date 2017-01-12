# js-shortcut
JavaScript utility for keyboard shortcuts.

##How to use Shortcut.js
* Download/Use latest [Shortcut.js](https://raw.githubusercontent.com/virallalakia/js-shortcut/master/dist/js/viral-shortcut-1.0.0.js) JavaScript utility.
* Shortcut.js provides 3 utility functions:
  * `viralShortcut.create()` - utility function to create new shortcuts
  * `viralShortcut.disable()` - utility function to disable all shortcuts created with `Shortcut.js`
  * `viralShortcut.enable()` - utility function to enable all shortcuts created with `Shortcut.js`


##Utility functions (Syntax and Usage)
1. **create** - utility to create shortcuts
	```
	// create SINGLE shortcut
	viralShortcut.create(shortcutString, handlerFunction[, delete old shortcuts=false]);
	```
	```javascript
	// create SINGLE shortcut and PRESERVE already created shortcuts
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	});
	// create SINGLE shortcut and DELETE already created shortcuts
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	}, true);
	```

	```
	// create MULTIPLE shortcuts
	viralShortcut.create(mapOfShortcutStringsAndHandlerFunctions[, delete old shortcuts=false]);
	```
	```javascript
	// create MULTIPLE shortcuts and PRESERVE already created shortcuts
	// example:
	viralShortcut.create({
		'q': function () {
			console.log("pressed 'q'");
		},
		'alt+q': function () {
			console.log("pressed 'alt' and 'q'");
		},
		'ctrl+q': function () {
			console.log("pressed 'ctrl' and 'q'");
		},
		'shift+q': function () {
			console.log("pressed 'shift' and 'q'");
		}
	});
	// create MULTIPLE shortcuts and DELETE already created shortcuts
	// syntax: viralShortcut.create(mapOfShortcutStringsAndHandlerFunctions[, delete old shortcuts=false]);
	// example:
	viralShortcut.create({
		'q': function () {
			console.log("pressed 'q'");
		},
		'alt+q': function () {
			console.log("pressed 'alt' and 'q'");
		},
		'ctrl+q': function () {
			console.log("pressed 'ctrl' and 'q'");
		},
		'shift+q': function () {
			console.log("pressed 'shift' and 'q'");
		}
	}, true);
	```

2. **disable** - utility to disable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	```javascript
	viralShortcut.disable();
	```

3. **enable** - utility to enable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	```javascript
	viralShortcut.enable();
	```

## Demo page
* **[Demo page on GitHub](https://virallalakia.github.io/js-shortcut/)**
