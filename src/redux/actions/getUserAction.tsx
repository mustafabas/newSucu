import axios from 'axios'
import { WATER_GET_USER } from './../constants'
import { Dispatch } from "react";
import { USER_GET, USER_LOADING } from './../types'
import { Action } from '../states'
import { IGetUserItem } from "../models/userModel";


export function GetUser(employeeId: number) {

    return (dispatch: Dispatch<Action>) => {

        dispatch(loading(true));
        var WATER_GET_USER_WITH_EMPLOYEEID = WATER_GET_USER + employeeId;

        axios.get(WATER_GET_USER_WITH_EMPLOYEEID,

        )
            .then((response) => {
                console.log("fsfsaasfasfsafasfsafsafsafsafasfasf")
                if (response.data.isSuccess) {
                    console.log("fsfsaasfasfsafasfsafsafsafsafasfasf")
                    var userModel: IGetUserItem = {
                        userId: response.data.result.userId,
                        nameSurname: response.data.result.nameSurname,
                        email: response.data.result.email,
                        password: response.data.result.password,
                        active: response.data.result.active,
                    };
                    console.log(response.data.result.userId )
                    dispatch(user(userModel));
                }
                else {

                }
            })
            .catch((err) => {
                console.log(err + "error axios")
                // dispatch(loading(false));

            });


    }

}


export const loading = (loader: boolean) => ({
    type: USER_LOADING,
    payload: loader
})

export const user = (user: IGetUserItem) => ({
    type: USER_GET,
    payload: user
})

