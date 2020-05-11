from string import ascii_lowercase as ai

def commonCharacterCount(s1, s2):
    # Use built in counter
    # One for string one
    counter = 0
    for i in ai:
        countOne = s1.count(i)
        # Another for string two
        countTwo = s2.count(i)
        # start a self made counter 
        # counter = 0
    
        # See if there are any common keys
        counter+= min(countOne,countTwo)
    return counter
    # everytime we run into a let we have in the other dictionary we increment self made counter
    # return self made counter
