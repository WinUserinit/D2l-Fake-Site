import"./polymer-legacy.js";import"./d2l-navigation-band.js";import{n as o}from"./d2l-navigation-shared-styles.js";import{c as t}from"./polymer-element.js";import{h as i}from"./html-tag.js";import"./colors.js";import"./boot.js";import"./mixin.js";import"./settings.js";import"./d2l-colors.js";let s,a=o=>o;customElements.define("d2l-navigation",class extends t{static get template(){const t=i(s||(s=a`
		${0}
		<style>
			:host {
				display: block;
				position: relative;
			}
			.d2l-navigation-shadow-drop-border {
				display: var(--d2l-navigation-shadow-drop-border-display, block);
				background-color: rgba(0,0,0,0.02);
				bottom: -4px;
				height: 4px;
				pointer-events: none;
				position: absolute;
				width: 100%;
			}
		</style>
		<d2l-navigation-band><slot name="navigation-band"></slot></d2l-navigation-band>
		<slot></slot>
		<div class="d2l-navigation-shadow-drop-border"></div>
		`),o);return t.setAttribute("strip-whitespace",""),t}});
