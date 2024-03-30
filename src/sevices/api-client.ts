import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"cfa7a720477a4994addead55d8b1535d"
    }
})