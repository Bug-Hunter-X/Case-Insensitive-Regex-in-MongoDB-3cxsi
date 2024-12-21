```javascript
const query = {
  field: { $regex: /pattern/i }
};

db.collection.find(query).toArray((err, docs) => {
  if (err) {
    console.error("Error fetching documents:", err);
  } else {
    console.log("Documents:", docs);
  }
});
```