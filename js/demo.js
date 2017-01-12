var $V = viralJsUtils;
(function whirlpool() {
	$V.documentReady(function() {
		$V.append($V.select('body')[0], $V.parseHTML('<div class="whirlpool-cont"><div class="whirlpool"></div></div>')[0]);
		var $whirlpoolCont = $V.select('.whirlpool-cont')[0];
		var $whirlpool = $V.find($whirlpoolCont, '.whirlpool')[0];
		$V.css($whirlpoolCont, {
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'width': '0px',
			'height': '0px',
			'overflow': 'hidden'
		});
		$V.css($whirlpool, {
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'width': '1px',
			'height': '1px',
			'border-radius': '50%',
			'background': '#FFFFFF',
			'opacity': '0',
			'transform': 'scale(0)'
		});

		var timeoutHandler = function() {
			$V.css($whirlpoolCont, {'width': 0, 'height': 0, 'left': 0, 'top': 0});
			$V.css($whirlpool, {'transition': 'none', 'opacity': 0.4, 'transform': 'scale(0)'});
		};
		timeoutHandler();

		var documentClickHandler = function(e) {
			var $target = e.target;
			if (!$V.is($target, 'button')) {
				return;
			}

			var targetOffset = $V.offset($target);
			var targetTotalWidth = $V.outerWidth($target);
			var targetTotalHeight = $V.outerHeight($target);
			var scale = 2.5 * (targetTotalWidth >= targetTotalHeight ? targetTotalWidth : targetTotalHeight); 
			var delay = (scale > 400 ? (scale <= 800 ? scale : 800) : 400);

			$V.css($whirlpoolCont, {'width': targetTotalWidth, 'height': targetTotalHeight, 'left': targetOffset.left, 'top': targetOffset.top});
			$V.css($whirlpool, {'transition': 'opacity 0.5s ease-in-out 0s, transform 0.5s ease-in-out 0s', 'left': e.pageX - targetOffset.left, 'top': e.pageY - targetOffset.top, 'opacity': 0, 'transform': 'scale(' + scale + ')'});
			setTimeout(timeoutHandler, delay);
		};

		$V.off(document, 'click', documentClickHandler);
		$V.on(document, 'click', documentClickHandler);
	});
})();

function attachButtonEvents() {
	var showStatus = (function () {
		var t;
		var $status = $V.select('#status')[0];
		return (function (text) {
			clearTimeout(t);
			$V.text($status, text);
			$V.show($status);
			t = setTimeout(function() {
				$V.hide($status);
				$V.text($status, '');
			}, 2000);
		});
	})();

	var shortcutQAllHandler = function () {
		viralShortcut.create({
			'q': function () {
				showStatus("pressed 'q'");
			},
			'alt+q': function () {
				showStatus("pressed 'alt' and 'q'");
			},
			'ctrl+q': function () {
				showStatus("pressed 'ctrl' and 'q'");
			},
			'shift+q': function () {
				showStatus("pressed 'shift' and 'q'");
			},
			'alt+ctrl+q': function () {
				showStatus("pressed 'alt', 'ctrl' and 'q'");
			},
			'shift+alt+q': function () {
				showStatus("pressed 'shift', 'alt' and 'q'");
			},
			'shift+ctrl+q': function () {
				showStatus("pressed 'shift', 'ctrl' and 'q'");
			},
			'shift+alt+ctrl+q': function () {
				showStatus("pressed 'shift', 'alt', 'ctrl' and 'q'");
			}
		});
	};
	var $buttonShortcutQAll = $V.select('#button-shortcut-q-all')[0];
	$V.off($buttonShortcutQAll, 'click', shortcutQAllHandler);
	$V.on($buttonShortcutQAll, 'click', shortcutQAllHandler);

	var shortcutShift1Handler = function () {
		viralShortcut.create('shift + 1', function () {
			showStatus("pressed 'shift' and '1'");
		});
	};
	var $buttonShortcutShift1 = $V.select('#button-shortcut-shift-1')[0];
	$V.off($buttonShortcutShift1, 'click', shortcutShift1Handler);
	$V.on($buttonShortcutShift1, 'click', shortcutShift1Handler);

	var shortcutClearAllShift2Handler = function () {
		viralShortcut.create('shift + 2', function () {
			showStatus("pressed 'shift' and '2'");
		}, true);
	};
	var $buttonShortcutClearAllShift2 = $V.select('#button-shortcut-clear-all-shift-2')[0];
	$V.off($buttonShortcutClearAllShift2, 'click', shortcutClearAllShift2Handler);
	$V.on($buttonShortcutClearAllShift2, 'click', shortcutClearAllShift2Handler);

	var shortcutEnableHandler = function () {
		viralShortcut.enable();
	};
	var $buttonShortcutEnable = $V.select('#button-enable')[0];
	$V.off($buttonShortcutEnable, 'click', shortcutEnableHandler);
	$V.on($buttonShortcutEnable, 'click', shortcutEnableHandler);

	var shortcutDisableHandler = function () {
		viralShortcut.disable();
	};
	var $buttonShortcutDisable = $V.select('#button-disable')[0];
	$V.off($buttonShortcutDisable, 'click', shortcutDisableHandler);
	$V.on($buttonShortcutDisable, 'click', shortcutDisableHandler);
}

$V.documentReady(function() {
	attachButtonEvents();
});
