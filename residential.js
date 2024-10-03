const agentOne = async () => {
    const response = await fetch('http://99.79.77.144:3000/api/agents')
    const data = await response.json()
    console.log(data)
    const highRatedAgents = data.filter(agent => parseInt(agent.rating) >= 95);
    console.log(highRatedAgents);
    const agentList = document.getElementById('agent-list');

    highRatedAgents.forEach(agent => {
    const agentDiv = document.createElement('agent-list');
    //it inserts the agents information on the webpage.
    agentDiv.innerHTML = `<strong>${agent.first_name} ${agent.last_name}</strong> - Rating: ${agent.rating}`;
    // this line is used for styling in css by using the word agent-item as the class
    agentDiv.classList.add('agent-item');
    agentList.appendChild(agentDiv);
    })
    return data

  }
agentOne()

