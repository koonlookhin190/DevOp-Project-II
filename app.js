const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

const databaseName = "gindaijaiduayDB";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set('views', __dirname + '/views');

// const menuSchema = {
//     name: String,
//     prize: Number,
//     image: String,
// };

const menuSchema = {
    id: Number,
    name: String,
    prize: Number,
    image: String,
    request: String,
    status: String,
}

const tableSchema = {
    tableNumber: String,
    order: Object,
}

const Main = mongoose.model("Main", menuSchema);
const Appitizer = mongoose.model("Appitizer", menuSchema);
const Bever = mongoose.model("Bever", menuSchema);
const Dess = mongoose.model("Dess", menuSchema);

const Table = mongoose.model("Table", tableSchema);

mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var table1 = { tableNumber: "1", order: [''] }
var table2 = { tableNumber: "2", order: [''] }
var table3 = { tableNumber: "3", order: [''] }
var table4 = { tableNumber: "4", order: [''] }
var table5 = { tableNumber: "5", order: [''] }

Table.insertMany(table1)
Table.insertMany(table2)
Table.insertMany(table3)
Table.insertMany(table4)
Table.insertMany(table5)

const appi = [
    {
        id: 0,
        name: "Crab Louie",
        prize: "100",
        image: "/image/frontend-Pic/appi/Crab Louie.jpg",
        request: '',
        status: '',
    },
    {
        id: 1,
        name: "Dungeness crab cake",
        prize: "100",
        image: "/image/frontend-Pic/appi/Dungeness crab cake.jpg",
        request: '',
        status: '',
    },
    {
        id: 2,
        name: "Lomi-lomi salmon",
        prize: "100",
        image: "/image/frontend-Pic/appi/Lomi-lomi salmon.jpg",
        request: '',
        status: '',
    },
    {
        id: 3,
        name: "Pu pu platte",
        prize: "100",
        image: "/image/frontend-Pic/appi/Pu pu platte.jpg",
        request: '',
        status: '',
    },
    {
        id: 4,
        name: "Rocky Mountain oysters",
        prize: "100",
        image: "/image/frontend-Pic/appi/Rocky Mountain oysters.jpg",
        request: '',
        status: '',
    },
    {
        id: 5,
        name: "Shrimp cocktail",
        prize: "100",
        image: "/image/frontend-Pic/appi/Shrimp cocktail.jpg",
        request: '',
        status: '',
    }
]

const main = [
    {
        id: 0,
        name: "Beef steak",
        prize: "100",
        image: "/image/frontend-Pic/main/Beef steak.jpg",
        request: '',
        status: '',
    },
    {
        id: 1,
        name: "Beef stew",
        prize: "100",
        image: "/image/frontend-Pic/main/Beef stew.jpg",
        request: '',
        status: '',
    },
    {
        id: 2,
        name: "Lobster Bisque",
        prize: "100",
        image: "/image/frontend-Pic/main/Lobster Bisque.jpg",
        request: '',
        status: '',
    },
    {
        id: 3,
        name: "Macaroni and Cheese",
        prize: "100",
        image: "/image/frontend-Pic/main/Macaroni and Cheese.jpg",
        request: '',
        status: '',
    },
    {
        id: 4,
        name: "Paella",
        prize: "100",
        image: "/image/frontend-Pic/main/Paella.jpg",
        request: '',
        status: '',
    },
    {
        id: 5,
        name: "Spaghetti",
        prize: "100",
        image: "/image/frontend-Pic/main/Spaghetti.jpg",
        request: '',
        status: '',
    }
];

const dessert = [
    {
        id: 0,
        name: "Chocolate Cake with Ganache",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate Cake with Ganache.jpeg",
        request: '',
        status: '',
    },
    {
        id: 1,
        name: "Chocolate Pudding",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate Pudding.jpg",
        request: '',
        status: '',

    },
    {
        id: 2,
        name: "Chocolate strawwberry crumble ball",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Chocolate strawwberry crumble ball.jpg",
        request: '',
        status: '',

    },
    {
        id: 3,
        name: "Coconut _ Mango Panna Cotta",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Coconut _ Mango Panna Cotta.jpg",
        request: '',
        status: '',
    },
    {
        id: 4,
        name: "Red Velvet and Vanilla Cream Pudding",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Red Velvet and Vanilla Cream Pudding.jpeg",
        request: '',
        status: '',
    },
    {
        id: 5,
        name: "Tiramisu",
        prize: "100",
        image: "/image/frontend-Pic/dessert/Tiramisu.jpg",
        request: '',
        status: '',
    }
]

const beverege = [
    {
        id: 0,
        name: "Appletini",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Appletini.jpg",
        request: '',
        status: '',
    },
    {
        id: 1,
        name: "Bahama Mama",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Bahama Mama.jpg",
        request: '',
        status: '',

    },
    {
        id: 2,
        name: "Bay Breeze",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Bay Breeze.jpg",
        request: '',
        status: '',

    },
    {
        id: 3,
        name: "Cape Codder",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Cape Codder.jpg",
        request: '',
        status: '',
    },
    {
        id: 4,
        name: "Dirty Shirley",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Dirty Shirley.jpg",
        request: '',
        status: '',
    },
    {
        id: 5,
        name: "Shirley Temple",
        prize: "100",
        image: "/image/frontend-Pic/Drink/Shirley Temple.jpg",
        request: '',
        status: '',
    }
]

// const menu = new Menu({
//     appit: appi,
//     mainD: main,
//     bev: beverege,
//     des: dessert,
// })

//Menu.insertMany(menu);
for (i = 0; i < main.length; i++) {
    Main.insertMany(main[i]);
    Appitizer.insertMany(appi[i]);
    Bever.insertMany(beverege[i]);
    Dess.insertMany(dessert[i]);
}

app.get("/", function (req, res) {
    res.render('welcome');
})

app.get("/SelectTable", function (req, res) {
    res.render('SelectTable');
})
 
app.get("/index", function (req, res) {
    // let query = '-';
    // if (req.query.searchtext) {
    //     query = (req.query.searchtext)
    // }
    // var flag = false;

    // for (i = 0; i < 4; i++) {
    //     Main.find({ name: query },function(err,foundList){
    //         if(!err){
    //             if(foundList){
    //                flag = true;
    //             }
    //         }
    //     });
    // } 
    MongoClient.connect(url, function (err, db) {
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('tables').find({ tableNumber: selectedTable }).toArray(function (err, eee) {
            var totalPrice = 0;
            for (i = 1; i < eee[0].order.length; i++) {
                totalPrice += eee[0].order[i].prize;
            }

            res.render('index', {
                mainListItems: main,
                bevListItems: beverege,
                desListItems: dessert,
                appListItems: appi,
                orderLists: eee[0].order,
                totalP: totalPrice,
            })
        })

    })
    // const search = (req.body.searchtext);
    // console.log(search); 

});

app.post('/mainmenu', function (req, res) {
    var addMenuName = (req.body.menuID)
    var requestMes = (req.body.requestMessage)

    MongoClient.connect(url, function (err, db) {
        var query = { name: addMenuName };
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('mains').find(query).toArray(function (err, result) {
            if (err) {
                console.log(err)
            } else {
                dataBase.collection('tables').find({ tableNumber: selectedTable }).toArray(function (err, eee) {
                    result[0].request = result[0].request + requestMes;
                    newOrder = eee[0].order;
                    newOrder.push(result[0]);
                    dataBase.collection('tables').findOneAndReplace({ tableNumber: selectedTable }, { tableNumber: selectedTable, order: newOrder })
                })
            }
        })
    })
    res.redirect('/index')

})

app.post('/bevmenu', function (req, res) {
    var addMenuName = (req.body.menuID)
    var requestMes = (req.body.requestMessage)

    MongoClient.connect(url, function (err, db) {
        var query = { name: addMenuName };
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('bevers').find(query).toArray(function (err, result) {
            if (err) {
                console.log(err)
            } else {
                dataBase.collection('tables').find({ tableNumber: selectedTable }).toArray(function (err, eee) {
                    result[0].request = result[0].request + requestMes;
                    newOrder = eee[0].order;
                    newOrder.push(result[0]);
                    dataBase.collection('tables').findOneAndReplace({ tableNumber: selectedTable }, { tableNumber: selectedTable, order: newOrder })
                })

                // dataBase.collection('tables').findOneAndUpdate(
                //     { tableNumber : '1'},

                // )  
            }
        })
    })
    res.redirect('/index')

})


app.post('/desmenu', function (req, res) {
    var addMenuName = (req.body.menuID)
    var requestMes = (req.body.requestMessage)

    MongoClient.connect(url, function (err, db) {
        var query = { name: addMenuName };
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('desses').find(query).toArray(function (err, result) {
            if (err) {
                console.log(err)
            } else {
                dataBase.collection('tables').find({ tableNumber: selectedTable }).toArray(function (err, eee) {
                    result[0].request = result[0].request + requestMes;
                    newOrder = eee[0].order;
                    newOrder.push(result[0]);
                    dataBase.collection('tables').findOneAndReplace({ tableNumber: selectedTable }, { tableNumber: selectedTable, order: newOrder })
                })

                // dataBase.collection('tables').findOneAndUpdate(
                //     { tableNumber : '1'},

                // )  
            }
        })
    })
    res.redirect('/index')

})

app.post('/appmenu', function (req, res) {
    var addMenuName = (req.body.menuID)
    var requestMes = (req.body.requestMessage)

    MongoClient.connect(url, function (err, db) {
        var query = { name: addMenuName };
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('appitizers').find(query).toArray(function (err, result) {

            if (err) {
                console.log(err)
            } else {
                dataBase.collection('tables').find({ tableNumber:selectedTable }).toArray(function (err, eee) {
                    result[0].request = result[0].request + requestMes;
                    newOrder = eee[0].order;
                    newOrder.push(result[0]);
                    dataBase.collection('tables').findOneAndReplace({ tableNumber: selectedTable }, { tableNumber: selectedTable, order: newOrder })
                })

                // dataBase.collection('tables').findOneAndUpdate(
                //     { tableNumber : '1'},

                // )  
            }
        })
    })
    res.redirect('/index')
})
var selectedTable=0;
app.post('/table',function(req,res){
    selectedTable = (req.body.tableNB)
    console.log(selectedTable);
    res.redirect('/index')  

})

app.post('/checkbill', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        var dataBase = db.db('gindaijaiduayDB');
        dataBase.collection('tables').find({ tableNumber: selectedTable }).toArray(function (err, eee) {

            dataBase.collection('tables').findOneAndReplace({ tableNumber: selectedTable }, { tableNumber: selectedTable, order: [''] })
        })
    })
    res.redirect('/index')
}) 

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
}); 