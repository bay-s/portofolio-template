 
export const GET_SITE_INFO = `
query MyQuery {
    _site {
      globalSeo {
        siteName
        titleSuffix
      }
      favicon {
        url
      }
      faviconMetaTags {
        content
        tag
        attributes
      }
    }
  }
`