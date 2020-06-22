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

#include <stddef.h>

int adjacentElementsProduct(arr_integer inputArray) {
    
    int max = inputArray.arr[0] * inputArray.arr[1];

    printf("%ld",sizeof(inputArray)/sizeof(int));
    int i;
    for(i = 1; i < inputArray.size-1; i++){
        if(inputArray.arr[i]*inputArray.arr[i+1]>=max){

            printf("\nVariables %d and %d",inputArray.arr[i],inputArray.arr[i+1]);


            max = inputArray.arr[i] * inputArray.arr[i+1];

            printf("\nInside of if %d",max);

        }
    }
    return max;
}
