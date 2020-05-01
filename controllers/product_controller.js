const Product = require('../models/product');

// Add products to the database
module.exports.create= function(req, res){
     
    // first check whether the product name is filled or not
    if(!req.body.name){
        return res.status(400).send({
            message: "Name of the product cannot be empty"
        });
    }
    
    // create a new product
    Product.create(req.body, function(err , product){
        if(err) { 
            return res.status(500).send({
                     message: err.message || "Some error occurred while creating the Product."
                    });
                }

                    return res.send(product);
    })
}

// list all products
module.exports.findAll = function(req, res){ 
    Product.find({}, function(err, product){
        if(err){
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Products."
            })
        }

        return res.send(product);
    })
};

// delete a product
module.exports.delete = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.noteId
            });
        }
        res.send({message: "Product deleted successfully!"});
        })
    }



// Update a note identified by the noteId in the request
module.exports.update = function(req, res) {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Name of the Product content cannot be empty"
        });
    }

    // Find note and update it with the request body
    Product.findByIdAndUpdate(id, {
        name: req.body.name,
        quantity: req.body.quantity
    }, function(err, product){
        if(err){
            return res.status(500).send({
                        message: "Error updating Product with id " + id
                    });
                }

        if(!product){
            return res.status(404).send({
                          message: "Product not found with id " + id
                         });
        }

        return res.send(product);
    });
}


