const PubSub = require('../helpers/pub_sub.js')

const BucketListFormView = function(form){
  this.form = form;
}

BucketListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    debugger;
    this.handleSubmit(evt);
  })
};

BucketListFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketItem = this.createBucketItem();
  PubSub.publish('BucketListFormView:item-submitted', newBucketItem);
  evt.target.reset();
};

BucketListFormView.prototype.createBucketItem = function () {
  const newBucketItem = {
    adventure: this.form.adventure.value,
    location: this.form.location.value,
    date: this.form.date.value,
    notes: this.form.notes.value
    // status: this.form.status.value
  }
  return newBucketItem;
};
module.exports = BucketListFormView;
