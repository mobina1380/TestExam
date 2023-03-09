import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import { ADD_ASYNC_AMOUNT } from "./actions";
import {fetchPosts} from "./api";
import {addPosts} from "./slice";
import { Effect, SagaReturnType } from 'redux-saga/effects';
import {numberofPost} from "./actions";   
import { GET_RESULTS,} from "./actions";
import {setErrorMessage , setLoading , addSearchResults} from "./slice";
 import {defaultPage, increamentPage} from "../page/pageSlice"
import { getResultsFromServer } from "../../api/api";
import { ISParam } from './actions'

// type postType = ReturnType<typeof fetchPosts>;
function* getAsyncPost(action) {
      const {payload} = action;
    const posts = yield call(fetchPosts, payload);
    // console.log(posts.status); 
    yield put(addPosts(posts));
}



function* handleGetResults(action){
    try{
        yield put(setLoading());
              console.log('action hast');
        console.log(action.payload.type);
         // @ts-ignore
       //  console.log(action.payload);
 const response = yield call(getResultsFromServer,action.payload);
        if(typeof response === 'undefined'){
          
          yield put(setErrorMessage("نتیجه ای  یافت نشده است "))



        }
        else{
          console.log('response'+response);
 yield put(setLoading());


//  let arrayme=[];
//  arrayme.push({type:action.payload.type});
//  arrayme.push({response:response});

//  yield put(addSearchResults(arrayme))


 yield put(addSearchResults(response))
 yield put(setErrorMessage(""))
  yield put(defaultPage())
    
        }
        
    }catch(e){
        console.log('error');
        //@ts-ignore
                console.log(e.message);
                
        yield put(setLoading());
         // @ts-ignore
         yield put(setErrorMessage("متأسفانه نتیجه‌ای یافت نشد"))
    }
}



function* mySaga() {
  yield takeEvery(ADD_ASYNC_AMOUNT , getAsyncPost);
}

function* searchSaga(){
    yield takeEvery(GET_RESULTS, handleGetResults)
}





export default searchSaga;
