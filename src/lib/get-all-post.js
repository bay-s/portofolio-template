
export const GET_ALL_POSTS = `
query MyQuery {
    allPosts {
      postTitle
      description {
        value
        blocks
      }
      _createdAt
      _seoMetaTags {
        tag
        attributes
        content
      }
      id
      featuredImage {
        url
   
      }
    }
  }
`
 