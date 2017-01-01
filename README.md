# js-shortcut
JavaScript utility for keyboard shortcuts.

##utility functions
1. **create** - utility to create shortcuts
	<pre>
	// create SINGLE shortcut and PRESERVE already created shortcuts
	// syntax: viralShortcut.create(shortcutString, handlerFunction[, delete old shortcuts=false]);
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	});
	</pre>
	<pre>
	// create SINGLE shortcut and DELETE already created shortcuts
	// syntax: viralShortcut.create(shortcutString, handlerFunction[, delete old shortcuts=false]);
	// example:
	viralShortcut.create('shift + 1', function () {
		console.log("pressed 'shift' and '1'");
	}, true);
	</pre>
	<pre>
	// create MULTIPLE shortcuts and PRESERVE already created shortcuts
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
	});
	</pre>
	<pre>
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
	</pre>

2. **disable** - utility to disable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	<pre>
	// disable all shortcuts
	// syntax: viralShortcut.disable();
	// example:
	viralShortcut.disable();
	</pre>

3. **enable** - utility to enable all shortcuts, this will PRESERVE all created shortcuts and assigned handler functions
	<pre>
	// enable all shortcuts
	// syntax: viralShortcut.enable();
	// example:
	viralShortcut.enable();
	</pre>

## Dependency
* **<a href="https://jquery.com/" target="_blank">jQuery</a>** - write less, do more
