let form = document.getElementById("form");
let tbody = document.getElementById("tbody");

let data = [];




function render() {

    tbody.innerHTML = "";

    data.forEach((item, index) => {

        let newUser = `
        <tr>
            <th scope="col" class="text-center"><i class ="fa fa-close" onclick = "remove(event)"><i></th>
            <th scope="col" class="text-center"><i class ="fa fa-edit" onclick = "edit(event)"><i></th>
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

    nameValue = document.getElementById("name").value;
    familyValue = document.getElementById("family").value;
    emailValue = document.getElementById("email").value;
    phoneValue = document.getElementById("phone").value;

    let user = {
        name: nameValue,
        family: familyValue,
        email: email,
        phone: phone
    }

    data.push(user);
    render();
})