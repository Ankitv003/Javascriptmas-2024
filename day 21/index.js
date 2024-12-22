import { toysRequested } from './data.js'

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/ 


const flattenedToys=toysRequested.flatMap(elem=>elem.toys)
// console.log(flattenedToys)
const toyCounts ={}
flattenedToys.forEach((toy)=>{
    const [toyName, count] =Object.entries(toy)[0]
    if(toyCounts[toyName]){
        toyCounts[toyName]+=count
    }
    else{
        toyCounts[toyName]=count
    }
})

// console.log(toyCounts)
// console.log(Object.entries(toyCounts))


const[maxToy, maxCount] = Object.entries(toyCounts).reduce((maxEntry, currentEntry)=>{
    return currentEntry[1]>maxEntry[1]? currentEntry:maxEntry
},["",0])

console.log(`The most popular toy is ${maxToy} with ${maxCount} requests.`);