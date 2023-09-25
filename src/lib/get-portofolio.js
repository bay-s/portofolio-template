

export const GET_PORTOFOLIO = `
query MyQuery {
    allPortofolios {
      title
      thumbnail {
        url
      }
      description(markdown: false)
      demoUrl
      id
      _createdAt
    }
  }
`