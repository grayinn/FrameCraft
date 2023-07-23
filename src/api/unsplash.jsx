import axios from "axios"

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID h8oz98IQMnuA-d7Iva6_W4kL50IAJ9SusnoC96lw4mQ",
    }
})

export default unsplash