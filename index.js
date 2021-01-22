// if(process.env.NODE_ENV !== 'production') {
//      require('dotenv').load();
// } 
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const expressLayouts = require('express-ejs-layouts');
const router = require("./routes/index")
const app = express();
// for ejs 
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts)
// request from customer
app.use(bodyParser.urlencoded({extended:true}));
// for css 
app.use(express.static('public'));
mongoose.connect("mongodb://localhost/love", {
     useNewUrlParser:true,
     useUnifiedTopology:true
})
const db = mongoose.connection;
db.on('error', error=>console.error(error));
db.once('open',()=>console.log('Connected to mongoose'));
app.use("/", router)

app.listen(3000, function() {
     console.log("Server started on port 3000");
});

// const listsSchema = mongoose.Schema({
     //      name:String,
     //      items:[itemsSchema]
     // })
     
     // const List = mongoose.model('List', listsSchema);
     
     // ap.get("/", function(req, res){
     //   Item.find({}, function(err, results){
     //     if(results.length === 0){
     //       Item.insertMany(defaultItems, function(err){
     //         if(err){
     //           console.log(err);
     //         } else{
     //           console.log('Successfully saved default items to the database');
     //         }
     //       });
     //       res.redirect("/")
     //     } else {
     //       res.render('list', {listTitle:"Today", Lists:results})
     //     }
     //   }); 
     // });
     
     // ap.get("/:customerList", (req, res)=>{
     //      const customerList = req.params.customerList;
     //      List.findOne({name:customerList}, function(err, results){
     //        if(!err){
     //          if(!results){
     //            const list = new List({
     //              name:customerList,
     //              items:defaultItems
     //            })
     //            list.save();
     //            res.redirect("/" + customerList)
     //          } else {
     //            res.render("list", {listTitle:results.name, Lists:results.items});
     //          }
     //        }
     //      })
          
          
     //    })
        
     // ap.post("/", function(req, res){
     //         const newInputList = req.body.newInputList;
     //         const btnClick = req.body.button;
     //         const addNewList = new Item({
     //           name:newInputList
     //      })
     //      addNewList.save();
     //      res.redirect("/")  
     //      //      res.redirect("/")  
     //      // if(btnClick === "Today"){
     //      //      addNewList.save();
     //      //      res.redirect("/")  
     //      //  }
     //      // else {
     //      //      List.findOne({name:btnClick}, function(err, results){
     //      //           // results.items.push(addNewList);
     //      //           results.save();
     //      //           res.redirect("/" + btnClick)
     //      //      })
     //      // }
         
     // });   
     
     // ap.post("/delete", (req, res)=>{
     //    const checkboxId = req.body.checkbox;
     //    console.log(checkboxId);
     //   //  Item.findByIdAndDelete(checkboxId, function(err){
     //   //    if(!err){
     //   //     console.log("Successfully deleted");
     //   //     res.redirect("/")
     //   //    }
     //   //  })
     // })
     

     // const app = express();

     
// mongoose.connect("mongodb+srv://ruth:hyhpaungroi@cluster0.fsnne.mongodb.net/todolist", {
//      useNewUrlParser:true,
//      useUnifiedTopology:true
// })
// mongoose.connection.on('open', err=>{
//      if(!err){
//         console.log("connected to the database");  
//      }
// })
// app.set("view engine", "ejs");
// // app.set('views', __dirname +'/views')
// // app.set('layout', 'layouts/layout');
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended:true}));


// // app.use("/", rout);


// const itemsSchema = mongoose.Schema({
//      name:String
// })

// const Item = mongoose.model('Item', itemsSchema);

// const item1 = new Item({
//      name:"am sorry"
//    })
// const item2 = new Item({
//      name:"forgive me"
//    })
// const item3 = new Item({
//      name:"will you"
//    })
// const defaultItems =  [item1, item2, item3];

// const listsSchema = mongoose.Schema({
//      name:String,
//      items:[itemsSchema]
// })

// const List = mongoose.model('List', listsSchema);

// app.get("/", (req, res)=>{
//      Item.find({}, function(err, foundItems){
//           if(foundItems.length ===0){
//                Item.insertMany(defaultItems, function(err){
//                     if(err){
//                          console.log(err);
//                     } else {
//                          console.log("Successfully saved to the database");
//                     }
//                });
//                res.redirect("/");
//           } else {
//                res.render("list", {listTitle:'Today', Lists:foundItems})
//           }      
//      });
    
// });

// app.get("/:customerList", (req, res)=>{
//      const customerList = _.capitalize(req.params.customerList);
   
//      List.findOne({name:customerList}, function(err, results){
//           if(err){
//                console.log(err);
//           }else {
//                if(!results) {
//                     const newList = new List({
//                          name:customerList,
//                          items:defaultItems
//                     })
//                     newList.save();
//                     res.redirect("/" + customerList)
//                } else {
//                     res.render('list', {listTitle:results.name, Lists:results.items})
//                }
//           }
//      })
// })
// app.post("/", function(req, res){
//              const newInputList = req.body.newInputList;
//              const btnClick = req.body.button;
//              const addNewList = new Item({
//                name:newInputList
//           })
              
//           if(btnClick === 'Today') {
//                addNewList.save();
//                res.redirect("/")
//           } else {
//                List.findOne({name:btnClick}, function(err, results){
//                     // results.items.push(addNewList);
//                     // results.save();
//                     // res.redirect("/"+ btnClick)
//                })
//           }
// });   
// app.post("/delete", function(req, res){
//      const checkboxId =req.body.checkbox;
//      const listName = req.body.listName;
//      console.log(listName);
//      console.log(checkboxId);
//      if(listName === "Today"){
//           console.log(listName);
//           // Item.findByIdAndDelete(ObjectId('checkboxId'), function(err){
//                //      if(err){
//                //           console.log(err);
//                //      } else {
//                //           console.log('Successfully deleted');
//                //           res.redirect("/")
//                //      }
//                // });
//      } else {
//           List.findOneAndUpdate({name:listName},{$pull:{Item:{_id:checkboxId}}}, function(err, results){
//               if(!err){
//                    res.redirect("/" + listName)
//               }
//           })
//      }
//      // if (checkboxId.length !== 24)
//      //  { return id } return ObjectID(id)
//      // Item.findByIdAndDelete(ObjectId('checkboxId'), function(err){
//      //      if(err){
//      //           console.log(err);
//      //      } else {
//      //           console.log('Successfully deleted');
//      //           res.redirect("/")
//      //      }
//      // });
// });
// 