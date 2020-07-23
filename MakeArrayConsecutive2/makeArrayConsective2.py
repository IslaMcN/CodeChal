def makeArrayConsecutive2(statues):
    # Order statues
    statues.sort()
    print(statues)
    # find the missing statues
    # Maybe use subtraction instead
    missing = 0
    for i in range(0, len(statues) -1):
        if statues[i+1] - statues[i] != 1:    
            n = statues[i+1] - statues[i]
            print(n)
            n -= 1
            missing += n
    return missing