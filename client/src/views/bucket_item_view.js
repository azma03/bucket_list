const PubSub = require('../helpers/pub_sub.js')

const BucketItemView = function(container){
  this.container = container;
};

BucketItemView.prototype.render = function (bucketItem) {
  const bucketItemContainer = document.createElement('div');

  const adventure = document.createElement('h5');
  adventure.textContent = bucketItem.adventure;

  const location = document.createElement('p');
  location.textContent = `Location: ${bucketItem.location}`;

  const date = document.createElement('p');
  date.textContent = `Date: ${bucketItem.date}`;

  const notes = document.createElement('p');
  notes.textContent = `Notes: ${bucketItem.notes}`;

  // const status = document.createElement('p');
  // status.textContent = `Status: ${bucketItem.status}`;

  const deleteButton = this.createDeleteButton(bucketItem._id);

  bucketItemContainer.appendChild(adventure);
  bucketItemContainer.appendChild(location);
  bucketItemContainer.appendChild(date);
  bucketItemContainer.appendChild(notes);
  // bucketItemContainer.appendChild(status);
  bucketItemContainer.appendChild(deleteButton);

  this.container.appendChild(bucketItemContainer);
};

BucketItemView.prototype.createDeleteButton = function (bucketItemId) {
  const button = document.createElement('button');
  button.value = bucketItemId;
  button.textContent = 'Delete Item';

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketItemView:item-delete-clicked', evt.target.value);
    // return false;
  });
  return button;
};

module.exports = BucketItemView;
