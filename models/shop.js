import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShopSchema = new Schema({
  activeListingCount: {
    type: String,
    required: true,
  },
  shopID: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  digitalListingCount: {
    type: Number,
    required: true,
  },
  reveiewCount: {
    type: Number,
    required: false,
  },
  totalSales: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  everbeeShopID: {
    type: String,
    required: true,
  },
  averageReview: {
    type: Number,
    required: false,
  },
  favorites: {
    type: Number,
    required: false,
  }
});

export default mongoose.model('Shop', ShopSchema);



// "listing_type": "download", //
