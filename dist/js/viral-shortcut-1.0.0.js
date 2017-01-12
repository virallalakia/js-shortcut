var viralJsUtils = viralJsUtils || {};

(function() {
	var $V = viralJsUtils;

	// utils
	$V['type'] = function(obj) {
		return (Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase());
	};
	$V['indexOf'] = function(item, array) {
		return (array.indexOf(item));
	};
	$V['isArray'] = function(item, array) {
		return (Array.isArray(arr));
	};
	$V['map'] = function(array, fn) {
		array.map(fn);
	};

	// iterators
	$V['forEachElement'] = function(selector, fn) {
		var $elements = document.querySelectorAll(selector);
		for (var i = 0; i < $elements.length; i++) {
			fn($elements[i], i);
		}
	};
	$V['forEach'] = function(array, fn) {
		array.forEach(fn);
	};

	// DOM related
	$V['select'] = function(selector) {
		return (document.querySelectorAll(selector));
	};
	$V['find'] = function($el, selector) {
		return ($el.querySelectorAll(selector));
	};
	$V['parent'] = function($el) {
		return ($el.parentNode);
	};
	$V['children'] = function($el) {
		var $children = [];
		for (var i = $el.children.length; i--;) {
			// Skip comment nodes on IE8
			if ($el.children[i].nodeType != 8) {
				$children.unshift($el.children[i]);
			}
		}
		return $children;
	};
	$V['siblings'] = function($el) {
		return (Array.prototype.filter.call($el.parentNode.children, function($child) {
			return ($child !== $el);
		}));
	};
	$V['contains'] = function($el, $child) {
		return ($el !== $child && $el.contains($child));
	};
	$V['containsSelector'] = function($el, selector) {
		return ($el.querySelector(selector) !== null);
	};
	$V['isElem'] = function($el, $otherEl) {
		return ($el === $otherEl);
	};
	$V['is'] = function($el, selector) {
		return ($el.matches || $el.matchesSelector || $el.msMatchesSelector || $el.mozMatchesSelector || $el.webkitMatchesSelector || $el.oMatchesSelector).call($el, selector);
	};
	$V['next'] = function($el) {
		return ($el.nextElementSibling);
	};
	$V['prev'] = function($el) {
		return ($el.previousElementSibling);
	};
	$V['text'] = function($el, textString) {
		if(textString === undefined) {
			return ($el.textContent);
		} else {
			$el.textContent = textString;
		}
	};
	$V['html'] = function($el, htmlString) {
		if(htmlString === undefined) {
			return ($el.innerHTML);
		} else {
			$el.innerHTML = htmlString;
		}
	};
	$V['outerhtml'] = function($el) {
		return ($el.outerHTML);
	};
	$V['clone'] = function($el) {
		return ($el.cloneNode(true));
	};
	$V['append'] = function($parent, $el) {
		$parent.appendChild($el);
	};
	$V['prepend'] = function($parent, $el) {
		$parent.insertBefore($el, $parent.firstChild);
	};
	$V['after'] = function($el, htmlString) {
		$el.insertAdjacentHTML('afterend', htmlString);
	};
	$V['before'] = function($el, htmlString) {
		$el.insertAdjacentHTML('beforebegin', htmlString);
	};
	$V['empty'] = function($el) {
		while($el.firstChild) {
			$el.removeChild($el.firstChild);
		}
	};
	$V['remove'] = function($el) {
		$el.parentNode.removeChild($el);
	};
	$V['replaceWith'] = function($el, htmlString) {
		$el.outerHTML = htmlString;
	};
	$V['parseHTML'] = function(htmlString) {
		var tmp = document.implementation.createHTMLDocument();
		tmp.body.innerHTML = htmlString;
		return tmp.body.children;
	};

	// attribute related
	$V['attr'] = function($el, attributeName, attributeValue) {
		if(attributeValue === undefined) {
			return ($el.getAttribute(attributeName));
		} else {
			$el.setAttribute(attributeName, attributeValue);
		}
	};

	// styling
	$V['hide'] = function($el) {
		$el.style.display = 'none';
	};
	$V['show'] = function($el) {
		$el.style.display = 'block';
	};
	$V['css'] = function($el, p1, p2) {
		if($V.type(p1) === 'object') {
			var keys = Object.keys(p1);
			for (var i = 0; i < keys.length; i++) {
				$V.css($el, keys[i], p1[keys[i]]);
			};
		} else {
			var ruleName = p1;
			var ruleValue = p2;
			if(ruleValue === undefined) {
				return(getComputedStyle($el)[ruleName]);
			} else {
				$el.style[ruleName] = ruleValue;
			}
		}
	};
	$V['addClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.add(className);
		} else {
			$el.className += ' ' + className;
		}
	};
	$V['removeClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.remove(className);
		} else {
			$el.className = $el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};
	$V['hasClass'] = function($el, className) {
		if ($el.classList) {
			return ($el.classList.contains(className));
		} else {
			return (new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className));
		}
	};
	$V['toggleClass'] = function($el, className) {
		if ($el.classList) {
			$el.classList.toggle(className);
		} else {
			var classes = $el.className.split(' ');
			var existingIndex = classes.indexOf(className);
			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}
			$el.className = classes.join(' ');
		}
	};
	$V['outerWidth'] = function($el, withMargin) {
		var width = $el.offsetWidth;
		if(withMargin) {
			var style = getComputedStyle($el);
			width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		}
		return width;
	};
	$V['outerHeight'] = function($el, withMargin) {
		var height = $el.offsetHeight;
		if(withMargin) {
			var style = getComputedStyle($el);
			height += parseInt(style.marginTop) + parseInt(style.marginBottom);
		}
		return height;
	};
	$V['offset'] = function($el) {
		var rect = $el.getBoundingClientRect();
		return {
			top: rect.top + document.body.scrollTop,
			left: rect.left + document.body.scrollLeft
		};
	};
	$V['offsetParent'] = function($el) {
		return ($el.offsetParent || $el);
	};
	$V['position'] = function($el) {
		return {
			left: $el.offsetLeft,
			top: $el.offsetTop
		};
	};
	$V['positionRelToViewport'] = function($el) {
		return ($el.getBoundingClientRect());
	};

	// events
	$V['documentReady'] = function(eventHandler) {
		if(document.readyState !== 'loading') {
			eventHandler();
		} else {
			document.addEventListener('DOMContentLoaded', eventHandler);
		}
	};
	$V['off'] = function($el, eventName, eventHandler) {
		$el.removeEventListener(eventName, eventHandler);
	};
	$V['on'] = function($el, eventName, eventHandler) {
		$el.addEventListener(eventName, eventHandler);
	};
	$V['trigger'] = function(eventName) {
		var event = document.createEvent('HTMLEvents');
		event.initEvent(eventName, true, false);
		el.dispatchEvent(event);
	};
	$V['triggerCustom'] = function(eventName, eventData) {
		if(CustomEvent) {
			var event = new CustomEvent(eventName, {
				detail: eventData
			});
		} else {
			var event = document.createEvent('CustomEvent');
			event.initCustomEvent(eventName, true, true, eventData);
		}
		el.dispatchEvent(event);
	};
})();

var viralShortcut = (function ($V) {

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
		$V.off(document, 'keyup', precessKeyupEvent);
	};

	var enable = function () {
		$V.off(document, 'keyup', precessKeyupEvent);
		$V.on(document, 'keyup', precessKeyupEvent);
	};

	return {
		'create': updateBindings,
		'disable': disable,
		'enable': enable
	};

})(viralJsUtils);
