function mySort(){
    const tags = new Array()
    for(let i=0;i<arguments.length;i++){
        tags.push(arguments[i])
    }
    tags.sort((compare1,compare2)=>{
        return compare1 - compare2
    })
    return tags
}
