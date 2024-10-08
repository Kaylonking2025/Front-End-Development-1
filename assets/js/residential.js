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
    let li 
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
    <td>${user.rating}</td>
    <td>${user.fee}</td>
  </tr>`;
 


  
}); 
//DOM Display result
  document.getElementById("users").innerHTML = li;
}
agentTable()

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
};


const upfirst = document.getElementById('upfirst')
const downfirst = document.getElementById('downfirst')
const uplast = document.getElementById('uplast')
const downlast = document.getElementById('downlast')

// Add event listeners to the arrows for sorting
upfirst.addEventListener('click', function() {
  // Sorting logic or a function that gets triggered on click
  sortByFirstName('asc');
});
downfirst.addEventListener('click', function() {
  sortByFirstName('desc');
});
uplast.addEventListener('click', function() {
  
  sortByLastName('desc');
});  
downlast.addEventListener('click', function() {
  
  sortByLastName('asc');
});

