'use strict';

describe('', function() {

    beforeEach(module('SirTrevor'));

    it('can get an instance of SirTrevor', inject(function(SirTrevor) {
        expect(SirTrevor).to.be.ok;
    }));

    it('can get an instance of SirTrevorOptions', inject(function(SirTrevorOptions) {
        expect(SirTrevorOptions).to.be.ok;
    }));

    describe('ng-sir-trevor directive', function() {

      var scope, element;

      beforeEach((inject(function($compile, $rootScope){
        scope = $rootScope.$new();
        scope.model = {};
        var elementHtml = '<ng-sir-trevor st-model="model">';
        element = $compile(elementHtml)(scope);
        scope.$digest();
      })));

      it('should compile properly', function() {
        expect(element).to.be.ok;
      });

      it('should be a form', function() {
        expect(element).to.be.ok;
        expect(element.children()[0].tagName.toLowerCase()).to.eql('form');
      });

      it('should create a sir trevor editor bound to scope', function() {
        expect(element).to.be.ok;
        expect(element.children().children()[0].id).to.eql(scope.model.ID);
      });

    });

});
