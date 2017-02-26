import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Ember from 'ember';


let StubMapService  = Ember.Service.extend({
	getMapElement () {
		return document.createElement('div');
	}
});


moduleForAcceptance('Acceptance | list rentals', {
	beforeEach() {
		this.application.register('service:stubMaps', StubMapService);
		this.application.inject('component:location-map', 'maps', 'service:stubMaps');
	}
});

test('should redirect to rentals route', function(assert) {
	visit('/');

	andThen(function() {
		assert.equal(currentURL(), '/rentals', 'should redirect to rentals');
	});

});

test('should list available rentals', function(assert) {
	visit('/');

	andThen(function() {
		assert.equal(find('.listing').length, 3, 'should be three listings');
	});
});

test('should link to information about the company', function(assert) {
	visit('/');

	click('a:contains("About")');

	andThen(function(){
		assert.equal(currentURL(), '/about', 'about link should take you to about page');
	});
});

test('should link to contact information', function(assert) {
	visit('/');

	click('a:contains("Contact")');

	andThen(function(){
		assert.equal(currentURL(), '/contact', 'contact link should take you to contact page');
	});
});

test('should filter the list of rentals by city', function(assert) {
	visit('/');

	fillIn('.list-filter input', 'seattle');
	keyEvent('.list-filter input', 'keyup', 69);

	andThen(function(){
		assert.equal(find('.listing').length, 1, 'should find one listing after filter');
		assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should find that one listing contains word searched for');
	});
});

test('should show details for a specific rental', function(assert) {
	visit('/rentals');
	click('a:contains("Grand Old Mansion")');
	andThen(function(){
		assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to grand old mansion page');
		assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should show page with heading of rental listing');
		assert.equal(find('.description').length, 1, 'should list a description of the rental listing');
	});
});
