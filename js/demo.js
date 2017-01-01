(function whirlpool() {

	$('body').append('<div class="whirlpool-cont"><div class="whirlpool"></div></div>');
	var $whirlpoolCont = $('.whirlpool-cont');
	var $whirlpool = $whirlpoolCont.find('.whirlpool');

	$(document).off('click').on('click', function (e) {
		var $target = $(e.target);
		if (!$target.is('button')) {
			return;
		}

		var targetOffset = $target.offset();
		var targetTotalWidth = $target.outerWidth();
		var targetTotalHeight = $target.outerHeight();
		var scale = 2 * (targetTotalWidth >= targetTotalHeight ? targetTotalWidth : targetTotalHeight); 
		var delay = (scale > 400 ? (scale <= 1000 ? scale : 1000) : 400);

		$whirlpoolCont.css({'width': targetTotalWidth, 'height': targetTotalHeight, 'left': targetOffset.left, 'top': targetOffset.top});
		$whirlpool.css({'left': e.pageX - targetOffset.left, 'top': e.pageY - targetOffset.top});
		$whirlpool.show(0);
		$whirlpool.addClass('whirlpool-effect');
		$whirlpool.css({'transform': 'scale(' + scale + ')'});
		setTimeout(function() {
			$whirlpool.hide(0);
			$whirlpool.removeClass('whirlpool-effect');
			$whirlpoolCont.css({'width': 0, 'height': 0, 'left': 0, 'top': 0});
			$whirlpool.css({'transform': 'scale(0)'});
		}, delay);

	});

})();

var showStatus = (function () {
	var t;
	var $status = $('#status');
	return (function (text) {
		clearTimeout(t);
		$status.text(text);
		$status.show(0);
		t = setTimeout(function() {
			$status.hide(0);
			$status.text('');
		}, 2000)
	});
})();

function attachButtonEvents() {
	$('#button-shortcut-q-all').off('click.vl-shortcut-js').on('click.vl-shortcut-js', function () {
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
	});

	$('#button-shortcut-shift-1').off('click.vl-shortcut-js').on('click.vl-shortcut-js', function () {
		viralShortcut.create('shift + 1', function () {
			showStatus("pressed 'shift' and '1'");
		});
	});

	$('#button-shortcut-clear-all-shift-2').off('click.vl-shortcut-js').on('click.vl-shortcut-js', function () {
		viralShortcut.create('shift + 2', function () {
			showStatus("pressed 'shift' and '2'");
		}, true);
	});

	$('#button-enable').off('click.vl-shortcut-js').on('click.vl-shortcut-js', function () {
		viralShortcut.enable();
	});

	$('#button-disable').off('click.vl-shortcut-js').on('click.vl-shortcut-js', function () {
		viralShortcut.disable();
	});
}

$(document).ready(function() {
	attachButtonEvents();
});
