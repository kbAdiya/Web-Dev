def hello_name(name):
    return f"Hello {name}!"

print(hello_name('Bob'))    
print(hello_name('Alice'))  
print(hello_name('X'))      

#2
def make_abba(a, b):
    return a + b + b + a

print(make_abba('Hi', 'Bye'))    
print(make_abba('Yo', 'Alice'))  
print(make_abba('What', 'Up'))   

#3
def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

print(make_tags('i', 'Yay'))      
print(make_tags('i', 'Hello'))    
print(make_tags('cite', 'Yay'))   

#4
def make_out_word(out, word):
    return out[:2] + word + out[2:]

print(make_out_word('<<>>', 'Yay'))      
print(make_out_word('<<>>', 'WooHoo'))    
print(make_out_word('[[]]', 'word'))   

#5
def extra_end(str):
    return str[-2:] * 3

print(extra_end('Hello'))  
print(extra_end('ab'))     
print(extra_end('Hi'))     

#6
def first_two(str):
    return str[:2]

print(first_two('Hello'))
print(first_two('abcdefg'))
print(first_two('ab'))
print(first_two('X'))
print(first_two(''))

#7
def first_half(str):
    return str[:len(str)//2]

print(first_half('WooHoo'))
print(first_half('HelloThere'))
print(first_half('abcdef'))

#8
def without_end(str):
    return str[1:-1]

print(without_end('Hello'))
print(without_end('java'))
print(without_end('coding'))

#9
def combo_string(a, b):
    return a + b + a if len(a) < len(b) else b + a + b

print(combo_string('Hello', 'hi'))
print(combo_string('hi', 'Hello'))
print(combo_string('aaa', 'b'))

#10
def non_start(a, b):
    return a[1:] + b[1:]

print(non_start('Hello', 'There'))
print(non_start('java', 'code'))
print(non_start('shotl', 'java'))

#11
def left2(str):
    return str[2:] + str[:2]

print(left2('Hello'))
print(left2('java'))
print(left2('Hi'))
