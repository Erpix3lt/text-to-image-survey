export const load = async ({ fetch }) => {
    const response = await fetch(`/api/intro`)
    const posts = await response.json()
  
    return {
      posts
    }
  }