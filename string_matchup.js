// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// solution:
function solve(a,b){
    let wordCountMap = {};
    for(let j=0; j<b.length; j++){
      wordCountMap[b[j]] = 0;
    }
    for(let i=0; i<a.length; i++){
      if(wordCountMap.hasOwnProperty(a[i])){
           wordCountMap[a[i]] = (wordCountMap[a[i]] || 0) + 1;
      }
    }
    return Object.values(wordCountMap);
  }

// video(s) :
// (part 1) https://soapbox.wistia.com/videos/GRy7QURRs1
// (part 2) https://soapbox.wistia.com/videos/eLm784Y634