const Schema = mongoose.Schema;
const ListingSchema = new Schema({
  listingID: {
    type: Number,
    required: true
  },
  listingType: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  userID: {
    type: Number,
    required: true
  },
  ID: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  favorites: {
    type: Number,
    required: true
  },
  everbee: {
    viewCount: {
      type: Number,
      required: true
    },
    conversionRate: {
      type: Number,
      required: true
    },
    visibilityScore: {
      type: Number,
      required: true
    },
    tagsAnalysis: {
      type: Array,
      required: false
    }
  },
  title: {
    type: String,
    required: true
  },
  titleCharCount: {
    type: Number,
    required: true
  },
  isCustomizeable: {
    type: Boolean,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  tagsUsed: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  estMonthlyRevenue: {
    type: Number,
    required: true
  },
  estMonthlySales: {
    type: Number,
    required: true
  },
  estTotalSales: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
  },

  approach: {
    type: String,
    required: true
  },
  cachedConversionRate: {
    type: String,
    required: true
  },
  cachedDataUpdatedAt: {
    type: String,
    required: true
  },
  cachedDescriptionCharCount: {
    type: Number,
    required: true
  },
  cachedEstMonthlyRevenue: {
    type: Number,
    required: true
  },
  cachedEstMonthlySales: {
    type: Number,
    required: true
  },
  cachedEstReviews: {
    type: Number,
    required: true
  },
  cachedEstMonthlyReviews: {
    type: Number,
    required: true
  },
  cachedEstTotalSales: {
    type: Number,
    required: true
  },
  cachedListingAgeInMonths: {
    type: Number,
    required: true
  },
  cachedTagsUsed: {
    type: Number,
    required: true
  },
  cachedTitleCharCount: {
    type: Number,
    required: true
  },
  cachedVisibilityScore: {
    type: Number,
    required: true
  },
  categoryID: {
    type: Number,
    required: false
  },
  createdAt: {
    type: String,
    required: true
  },
  createdAtTsz: {
    type: Number,
    required: true
  },
  currencySymbol: {
    type: String,
    required: true
  },
  endingTsz: {
    type: Number,
    required: true
  },
  estMonthlyRevenue: {
    type: Number,
    required: true
  },
  estMonthlySales: {
    type: Number,
    required: true
  },
  estReviews: {
    type: Number,
    required: true
  },
  estMonthlyReviews: {
    type: Number,
    required: true
  },
  estTotalSales: {
    type: Number,
    required: true
  },
  featuredRank: {
    type: String,
    required: true
  },
  hasVariations: {
    type: Boolean,
    required: true
  },
  isFav: {
    type: Boolean,
    required: true
  },
  isPersonalizable: {
    type: Boolean,
    required: true
  },
  isSupply: {
    type: Boolean,
    required: true
  },
  lastModifiedListingDate: {
    type: String,
    required: true
  },
  lastModifiedTimestamp: {
    type: Number,
    required: true
  },
  lastModifiedTsz: {
    type: Number,
    required: true
  },
  listingAgeInMonths: {
    type: Number,
    required: true
  },
  reviewAverage: {
    type: Number,
    required: false
  },
  reviewRequired: {
    type: Boolean,
    required: true
  },
  shippingTemplateID: {
    type: Number,
    required: false
  },
  shopID: {
    type: Number,
    required: true
  },
  shopSectionID: {
    type: Number,
    required: true
  },
  shouldAutoRenew: {
    type: Boolean,
    required: true
  },
  SKU: {
    type: String,
    required: true
  },
  snoozeTill: {
    type: String,
    required: false
  },
  snoozed: {
    type: String,
    required: false
  },
  stateTsz: {
    type: Number,
    required: false
  },
  mainCategory: {
    type: String,
    required: false
  },
  subCategory: {
    type: String,
    required: false
  },
  materials: {
    type: String,
    required: true
  },
  originalCreationTsz: {
    type: Number,
    required: true
  },
  processingMin: {
    type: Number,
    required: false
  },
  taxonomyID: {
    type: Number,
    required: true
  },
  taxonomyPath: {
    type: Array,
    required: true
  },
  trademarkRescan: {
    type: String,
    required: false
  },
  trademarkScanned: {
    type: String,
    required: false
  },
  updtatedAt: {
    type: String,
    required: true
  },
  whenMade: {
    type: String,
    required: true
  },
  whoMade: {
    type: String,
    required: true
  },
  Images: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', ListingSchema);
