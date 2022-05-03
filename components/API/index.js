
import axios from "axios";

const apiurl = "http://localhost:5000/api";

// price range find 


// export const addTicketSort = data => axios.post('/admin/addTicketSort', data);

export const findcarbyprice = (price_min,price_max) => axios.post(`${apiurl}/car/search-car-by-price-range `, {price_min,price_max}).then(res => {

    console.log(res.data);


    return res.data


}



   
    
    );