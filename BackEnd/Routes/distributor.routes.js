module.exports = ( app ) => {
    const distributors = require( '../Controllers/distributor.controller.js' );

    // Create a new distributor
    app.post( '/distributors/registerdistributor', distributors.create );

    // Retrieve all distributors
    app.get( '/distributors/viewalldistributors', distributors.findAll );

    // Retrieve a single distributor with distributorId
    app.get( '/distributors/getdistributorbyid/:distributorId', distributors.findOne );

    // Update a distributor with distributorId
    app.put( '/distributors/updatedistributor', distributors.update );

    // Delete a distributor with distributorId
    app.delete( '/distributors/deletedistributor/:distributorId', distributors.delete );
}