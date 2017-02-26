import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';


moduleForComponent('location-map', 'Integration | Component | location map', {
  integration: true,
  beforeEach() {
    this.register('service:maps', StubMapsService);
    this.inject.service('maps', {as: 'mapsService'});
  }
});

let StubMapsService = Ember.Service.extend({
  getMapElement(location){
    this.set('calledWithinLocation', location);
    return document.createElement('div');
  }
});

test('should append map element to container element', function(assert){
  this.set('myLocation', 'New York');
  this.render(hbs`{{location-map location=myLocation}}`);
    assert.equal(this.$('.map-container').children().length, 1, 'the map element should display');
    assert.equal(this.get('mapsService.calledWithinLocation'), 'New York', 'a map of New York should display');
});