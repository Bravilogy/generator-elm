'use strict';

const Generator = require('yeoman-generator');

module.exports = Generator.extend({
    writing: {
        config() {
            this.fs.copy(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
            this.fs.copy(
                this.templatePath('_elm-package.json'),
                this.destinationPath('elm-package.json')
            );
            this.fs.copy(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
            this.fs.copy(
                this.templatePath('_Procfile'),
                this.destinationPath('Procfile')
            );
        },
        app() {
            this.fs.copy(
                this.templatePath('_src/index.html'),
                this.destinationPath('src/index.html')
            );
            this.fs.copy(
                this.templatePath('_src/index.js'),
                this.destinationPath('src/index.js')
            );
            this.fs.copy(
                this.templatePath('_src/elm/Main.elm'),
                this.destinationPath('src/elm/Main.elm')
            );
            this.fs.copy(
                this.templatePath('_src/elm/Models.elm'),
                this.destinationPath('src/elm/Models.elm')
            );
            this.fs.copy(
                this.templatePath('_src/elm/Msgs.elm'),
                this.destinationPath('src/elm/Msgs.elm')
            );
            this.fs.copy(
                this.templatePath('_src/elm/Update.elm'),
                this.destinationPath('src/elm/Update.elm')
            );
            this.fs.copy(
                this.templatePath('_src/elm/View.elm'),
                this.destinationPath('src/elm/View.elm')
            );
            this.fs.copy(
                this.templatePath('_src/elm/Commands.elm'),
                this.destinationPath('src/elm/Commands.elm')
            );
            this.fs.copy(
                this.templatePath('_src/scss/app.scss'),
                this.destinationPath('src/scss/app.scss')
            );
        }
    },
    install() {
        this.installDependencies();
    }
});
