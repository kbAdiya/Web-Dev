n = int(input())  
scores = list(map(int, input().split()))  

first = second = -101

for score in scores:
    if score > first:
        second = first
        first = score
    elif score > second and score != first:
        second = score

print(second)
