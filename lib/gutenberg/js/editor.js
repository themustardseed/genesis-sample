/**
 * spThemes module to alter Gutenberg editor features.
 *
 * @package GenesisSample\JS
 * @author StudioPress
 * @license GPL-2.0-or-later
 */

var spThemes = (function () {
	'use strict';

	/**
	 * Callback to unregister core block alternate styles when no CSS is provided for them.
	 *
	 * `wp.blocks.unregisterBlockStyle` appears to have no effect for core blocks,
	 * so we're using a filter instead. https://github.com/WordPress/gutenberg/issues/11338.
	 */
	function adjustBlockStyles(settings, name) {
		switch (name) {
			// case 'core/quote':
				// return removeStyles(settings, ['large']);
			case 'core/button':
				setDefaultLabel(settings, wp.i18n.__('Squared', 'genesis-sample'));
				return removeStyles(settings, ['outline', 'squared']);
			case 'core/pullquote':
				return removeStyles(settings, ['solid-color']);
			// case 'core/separator':
			// 	return removeStyles(settings, ['wide', 'dots']);
			case 'core/table':
				return removeStyles(settings, ['stripes']);
			default:
				return settings;
		}
	}

	/**
	 * Alter the label for a default style.
	 *
	 * The default cannot be removed via the filter, so may need to be relabelled.
	 *
	 * @param {array} settings
	 * @param {string} newLabel
	 */
	function setDefaultLabel(settings, newLabel) {
		if (typeof settings.styles === 'undefined' || settings.styles.length < 1) {
			return;
		}

		settings.styles = settings.styles.map(function (style) {
			if (style.isDefault) style.label = newLabel;
			return style;
		});
	}

	/**
	 * Remove all style variants in the `styles` array from the block's settings.
	 *
	 * @param {array} settings
	 * @param {array} styles
	 */
	function removeStyles(settings, styles) {
		if (typeof settings.styles === 'undefined' || settings.styles.length < 1) {
			return settings;
		}

		settings.styles = settings.styles.filter(function (style) {
			return styles.indexOf(style.name) === -1;
		});
		return settings;
	}

	return {
		adjustBlockStyles: adjustBlockStyles
	};

}());

if (typeof wp != "undefined" && typeof wp.hooks != "undefined") {
	wp.hooks.addFilter(
		'blocks.registerBlockType',
		'spThemes/editor',
		spThemes.adjustBlockStyles
	);
}
