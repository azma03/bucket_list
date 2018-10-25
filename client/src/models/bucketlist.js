const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucketlist = function(){
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
}

Bucketlist.prototype.bindEvents = function () {
  // debugger;
  PubSub.subscribe('BucketListFormView:item-submitted', (evt) => {
    debugger;
      this.postBucketItem(evt.detail);
  })

  PubSub.subscribe('BucketItemView:item-delete-clicked', (evt) => {
    debugger;
    this.deleteBucketItem(evt.detail);
  });
};

Bucketlist.prototype.getData = function () {
  this.request.get()
  .then((bucketlist) => {
    // debugger;
    PubSub.publish('Bucketlist:data-loaded', bucketlist);
  })
  .catch(console.error);
};

Bucketlist.prototype.postBucketItem = function (bucketItem) {
  this.request.post(bucketItem).then((bucketlist) => PubSub.publish('Bucketlist:data-loaded', bucketlist))
  .catch(console.error)
};

Bucketlist.prototype.deleteBucketItem = function (bucketItemId) {
  debugger;
  this.request.delete(bucketItemId)
  .then((bucketlist) => PubSub.publish('Bucketlist:data-loaded', bucketlist))
  .catch(console.error);
};

module.exports = Bucketlist;
