#include <stdio.h>
#include <math.h>

int centuryFromYear(int year){
    if (year % 100 == 0){
        int div = year / 100;
        return div;
    }
    else{
        int div = year/100 + 1;
        return floor(div);
    }
}