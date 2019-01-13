# Sassified Genesis Sample Theme

This is just a fork of Genesis Sample theme 2.7.1 with added Sass, including Gutenberg Front End and Editor partials. No other changes (js/php etc.), other than the CSS style sheets are now compiled from the Sass partials.

Huge thanks for Christoph Herr @christophherr for inspiration and help via his Prometheus Starter theme based on Genesis Starter 2.6 https://github.com/christophherr/prometheus and to Sridhar Katakam @srikat for further development on Sass partials based on that. However any bugs, errors and general bad coding practice here will be mine and not theirs. 

## Notes

## Sass partials

Most Sass partials are @imported into `scss/style.scss` as normal but note the following exceptions:

### Partials for Plugins

Each plugin e.g. Genesis Simple FAQ has a separate small partial in `scss/partials/plugins`, which are imported into `scss/partials/_plugins.scss` (which is in turn imported into `scss/style.scss` as normal). The idea is to make it easy to add new style sheets for often-used plugins and @import them, and/or comment out existing @imports as appropriate.

### Gutenberg partials

`scss/gutenberg/front-end.scss`
and
`scss/gutenberg/style-editor.scss`

should be compiled directly to `lib/gutenberg/front-end.css` and `lib/gutenberg/style-editor.css` respectively, and not imported to `scss/style.scss`

To facilitate this, the above 2 scss files @import the `../partials/variables` partial directly.

### WooCommerce partials

Similarly, the file

`scss/woocommerce/genesis-sample-woocommerce.scss`

should be compiled directly to `lib/woocommerce/genesis-sample-woocommerce.scss` and not imported to `scss/style.scss`

## Build tools

There is a Codekit 3 configuration file included for those using that app (https://codekitapp.com). So, dragging this `genesis-sample` folder into Codekit 3 should create a new project with the correct compile paths. If using a local server such as Desktop Server or Local by Flywheel, you'll also need to edit the Codekit project to add the correct External Server Address e.g. `http://genesis-sample.test` etc.

If you use command line tools like Gulp then you'll need to add your own configuration files and install the components you need.

Original Genesis Sample Theme Read Me follows.

---

# Genesis Sample Theme

GitHub project link: https://github.com/studiopress/genesis-sample/.


## Installation Instructions

1. Upload the Genesis Sample theme folder via FTP to your wp-content/themes/ directory. (The Genesis parent theme needs to be in the wp-content/themes/ directory as well.)
2. Go to your WordPress dashboard and select Appearance.
3. Activate the Genesis Sample theme.
4. Inside your WordPress dashboard, go to Genesis > Theme Settings and configure them to your liking.

## Theme Support

Please visit https://my.studiopress.com/help/ for theme support.

## For Developers

The version of [Genesis Sample on GitHub](https://github.com/studiopress/genesis-sample/) includes tooling to check code against WordPress standards. To use it:

1. Install Composer globally on your development machine. [See Composer setup steps](https://getcomposer.org/doc/00-intro.md#downloading-the-composer-executable).
2. In the command line, change directory to the Genesis Sample folder.
3. Type the command `composer install` to install PHP development dependencies.
4. Type `composer phpcs` to run coding standards checks.

You'll see output highlighting issues with PHP files that do not conform to Genesis Sample coding standards.

### npm scripts

Scripts are also provided to help with CSS linting, CSS autoprefixing, and creation of pot language files. To use them:

1. Install [Node.js](https://nodejs.org/), which also gives you the Node Package Manager (npm).
2. In the command line, change directory to the Genesis Sample folder.
3. Type the command `npm install` to install dependencies.

You can then type any of these commands:

- `npm run autoprefixer` to add and remove vendor prefixes in `style.css`.
- `npm run makepot` to regenerate the `languages/genesis-sample.pot` file.
- `npm run lint:css` to generate a report of style violations for `style.css`.
- `npm run zip` to create a genesis-sample.zip of the current branch. Excludes files marked export-ignore in `.gitattributes`.

### Packaging for distribution

1. Follow the install instructions for npm scripts above.
2. Switch to the git branch you plan to distribute.
3. Bump version numbers manually and commit those changes.
4. Type `npm run zip` to create `genesis-sample.zip`. Files marked export-ignore in `.gitattributes` are excluded from the zip.

The `zip` command is an alias for `git archive -o genesis-sample.zip HEAD`.
