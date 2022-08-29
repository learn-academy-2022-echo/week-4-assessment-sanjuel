# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

#Pseudo Code
# First I will create a method that takes in a number
# I will write logic that determines whether the number is even or odd
#This will contain conditionals
# It will return a string with the number and whether it is odd or even.
# Things I will use: .even? or the modulo operator, conditionals.

def odd_even num
    if num.even?
        "#{num} is even"
else
    "#{num} is odd"
end
end

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

p odd_even num1
p odd_even num2
p odd_even num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

#Pseudo Code
#First I will create a method that takes in a string
#I will write logic that iterates over a string and determines, using conditionals, if the value that corresponds to the index is a vowel.
#Then it will output the string, but without the vowels.
#Things I will use: conditionals, .delete, an array with all vowels in it. 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_checker string
    string.delete "AEIOU, aeiou"
end

p vowel_checker beatles_album1
p vowel_checker beatles_album2
p vowel_checker beatles_album3

# Originally I thought i was going to have to use a for loop, but I think I was still thinking in JavaScript. 

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#Pseduo Code
# First I will create a method that takes in a string
# It will use conditionals to determine whether the string is equal to itself backwards
# Then, it will use string interpolation to put out a string that says whether it is a palindrome or not
#Things I will use: Conditionals, .reverse, equality operators. 

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p palindrome palindrome_tester1
p palindrome palindrome_tester2
p palindrome palindrome_tester3

# I ran into an issue when first making this code due to the inclusion of capitals, so I had to turn everything into lowercase using the .downcase method. 