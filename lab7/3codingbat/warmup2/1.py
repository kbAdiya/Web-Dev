def string_times(str, n):
    return str * n

print(string_times('Hi', 2))  
print(string_times('Hi', 3))  
print(string_times('Hi', 1))  

#2
def string_splosion(str):
    result = ""
    for i in range(len(str) + 1):
        result += str[:i]
    return result

print(string_splosion('Code'))  
print(string_splosion('abc'))   
print(string_splosion('ab'))    

#3
def array_front9(nums):
    return 9 in nums[:4]

print(array_front9([1, 2, 9, 3, 4]))  
print(array_front9([1, 2, 3, 4, 9]))  
print(array_front9([1, 2, 3, 4, 5]))  

#4
def front_times(str, n):
    front = str[:3]
    return front * n

print(front_times('Chocolate', 2))  
print(front_times('Chocolate', 3))  
print(front_times('Abc', 3))  

#5
def last2(str):
    if len(str) < 2:
        return 0
    last2_sub = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i+2] == last2_sub:
            count += 1
    return count

print(last2('hixxhi'))      
print(last2('xaxxaxaxx'))   
print(last2('axxxaaxx'))    

#6
def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i:i+3] == [1, 2, 3]:
            return True
    return False

print(array123([1, 1, 2, 3, 1]))  
print(array123([1, 1, 2, 4, 1]))  
print(array123([1, 1, 2, 1, 2, 3]))  

#7
def string_bits(str):
    return str[::2]

print(string_bits('Hello'))       
print(string_bits('Hi'))          
print(string_bits('Heeololeo'))   

#8
def array_count9(nums):
    return nums.count(9)

print(array_count9([1, 2, 9]))     
print(array_count9([1, 9, 9]))     
print(array_count9([1, 9, 9, 3, 9]))  

#9
def string_match(a, b):
    count = 0
    length = min(len(a), len(b))
    
    for i in range(length - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
            
    return count

print(string_match('xxcaazz', 'xxbaaz'))  
print(string_match('abc', 'abc'))        
print(string_match('abc', 'axc'))        
