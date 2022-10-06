import axios from "axios";

export class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );

    return response;
  }
}
