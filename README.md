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
	```javascript
	// create SINGLE shortcut
	viralShortcut.create(shortcutString, handlerFunction[, delete old shortcuts=false]);

	// create SINGLE shortcut and PRESERVE already created shortcuts
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	});
	```
	<pre>
	// create SINGLE shortcut and DELETE already created shortcuts
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	}, true);
	</pre>
	<pre>
	// create MULTIPLE shortcuts
	viralShortcut.create(mapOfShortcutStringsAndHandlerFunctions[, delete old shortcuts=false]);
	<pre>
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
	</pre><pre>
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
	</pre></pre>

2. **disable** - utility to disable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	<pre>
	viralShortcut.disable();
	</pre>

3. **enable** - utility to enable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	<pre>
	viralShortcut.enable();
	</pre>

## Demo page
* **[Demo page on GitHub](https://virallalakia.github.io/js-shortcut/)**
