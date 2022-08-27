# TwitterBot
Twitter API Authentication, AUTH URL, CALLBACK URL, Firestore database

Build apps How to act on behalf of user from another service.

You > Twitter User> Twitter API

/process payment through stripe connect for examp
API Authentication

Twittter developer portal - Twitter API - Create new Twittter App> 2 API Keys  It makes request to API that tells Twitter who you are and what you have access to.- Its only private [read only]

To get more - to get permission from user you have to go throuh OAuth 2.0.

1. Create AUTH URL from your server  - redirect user to Twitter where it grand access to app from the browser, once permisson granted

2. SAVE ACCESS TOKEN /CALLBACK - callback?code=xyz  T. will redirect it to different point in server(callback URL), needs to verified on server  - once verified then T. will give you access_token and refresh_token /needs to save them in database /firestore

3. MAKE REQUESTS - Use the requests token 



