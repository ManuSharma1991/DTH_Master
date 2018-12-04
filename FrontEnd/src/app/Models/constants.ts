export class Constants {

    public static get BASE_URL(): string { return 'http://localhost:'; }
    public static get PORT(): number { return 3000; }

    // Operator CRUD operations

    public static get BASE_OPERATOR_URL(): string { return '/operators'; }
    public static get GET_OPERATOR_URL(): string { return '/viewalloperators'; }
    public static get POST_OPERATOR_URL(): string { return '/registeroperator'; }
    public static get UPDATE_OPERATOR_URL(): string { return '/updateoperator/'; }
    public static get DELETE_OPERATOR_URL(): string { return '/deleteoperator/'; }
    public static get GETONE_OPERATOR_URL(): string { return '/getoperatorbyid/'; }

    // Customer CRUD operations

    public static get BASE_CUSTOMER_URL(): string { return '/customers'; }
    public static get GET_CUSTOMER_URL(): string { return '/viewallcustomers'; }
    public static get POST_CUSTOMER_URL(): string { return '/registercustomer'; }
    public static get UPDATE_CUSTOMER_URL(): string { return '/updatecustomer/'; }
    public static get DELETE_CUSTOMER_URL(): string { return '/deletecustomer/'; }
    public static get GETONE_CUSTOMER_URL(): string { return '/getcustomerbyid/'; }

    // Retailer CRUD operations

    public static get BASE_RETAILER_URL(): string { return '/retailers'; }
    public static get GET_RETAILER_URL(): string { return '/viewallretailers'; }
    public static get POST_RETAILER_URL(): string { return '/registerretailer'; }
    public static get UPDATE_RETAILER_URL(): string { return '/updateretailer/'; }
    public static get DELETE_RETAILER_URL(): string { return '/deleteretailer/'; }
    public static get GETONE_RETAILER_URL(): string { return '/getretailerbyid/'; }

    // Distributor CRUD operations

    public static get BASE_DISTRIBUTOR_URL(): string { return '/distributors'; }
    public static get GET_DISTRIBUTOR_URL(): string { return '/viewalldistributors'; }
    public static get POST_DISTRIBUTOR_URL(): string { return '/registerdistributor'; }
    public static get UPDATE_DISTRIBUTOR_URL(): string { return '/updatedistributor/'; }
    public static get DELETE_DISTRIBUTOR_URL(): string { return '/deletedistributor/'; }
    public static get GETONE_DISTRIBUTOR_URL(): string { return '/getdistributorbyid/'; }




}
