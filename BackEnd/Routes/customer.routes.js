module.exports = ( app ) => {
    const customers = require( '../Controllers/customer.controller.js' );

    // Create a new customer
    app.post( '/customers/registercustomer', customers.create );

    // Retrieve all customers
    app.get( '/customers/viewallcustomers', customers.findAll );

    // Retrieve a single customer with customerId
    app.get( '/customers/getcustomerbyid/:customerId', customers.findOne );

    // Update a customer with customerId
    app.put( '/customers/updatecustomer', customers.update );

    // Delete a customer with customerId
    app.delete( '/customers/deletecustomer/:customerId', customers.delete );
}