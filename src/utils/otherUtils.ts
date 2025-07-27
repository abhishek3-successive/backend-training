const formatDate = (date : Date):string =>{
return date.toISOString();
}

const formatResponse = (message : string , data ?: any) =>{
 return {
    message, 
    data,
    timestamp : new Date().toISOString()
 }
}

export {formatDate,formatResponse}