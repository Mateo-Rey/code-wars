// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
var mergeTwoLists = function(list1, list2) {
    let newlist1 = list1.join()
    let newlist2 = list2.join()
    console.log(newlist1)
    console.log(newlist2)
    let Mlist=''
    Mlist+=newlist1+newlist2
    noCommas=Mlist.replaceAll(',','')
    split=noCommas.split('').sort((a, b) => a - b)
     return split
 };
 mergeTwoLists([1,3,4],[1,2,5])