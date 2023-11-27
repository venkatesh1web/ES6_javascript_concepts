const mypromise = x => {
  return new Promise((resolve, reject) =>{
      if(x>4){
          resolve("yeah promise resolved!!!");
      }else{
          reject("promise rejected!!!");
      }
  })
}


// one way to handle
// mypromise(2).then(res => console.log(res)).catch(err => console.log(err))

// async-await to handle promise
(async()=>{
  try{
      var res = await mypromise(5);
      console.log(res)
  }catch(err){
      console.log(err)
  }
})() // immediately execute the function

console.log("hi")