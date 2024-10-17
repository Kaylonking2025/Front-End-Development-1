const agentOne = async () => {
  // allows javaScript to fetch information from servers
    const response = await fetch('http://99.79.77.144:3000/api/agents')
    //this function is fetching data and awaiting response
    const data = await response.json()
    //filtering information for high ratings
    const highRatedAgents = data.filter(agent => parseInt(agent.rating) >= 95);
    //returned highest rated agents
    return highRatedAgents
  

  }

// creates the table of agent information
const agentTable = async (agentData1) => { 
//Create a variable to store HTML table headers
    let li = ''
    //Waits for the data to be fetched from the agentOne.
   
    const checkData = async () => {
      if (agentData1){
      return agentData1
     }
     else { return await agentOne()}
    }
 const agentData = await checkData ()


  //user is a parameter (placeholder)
agentData.forEach((user) => {
  li +=  `<tr>
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>${user.rating}%</td>
    <td>$${user.fee}</td>
    <td>${user.region}</td>
  </tr>`;
 


  
}); 
//DOM Display result
  document.getElementById("users").innerHTML = li;
}
agentTable()

// Sort function for first name (ascending and descending)
const sortByFirstName = async (order) => {
  const agentData = await agentOne()
  agentData.sort((a, b) => {
    if (order === 'asc') {
      return a.first_name.localeCompare(b.first_name);
    } else {
      return b.first_name.localeCompare(a.first_name);
    }
  });
  agentTable(agentData); // Re-render the table after sorting
};

// Sort function for last name (ascending and descending)
const sortByLastName = async (order) => {
  const agentData = await agentOne()
  agentData.sort((a, b) => {
    if (order === 'asc') {
      return a.last_name.localeCompare(b.last_name);
    } else {
      return b.last_name.localeCompare(a.last_name);
    }
  });
  agentTable(agentData); // Re-render the table after sorting
};

// grabs the element by ID from html
const upfirst = document.getElementById('upfirst')
// grabs the element by ID from html
const downfirst = document.getElementById('downfirst')
// grabs the element by ID from html
const uplast = document.getElementById('uplast')
// grabs the element by ID from html
const downlast = document.getElementById('downlast')

// attaching an event listener to the up arrows in the first name colomn
upfirst.addEventListener('click', function() {
  // Sorting logic or a function that gets triggered on click
  sortByFirstName('asc');
});
// attaching an event listener to the down arrows in the first name colomn
downfirst.addEventListener('click', function() {
  sortByFirstName('desc');
});
// attaching an event listener to the up arrows in the last name colomn
uplast.addEventListener('click', function() {
  
  sortByLastName('asc');
}); 
 // attaching an event listener to the down arrows in the last name colomn
downlast.addEventListener('click', function() {
  
  sortByLastName('desc');
});
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});
const dropdown = document.getElementById('region-select')

dropdown.addEventListener('change', async function() {
  const agentData = await agentOne() 
  let filteredData = []; // Variable to hold the filtered data
  console.log('filterData')
  if (dropdown.value == "all-regions"){
    return agentData;
  } else if (dropdown.value == "north"){
    const north = agentData.filter(agent => agent.region == 'north')
    agentTable(north); // Re-render the table after sorting
  } else if (dropdown.value == "south"){
    const south = agentData.filter(agent => agent.region == 'south')
    agentTable(south); // Re-render the table after sorting
  } else if (dropdown.value == "east"){
    const east = agentData.filter(agent => agent.region == 'east')
    agentTable(east); // Re-render the table after sorting
  } else if (dropdown.value == "west"){
    const west = agentData.filter(agent => agent.region == 'west')
    agentTable(west); // Re-render the table after sorting
  } 
});
