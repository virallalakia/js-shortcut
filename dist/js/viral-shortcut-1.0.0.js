var viralShortcut = (function (_w, _$) {

	// private
	var __m_keyCodeMap = {
		'backspace': 8,
		'tab': 9,
		'enter': 13,
		'shift': 16,
		'ctrl': 17,
		'alt': 18,
		'pause/break': 19,
		'caps lock': 20,
		'escape': 27,
		'page up': 33,
		'page down': 34,
		'end': 35,
		'home': 36,
		'left arrow': 37,
		'up arrow': 38,
		'right arrow': 39,
		'down arrow': 40,
		'insert': 45,
		'delete': 46,
		'0': 48,
		'1': 49,
		'2': 50,
		'3': 51,
		'4': 52,
		'5': 53,
		'6': 54,
		'7': 55,
		'8': 56,
		'9': 57,
		'a': 65,
		'b': 66,
		'c': 67,
		'd': 68,
		'e': 69,
		'f': 70,
		'g': 71,
		'h': 72,
		'i': 73,
		'j': 74,
		'k': 75,
		'l': 76,
		'm': 77,
		'n': 78,
		'o': 79,
		'p': 80,
		'q': 81,
		'r': 82,
		's': 83,
		't': 84,
		'u': 85,
		'v': 86,
		'w': 87,
		'x': 88,
		'y': 89,
		'z': 90,
		'left window key': 91,
		'right window key': 92,
		'select key': 93,
		'numpad 0': 96,
		'numpad 1': 97,
		'numpad 2': 98,
		'numpad 3': 99,
		'numpad 4': 100,
		'numpad 5': 101,
		'numpad 6': 102,
		'numpad 7': 103,
		'numpad 8': 104,
		'numpad 9': 105,
		'multiply': 106,
		'add': 107,
		'subtract': 109,
		'decimal point': 110,
		'divide': 111,
		'f1': 112,
		'f2': 113,
		'f3': 114,
		'f4': 115,
		'f5': 116,
		'f6': 117,
		'f7': 118,
		'f8': 119,
		'f9': 120,
		'f10': 121,
		'f11': 122,
		'f12': 123,
		'num lock': 144,
		'scroll lock': 145,
		';': 186,
		'=': 187,
		',': 188,
		'dash': 189,
		'.': 190,
		'/': 191,
		'`': 192,
		'[': 219,
		'\\': 220,
		']': 221,
		'\'': 222
	};
	var _$_document = _$(document);
	var _m_keyCallbackMap = {};

	var precessKeyupEvent = function (e) {
		try {
			var keyCode = e.which;
			keyCode += (e.shiftKey ? 1000000 : 0);
			keyCode += (e.ctrlKey  ?  100000 : 0);
			keyCode += (e.altKey   ?   10000 : 0);

			var callbackFn = _m_keyCallbackMap[keyCode];
			if (callbackFn && Object.prototype.toString.call(callbackFn) === "[object Function]") {
				callbackFn();
			}
		} catch (ex) {
		}
	};

	// public
	var updateBindings = function (p1, p2, p3) {
		var m_keyMap = {};
		var b_reset = false;
		if (p1 && Object.prototype.toString.call(p1) === "[object Object]") {
			m_keyMap = p1;
			b_reset = p2;
		} else if (p1 && Object.prototype.toString.call(p1) === "[object String]"
					&& p2 && Object.prototype.toString.call(p2) === "[object Function]") {
			m_keyMap = {};
			m_keyMap[p1] = p2;
			b_reset = p3;
		} else {
			throw new Error('IllegalArgumentError: \
				either first argument must be an object \
				or first argument must be a string and second argument must be a function, \
				followed by optional boolean argument, \
				[usage: viralShortcut.create("q", function(){} ) or viralShortcut.create({"q": function(){}}) ]');
		}

		if (b_reset === true) {
			_m_keyCallbackMap = {};
		}
		var keys = Object.keys(m_keyMap);
		for (var i = 0; i < keys.length; i++) {
			try {
				var keyCode = 0;
				var splitKeys = keys[i].split('+');
				if (splitKeys.length == 1) {
					keyCode = __m_keyCodeMap[keys[i]];
				} else {
					for (var j = 0; j < splitKeys.length; j++) {
						splitKeys[j] = splitKeys[j].trim().toLowerCase();
						switch(splitKeys[j]) {
						case 'shift':
							keyCode += 1000000;
							break;
						case 'ctrl':
							keyCode +=  100000;
							break;
						case 'alt':
							keyCode +=   10000;
							break;
						default:
							keyCode += __m_keyCodeMap[splitKeys[j]];
							break;
						};
					};
				}
				var callbackFn = m_keyMap[keys[i]];
				if (keyCode && !isNaN(keyCode) && callbackFn && Object.prototype.toString.call(callbackFn) === "[object Function]") {
					_m_keyCallbackMap[keyCode] = callbackFn;
				}
			} catch (ex) {
			}
		};
		enable();
	};

	var disable = function () {
		_$_document.off('.viralJsShortcut');
	};

	var enable = function () {
		_$_document.off('keyup.viralJsShortcut').on('keyup.viralJsShortcut', function (e) {
			precessKeyupEvent(e);
		});
	};

	return {
		'create': updateBindings,
		'disable': disable,
		'enable': enable
	};

})(window, jQuery);
