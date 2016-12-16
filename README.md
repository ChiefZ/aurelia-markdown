# aurelia-markdown
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

Markdown plugin for an [aurelia](http://aurelia.io/) web application.

# contributing

This is in a very early development stage, so if you are interested in contributing please contact me.

I am also very happy to accept pull requests.

# installation
## aurelia-api

```
npm install --save aurelia-markdown showdown prismjs
```
in aurelia_project.json add to dependencies:
```javascript
        {
            "name": "aurelia-markdown",
            "path": "../node_modules/aurelia-markdown/dist/amd",
            "main": "aurelia-markdown"
          },
          "showdown",
          {
            "name": "prismjs",
            "path": "../node_modules/prismjs",
            "main": "prism",
            "resources": [
              "themes/prism.css"
            ]
          },
```

#usage

just use the markdown element
```html
<markdown>
# aurelia-markdown
I use [aurelia-markdown](https://github.com/chiefz/aurelia-markdown)
</markdown>
```