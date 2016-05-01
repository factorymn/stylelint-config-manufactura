# stylelint-config-manufactura

Shareable [Stylelint](http://stylelint.io/) config for [Manufactura](http://factory.mn/) projects.

## Installation

```
npm install --save-dev stylelint-config-manufactura
```

## Usage with enb-postcss

```
nodeConfig.addTech(
    [require('enb-postcss/techs/enb-postcss'), {
        sourcemap : true,
        plugins : [
            require('stylelint')(
                require('stylelint-config-manufactura')
            )
        ]
    }]
);
```
