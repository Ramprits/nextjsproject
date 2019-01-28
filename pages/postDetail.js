import React from "react";
import { withRouter } from "next/router";
import axios from "axios";
import Layout from "../components/layout";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    const postId = query.id;
    let portfolio = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      portfolio = response.data;
    } catch (error) {}
    return { portfolio };
  }
  render() {
    const { portfolio } = this.props;
    return (
      <Layout>
        {portfolio.title}
        <p>{portfolio.body}</p>
      </Layout>
    );
  }
}

export default withRouter(Portfolio);
