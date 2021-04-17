import axios from "axios"
import { CREATETASK_FAILURE, CREATETASK_REQUEST, CREATETASK_SUCCESS,GETPROJECT_FAILURE,GETPROJECT_REQUEST,GETPROJECT_SUCCESS,GETTASK_FAILURE, GETTASK_REQUEST, GETTASK_SUCCESS } from "./actionType"




//______________________________________CREATE TASK START____________________________________________________//
export const createTaskRequest =()=>{
    return {
        type:CREATETASK_REQUEST
    }
}

export const createTaskSuccess=(payload)=>{
    return {

        type:CREATETASK_SUCCESS,
        payload
    }
}

export const createTaskFailure=(payload)=>{
    return {
        type:CREATETASK_FAILURE,
        payload
    }
}
//______________________________________CREATE TASK END____________________________________________________//




//______________________________________GET TASK START____________________________________________________//
export const getTaskRequest =()=>{
    return {
        type:GETTASK_REQUEST
    }
}

export const getTaskSuccess=(payload)=>{
    // console.log(payload,"hwsflhuwgf")
    return {

        type:GETTASK_SUCCESS,
        payload
    }
}

export const getTaskFailure=(payload)=>{
    return {
        type:GETTASK_FAILURE,
        payload
    }
}
//______________________________________GET TASK END____________________________________________________//






//______________________________________GET PROJECT START____________________________________________________//
export const getProjectRequest =()=>{
    return {
        type:GETPROJECT_REQUEST
    }
}

export const getProjectSuccess=(payload)=>{
    return {

        type:GETPROJECT_SUCCESS,
        payload
    }
}

export const getProjectFailure=(payload)=>{
    return {
        type:GETPROJECT_FAILURE,
        payload
    }
}
//______________________________________GET PROJECT END____________________________________________________//





// ________________________________________NETWORK REQUEST FOR ADDING TIMER______________________________________________//
export const createTaskTimer =(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(createTaskRequest())
    return axios.post("https://1u30f.sse.codesandbox.io/timer",payload)
    .then((res)=>
        // dispatch(createTaskSuccess(res.data))

        dispatch(getTaskTimer())
       
       
    ).catch((err)=>{
        dispatch(createTaskFailure(err))
    })
}



// ________________________________________NETWORK REQUEST FOR GETTING TIMER______________________________________________//
export const getTaskTimer =()=>(dispatch)=>{
    dispatch(getTaskRequest())
    return axios.get("https://1u30f.sse.codesandbox.io/timer").then((res)=>{
        dispatch(getTaskSuccess(res.data))
         console.log(res.data)
    }).catch((err)=>{
        dispatch(getTaskFailure(err))
    })
}



// ________________________________________NETWORK REQUEST FOR GETTING PROJECT DETAILS______________________________________________//
export const getProjectData =()=>(dispatch)=>{
    // dispatch(getProjectRequest())
    return axios.get('https://auth-dev-9137e-default-rtdb.firebaseio.com/projects.json').then((res)=>{
            let arrdata =[]
            for(let k in res.data){
                arrdata.push(res.data[k])
            }
            dispatch(getProjectSuccess(arrdata))
            // console.log(arrdata)
    }).catch((err)=>{
        dispatch(getProjectFailure(err))
    })
}



