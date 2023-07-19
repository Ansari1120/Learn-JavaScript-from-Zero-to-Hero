let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
   ];

   
//    We are looking for all the groups that have
// two names starting with an M . If we find such a group, we will log it.

//    for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//    for (let j = 0; j < groups[i].length; j++) {
//     if(groups[i][j].startsWith("M")){
//     matches++;
//     } else {
//     continue;
//     }
//     if (matches === 2){
//     console.log("Found a group with two names starting with an");
//     console.log(groups[i]);
//     break;
//     }
//     }
//    }
   
//Alternate Example : 

for (let group of groups){
    for(let m_starts of group){
        // m_starts.toLowerCase
       if(m_starts.startsWith("M")){
        console.log(`Found Group name starts with M ${m_starts}`);
        break;
       }
       
    }
}
