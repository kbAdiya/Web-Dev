#1
def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
  
#2
def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2
  
#3
def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

#4
def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:] 
  return front + back
print(missing_char("hello", 1))
#5
def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False
print(monkey_trouble(True, True))
#6

def parrot_trouble(talking, hour):
  if talking and (hour < 7 or hour > 20):
    return True
  return False
print(parrot_trouble(True, 6))

#7
def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
print(pos_neg(1, -1, False))

#8
def front_back(str):
    if len(str) <= 1:
        return str
    return str[-1] + str[1:-1] + str[0]


print(front_back('code')) 
print(front_back('a'))   
print(front_back('ab'))    

#9
def sum_double(a, b):
    sum_val = a + b
    if a == b:
        return 2 * sum_val
    return sum_val

print(sum_double(1, 2))  
print(sum_double(3, 2)) 
print(sum_double(2, 2))  

#10
def makes10(a, b):
    return a == 10 or b == 10 or (a + b) == 10

print(makes10(9, 10)) 
print(makes10(9, 9))   
print(makes10(1, 9))   

#11
def not_string(str):
    if str.startswith("not"):
        return str
    return "not " + str

print(not_string('candy'))   
print(not_string('x'))       
print(not_string('not bad')) 

#12
def front3(str):
    front = str[:3]
    return front * 3

print(front3('Java'))      
print(front3('Chocolate')) 
print(front3('abc'))       

