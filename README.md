# gutenberg-sass
WordPress Gutenberg core block styles in a SASS-y folder.

Styles for the core blocks of WordPress Gutenberg are gathered by category into .scss files with their default values. I've used SASS naming conventions and intend this for use in WordPress themes built on [Automattic's "\_s"] (https://github.com/Automattic/_s) starter theme, and expect to compile these partials into custom themes' ```style.css.```

The intention is to copy the default styles and comment them out so I can use just the styles necessary to get an effect by uncommenting and editing a declaration.


Completed files are:
* \_gutenberg-blocks.scss, just imports the category files.
* \_gutenberg-blocks-common.scss
* \_gutenberg-blocks-formatting.scss

To come:
* \_gutenberg-blocks-layout.scss
* \_gutenberg-blocks-widgets.scss
* \_gutenberg-blocks-embeds.scss

TODO:
* Clean up variables in \_gutenberg-blocks-common.scss.
