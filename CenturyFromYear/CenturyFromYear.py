import math

def centuryFromYear(year):
    if year % 100 == 0:
        div = year / 100
        print(div)
        roundDown = math.floor(div)
        return roundDown
    else:
        div = year / 100 + 1
        return math.floor(div)