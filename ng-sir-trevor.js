(function() {
    'use strict';
    angular
    .module('SirTrevor', [])
        .provider('SirTrevor', function() {
            this.$get = function() {
                return SirTrevor;
            }
            this.Blocks = SirTrevor.Blocks;
            this.Block = SirTrevor.Block;
            this.Formatters = SirTrevor.Formatters;
            this.Formatter = SirTrevor.Formatter;
        })
        .provider('SirTrevorOptions', function() {
            var options = {
                    blockTypes: ["Text"],
                    transform: {
                        get: function(block) {
                            return {
                                type: block.blockStorage.type,
                                data: block.blockStorage.data
                            };
                        },
                        set: function(block) {
                            return {
                                type: block.type,
                                data: block.data
                            };
                        }
                    }
                };
            this.$get = function() {
                return options;
            }
            this.$extend = function(opts) {
                _.extend(options, opts);
            }
            this.$set = function(opts) {
                options = opts;
            }
        })
        .directive('sirTrevor', ['SirTrevor', 'SirTrevorOptions', function(SirTrevor, options) {
            var directive = {
                    scope: {
                        'blockTypes': '=',
                        'defaultType': '=',
                        'required': '=',
                        'blockTypeLimits': '=',
                        'language': '=',
                        'debug': '=',
                        // @TODO: investigate how to pass ng-model.
                        // 'model': '=ngModel',
                        'editor': '=ngEditor',
                        'transform': '=ngEditorTransform'
                    },
                    template: function(element, attr) {
                        var str = '<textarea class="sir-trevor" name="content"></textarea>';
                        // sir trevor needs a parent `form` tag.
                        if (!element.parent('form').length) {
                            str = '<form>' + str + '</form>';
                        }
                        return str;
                    },
                    link: function (scope, element, attrs) {
                        var opts = _.clone(options);
                        // overwrite provider options with element parameters
                        _.each(directive.scope, function(value, key) {
                            if (!_.isEmpty(scope[key])) {
                                opts[key] = scope[key];
                            }
                        });
                        opts.el = element.find('textarea');
                        scope.editor = new SirTrevor.Editor(opts);
                        scope.editor.get = function() {
                            var list = [];
                            _.each(scope.editor.blocks, function(block) {
                                scope.editor.saveBlockStateToStore(block);
                                list.push(opts.transform.get(block));
                            });
                            return list;
                        };
                        scope.editor.set = function(list) {
                            var item;
                            _.each(list, function(block) {
                                item = opts.transform.set(block);
                                scope.editor.createBlock(item.type, item.data);
                            });
                        }

                        scope.editor.clear = function() {
                            scope.editor.dataStore.data = [];
                        }
                        // @TODO: investigate how to better `digest` out of $scope  variables.
                        // scope.$watchCollection('editor.blocks', function(blocks) {
                        //     var list = [];
                        //     _.each(blocks, function(block) {
                        //         list.push(scope.editor.get(block));
                        //     });
                        //     scope.model = list;
                        // });
                    }
                };
            return directive;
        }]);
})();
