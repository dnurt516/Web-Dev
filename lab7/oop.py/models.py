class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some generic animal sound"

    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def __str__(self):
        return f"{self.name} ({self.species}, {self.age} years)"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}"

class Rat(Animal):
    def __init__(self, name, age, type):
        super().__init__(name, age, "Rat")
        self.type = type
        
    def getType(self):
        return self.type

class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} scratches the furniture!"

class Bird (Animal):
    def __init__(self, name, age, size):
        super().__init__(name, age, "Bird")
        self.size = size
        
    def speak(self):
        return "Something ivjdsk"