var express = require("express");

var router = express.Router();
var db = require("../models");


router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.route("/burgers").get(function (req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
        res.render("index" ,{burgers_data: dbBurger} )
    })
})
.post(function(req, res){

})

// router.post("/burgers/create", function (req, res) {
    
    
// });


// router.put("/burgers/:id", function (req, res) {
    
// });

module.exports = router;