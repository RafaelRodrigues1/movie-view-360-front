export const enviroment = {
  production: false,
  endPoints: {
    user: {
      path: 'localhost:8080',
      context: 'user',
      protocol: 'http'
    },

    movie: {
      path: 'localhost:8080',
      context: 'movie',
      protocol: 'http'
    }
  }
}
