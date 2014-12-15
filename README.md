ng-sir-trevor
=============
Sir Trevor Angular services and directive,
to work better with sir in ng enviroment.


## Install

Via bower command.

```
bower install ng-sir-trevor
```

Now add ng-sir-trevor script and dependency to your index.html page

```
<!-- dependecy.js -->
<link rel="stylesheet" href="bower_components/sir-trevor/sir-trevor-icons.css" type="text/css" media="screen" title="no title" charset="utf-8">
<link rel="stylesheet" href="bower_components/sir-trevor/sir-trevor.css" type="text/css" media="screen" title="no title" charset="utf-8">

<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>    
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/Eventable/eventable.js"></script>
<script type="text/javascript" src="bower_components/underscore/underscore-min.js"></script>
<script type="text/javascript" src="bower_components/sir-trevor/sir-trevor.min.js"></script>

<!-- ng-sir-trevor.js -->
<script type="text/javascript" src="bower_components/ng-sir-trevor-js/dist/ng-sir-trevor.min.js"></script>

``` 

For requirejs configuration

```
require.config({
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'angular': 'bower_components/angular/angular',
        'eventable': 'bower_components/Eventable/eventable',
        'sir-trevor': 'bower_components/sir-trevor/sir-trevor',
        'ng-sir-trevor': 'bower_components/ng-sir-trevor/dist/ng-sir-trevor',
    },
    shim: {
        jquery: {exports: 'jQuery'},

        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },

        'sir-trevor': {
            deps: ['jquery', 'eventable', 'lodash'],
            exports: 'SirTrevor'
        },

        'ng-sir-trevor': {
            deps: ['sir-trevor', 'angular']
        }
    }
});
```