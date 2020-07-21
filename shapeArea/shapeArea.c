#include <math.h>

int shapeArea(int n) {
    
    int result = pow(n,2) + pow(n-1,2);
    return result;
}