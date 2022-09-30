import axios from "axios";

export class PostService {
  static async getAll() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );

    return data;
  }
}
