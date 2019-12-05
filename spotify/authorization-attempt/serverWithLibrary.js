const qs = require("query-string");
const express = require("express");
const axios = require("axios");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const app = express();
app.use(express.json());

const scope = "user-read-private user-read-email";
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const spotifyApi = new SpotifyWebApi({
	client_id,
	client_secret,
	redirect_uri
});

spotifyApi.setAccessToken(
	"BQCVActBu5TMLarY9Do8VuxqcoWQJ39Gqg7R8uoIip-MFLW4qtwE8Ap0Zz6RZclxVjYcNLrtDo1_67bHuT34hdq2AARX3U9CPsZ-iLPV61EGhvXkZrDTJSOjhj8x-D_OxJA-aEE-e7_WZwxZKYd7weXZWwV_LyiQAA"
);

spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
	function(data) {
		console.log("Artist albums", data.body);
	},
	function(err) {
		console.error(err);
	}
);

const port = process.env.PORT || 5500;

app.listen(port, () => console.info(`Server running on port ${port}`));
