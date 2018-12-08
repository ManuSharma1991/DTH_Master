export class Constants {
  public static get BASE_URL(): string {
    return 'http://localhost:';
  }
  public static get PORT(): number {
    return 3000;
  }

  // Operator CRUD operations

  public static get BASE_OPERATOR_URL(): string {
    return '/operators';
  }
  public static get GET_OPERATOR_URL(): string {
    return '/viewalloperators';
  }
  public static get POST_OPERATOR_URL(): string {
    return '/registeroperator';
  }
  public static get UPDATE_OPERATOR_URL(): string {
    return '/updateoperator/';
  }
  public static get DELETE_OPERATOR_URL(): string {
    return '/deleteoperator/';
  }
  public static get GETONE_OPERATOR_URL(): string {
    return '/getoperatorbyid/';
  }

  // Customer CRUD operations

  public static get BASE_CUSTOMER_URL(): string {
    return '/customers';
  }
  public static get GET_CUSTOMER_URL(): string {
    return '/viewallcustomers';
  }
  public static get POST_CUSTOMER_URL(): string {
    return '/registercustomer';
  }
  public static get UPDATE_CUSTOMER_URL(): string {
    return '/updatecustomer/';
  }
  public static get DELETE_CUSTOMER_URL(): string {
    return '/deletecustomer/';
  }
  public static get GETONE_CUSTOMER_URL(): string {
    return '/getcustomerbyid/';
  }

  // Retailer CRUD operations

  public static get BASE_RETAILER_URL(): string {
    return '/retailers';
  }
  public static get GET_RETAILER_URL(): string {
    return '/viewallretailers';
  }
  public static get POST_RETAILER_URL(): string {
    return '/registerretailer';
  }
  public static get UPDATE_RETAILER_URL(): string {
    return '/updateretailer/';
  }
  public static get DELETE_RETAILER_URL(): string {
    return '/deleteretailer/';
  }
  public static get GETONE_RETAILER_URL(): string {
    return '/getretailerbyid/';
  }

  // Distributor CRUD operations

  public static get BASE_DISTRIBUTOR_URL(): string {
    return '/distributors';
  }
  public static get GET_DISTRIBUTOR_URL(): string {
    return '/viewalldistributors';
  }
  public static get POST_DISTRIBUTOR_URL(): string {
    return '/registerdistributor';
  }
  public static get UPDATE_DISTRIBUTOR_URL(): string {
    return '/updatedistributor/';
  }
  public static get DELETE_DISTRIBUTOR_URL(): string {
    return '/deletedistributor/';
  }
  public static get GETONE_DISTRIBUTOR_URL(): string {
    return '/getdistributorbyid/';
  }

  // Channel CRUD operations

  public static get BASE_CHANNEL_URL(): string {
    return '/channels';
  }
  public static get GET_CHANNEL_URL(): string {
    return '/viewallchannels';
  }
  public static get GET_CHANNELCATEGORIES_URL(): string {
    return '/viewallchannelcategories';
  }
  public static get POST_CHANNEL_URL(): string {
    return '/registerchannel';
  }
  public static get UPDATE_CHANNEL_URL(): string {
    return '/updatechannel';
  }
  public static get DELETE_CHANNEL_URL(): string {
    return '/deletechannel/';
  }
  public static get GETONE_CHANNEL_URL(): string {
    return '/getchannelbyid/';
  }

  // Settopbox crud Operations

  public static get BASE_SETTOPBOX_URL(): string {
    return '/settopboxs';
  }
  public static get GET_SETTOPBOX_URL(): string {
    return '/viewallsettopboxs';
  }
  public static get POST_SETTOPBOX_URL(): string {
    return '/registersettopbox';
  }
  public static get UPDATE_SETTOPBOX_URL(): string {
    return '/updatesettopbox/';
  }
  public static get DELETE_SETTOPBOX_URL(): string {
    return '/deletesettopbox/';
  }
  public static get GETONE_SETTOPBOX_URL(): string {
    return '/getsettopboxbyid/';
  }

  // Video crud Operations

  public static get BASE_VIDEO_URL(): string {
    return '/videos';
  }
  public static get GET_VIDEO_URL(): string {
    return '/viewallvideos';
  }
  public static get POST_VIDEO_URL(): string {
    return '/registervideo';
  }
  public static get UPDATE_VIDEO_URL(): string {
    return '/updatevideo/';
  }
  public static get DELETE_VIDEO_URL(): string {
    return '/deletevideo/';
  }
  public static get GETONE_VIDEO_URL(): string {
    return '/getvideobyid/';
  }

  // Package crud Operations

  public static get BASE_PACKAGE_URL(): string {
    return '/channelpackages';
  }
  public static get GET_PACKAGE_URL(): string {
    return '/viewallchannelpackages';
  }
  public static get POST_PACKAGE_URL(): string {
    return '/registerchannelpackage';
  }
  public static get UPDATE_PACKAGE_URL(): string {
    return '/updatechannelpackage/';
  }
  public static get DELETE_PACKAGE_URL(): string {
    return '/deletechannelpackage/';
  }
  public static get GETONE_PACKAGE_URL(): string {
    return '/getchannelpackagebyid/';
  }
}
