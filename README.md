# js-shortcut
JavaScript utility for keyboard shortcuts.

##How to use viral-shortcut.js
* Download latest js-shortcut - JavaScript utility.
  * [The compressed, production viral-shortcut-1.0.0](https://cdn.rawgit.com/virallalakia/js-shortcut/master/dist/js/viral-shortcut-1.0.0.min.js)
  * [The uncompressed, development viral-shortcut-1.0.0](https://cdn.rawgit.com/virallalakia/js-shortcut/master/dist/js/viral-shortcut-1.0.0.js)
* viral-shortcut.js provides 4 utility functions:
  * `viralShortcut.create()` - utility function to create new shortcuts
  * `viralShortcut.options()` - utility function to get/set options for `viral-shortcut.js`
  * `viralShortcut.disable()` - utility function to disable all shortcuts created with `viral-shortcut.js`
  * `viralShortcut.enable()` - utility function to enable all shortcuts created with `viral-shortcut.js`


##Utility functions (Syntax and Usage)
1. **create** - utility to create shortcuts

	* Create SINGLE shortcut
	  <br>
	  Syntax: `viralShortcut.create(shortcutString, handlerFunction[, delete old shortcuts=false]);`
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

	* Create MULTIPLE shortcuts
	  <br>
	  Syntax: `viralShortcut.create(mapOfShortcutStringsAndHandlerFunctions[, delete old shortcuts=false]);`
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

2. **options** - utility function to get/set options for viral-shortcut.js

	* get options
	  <br>
	  Syntax: `viralShortcut.options();`
		```javascript
		// get options for viral-shortcut.js
		// example:
		var viralShortcutOptions = viralShortcut.options();
		// sample returned options object:
		{
			'elemSelectorToSkip': ''
		}
		```

	* set options
	  <br>
	  Syntax: `viralShortcut.options(options);`
		```javascript
		// set options for viral-shortcut.js
		// example:
		viralShortcut.options({
			'elemSelectorToSkip': 'input[type="text"], textarea'
		});
		```

3. **disable** - utility to disable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	```javascript
	viralShortcut.disable();
	```

4. **enable** - utility to enable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	```javascript
	viralShortcut.enable();
	```

## Demo page
* **[Demo page on GitHub](https://virallalakia.github.io/js-shortcut/)**
