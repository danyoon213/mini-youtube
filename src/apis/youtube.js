import axios from "axios";

const KEY = "AIzaSyD2oIDg1_yqntLs1A7q9SAk5ZGn_Snsrnc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 12,
    key: KEY,
  },
});
