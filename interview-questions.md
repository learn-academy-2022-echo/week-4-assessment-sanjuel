# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object Oriented programming is when everything in a programming language is an object. For instance, ruby is an object oriented language. This is different from functional programming because functional programming is based more on methods and functions. 

Researched answer: Object-oriented programming is a programming model that focuses on storing data in objects, which is a data type that stores key value pairs. The main focus of object-oriented programming is on the data itself, instead of the logic or functions that manipulates the data. One strategy many programmers use when operating in this kind of model is data modeling. This is the method of creating a diagram or visual representation of all of the data you are trying to manipulate in your logic, and since everything is data in this model, it allows you to visualize what you are doing with the data. It is different from functional programming in the way that functional programming focuses more on what we are doing with the data, instead of the data itself. Hence the names, object oriented programming focuses on the object, or the data, and functional programming focuses more on the functions, or the logic. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer:An integer in ruby is a whole number. This is the default of numbers in ruby even if you add a decimal, it will be ignored. A float is a decimal, but to get a float you have to invoke a function to specifically ask ruby to give you a float. 

Researched answer: A float and an integet, while being visually very similar, are very different. In ruby, the default is an integer. An integer is a whole number, specifically that has no decimals. Even if you give ruby a decimal, like 150.5, and try to add it to a whole number, say 6, it will come up with 156, instead of 156.5. The reason for this is because ruby considers floats to be inacurate. This means that sometimes, if you try to run a math equation with two decimals like 1.5 + 1.2 == 2.7, it may come up as false. This is because of the way floats are stored in Ruby. In order to use floats, you must invoke a specific function.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return is where the return on a function is "implied" or its there withouy you having to write it. When you write a function in ruby, you don't have to write a "return" like you do in javascript. 

Researched answer: An implicit return in Ruby is the idea that, unlike something like JavaScript, if the return is the last thing in a function, there is no need to write it out. Implicit is another way of saying implied, as if to say that because there is a function, there has to be a return. This means you can get your returns automatically, without writing it. It's another thing we love about ruby. A fun fact about implied returns in Ruby is that the deafult return, if nothing is written, in ruby is nil.

4. What is a block in Ruby?

Your answer: A block in ruby is similar to a loop in javascript. It allows you to iterate over a set of code so that you don't have to write it over and over again. 

Researched answer: Blocks are similar to methods in Ruby, but they have a couple of key differences. One of the main differences between blocks and methods is that blocks don't have to have a name. They can be used with any variable, accept an argument, and return some kind of value, and in that way they are similar to functions. Another main thing about blocks is that they use the do-end syntax. Blocks always pass through other methods using || pipes. Blocks are the thing that tells methods what to do, and we can also use the yield keyword to do that. 

5. What is an instance variable in Ruby?

Your answer: An instance variable in ruby is an object that comes out of a class. An example of this is a factory that produces books. The factory itself is a class, but the books it creates are instances of that class. An instance variable is a variable that is assigned to one instance of that class, or in the analogy, a varaible that is assigned to that book. 

Researched answer: An instance variable in Ruby is a variable that starts with an @ symbol in front of it. An instance variable is what an object uses to store data. For instance, if you have a class named FamilyGuy, the instance variables could be @peter, @brian, @stewie, and from there more data can be stored about that class and those specific objects. From there we can assign more values to these instance variables, if we are still going by the previous example we could do something like

class FamilyGuy
def initialize
    @peter = "dad"
    end
end
If we do this, now the isntance variable of @peter has the default value of "dad". We can do this with all instance variables, giving them more and more complex sets of descriptions within their classes. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: A free, open source database management system. It is data storage for a lot of apps. 

2. Ruby on Rails: A server side application that gives default structures for web pages. This seems similar to how react was for javascript, and that makes me scared. 

3. ORM: Stands for object-relational-mapping, is a programming technique for object oriented programming languages. It gives a visual representation of the objects that is used in the language itself. 

4. Active Record: A ruby on rails thing, it stores memory object data in different databases. It is considered an architectual pattern

5. Migrations: This is the process of moving data from one system to another one. There are many different types of migration, such as application migration, operating system migration, data migration, or cloud migration. 
