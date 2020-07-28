// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    let newList = [];
    let head = l;
    let current = head;
    while(current !== null){
        
        //console.log(current.value)
        if(current.value != k){
            newList.push(current.value)
        }
        current = current.next
    }
    
    
    return newList;
}