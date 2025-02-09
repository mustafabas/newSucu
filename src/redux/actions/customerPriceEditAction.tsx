import axios from 'axios'
import {WATER_CUSTOMER_PRICE_EDIT} from '../constants'
import { Dispatch } from "react";
import {CUSTOMERPRICE_EDIT_SUCCEED,CUSTOMERPRICE_EDIT_FAILED} from '../types'
import {Action} from '../states'


export function customerPriceEdit(price:number, customerPriceId:number) {

  return (dispatch : Dispatch<Action>) =>  {

  axios.post(WATER_CUSTOMER_PRICE_EDIT,
    {
        price: price,
        customerPriceId: customerPriceId,
    })
  .then((response) =>{
  if(response.data.isSuccess){
      if(response.data.result){
        dispatch(customerPriceEditIsSucceed(true, "Müşteriye Özel Ürün Fiyatı Düzenlendi!"));
      }
    }
  })
  .catch(error => {      
    console.log(error + 'error kaydetme asn storage')   
    dispatch(customerPriceEditIsSucceed(false,"Bir hata oluştu."));
  });
  }
}

  
  export const customerPriceEditIsSucceed = (isSuccess : boolean, message:string) => ({
    type : isSuccess ? CUSTOMERPRICE_EDIT_SUCCEED : CUSTOMERPRICE_EDIT_FAILED,
    payload : message
  })
  