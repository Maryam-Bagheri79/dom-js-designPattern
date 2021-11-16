let form = document.getElementById("form");
let tbody = document.getElementById("tbody");
let i = null;
let data = [];




function render() {

    tbody.innerHTML = "";

    data.forEach((item, index) => {

        if (i == null) {

        }
        let newUser = `
        <tr>
            <th scope="col" class="text-center"><i class ="fa fa-close" onclick = "remove(${index})"><i></th>
            <th scope="col" class="text-center"><i class ="fa fa-edit" onclick = "edit(${index})"><i></th>
            <th scope="col" class="text-center name">${item.name}</th>
            <th scope="col" class="text-center family">${item.family}</th>
            <th scope="col" class="text-center email">${item.email}</th>
            <th scope="col" class="text-center phone">${item.phone}</th>
        </tr>
    `
        tbody.insertAdjacentHTML("beforeend", newUser);

    })


}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (i == null) {
        nameValue = document.getElementById("name").value;
        familyValue = document.getElementById("family").value;
        emailValue = document.getElementById("email").value;
        phoneValue = document.getElementById("phone").value;

        let user = {
            name: nameValue,
            family: familyValue,
            email: emailValue,
            phone: phoneValue
        }

        data.push(user);
        render();
    } else {

        nameValue = document.getElementById("name").value;
        familyValue = document.getElementById("family").value;
        emailValue = document.getElementById("email").value;
        phoneValue = document.getElementById("phone").value;

        let userUpdate = {
            name: nameValue,
            family: familyValue,
            email: emailValue,
            phone: phoneValue
        }

        data = data.map((item, index) => i != index ? item : userUpdate);

        i = null;

        render();

    }


})

function remove(index) {
    data.splice(index, 1);
    render();
}

function edit(index) {

    document.getElementById("name").value = data[index].name;
    document.getElementById("family").value = data[index].family;
    document.getElementById("email").value = data[index].email;
    document.getElementById("phone").value = data[index].phone;

    i = index;
}