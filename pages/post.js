import React, { Component } from "react";
import { Link } from "../routes";
import Layout from "../components/layout";
import axios from "axios";
export default class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (error) {
      console.error(error);
    }
    return { posts };
  }

  renderPosts = posts => {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`/postDetail/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  };
  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <ul>{this.renderPosts(posts)}</ul>
      </Layout>
    );
  }
}
