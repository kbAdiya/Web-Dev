#A
a = int(input())
b = int(input())
if a>b:
    print(a)
else:
    print(b)

#B
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")

#C
a = int(input())
b = int(input())

if (a == 1 and b == 1) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")

#D
x = int(input())
if x == 0:
    print(0)
elif x > 0:
    print(1)
else:
    print(-1)

#E
a = int(input())
b = int(input())
if a == b:
    print(0)
elif a > b:
    print(1)
else:
    print(2)