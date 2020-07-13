/**
 * WordPress dependenciess
 */
const { lodash } = window;
const { range } = lodash;
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { Toolbar } = wp.components;

class HeadingToolbar extends Component {
	createLevelControl(targetLevel, selectedLevel, onChange) {
		const isActive = targetLevel === selectedLevel;
		return {
			icon: 'heading',
			// translators: %s: heading level e.g: "1", "2", "3"
			title: sprintf(__('Heading %d'), targetLevel),
			isActive,
			onClick: () => onChange(targetLevel),
			subscript: String(targetLevel),
		};
	}

	render() {
		const { minLevel, maxLevel, selectedLevel, onChange } = this.props;

		return (
			<Toolbar controls={range(minLevel, maxLevel).map((index) => this.createLevelControl(index, selectedLevel, onChange))} />
		);
	}
}

export default HeadingToolbar;