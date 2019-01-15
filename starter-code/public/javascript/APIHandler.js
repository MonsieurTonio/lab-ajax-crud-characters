class APIHandler {
  constructor(baseUrl) {
    this.axios = axios.create({
      baseURL: baseUrl
    })
  }


  getFullList() {
    this.axios.get('/characters')
      .then(responseFromAPI => {
        console.log('Response from API is :', responseFromAPI.data)
      });
  }

  getOneRegister(id) {
    this.axios.get(`/characters/${id}`)
      .then(responseFromAPI => {
        console.log('Response from API is :', responseFromAPI.data)
      });
  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
