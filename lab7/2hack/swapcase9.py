def swap_case(s):
    return s.swapcase()

s = input()
print(swap_case(s))
###########################
def swap_case(s):
    result = ""
    for char in s:
        if 'a' <= char <= 'z':  
            result += chr(ord(char) - 32)
        elif 'A' <= char <= 'Z':  
            result += chr(ord(char) + 32)
        else:
            result += char 
    return result

s = input()
print(swap_case(s))
