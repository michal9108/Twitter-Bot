const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const dbRef = admin.firestore().doc('tokens/demo');

const TwitterApi = require('twitter-api-v2').default;
const twitterClient = new TwitterApi({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET'
});

const callbackURL = 'http://127.0.0.1:5001/twitter-bot-e55ea/us-central1/callback';



exports.auth = functions.https.onRequest((request, response) => {});


const {url, codeVerifier, state} = twitterClient.generateOAuth2AuthLink(
    callbackURL,
    {scope: ['tweet.read','tweet.write','users.read',"offline.access"]}
);
//store verifier
await dbRef.set({codeVerifier, state});

response.redirect(url);

exports.callback = functions.https.onRequest((request, response) => {});
exports.tweet = functions.https.onRequest((request, response) => {});
