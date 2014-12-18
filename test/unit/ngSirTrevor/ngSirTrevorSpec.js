'use strict';

describe('', function() {

    beforeEach(module('SirTrevor'));

    it('can get an instance of SirTrevor', inject(function(SirTrevor) {
        expect(SirTrevor).to.be.ok;
    }));

    it('can get an instance of SirTrevorOptions', inject(function(SirTrevorOptions) {
        expect(SirTrevorOptions).to.be.ok;
    }));

});