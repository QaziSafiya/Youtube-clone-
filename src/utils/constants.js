const GOOGLE_API_KEY = "AIzaSyBq-RccqbVBQ_KwyxvFLuI1CpGxQ4Qxogo";

export const YOUTUBE_VEDIOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
