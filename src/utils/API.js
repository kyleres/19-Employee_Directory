import axios from "axios";

export default {
  search: async function() {
    return await axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
