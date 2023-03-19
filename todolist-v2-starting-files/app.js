//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemSchema = new mongoose.Schema({
  name: String
})

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
})

const List = mongoose.model("List", listSchema)

const Item = mongoose.model("Item", itemSchema)

const item1 = new Item({
  name: "Send Books"
})

const item2 = new Item({
  name: "Find Electrician"
})

const item3 = new Item({
  name: "repair car"
})

const defaultItems = [item1, item2, item3]

app.get("/", function (req, res) {

  Item.find({}, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      if (results.length === 0) {
        Item.insertMany(defaultItems, (err) => {
          if (err) {
            console.log(err)
          } else {
            console.log("Successfully added default items to DB")
          }
        })
        res.redirect("/")
      }
      res.render("list", { listTitle: "Today", newListItems: results });
    }
  })

});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  })

  item.save()

  res.redirect('/')

});

app.get("/delete", function (req, res) {
  console.log(req.body.checkbox)
  const checkedItemId = req.body.checkbox;
  Item.remove({ _id: checkedItemId }, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Successfully deleted checked item")
    }
  })
})

// app.get("/work", function (req, res) {
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

app.get('/:customName', function (req, res) {
  const customName = req.params.customName

  List.findOne({ name: customName }, (err, foundList) => {
    if (err) {
      console.log(err)
    } else {
      if (!foundList) {
        const list = new List({
          name: customName,
          items: defaultItems,
        })
        list.save()
        res.redirect('/' + customName)
      } else {
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
      }
    }
  })
})

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
