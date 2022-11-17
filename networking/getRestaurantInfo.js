import axios from "axios";
import URL_SERVICES from "../config/config";


export async function getRestaurantDetails(restaurantId){

  const URL = URL_SERVICES.RESTAURANT_DETAIL.replace('id', restaurantId);

  return axios.get(URL).then(resp => {
    resp.data.averageRating = Number(resp.data.averageRating.$numberDecimal),
    console.log(resp.data);
    return resp.data;
  }).catch(err => {
    console.error("WS Error: ", err);
  }).finally(() => {

  })
}