import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from 'src/components/Layout';
import { HomeLink, Title, SubTitle, Content } from './styled';
import './index.css';

class BlogPost extends React.Component {
  componentDidMount() {
    const anchorHeadings = Array.from(document.querySelectorAll('a.heading'));
    anchorHeadings.forEach((element) =>
      element.setAttribute('aria-hidden', 'true'),
    );
  }
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    return (
      <Layout>
        <div className="blog">
          <HomeLink>
            <Link to="/">Brian Han</Link>
          </HomeLink>
          <header>
            <Title>{post.frontmatter.title}</Title>
          </header>
          <SubTitle>{post.frontmatter.subtitle}</SubTitle>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
