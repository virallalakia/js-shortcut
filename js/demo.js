(function ($V) {
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

		var shortcutSetOptionsHandler = function () {
			viralShortcut.options({
				'elemSelectorToSkip': 'button'
			});
		};
		var $buttonShortcutSetOptions = $V.select('#button-shortcut-set-options')[0];
		$V.off($buttonShortcutSetOptions, 'click', shortcutSetOptionsHandler);
		$V.on($buttonShortcutSetOptions, 'click', shortcutSetOptionsHandler);

		var shortcutResetOptionsHandler = function () {
			viralShortcut.options({
				'elemSelectorToSkip': ''
			});
		};
		var $buttonShortcutResetOptions = $V.select('#button-shortcut-reset-options')[0];
		$V.off($buttonShortcutResetOptions, 'click', shortcutResetOptionsHandler);
		$V.on($buttonShortcutResetOptions, 'click', shortcutResetOptionsHandler);

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
})(viralJsUtils);
