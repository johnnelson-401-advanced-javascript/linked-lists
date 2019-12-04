const { AnimalShelter, Dog, Cat } = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('FIFO Animal Shelter', () => {

  it('Should enqueue an animal', () => {
    let Shelter = new AnimalShelter();
    let Spot = new Dog('Spot');
    let Felix = new Cat('Felix');
    Shelter.addAnimal(Spot);
    Shelter.addAnimal(Felix);
    expect((Shelter.catList.peek()).value).toBe('Felix');
    expect((Shelter.dogList.peek()).value).toBe('Spot');
  });

  it('Should get a cat from the Shelter', () => {
    let Shelter = new AnimalShelter();
    let Spot = new Dog('Spot');
    let Felix = new Cat('Felix');
    let Garfield = new Cat('Gafield');
    Shelter.addAnimal(Spot);   
    Shelter.addAnimal(Felix);   
    Shelter.addAnimal(Garfield);   
    let adopted = Shelter.getCat();
    expect(adopted.value).toBe('Felix');
  });

  it('Should get a Dog from the Shelter', () => {
    let Shelter = new AnimalShelter();
    let Spot = new Dog('Spot');
    let Felix = new Cat('Felix');
    let Garfield = new Cat('Gafield');
    Shelter.addAnimal(Felix);   
    Shelter.addAnimal(Garfield); 
    Shelter.addAnimal(Spot);   
    let adopted = Shelter.getDog();
    expect(adopted.value).toBe('Spot'); 
  });

  it('Should get the First animal in the shelter', () => {
    let Shelter = new AnimalShelter();
    let Spot = new Dog('Spot');
    let Felix = new Cat('Felix');
    let Garfield = new Cat('Garfield');
    Shelter.addAnimal(Spot);   
    Shelter.addAnimal(Felix);   
    Shelter.addAnimal(Garfield); 
    let adopted = Shelter.getAny();
    let adopted2 = Shelter.getAny();
    let adopted3 = Shelter.getAny();
    expect(adopted.value).toBe('Spot');  
    expect(adopted2.value).toBe('Felix');  
    expect(adopted3.value).toBe('Garfield'); 
  });

  it('Should throw an Error if there is no animal to adopt', () => {
    let Shelter = new AnimalShelter();
    expect(()=>{
      Shelter.getAny();
    }).toThrow(); 
    expect(()=>{
      Shelter.getDog();
    }).toThrow(); 
    expect(()=>{
      Shelter.getCat();
    }).toThrow(); 

  });
  
});