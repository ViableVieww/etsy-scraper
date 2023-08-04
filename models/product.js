const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
  },
});

module.exports = mongoose.model('Book', ProductSchema);



{
    "listing": {
        "approach": "b",
        "listing_id": 1262909389,
        "state": "active",
        "user_id": 300157144,
        "title": "ATS Resume Template Word, Pages, Google Docs, ATS Friendly Resume Template, Ats CV Resume, Simple Resume, Modern Resume, Basic Resume",
        "quantity": 877,
        "shop_section_id": "29398119",
        "featured_rank": "-1",
        "url": "https://www.etsy.com/listing/1262909389/ats-resume-template-word-pages-google",
        "views": 3219,
        "num_favorers": 104,
        "processing_min": null,
        "who_made": "i_did",
        "is_supply": false,
        "when_made": "2020_2023",
        "language": "en-US",
        "taxonomy_id": "1876",
        "should_auto_renew": true,
        "is_customizable": false,
        "is_personalizable": false,
        "has_variations": false,
        "last_modified_timestamp": 1689034761,
        "listing_type": "download",
        "creation_tsz": 1689034761,
        "ending_tsz": 1699665561,
        "original_creation_tsz": 1657020716,
        "last_modified_tsz": 1689034761,
        "currency_code": "USD",
        "price": "8",
        "Images": "https://i.etsystatic.com/23167791/r/il/2812c3/4037155441/il_170x135.4037155441_kho6.jpg",
        "tags": [
            "ats resume template",
            "ats friendly resume",
            "ats resume",
            "resume template",
            "ats cv template",
            "cv resume template",
            "simple resume",
            "modern resume",
            "basic resume",
            "resume template word",
            "cv template word",
            "cv template",
            "resume google docs"
        ],
        "sku": "",
        "materials": "ATS Resume Template, Google Docs, Word, Pages",
        "taxonomy_path": [],
        "sub_category": "Résumé Templates",
        "main_category": "Paper \u0026 Party Supplies",
        "created_at": "2023-07-11T00:19:21.000Z",
        "updated_at": "2023-07-11T00:19:21.000Z",
        "id": "c582b023-5df7-4b8b-a79d-843ab96130e5",
        "category_id": null,
        "state_tsz": null,
        "shipping_template_id": null,
        "shop_id": "bda08d0a-efdd-48c3-9861-7f55dba1e958",
        "review_average": null,
        "cached_est_reviews": 7,
        "cached_est_reviews_in_months": 0,
        "cached_est_total_sales": 77,
        "cached_est_mo_sales": 0,
        "cached_est_mo_revenue": 0,
        "cached_tags_used": 13,
        "cached_description_character_count": 2503,
        "cached_title_character_count": 133,
        "cached_listing_age_in_months": 12,
        "cached_data_updated_at": "2023-07-10T15:18:13.633Z",
        "review_required": false,
        "cached_visibility_score": 51,
        "cached_conversion_rate": "3.75",
        "snooze_till": null,
        "snoozed": null,
        "trademark_scanned": null,
        "trademark_rescan": null,
        "listing_age_in_months": 12,
        "est_reviews": 7,
        "est_reviews_in_months": 0,
        "est_total_sales": 77,
        "est_mo_sales": 0,
        "est_mo_revenue": 0,
        "is_fav": false,
        "tags_used": 13,
        "title_character_count": 133,
        "curreny_symbol": "$",
        "visibility_score": 69,
        "conversion_rate": 2.39,
        "last_modified_listing_date": "2023-07-11",
        "Shop": {
            "shop_id": 23167791,
            "shop_name": "CoResume",
            "title": "Professional Resume Templates - Word, Pages, GoogleDocs",
            "transaction_sold_count": 40043,
            "review_average": 4,
            "review_count": 3641,
            "listing_active_count": 61,
            "url": "https://www.etsy.com/shop/CoResume",
            "image_url_760x100": null,
            "icon_url_fullxfull": "https://i.etsystatic.com/isla/1a5f01/42649327/isla_fullxfull.42649327_64gc8zzy.jpg?version=0",
            "num_favorers": 2537,
            "shop_location_country_iso": null,
            "created_timestamp": 1589879799,
            "digital_listing_count": 61,
            "shipping_from_country_iso": "RO",
            "currency_code": "USD",
            "shop_age_month": 38,
            "id": "bda08d0a-efdd-48c3-9861-7f55dba1e958",
            "created_at": "2022-09-23T11:36:43.946Z",
            "updated_at": "2023-07-11T03:54:31.772Z",
            "user_id": null,
            "shop_receipts_count": 0,
            "sales_channel_id": null,
            "is_shops_listing_analyzed": true,
            "is_shops_getting_analyzed": false
        }
    },
    "listing_analytics_trend": [],
    "tags_analysis": [
        {
            "id": "2e0c90b1-e5cb-4421-b83e-b8ac145d7a62",
            "keyword": "ats cv template",
            "vol": 206,
            "cpc": null,
            "competition": 5573.0,
            "created_at": "2023-05-23T14:41:45.548Z",
            "updated_at": "2023-05-30T10:36:55.659Z",
            "new_volume": 206,
            "score": "0.04",
            "trend": []
        },
        {
            "id": "e6fb4f54-b9b3-4103-bac1-31b739545691",
            "keyword": "ats friendly resume",
            "vol": 256,
            "cpc": null,
            "competition": 4919.0,
            "created_at": "2023-05-26T20:46:56.195Z",
            "updated_at": "2023-05-30T09:53:37.648Z",
            "new_volume": 256,
            "score": "0.05",
            "trend": []
        },
        {
            "id": "e21fe305-b4a3-4686-bfd9-909a30e46a47",
            "keyword": "ats resume",
            "vol": 292,
            "cpc": null,
            "competition": 6888.0,
            "created_at": "2023-05-26T10:26:24.335Z",
            "updated_at": "2023-05-30T09:35:09.085Z",
            "new_volume": 292,
            "score": "0.04",
            "trend": []
        },
        {
            "id": "4c755b36-1b4f-4604-b870-9750131a3daf",
            "keyword": "ats resume template",
            "vol": 286,
            "cpc": null,
            "competition": 6872.0,
            "created_at": "2023-05-26T10:42:53.497Z",
            "updated_at": "2023-05-30T11:58:50.305Z",
            "new_volume": 286,
            "score": "0.04",
            "trend": []
        },
        {
            "id": "ca26a43f-38c7-4464-b8ac-b220c8347152",
            "keyword": "basic resume",
            "vol": 118,
            "cpc": null,
            "competition": 1244.0,
            "created_at": "2023-05-27T02:53:57.656Z",
            "updated_at": "2023-05-29T19:50:11.088Z",
            "new_volume": 118,
            "score": "0.1",
            "trend": []
        },
        {
            "id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
            "keyword": "cv resume template",
            "vol": 1012,
            "cpc": "1.06",
            "competition": 24228.0,
            "created_at": "2022-12-09T14:05:35.303Z",
            "updated_at": "2023-06-28T21:13:47.034Z",
            "new_volume": 1012,
            "score": "0.04",
            "trend": [
                {
                    "id": "721e99df-5bad-4f12-9bb7-68aebd2482ac",
                    "month": "December",
                    "year": 2021,
                    "value": 4400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "64958f3b-681e-4936-b18d-1a53c82ba6ad",
                    "month": "January",
                    "year": 2022,
                    "value": 4400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "52c6f334-7517-46fe-bca7-bcde4ed0b27e",
                    "month": "February",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "04f3b390-f16e-436c-8698-f79190e0cf3e",
                    "month": "March",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "035723b3-21d6-4338-8ec3-ffec7cd53540",
                    "month": "April",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "1a5617d8-7985-438f-8f27-5eab596f0753",
                    "month": "May",
                    "year": 2022,
                    "value": 4400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "574b554d-21c6-4f59-8cab-d2a3e06d5b40",
                    "month": "June",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "aff03eb6-ddcd-4cd7-953f-f31c25b03889",
                    "month": "July",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "7a0f5de1-fce7-4ef4-9052-de90e868ce8f",
                    "month": "August",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "d71b3ef8-826f-401e-9d38-f9df04bea1a3",
                    "month": "September",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "c688e19a-0354-4260-bdf0-af841399c274",
                    "month": "October",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                },
                {
                    "id": "71ef5f44-83fa-4c6b-94f8-2cf3cb51dc43",
                    "month": "November",
                    "year": 2022,
                    "value": 5400,
                    "keyword_analytic_id": "913bd16b-2e9f-42b3-9fd8-fac0f90188e7",
                    "created_at": "2022-12-09T14:05:35.315Z",
                    "updated_at": "2022-12-09T14:05:35.315Z"
                }
            ]
        },
        {
            "id": "96da6f24-977b-480d-822f-f1107ba8fc85",
            "keyword": "cv template",
            "vol": 955,
            "cpc": null,
            "competition": 30085.0,
            "created_at": "2023-07-04T10:20:57.139Z",
            "updated_at": "2023-07-04T10:20:59.314Z",
            "new_volume": 955,
            "score": "0.0",
            "trend": []
        },
        {
            "id": "37fb68b5-214a-4678-9865-cf44a17c416d",
            "keyword": "cv template word",
            "vol": 1071,
            "cpc": "0.79",
            "competition": 17819.0,
            "created_at": "2022-10-06T12:58:32.949Z",
            "updated_at": "2023-06-28T21:04:41.678Z",
            "new_volume": 1071,
            "score": "0.06",
            "trend": [
                {
                    "id": "88539d6c-5754-4646-b274-f690e9de6a2a",
                    "month": "October",
                    "year": 2021,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.084Z",
                    "updated_at": "2022-10-06T12:58:33.084Z"
                },
                {
                    "id": "56d93b07-d435-4e50-8179-d1e438eec1bd",
                    "month": "November",
                    "year": 2021,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.087Z",
                    "updated_at": "2022-10-06T12:58:33.087Z"
                },
                {
                    "id": "4481e259-2860-4524-94f0-ebdeff1d1c1e",
                    "month": "December",
                    "year": 2021,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.091Z",
                    "updated_at": "2022-10-06T12:58:33.091Z"
                },
                {
                    "id": "de83bcd4-0b6f-4822-969e-654d67cb104d",
                    "month": "January",
                    "year": 2022,
                    "value": 90500,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.094Z",
                    "updated_at": "2022-10-06T12:58:33.094Z"
                },
                {
                    "id": "23775c11-c43b-4e80-9bb4-24575cef6842",
                    "month": "February",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.098Z",
                    "updated_at": "2022-10-06T12:58:33.098Z"
                },
                {
                    "id": "a490c709-fe7c-4b15-9576-6dd9595920e3",
                    "month": "March",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.101Z",
                    "updated_at": "2022-10-06T12:58:33.101Z"
                },
                {
                    "id": "b80e2537-f92f-4b65-be2a-7896055fb2ae",
                    "month": "April",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.110Z",
                    "updated_at": "2022-10-06T12:58:33.110Z"
                },
                {
                    "id": "09e29b2b-e6ce-4e5e-8d5f-74d37aeab030",
                    "month": "May",
                    "year": 2022,
                    "value": 90500,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.113Z",
                    "updated_at": "2022-10-06T12:58:33.113Z"
                },
                {
                    "id": "928f69de-5c3a-4b67-b7cf-29d9ca154a2f",
                    "month": "June",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.117Z",
                    "updated_at": "2022-10-06T12:58:33.117Z"
                },
                {
                    "id": "08f94731-c83b-446a-b557-cffbff576dc9",
                    "month": "July",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.120Z",
                    "updated_at": "2022-10-06T12:58:33.120Z"
                },
                {
                    "id": "4c784a8a-23c0-4408-916c-c455e4be2233",
                    "month": "August",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.124Z",
                    "updated_at": "2022-10-06T12:58:33.124Z"
                },
                {
                    "id": "1c989b13-fe53-4a75-9448-06cb6ff5924f",
                    "month": "September",
                    "year": 2022,
                    "value": 110000,
                    "keyword_analytic_id": "37fb68b5-214a-4678-9865-cf44a17c416d",
                    "created_at": "2022-10-06T12:58:33.127Z",
                    "updated_at": "2022-10-06T12:58:33.127Z"
                }
            ]
        },
        {
            "id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
            "keyword": "modern resume",
            "vol": 962,
            "cpc": "0.23",
            "competition": 19180.0,
            "created_at": "2022-11-01T19:06:40.295Z",
            "updated_at": "2023-06-28T21:06:45.014Z",
            "new_volume": 962,
            "score": "0.05",
            "trend": [
                {
                    "id": "95a8e0b3-62f2-4289-9da9-b69e471f8c82",
                    "month": "November",
                    "year": 2021,
                    "value": 8100,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "447bf7a3-018e-48da-8df5-9f6bb703539b",
                    "month": "December",
                    "year": 2021,
                    "value": 8100,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "fae09417-84d6-4409-a6b8-4988c160d192",
                    "month": "January",
                    "year": 2022,
                    "value": 6600,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "f8739fee-24eb-4bf2-a2f8-c9b94bd4bcc2",
                    "month": "February",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "71f96212-b059-4f62-b6af-acfb77cb8e32",
                    "month": "March",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "df9c8318-a9f0-4fb3-8b83-07e653680a60",
                    "month": "April",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "fb0d6bc4-bf7c-4c99-a1dc-459ace799837",
                    "month": "May",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "dc09e944-fc21-430c-bbd9-e64a4c165cba",
                    "month": "June",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "9c393527-ef2a-4332-89a0-f6b2f1f4bfde",
                    "month": "July",
                    "year": 2022,
                    "value": 8100,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "68d4f330-1f58-47f3-881f-2376c8d20c3c",
                    "month": "August",
                    "year": 2022,
                    "value": 8100,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "32d10805-cc82-4d2d-a952-a4834871e6b1",
                    "month": "September",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                },
                {
                    "id": "2cab76af-438d-431d-aa55-9e50f5daf642",
                    "month": "October",
                    "year": 2022,
                    "value": 9900,
                    "keyword_analytic_id": "4b3685da-5ae9-42af-bb51-5cee866e1282",
                    "created_at": "2022-11-01T19:06:40.327Z",
                    "updated_at": "2022-11-01T19:06:40.327Z"
                }
            ]
        },
        {
            "id": "a4a32752-86ab-4ef9-8aa6-2b24756e8fd1",
            "keyword": "resume google docs",
            "vol": 616,
            "cpc": null,
            "competition": 9170.0,
            "created_at": "2023-06-25T08:07:41.437Z",
            "updated_at": "2023-06-25T08:07:42.380Z",
            "new_volume": 616,
            "score": "0.0",
            "trend": []
        },
        {
            "id": "20c7352a-0993-41b5-973b-50039c6a0dc3",
            "keyword": "resume template",
            "vol": 1018,
            "cpc": null,
            "competition": 41213.0,
            "created_at": "2023-05-26T20:50:47.506Z",
            "updated_at": "2023-05-26T20:50:47.506Z",
            "new_volume": 1018,
            "score": "0.02",
            "trend": []
        },
        {
            "id": "902419af-0539-46e4-9f67-ffed4de9edeb",
            "keyword": "resume template word",
            "vol": 1077,
            "cpc": "0.11",
            "competition": 21361.0,
            "created_at": "2022-10-17T09:34:07.108Z",
            "updated_at": "2023-06-28T21:13:41.704Z",
            "new_volume": 1077,
            "score": "0.05",
            "trend": [
                {
                    "id": "c71f3267-c2c0-4f55-9789-f8ce09cdf541",
                    "month": "October",
                    "year": 2021,
                    "value": 60500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "589942ef-0041-48f7-9615-99643b2b4e90",
                    "month": "November",
                    "year": 2021,
                    "value": 60500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "ad3e08da-14c2-4dea-a6a7-672e4e5e1b80",
                    "month": "December",
                    "year": 2021,
                    "value": 49500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "89227c25-cbbb-420a-8158-9f44442945e6",
                    "month": "January",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "a532245e-2c01-4655-a58f-3bb3d06b0225",
                    "month": "February",
                    "year": 2022,
                    "value": 60500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "42242c0c-9c6e-4212-837f-7af4056a5b18",
                    "month": "March",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "e7cf5856-8f67-462a-9f44-ba0788ef2f23",
                    "month": "April",
                    "year": 2022,
                    "value": 60500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "1d35faa4-0824-489b-b943-7733b60fa55c",
                    "month": "May",
                    "year": 2022,
                    "value": 60500,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "a62cb50d-2296-4916-93a0-e99bd9116d17",
                    "month": "June",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "05ef8af8-5890-47a2-8617-f99ede39abd9",
                    "month": "July",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "b3c17e9b-6b0a-4cc9-851f-e7a8f39feb4b",
                    "month": "August",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                },
                {
                    "id": "7db23c80-1a38-4418-9a2d-a15aaa0e7584",
                    "month": "September",
                    "year": 2022,
                    "value": 74000,
                    "keyword_analytic_id": "902419af-0539-46e4-9f67-ffed4de9edeb",
                    "created_at": "2022-10-17T09:34:07.112Z",
                    "updated_at": "2022-10-17T09:34:07.112Z"
                }
            ]
        },
        {
            "id": "592d429f-ea5e-4a6f-8952-eb008dd27d24",
            "keyword": "simple resume",
            "vol": 525,
            "cpc": null,
            "competition": 10812.0,
            "created_at": "2023-07-04T11:17:31.107Z",
            "updated_at": "2023-07-04T11:17:33.530Z",
            "new_volume": 525,
            "score": "0.0",
            "trend": []
        }
    ],
    "shop": {
        "shop_id": 23167791,
        "shop_name": "CoResume",
        "title": "Professional Resume Templates - Word, Pages, GoogleDocs",
        "transaction_sold_count": 40043,
        "review_average": 4,
        "review_count": 3641,
        "listing_active_count": 61,
        "url": "https://www.etsy.com/shop/CoResume",
        "image_url_760x100": null,
        "icon_url_fullxfull": "https://i.etsystatic.com/isla/1a5f01/42649327/isla_fullxfull.42649327_64gc8zzy.jpg?version=0",
        "num_favorers": 2537,
        "shop_location_country_iso": null,
        "created_timestamp": 1589879799,
        "digital_listing_count": 61,
        "shipping_from_country_iso": "RO",
        "currency_code": "USD",
        "shop_age_month": 38,
        "id": "bda08d0a-efdd-48c3-9861-7f55dba1e958",
        "created_at": "2022-09-23T11:36:43.946Z",
        "updated_at": "2023-07-11T03:54:31.772Z",
        "user_id": null,
        "shop_receipts_count": 0,
        "sales_channel_id": null,
        "is_shops_listing_analyzed": true,
        "is_shops_getting_analyzed": false
    }
}