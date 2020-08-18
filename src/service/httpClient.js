import axios from "axios"
import { server, apiUrl, NOT_CONNECT_NETWORK, NETWORK_CONNECTION_MESSAGE } from "./constants"

const isAbsoluteURLRegex = /^(?:\w+:)\/\//

axios.interceptors.request.use(async config => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    const userToken = localStorage.getItem(server.TOKEN_KEY)
    if (userToken) {
      config.headers = { "x-access-token": userToken }
    }
    config.url = apiUrl + "/" + config.url
  }
  return config
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    } else if (!error.response) {
      console.log("ERROR ", error.response)
      return Promise.reject(
        JSON.stringify({
          code: NOT_CONNECT_NETWORK,
          message: NETWORK_CONNECTION_MESSAGE
        })
      )
    }
    return Promise.reject(error)
  }
)

export default axios
