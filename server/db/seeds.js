use wishlist;
db.dropDatabase();

db.bucketlist.insertMany([
  {
    adventure: "Go Scuba Diving",
    location: "Any Ocean",
    notes: "No notes at the moment"
  },
  {
    adventure: "Learn Chess",
    location: "Anywhere",
    notes: "Again No notes at the moment"
  }
]);
