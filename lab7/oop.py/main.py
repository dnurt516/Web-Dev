from models import Animal, Dog, Cat
def main():
    a1 = Animal("GenericAnimal", 5, "Unknown")
    d1 = Dog("Rex", 3, "Labrador")
    c1 = Cat("Whiskers", 2, "Black")

    animals = [a1, d1, c1]
    for animal in animals:
        print(animal)  
        print(animal.info())  
        print("Speak:", animal.speak())

      
        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        elif isinstance(animal, Cat):
            print(animal.scratch())
        

if __name__ == "__main__":
    main()