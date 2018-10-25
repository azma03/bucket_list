const PubSub = require('../helpers/pub_sub.js');
const BucketItemView = require('./bucket_item_view.js');

const BucketListGridView = function(container){
  this.container = container;
}

BucketListGridView.prototype.bindEvents = function () {

  this.container.addEventListener('submit', function(evt) {
    evt.preventDefault();
  });

  PubSub.subscribe('Bucketlist:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

BucketListGridView.prototype.render = function (bucketlistItems) {
  // debugger;
  console.log(bucketlistItems);
  this.container.innerHTML = '';
  const bucketlistItemView = new BucketItemView(this.container);
  bucketlistItems.forEach((bucketlistItem) => bucketlistItemView.render(bucketlistItem));
};


module.exports = BucketListGridView;
