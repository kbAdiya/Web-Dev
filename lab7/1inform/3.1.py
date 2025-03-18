import math

#A
a=int(input())
b=int(input())
for i in range(a,b+1):
    if(i%2==0):
        print(i, end=" ")

#B
a = int(input())  
b = int(input())  
c = int(input())  
d = int(input())
for i in range(a, b+1):
    if i % d == c:
        print(i, end=" ")


#C
a = int(input())  
b = int(input())  

for i in range(a, b + 1):
    if int(math.sqrt(i)) ** 2 == i:
        print(i)
    
#x
x = input()
d = input()

count = 0
for digit in x:
    if digit == d:
        count += 1

print(count)

###
x = int(input())
sum_digits = sum(int(digit) for digit in str(x))
print(sum_digits)

####
x = int(input())
print(int(str(x)[::-1]))

#G
x = int(input())

for d in range(2, x + 1):
    if x % d == 0:
        print(d)
        break

#H
x = int(input())

for d in range(1, x + 1):
    if x % d == 0:
        print(d, end=" ")

#I

x = int(input())
count = 0

for d in range(1, int(math.sqrt(x)) + 1):
    if x % d == 0:
        count += 2 if d * d != x else 1

print(count)

#J
res = 0
for i in range(100):
    a = int(input())
    res+= a
print(res)

#K
x = int(input())
res = 0
for i in range(x):
    a = int(input())
    res+= a
print(res)

##
binary = input()
decimal = int(binary, 2)
print(decimal)

#M
x = int(input())
res = 0
for i in range(x):
    a = int(input())
    if (a == 0):
        res+= 1
print(res)
