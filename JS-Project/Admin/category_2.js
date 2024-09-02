let catData = [];

// Insert Category
const saveData = () => {
    // check data alredy exist or not 
    let data = JSON.parse(localStorage.getItem("catInfo"));
    let len = data!= null ? data.length+1:1;
    // get data from FORM
    let name = document.catfrm.cname.value;
    let catid = document.catfrm.catId.value;


    if(catid != ''){
        // update code
        let updatedData = data.map((i) => {
            if(i.id == catid){
                i.name = name;
            }
            return i;
        })
        catData = updatedData;
    }else{
        // insert code
        let obj = {
            id : len,
            name : name
        }
        catData.push(obj);
    }
    
    let cd = JSON.stringify(catData);
    localStorage.setItem("catInfo", cd);
    document.catfrm.cname.value = '';
    disp();
}

// display Category
const disp = () => {
    let data = JSON.parse(localStorage.getItem("catInfo"));
    let tr = '';
    if(data != null){
        data.map((i) =>{
            tr += `
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td><button class="btn btn-secondary" onClick="editData(${i.id})">Edit</button>
                <button class="btn btn-danger" onClick="delData(${i.id})">Delete</button></td>
            </tr>
            `
        })
        document.getElementById("catData").innerHTML = tr;
    }
}

// Delete Category
const delData = (id) => {
    // get data to the FORM
    let data = JSON.parse(localStorage.getItem("catInfo"));
    // filter --> [10,20,30,40,50]; id = 50 \/\
    let final_res = data.filter((i) => {
        return i.id != id;
    });
    // (  !=  -->  return [10,20,30,40])
    let j = 1;
    let arr = final_res.map((i) => {
        i.id = j++;
        return i;
    })
    localStorage.setItem("catInfo",JSON.stringify(final_res))
    disp();
}

// edit Category
const editData = (id) => {
    // get data to the FORM
    let data = JSON.parse(localStorage.getItem("catInfo"));

    let final_res = data.find((i) => {
        return i.id == id;
    });

    document.catfrm.cname.value = final_res.name;
    document.catfrm.catId.value = id;
}

disp();