export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.namespace ='/api';



  this.get('/rentals', function(){
    return {
      data: [{
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      type: 'Estate',
      bedrooms: 15,
      image: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.dynastyrentals.com%2Fwp-content%2Fimages%2Fmansion-rental2.jpg&imgrefurl=http%3A%2F%2Fwww.dynastyrentals.com%2Fmansions-for-rent%2F&docid=yVxw0Tri-K16wM&tbnid=L1kvBWG-g3bjlM%3A&vet=1&w=300&h=200&bih=756&biw=1597&q=rentals%20mansion&ved=0ahUKEwjN-6OT46vSAhVE7mMKHeE2AWIQMwgeKAIwAg&iact=mrc&uact=8',
      description: 'This grand old mansion is a big house.'
    },{
      id: 'urban-living',
      title: 'Urban Living',
      owner: 'Wendy',
      city: 'Seattle',
      type: 'Condo',
      bedrooms: 1,
      image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi5y_u746vSAhUk94MKHf39DT0QjRwIBw&url=http%3A%2F%2Fwww.perdidosuncondorental.com%2Ffeatured.html&bvm=bv.148073327,d.cGc&psig=AFQjCNHeLahHnqI9WlldLg7X2BLGnimBLA&ust=1488130284100687',
      description: 'This adorable condo puts the city at your fingertips.'
    },{
      id: 'downtown-charm',
      title: 'Downtown Charm',
      owner: 'Serena',
      city: 'Portland',
      type: 'Apartment',
      bedrooms: 3,
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2Fdc7-j2F4EpqnB0xNJPwpR50ZXYE%2Ffit-in%2F1024x1024%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2016%2F12%2F27%2F852%2Fn%2F1922794%2Fcab689225862c0c105ef38.50878476_edit_img_cover_file_35462771_1471010520%2Fi%2FFirst-Apartment-Decorating-Ideas.jpg&imgrefurl=http%3A%2F%2Fwww.popsugar.com%2Fhome%2FFirst-Apartment-Decorating-Ideas-35462771&docid=u10F-nH_jf1DpM&tbnid=yN9bphrbtyQ_hM%3A&vet=1&w=960&h=1024&bih=756&biw=1597&q=apartment&ved=0ahUKEwjasovj46vSAhVBIWMKHasCB7UQMwhvKBMwEw&iact=mrc&uact=8',
      description: 'Rent or buy in this charming apartment in downtown.'
    }]
    }
  });
}
