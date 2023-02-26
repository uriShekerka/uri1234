// חייב שהפרוייקט שמתחבר אליו יכיר את אקסיוס
// מייקרו סרבס שמספק לקובץ שמשתמש בו פונקציה
// שעושה בקשת גט או מיטודה אחרת ושולחת כבר את הטוקן

// הכתובת של השרת שהנוד ג'יי אס נמצא בו
export const API_URL = "http://localhost:3002";
// השם של הקיי של הטוקן בלוקאל
export const TOKEN_KEY = "foods_tok";

// פונקציה של בקשת גט שמחזירה פרומיס
export const doApiGet = async(_url) => {
  try{
    let resp = await axios({
      url:_url,
      method: "GET",
      headers: {
        "x-api-key": localStorage[TOKEN_KEY]
      }
    })
    // שעושים רטרן לפונקציה שהיא אסיכרונית היא אוטמטית
    // מחזירה את המידע כפורמיס
    return resp.data;
  }
  catch(err){
    console.log(err);
    //throw פרומיס אחר שיעבוד מול הפונקציה הזאת ישר ישלח לקץ
    throw err;
  }
}


// פונקציה לבקשות POST,DELETE, PUT, PATCH
export const doApiMethod = async(_url,_method,_body = {}) => {
  try{
    let resp = await axios({
      url:_url,
      method: _method,
      data:_body ,
      headers: {
        "x-api-key": localStorage[TOKEN_KEY]
      }
    })
    // שעושים רטרן לפונקציה שהיא אסיכרונית היא אוטמטית
    // מחזירה את המידע כפורמיס
    return resp.data;
  }
  catch(err){
    console.log(err);
    //throw פרומיס אחר שיעבוד מול הפונקציה הזאת ישר ישלח לקץ
    throw err;
  }
}
