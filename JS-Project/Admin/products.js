let tr = '<option>--- Select Category ---</option>'
const getCategory = ()=>{
    let arr_data = JSON.parse(localStorage.getItem("catInfo"))
    arr_data.map((i)=>{
        tr += `<option value="${i.id}">${i.name}</option>`
    })
    document.getElementById("catname").innerHTML = tr
}
getCategory()

let prData = []

let saveproduct = ()=>{
    let arr_data = JSON.parse(localStorage.getItem("catInfo"))
    let pro_data = JSON.parse(localStorage.getItem("proInfo"))
    let pro_len = pro_data != null ? pro_data.length + 1:1
    let pro_name = document.profrm.pname.value;
    let pro_price = document.profrm.price.value;
    let catname = document.profrm.catname.value;
    let img_get  = localStorage.getItem("pro_img")
    let edit_pro = document.profrm.proid.value;
    if(edit_pro != ''){
    let cat_id = arr_data.map((j)=>{
        let edi = pro_data.map((i)=>{
            
            if(i.id == edit_pro){
                i.catname = catname
                i.pro_name = pro_name
                i.pro_img = (img!=null) ? image:i.image
                i.pro_price = pro_price

            }
            return i
        })
    })
        prData = edi
    }else{
        let pro_obj = {
            id:pro_len,
            pro_name:pro_name,
            pro_price:pro_price,
            catname:catname,
            pro_img:img_get
        }
    
        prData = [
            ...prData,pro_obj
        ]
    }
    

    localStorage.setItem("proInfo",JSON.stringify(prData))

    document.profrm.pname.value = ''
    document.profrm.price.value = ''
    document.profrm.catname.value = ''
    localStorage.removeItem('pro_img')
    disp()
}
let pr = ''

const disp = ()=>{
    pr = ''
    let pro_data = JSON.parse(localStorage.getItem("proInfo"))
    let cat_data = JSON.parse(localStorage.getItem('catInfo'))
    pro_data.map((i)=>{
        cat_data.map((j)=>{
            if(j.id == i.catname){
                i.name = j.name
            }
        })

        pr += `
            <tr>
                <td>${i.id}</td>
                <td>${i.pro_name}</td>
                <td>${i.name}</td>
                <td>${i.pro_price}</td>
                <td><img src=${i.pro_img} height="50px"></td>
                <td><button class="btn btn-danger" onclick="deletePro(${i.id})">Delete</button><br><br>
                <button class="btn btn-primary m-2" onclick="editPro(${i.id})">Edit</button></td>
            </tr>
        `
    })
    document.getElementById("prodata").innerHTML = pr
}

const deletePro = (id)=>{
    let pro_data = JSON.parse(localStorage.getItem("proInfo"));
    let pro_res = pro_data.filter((i)=>{
        return i.id != id
    })
    j = 1;
    let inc_pro = pro_res.map((i)=>{
        i.id = j++;
        return i
    })
    localStorage.setItem("proInfo",JSON.stringify(inc_pro))
    disp()
}

const editPro = (id)=>{
    let pro_data = JSON.parse(localStorage.getItem("proInfo"));
    let cat_data =  JSON.parse(localStorage.getItem("catInfo"));
    let pro_edit = pro_data.find((i)=>{
        return i.id = id
    })
    document.profrm.proid.value = pro_edit.id
    document.profrm.catname.value = cat_data.name
    document.profrm.pname.value = pro_edit.pro_name
    document.profrm.price.value = pro_edit.pro_price
    document.getElementById('imgDisp').src = pro_edit.pro_img
}

const saveImgUrl = (event)=>{
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('imgDisp');
      output.src = reader.result;
      localStorage.setItem("pro_img",reader.result)
    };
    reader.readAsDataURL(event.target.files[0]);
}


disp()