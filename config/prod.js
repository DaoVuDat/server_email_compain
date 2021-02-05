// prod.js - production key is here
module.exports = {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: "mongodb+srv://daovudatprod:xGFAUcfnZtPu4EN4@emaily-prod.ebdp7.mongodb.net/emailydb?retryWrites=true&w=majority",
    cookieKey: process.env.COOKIE_KEY,
};
