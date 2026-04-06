import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a75d71e45f24d9a99662743233ed2e3",
  },
});
