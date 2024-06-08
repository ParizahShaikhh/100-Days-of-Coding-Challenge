// Question 54:
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.





// Answer:

// Define a type for the dynamic object
type DynamicSections = {
    [key: string]: any;
};


//   Function to dynamically set keys
 function setDynamicKey(obj: DynamicSections, key: string, value: any):
  void {
    obj[key] = value;
  }
  

//   Function to get the value by key
 function getDynamicKey(obj: DynamicSections, key: string): any {
    return obj[key];
 }
  

//   Example usage
 const sections: DynamicSections = {};


//  Setting dynamic keys based on user choices
  const userChoice1 = "personInfo";
  const userChoice2 = "preferences";
  

  setDynamicKey(sections, userChoice1, {name: "Parizah Shaikh", age: 16 });
  setDynamicKey(sections, userChoice2, {theme: "dark", language: "en" });
  

//   Accessing the values
  console.log(getDynamicKey(sections, userChoice1)); // Output: { name: 'John Doe', age: 16 }
  console.log(getDynamicKey(sections, userChoice1)); // Output: { theme: 'dark', language: 'en' }


//   Output the entire object
  console.log(sections);

 
  