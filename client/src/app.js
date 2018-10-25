const BucketListFormView = require('./views/bucketlist_form_view.js');
const BucketListGridView = require('./views/bucketlist_grid_view.js');
const Bucketlist = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Javascript Loaded");

  const bucketlistForm = document.querySelector('form#bucketlistForm');
  const bucketlistFormView = new BucketListFormView(bucketlistForm);
  bucketlistFormView.bindEvents();

  const bucketlistGrid = document.querySelector('#bucketlist');
  const bucketlistGridView = new BucketListGridView(bucketlistGrid);
  bucketlistGridView.bindEvents();

  const bucketlist = new Bucketlist();
  bucketlist.getData();
  bucketlist.bindEvents();


});
