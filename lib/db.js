import mongoose from 'mongoose';

export async function connectDB () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
    
        console.log(`MongoDB Connected: ${conn.connection.host}`)
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
}

