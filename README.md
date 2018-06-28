# gutenberg-sass
WordPress Gutenberg core block styles in a SASS-y folder.

Styles for the core blocks of WordPress Gutenberg are gathered by category into .scss files with their default values (for now). The categories correspond to the way blocks are grouped in the editor's selection dropdown. I've used SASS naming conventions and intend this for my own use in WordPress themes built on Automattic's "\_s" starter theme (https://github.com/Automattic/_s), and expect to compile these partials into custom themes' `style.css.`

The intention is to copy the default styles and comment them out so I can use just the styles necessary to get an effect by uncommenting and editing a declaration.

I compile the partials with gulp-sass to find errors, IRL these partials will be included in \_s' larger collection and end up as part of the theme's `style.css`.


Completed files are:
* \_blocks.scss, just @imports the category files.
* \_blocks-common.scss
* \_blocks-formatting.scss
* \_blocks-layout.scss
* variables
  - \_animations.scss
  - \_breakpoints.scss (mainly for editor, not so useful for visible styles)
  - \_colors.scss (will want to pull this into both editor and visible stylesheets)
  - \_common.scss
  - \_blocks-variables.scss (just has the @import declarations)
  - \_mixins.scss (needs to be reviewed, probably most useful for editor)
  - \_variables.scss
  - \_z-index.scss (seems exclusively relevant for editor)
* \_blocks-widgets.scss
* \_blocks-embeds.scss

TODO:
* ~~Clean up variables in \_blocks-common.scss.~~
* proofread visible styles.
* Comment out defaults.
* Compile `editor-style.css` also.
* make \_variables-common.scss with variables shared by editor and visible and compile into both `editor-style-css` and `style.css`.
