var jsforce = require('jsforce');
var conn = new jsforce.Connection();
conn.login('username@domain.com', 'password', function(err, res) {
  if (err) { return console.error(err); }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});


    // client_id is the Consumer Key
    // client_secret is the Consumer Secret
    // redirect_uri is the Callback URL. 

    // From your Java or other client application, make a request to the appropriate Salesforce token request endpoint that passes in grant_type, client_id, client_secret, and redirect_uri. The redirect_uri is the URI that Salesforce sends a callback to.

 //    initParams = { 
 //    @WebInitParam(name = "clientId", value = 
 //            "3MVG9lKcPoNINVBJSoQsNCD.HHDdbugPsNXwwyFbgb47KWa_PTv"),
 //    @WebInitParam(name = "clientSecret", value = "5678471853609579508"),
 //    @WebInitParam(name = "redirectUri", value = 
 //            "https://localhost:8443/RestTest/oauth/_callback"),
 //    @WebInitParam(name = "environment", value = 
 //            "https://na1.salesforce.com/services/oauth2/token")  }
 
	// HttpClient httpclient = new HttpClient();
	// PostMethod post = new PostMethod(environment);
	// post.addParameter("code",code);
	// post.addParameter("grant_type","authorization_code");

	//    /** For session ID instead of OAuth 2.0, use "grant_type", "password" **/
	// post.addParameter("client_id",clientId);
	// post.addParameter("client_secret",clientSecret);
	// post.addParameter("redirect_uri",redirectUri);

	// If the value of client_id (or consumer key) and client_secret (or consumer secret) are valid, Salesforce sends a callback to the URI specified in redirect_uri that contains a value for access_token.

	// Store the access token value as a cookie to use in all subsequent requests. For example:

	//exception handling removed for brevity...
  	//this is the post from step 2   
  	  
  	// httpclient.executeMethod(post);
   //  String responseBody = post.getResponseBodyAsString();
   
  	// String accessToken = null;
  	// JSONObject json = null;
   // 	try {
   //     json = new JSONObject(responseBody);
   //       accessToken = json.getString("access_token");
   //       issuedAt = json.getString("issued_at");
   //       /** Use this to validate session 
   //        * instead of expiring on browser close.
   //        */
                                
   //       } catch (JSONException e) {
   //          e.printStackTrace();
   //       }
 
         // HttpServletResponse httpResponse = (HttpServletResponse)response;
         //  Cookie session = new Cookie(ACCESS_TOKEN, accessToken);
         // session.setMaxAge(-1); //cookie not persistent, destroyed on browser exit
         // httpResponse.addCookie(session);