def checkPalindrome(inputString):
    rev = ''.join(reversed(inputString))
    if (inputString == rev):
        return True
    return False