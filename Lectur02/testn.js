const fullName = "  Montakan Rodjana  ";
const cleanedName = fullName.trim();
console.log(`cleaned Name: '${cleanedName}'`) 

const nameParts = cleanedName.split(' ');
console.log("Name Parts:", nameParts)

const finalParts = nameParts.filter(Boolean);
console.log("final Name Parts:", nameParts)

const firstName = finalParts[0];
console.log("FirstName:", 'Hello, Montakan!') 