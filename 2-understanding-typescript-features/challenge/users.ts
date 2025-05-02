// Sample data
const data: User[] = [
  { id: 1, name: 'Zia', role: 'admin' },
  { id: 2, name: 'Gaia', role: 'user' },
  { id: 3, name: 'Noora', role: 'guest' }
]

// Define a type alias for the user object
type User = {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

// Function to find a user by ID
function findUserById(id: number): User | undefined {
  return data.find(user => user.id === id);
}

// Function to log user details
function logUserDetails(user: User): void {
  console.log(`Name: ${user.name}, Role: ${user.role}`);
}

// Create an intersection type
// This type represents an object that has all properties of User and an additional age property
type MergedObject = User & { age: number };

// Function to merge two objects: a user and an age key value page { age: 22 }
function mergeObjects(user: User, age: { age: number }): MergedObject {
  // The spread operator is used to merge the properties of both objects into a new object
  return { ...user, ...age };
}

// Testing the functions
const user = findUserById(1);
if (user) {
  logUserDetails(user);
}
const merged = mergeObjects({ id: 4, name: 'Mariya', role: 'user' }, { age: 30 });
console.log(merged);
