
export const GET_ABOUT = `
query MyQuery {
  about {
    description(markdown: false)
    id
    hobby(markdown: false)
    bio(markdown: false)
  }
}
`