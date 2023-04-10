
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetcountryNavBarApi } from "Api/Country/Use-Get-Country-NavBar-Api";
import { GetcountryNavBarInfo } from "Redux/Country/Get-Country-NavBar-Redux";





export const GetcountryNavBarHook = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery([id,"GetcountryNavBarHook"],(id)=>UseGetcountryNavBarApi(id), {
      onSuccess: res => {
        
        
         dispatch(GetcountryNavBarInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")       

      }
    });
  };



