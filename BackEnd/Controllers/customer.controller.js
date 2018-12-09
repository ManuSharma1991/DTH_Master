const Customer = require( '../Models/customer.model.js' );

// Create and Save a new customer
exports.create = ( req, res ) => {

    // Create a Customer
    const customer = new Customer( {
        firstname: req.body.firstname,
        lastname: req.body.lastname,

        eamilid: req.body.emailid,
        phonenumber: req.body.phonenumber,

        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,

        operatorName: req.body.operatorname || 'unassigned',
        retailerName: req.body.retailername || 'unassigned',

        customerID: req.body.customerID,
    } );

    // Save customer in the database
    customer.save()
        .then( data => {
            res.send( data );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while creating the Customer."
            } );
        } );
};

// Retrieve and return all customers from the database.
exports.findAll = ( req, res ) => {
    Customer.find()
        .then( customers => {
            res.send( customers );
        } ).catch( err => {
            res.status( 500 ).send( {
                message: err.message || "Some error occurred while retrieving customers."
            } );
        } );
};

// Find a single customer with a customerid
exports.findOne = ( req, res ) => {
    console.log( 'line 51 ' + req.params.customerid )

    Customer.findOne( {
            customerID: req.params.customerid
        } )
        .then( customer => {
            if ( !customer ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id" + req.params.customerid
                } );
            }
            res.send( customer );
        } ).catch( err => {
            console.log( err );
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id " + req.params.customerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error retrieving customer with id " + req.params.customerid
            } );
        } );
};

// Update a customer identified by the customerid in the request
exports.update = ( req, res ) => {

    // Find customer and update it with the request body
    Customer.findOneAndUpdate( {
            customerID: req.params.customerid
        }, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,

            eamilid: req.body.emailid,
            phonenumber: req.body.phonenumber,

            addressline1: req.body.addressline1,
            addressline2: req.body.addressline2,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,

            operatorName: req.body.operatorname,
            retailerName: req.body.retailername
        }, {
            new: true
        } )
        .then( customer => {
            if ( !customer ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id " + req.params.customerid
                } );
            }
            res.send( customer );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id " + req.params.customerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Error updating customer with id " + req.params.customerid
            } );
        } );
};

// Delete a customer with the specified customerid in the request
exports.delete = ( req, res ) => {
    Customer.findOneAndDelete( {
            customerID: req.params.customerid
        } )
        .then( customer => {
            if ( !customer ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id " + req.params.customerid
                } );
            }
            res.send( {
                message: "Customer deleted successfully!"
            } );
        } ).catch( err => {
            if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
                return res.status( 404 ).send( {
                    message: "Customer not found with id " + req.params.customerid
                } );
            }
            return res.status( 500 ).send( {
                message: "Could not delete customer with id " + req.params.customerid
            } );
        } );
};