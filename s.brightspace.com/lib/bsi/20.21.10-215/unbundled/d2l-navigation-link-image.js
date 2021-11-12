import"./d2l-navigation-link.js";import{c as t}from"./polymer-element.js";import{h as i}from"./html-tag.js";import"./d2l-focusable-behavior.js";import"./polymer-legacy.js";import"./colors.js";import"./boot.js";import"./mixin.js";import"./settings.js";import"./d2l-link-behavior.js";import"./d2l-navigation-highlight-styles.js";import"./d2l-colors.js";let e,l=t=>t;customElements.define("d2l-navigation-link-image",class extends t{static get properties(){return{src:{type:String},href:{type:String},slim:{reflectToAttribute:!0,type:Boolean,value:!1},text:{type:String,value:""}}}static get template(){const t=i(e||(e=l`
			<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			img {
				vertical-align: middle;
				border: none; /* needed for IE10 */
				max-height: 60px;
				max-width: 260px;
			}
			:host([slim]) img {
				max-height: 40px;
				max-width: 173px;
			}
			.d2l-navigation-link-image-container {
				height: 100%;
				vertical-align: middle;
				align-items: center;
				display: inline-flex;
			}
		</style>
		<d2l-navigation-link href="[[href]]" text="[[text]]">
			<span class="d2l-navigation-link-image-container"><img src="[[src]]" alt$="[[text]]"></span>
		</d2l-navigation-link>`));return t.setAttribute("strip-whitespace",""),t}});
