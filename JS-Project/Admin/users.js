let userData = [];

// Insert User Details
const saveUserData = () => {
    // checking data are alredy exist or not
    let data = JSON.parse(localStorage.getItem("userInfo"));
    let u_id = data != null ? data.length+1 : 1;

    // getting data to the Form
    let uName = document.userfrm.uname.value;
    let uProf = document.userfrm.userProf.value;
    let uSal = document.userfrm.userSal.value;
    let userId = document.userfrm.userId.value;

    // update code is here
    if(userId != ''){
        // update
        let updateData = data.map((i) => {
            if(i.id == userId){
                i.name = uName;
                i.Prof = uProf;
                i.salary = uSal;
            }
            return i;
        })
        userData = updateData;
    }else{
        // insert
        let userObj = {
            id:u_id,
            name:uName,
            Prof:uProf,
            salary:uSal
        }
        userData.push(userObj);
    }

    


    let ud = JSON.stringify(userData);
    localStorage.setItem("userInfo",ud);

    // if don't put disp fun then try evry time to refresh for show the details
    dispUserData();
}

// Display User Details
const dispUserData = () => {
    let data = JSON.parse(localStorage.getItem("userInfo"));

    // Show the Details in table 
    let userTr = '';
    if(data != null){
        data.map((i) => {
            userTr += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.Prof}</td>
                    <td>${i.salary}</td>
                    <td><button class="btn btn-secondary m-2" onClick="editUserData(${i.id})">Edit</button>
                    <button class="btn btn-danger m-2" onClick="userDelData(${i.id})">Delete</button></td>
                </tr>
            `
        })
        document.getElementById("userData").innerHTML = userTr;
    }
}

// Delete User Detils
const userDelData = (id) => {
    let data = JSON.parse(localStorage.getItem("userInfo"));
     // filter --> [10,20,30,40,50]; id = 50 \/\
    let remove_item = data.filter((i) =>{
        return i.id != id;
    })
    // (  !=  -->  return [10,20,30,40])
    let j = 1;
    let new_id = remove_item.map((i) => {
        i.id = j++;
        return i;
    })

    localStorage.setItem("userInfo",JSON.stringify(remove_item));
    dispUserData();
}

// Update OR Edit User Detilas
const editUserData = (id) => {
    let data = JSON.parse(localStorage.getItem("userInfo"));

    let edit_item = data.find((i) =>{
        return i.id == id;
    })

    document.userfrm.uname.value = edit_item.name;
    document.userfrm.userProf.value = edit_item.Prof;
    document.userfrm.userSal.value = edit_item.salary;
    document.userfrm.userId.value = id;
}

dispUserData();



