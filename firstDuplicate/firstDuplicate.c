// Arrays are already defined with this interface:
// typedef struct arr_##name {
//   int size;
//   type *arr;
// } arr_##name;
//
// arr_##name alloc_arr_##name(int len) {
//   arr_##name a = {len, len > 0 ? malloc(sizeof(type) * len) : NULL};
//   return a;
// }
//
//
int firstDuplicate(arr_integer a) {
    if(a.arr == NULL){
        return -1;
    }
    int cache[100001] = {0};
    for(int i = 0; i< a.size; i++){
        cache[i] = 0;
    }
    int pos = a.size;
    for(int i=0; i<a.size; i++){
        if(cache[a.arr[i]]== a.arr[i]){
            return a.arr[i];
        }else{
            cache[a.arr[i]]=a.arr[i];
        }
    }
    return -1;
}

