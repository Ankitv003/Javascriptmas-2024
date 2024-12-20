const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];


/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

const generateBtn = document.querySelector('.generate-btn')
const elfDisplay = document.querySelector('#elf-name-display')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const employeeSection = document.querySelector('.elf-names-list')
const generatedNames=[]

// document.addEventListener("focus")
function getElfName(initial, namesArray){
  return namesArray.find((name)=>name[0].toUpperCase()===initial.toUpperCase())
}

function renderRegisteredEmployees(){
  employeeSection.innerHTML=""
  generatedNames.forEach((name)=>{
    const listItem= document.createElement("li")
    listItem.textContent=name
    employeeSection.appendChild(listItem)
  })
}

function resetForm() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  firstNameInput.focus();
}

generateBtn.addEventListener("click",()=>{
  const firstName=firstNameInput.value.trim()
  const lastName= lastNameInput.value.trim()
  
  if(!firstName || !lastName){
    elfDisplay.textContent="Please enter both first and last name!"
    return
  }
  
  const elfFirstName= getElfName(firstName[0],elfFirstNames)
  const elfLastName= getElfName(lastName[0],elfLastNames)
  
  const elfName= `${elfFirstName} ${elfLastName}`
  elfDisplay.textContent=elfName
  
  if(!generatedNames.includes(elfName)){
    generatedNames.push(elfName)
    renderRegisteredEmployees()
  }
  
  resetForm()
})
document.addEventListener('DOMContentLoaded', () => {
  firstNameInput.focus();
})

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 



