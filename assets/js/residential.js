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
const agentTable = async () => { 
//Create a variable to store HTML table headers
    let li = `<tr><th>First & Last Name</th> <th>Rating</th> <th>Fee</th></tr>`;
    //Waits for the data to be fetched from the agentOne.
    const agentData = await agentOne()



  //user is a parameter (placeholder)
agentData.forEach((user) => {
  li +=  `<tr>
    <td>${user.first_name} ${user.last_name}</td>
    <td>${user.rating}</td>
    <td>${user.fee}</td>
  </tr>`;
 
 //DOM Display result
  document.getElementById("users").innerHTML = li;

});
}
agentTable()