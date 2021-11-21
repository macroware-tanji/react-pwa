const sleep = async (waitTime,options)=>{
    const param = options
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({sts:"timeOut", param: param})
        },waitTime)
    })
}
export default sleep