let catData = []

const saveData = () => {
    // data is alredy exist in localstorage or not
    let allData = JSON.parse(localStorage.getItem("catInfo"))
    let len = allData != null ? allData.length+1 : 1;
    // get data from form
    let name = document.catfrm.catname.value;
    let obj = {
        id : len,
        name : name
    }
    catData.push(obj);
    let cd = JSON.stringify(catData)
    localStorage.setItem("catInfo", cd)


    // document.catfrm.catname.value = '';
    console.log(catData);
    disp();
}

const disp = () => {
    let data = JSON.parse(localStorage.getItem("catInfo"))
    let tr = '';
    if(data != null){
        data.map((i) => {
            // tr += '<tr><td>'+i.id+'</td></tr>'
            tr += `
            <tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><button onclick = "editData(${i.id})">Edit</button></td>
            <td><button onclick = "delData(${i.id})">Delete</button></td>
            </tr>`
        })
        document.getElementById("catData").innerHTML = tr;
    }
}

const delData = (id) => {
    let data = JSON.parse(localStorage.getItem("catInfo"))
    // to update array
    // using filter fun we can remove id
    let final_res = data.filter((i) => {
        return i.id != id
    })
    let j = 1;
    // to change id in sequence
    // id 1 2 4 5 - i want in sequence manner so
    let arr = final_res.map((i) => {
        i.id = j++;
        return i;
    })
    localStorage.setItem("catInfo",JSON.stringify(arr))
    disp()
}
// first time data displaed in table
disp()


// edit data...
const editData = () => {
    let data = JSON.parse(localStorage.getItem("catInfo"))
}

// update data
const upData = (id) => {
    let data = JSON.parse(localStorage.getItem("catInfo"))
    // to update array
    // using filter fun we can remove id
    let final_res = data.filter((i) => {
        return i.id != id
    })
    let j = 1;
    // to change id in sequence
    // id 1 2 4 5 - i want in sequence manner so
    let arr = final_res.map((i) => {
        i.id = j++;
        return i;
    })
    localStorage.setItem("catInfo",JSON.stringify(arr))
    disp()
}
// first time data displaed in table
disp()











