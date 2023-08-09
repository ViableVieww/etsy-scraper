# etsy-scraper

## Requirements

- Node.js (version)
- npm (version)
- MongoDB (version)

## Installation

1. Clone this repository
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Run locally `npm run dev`

## Configuration

Before running the script, you need to set up the following environment variables which can be found on `.env.example` file.

Steps:
1. Create a new file `.env` on your local
2. Copy the contents of `.env.example -> .env`
- `MONGO_URI`: MongoDB connection URI
- `NODE_ENV`: Development or Production
- `PORT`: Application port
