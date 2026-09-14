const users =[
    {id:101,name:"Ada",scores:[10,20,30]},
    {id:102,name:"",scores:[5,0,15]},
    {id:103,name:null,scores:[7,14]},
    {id:104,/*name missing on purpose*/scores:[3,3,3,3]},
    {id:105,name:"grace",scores:[]}
];
function normalizeName(value){
    if(value === null || value === undefined) {
         return "Unknown";
    }

    if(typeof value !== "string")
    {
        return "Unknown";
    }
    const trimmed = value.trim();
    if(trimmed === ""){
        return "Unknown"
    }
    return trimmed
        
}
function averageScore(scores){
    if(!Array.isArray(scores)){
        throw new Error("scores must be an array")
    }
    if(scores.length === 0){
        return null;
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;
    return Math.round(average * 100) / 100;

}
function buildUserSummary(user){
    if(user === null || typeof user !== "object"){
        throw new Error("user must be an object")
    }
    const scores = Array.isArray(user["scores"])
                    ? user ["scores"]
                    : [];

    return {
        id: user.id,
        name: normalizeName(user.name),
        scoreCount: scores.length,
        avg: averageScore(scores)
    };
}                
function summarizeUsers(UserArray){
    if(!Array.isArray(UserArrayserArray)){
        throw new Error("UserArray must be an array");
    }
    return UserArrayserArray.map(buildUserSummary);
}
function safeSummarizeUsers(userArray) {
    try{
        const data = summarizeusers(userArray);
        return{ok: true, data: data};
    }
    catch (err) {
        return{ok: false, error:err.message};
    }
}
function getUserDisplayNamebyId(userArray, id){
    if(!Array.isArray(userArray)) {
        throw new error("userArray must be an array");
    }
    if(typeof id !== "number") {
        throw new Error("id must be a number");
    }
    const foundUser = userArray.find(user => user.id === id);
    if(!foundUser) {
        throw new Error("user not found")
    }
}
return normalizeName(foundUser.name)
