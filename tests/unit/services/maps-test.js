import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:maps', 'Unit | Service | maps', {
  needs: ['util:google-maps']
});

const DUMMY_ELEMENT = {};


let MapUtilStub = Ember.Object.extend({
	createMap(element, location){
		this.assert.ok(element, 'createMap with element');
		this.assert.ok(location, 'createMap called with location');
		return DUMMY_ELEMENT;
	}
});

// Replace this with your real tests.
test('should create map if one isnt cached flor location', function(assert) {
  assert.expect(4);
  let stubMapUtil = MapUtilStub.create({assert});
  let mapService = this.subject({mapUtil: stubMapUtil});
  let element = mapService.getMapElement('San Francisco');
  assert.ok(element, 'element exists');
  assert.equal(element.className, 'map', 'element has className = map');
});

test('should use existing map if it is in cache', function(assert){
	assert.expect(1);

	let stubCachedMap = Ember.Object.create({
		sanFrancisco: DUMMY_ELEMENT
	});

	let mapService = this.subject({ cachedMaps: stubCachedMap});
	let element = mapService.getMapElement('San Francisco');
	assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
});
