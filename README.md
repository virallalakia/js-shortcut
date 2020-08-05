# js-shortcut
JavaScript utility for keyboard shortcuts.


## How to use viral-shortcut.js
* Download latest js-shortcut - JavaScript utility.
  * [The compressed, production viral-shortcut-1.0.0](https://cdn.rawgit.com/virallalakia/js-shortcut/master/dist/js/viral-shortcut-1.0.0.min.js)
  * [The uncompressed, development viral-shortcut-1.0.0](https://cdn.rawgit.com/virallalakia/js-shortcut/master/dist/js/viral-shortcut-1.0.0.js)
* viral-shortcut.js provides 4 utility functions:
  * `viralShortcut.create()` - utility function to create new shortcuts
  * `viralShortcut.options()` - utility function to get/set options for `viral-shortcut.js`
  * `viralShortcut.disable()` - utility function to disable all shortcuts created with `viral-shortcut.js`
  * `viralShortcut.enable()` - utility function to enable all shortcuts created with `viral-shortcut.js`


## Demo
[Demo page on GitHub](https://virallalakia.github.io/js-shortcut/)


## Utility functions (Syntax and Usage)
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

## Shortcut codes for viral-shortcut.js
Below are the key codes for each key. Use `+` to use key combinations for shortcut (e.g. `'alt+1'`, `'ctrl + alt + delete'`).
* `backspace`: backspace key
* `tab`: tab key
* `enter`: enter key
* `shift`: shift key
* `ctrl`: control key
* `alt`: alter key
* `break`: break key
* `escape`: escape key
* `` ` ``: back-tick key
* `insert`: insert key
* `delete`: delete key
* `capsLock`: caps lock key
* `numLock`: num lock key
* `scrollLock`: scroll lock key
* `pageUp`: page up key
* `pageDown`: page down key
* `home`: home key
* `end`: end key
* `upArrow`: up arrow key
* `downArrow`: down arrow key
* `leftArrow`: left arrow key
* `rightArrow`: right arrow key
* `leftWindowKey`: left window/command key
* `rightWindowKey`: right window/command key
* `contextMenuKey`: context menu key
* `[`: open square bracket key
* `]`: close square bracket key
* `\`: back slash key
* `/`: slash key
* `dash`: dash key
* `=`: equal key
* `'`: single quote key
* `;`: semicolon key
* `,`: comma key
* `.`: dot key
* `a`: a alphbet key
* `b`: b alphbet key
* `c`: c alphbet key
* `d`: d alphbet key
* `e`: e alphbet key
* `f`: f alphbet key
* `g`: g alphbet key
* `h`: h alphbet key
* `i`: i alphbet key
* `j`: j alphbet key
* `k`: k alphbet key
* `l`: l alphbet key
* `m`: m alphbet key
* `n`: n alphbet key
* `o`: o alphbet key
* `p`: p alphbet key
* `q`: q alphbet key
* `r`: r alphbet key
* `s`: s alphbet key
* `t`: t alphbet key
* `u`: u alphbet key
* `v`: v alphbet key
* `w`: w alphbet key
* `x`: x alphbet key
* `y`: y alphbet key
* `z`: z alphbet key
* `0`: 0 digit key
* `1`: 1 digit key
* `2`: 2 digit key
* `3`: 3 digit key
* `4`: 4 digit key
* `5`: 5 digit key
* `6`: 6 digit key
* `7`: 7 digit key
* `8`: 8 digit key
* `9`: 9 digit key
* `numpad0`: 0 numpad digit key
* `numpad1`: 1 numpad digit key
* `numpad2`: 2 numpad digit key
* `numpad3`: 3 numpad digit key
* `numpad4`: 4 numpad digit key
* `numpad5`: 5 numpad digit key
* `numpad6`: 6 numpad digit key
* `numpad7`: 7 numpad digit key
* `numpad8`: 8 numpad digit key
* `numpad9`: 9 numpad digit key
* `numpadAdd`: add numpad key
* `numpadSubtract`: substract numpad key
* `numpadMultiply`: multiply numpad key
* `numpadDivison`: slash numpad key
* `numpad.`: dot numpad key
* `f1`: f1 function key
* `f2`: f2 function key
* `f3`: f3 function key
* `f4`: f4 function key
* `f5`: f5 function key
* `f6`: f6 function key
* `f7`: f7 function key
* `f8`: f8 function key
* `f9`: f9 function key
* `f10`: f10 function key
* `f11`: f11 function key
* `f12`: f12 function key
