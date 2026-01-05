const tbody = document.querySelector("tbody");

async function getUsers() {
  let resp = await fetch("https://dummyjson.com/users");
  let data = await resp.json();
  displayUsersTable(data.users);
}

function displayUsersTable(users) {
  users.map((user) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${user.id}</td>
        <td>
            <img src='${user.image}' height='100' width='100'/>
            ${user.firstName} ${user.lastName}
        </td>
        <td>${user.username}</td>
        <td>
        <a href='${user.email}'>
        ${user.email}
        </a>
        </td>
        <td>${user.phone}</td>
        <td>${user.role}</td>
        <td>${user.age}</td>
        <td>${user.address.state}</td>
        <td>${user.company.name}</td>
        `;
    tbody.append(tr);
  });
}

getUsers();
