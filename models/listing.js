import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ListingSchema = new Schema({
  listingID: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  everbee: {
    favorites: {
        type: Number,
        required: true,
    },
    viewCount: {
        type: Number,
        required: true,
    },
    tagsUsed: {
        type: String,
        required: false,
    },
    conversionRate: {
        type: Number,
        required: true,
    },
    visibilityScore: {
        type: Number,
        required: true,
    },
    totalSales: {
        type: Number,
        required: true,
    },
    monthlyRev: {
        type: Number,
        required: true,
    },
    monthlySales: {
        type: Number,
        required: true,
    },
    monthlyReviews: {
        type: Number,
        required: false,
    },
    tagsAnalysis: {
        type: Array,
        required: false
    }
  },
  erank: {
    converted: {
        type: Boolean,
        required: true,
    },
    dailyViews: {
        type: Number,
        required: true,
    },
    hearts: {
        type: Number,
        required: true,
    },
    listingAge: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    totalViews: {
      type: String,
      required: true,
    }
  },
  title: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
  },
});

export default mongoose.model('Listing', ListingSchema);



// "listing_type": "download", //
