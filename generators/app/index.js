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
                this.templatePath('_src/Main.elm'),
                this.destinationPath('src/Main.elm')
            );
            this.fs.copy(
                this.templatePath('_src/Models.elm'),
                this.destinationPath('src/Models.elm')
            );
            this.fs.copy(
                this.templatePath('_src/Msgs.elm'),
                this.destinationPath('src/Msgs.elm')
            );
            this.fs.copy(
                this.templatePath('_src/Update.elm'),
                this.destinationPath('src/Update.elm')
            );
            this.fs.copy(
                this.templatePath('_src/View.elm'),
                this.destinationPath('src/View.elm')
            );
            this.fs.copy(
                this.templatePath('_src/Commands.elm'),
                this.destinationPath('src/Commands.elm')
            );
            this.fs.copy(
                this.templatePath('_src/app.scss'),
                this.destinationPath('src/app.scss')
            );
        }
    },
    install() {
        this.installDependencies();
    }
});
