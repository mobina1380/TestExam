import axios from "axios";
 // @ts-ignore
export const getResultsFromServer = async ({query,page}) =>{
    // console.log('page     :'+page)
    const response = await axios.get("https://zarebin.ir/gse/api/search/", {
      params: {
        q:query,
        query_source:"user",
         page:Number(page),
         //page:5,
        size:10,
        type: "ALL",
        PL:0,
   
       
      },
    });
    console.log(response);
    return response.data.result.all.results.webs;
}


// if api is song
// export const getResultsFromServer = async ({query,page,type}) =>{
//   console.log(page)
//   const response = await axios.get("https://zarebin.ir/songs/api/search", {
//     params: {
//       q:query,
//       page:Number(page),
//       size:10,
//       type: type,
//       searchSourceType : "NORMAL_SEARCH",
//       PL:0,
//       qsrc:"user"
//     },
//   });
  
  
//   console.log(response.data.results)
//   return response.data.results
// }







// if api is  images
// export const getResultsFromServer = async ({query,page}) =>{
//   console.log(page)
//   const response = await axios.get("https://zarebin.ir/images/api/search", {
//     params: {
//       q:query,
     
//     },
//   });
//   console.log(response.data.results.images)
//   return response.data.results.images;
// }
