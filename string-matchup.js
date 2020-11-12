// https: //soapbox.wistia.com/videos/MXW1O6CqS4

/**
 * Given two arrays of strings,
   return the number of times each string of the second array appears in the first array.

 Example array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw'] array2 = ['abc', 'cde', 'uap'] How many times do the elements in array2 appear in array1 ?

     'abc'
   appears
   twice in the first array(2)
 'cde'
 appears only once(1)
 'uap'
 does not appear in the first array(0) Therefore, solve(array1, array2) = [2, 1, 0]
 */

function solve(a, b) {
  let count = {}
  a.forEach(str => {
    return count[str] = count[str] + 1 || 1
  })
  return b.map(str => count[str] || 0)
}