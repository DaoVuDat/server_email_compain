// prod.js - production key is here
module.exports = {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUSHLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
