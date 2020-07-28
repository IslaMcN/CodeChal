import functools
import operator

def isLucky(n):
    # Split the number in half ex: 123456 => 123  456
    s = str(n)
    piv = len(s)//2
    left, right = s[:piv], s[piv:]
    return sum(map(int, left)) == sum(map(int, right))