function order(){
    alert("thank you your order");
}
var idup = 6;
function ThemSanPham(){
    var id = idup;
    var name = document.getElementById('txtName').value;
    var price = document.getElementById('txtPrice').value;
    var type = document.getElementById('cmbType').value;
    var image2 = document.getElementById('txtImg').value;
    var image = image2.split('\\')[2];
    if(name != '' && price !='' && type !='' && image2 !=''){
        if(type=='1'){
            var manarr = { id, name, price, type, image};
            man.push(manarr);
            idup++;
            listProductsman();
            console.log(man);
        }else{
            var womenarr = { id, name, price, type, image};
            women.push(womenarr);
            idup++;
            listProductswomen();
            console.log(women);
        }
    var name = document.getElementById('txtName').value='';
    var price = document.getElementById('txtPrice').value='';
    var type = document.getElementById('cmbType').value='';
    var image = document.getElementById('txtImg').value='';
    }
    else{
        alert("Vui lòng nhập đầy đủ thông tin");
    }
}
function XoaSanPham(id){
    for(var i=0; i < man.length; i++){
        if( id== man[i].id){
            man.splice(i, 1);
            listProductsman();
            break;
        }
    }
    for(var i = 0; i < women.length; i++){
        if( id == women[i].id){
            women.splice(i, 1);
            listProductswomen();
            break;
        }
    }
}
function CapNhatSanPham(id){
    for(var i = 0; i < man.length; i++){
        if(id == man[i].id){
            document.getElementById("txtId").value = man[i].id;
            document.getElementById("txtName").value = man[i].name;
            document.getElementById("txtPrice").value = man[i].price;
            document.getElementById("cmbType").value = man[i].type;
            document.getElementById("txtImg").value = man[i].image;
            break;
        }txtId
    }
    for(var i = 0; i < women.length; i++){
        if( id == women[i].id){
            document.getElementById("txtId").value = women[i].id;
            document.getElementById("txtName").value = women[i].name;
            document.getElementById("txtPrice").value = women[i].price;
            document.getElementById("cmbType").value = women[i].type;
            document.getElementById("txtImg").value = women[i].image;
            break;
        }
    }
}
function LuuCapNhat(){
    var idchange = document.getElementById("txtId").value;
    for(var i = 0; i< man.length; i++){
        if(idchange == man[i].id){
            man[i].name = document.getElementById("txtName");
            man[i].price = document.getElementById("txtPrice");
            man[i].type = document.getElementById("cmbType");
            var imageChange = document.getElementById('txtImg').value;
            if(imageChange == ''){

            }else{
                var imagel = imageChange.split('\\')[2];
                man[i].image = imagel;
            }

            if(man[i].type == 0 && imageChange ==''){
                alert("Vui lòng cập nhật ảnh");
            }if(man[i].type == 0 && imageChange !=''){
                man.splice(i, 1);
                ThemSanPham();
                listProductsman();
                listProductswomen();
            }
            listProductsman();
            listProductswomen();
            break;
        }
    }
    for(var i = 0; i< women.length; i++){
        if(idchange == women[i].id){
            women[i].name = document.getElementById("txtName");
            women[i].price = document.getElementById("txtPrice");
            women[i].type = document.getElementById("cmbType");
            var imageChange = document.getElementById('txtImg').value;
            if(imageChange == ''){

            }else{
                var imagel = imageChange.split('\\')[2];
                women[i].image = imagel;
            }

            if(women[i].type == 0 && imageChange ==''){
                alert("Vui lòng cập nhật ảnh");
            }if(women[i].type == 0 && imageChange !=''){
                women.splice(i, 1);
                ThemSanPham();
                listProductsman();
                listProductswomen();
            }
            listProductsman();
            listProductswomen();
            break;
        }
    }
}
function listProductswomen(){
    document.getElementById("women").innerHTML = '';
    for(let i = 0; i < women.length; i++){
        
        var demo = '<div class="col-md-6 col-sm-12 p-2" style="border-radius: 15px;">';
        demo += '<div style="width: 100%; background: #fff; border-radius: 15px; padding-bottom:10px;">';
        demo += '<div class="image-box"><img src="'+women[i].image+'"style="width:100%; height:250px; border-top-right-radius: 15px; border-top-left-radius:15px;"></div>';
        demo += '<div class="text-box pl-2 pr-2" style="width: 100%;">';
        demo += '<p class="font-weight-bold mb-0 mt-1" style="font-size: 120%; overflow: hidden; text-overflow: clip; white-space: nowrap;">'+women[i].name+'</p>';
        demo += '<p class="mb-2">Gia: '+women[i].price+' d </p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()" >Mua ngay</a>';
        demo += '<div href="#" class="btn btn-danger float-right text-white" onclick="XoaSanPham('+women[i].id+')" style="width:20%; border-radius: 10px;"><i class="fa-regular fa-trash-can"></i></div>';
        demo += '<div href="#" class="btn btn-warning float-right text white mr-2" onclick="CapNhatSanPham('+women[i].id+')" style="width: 20%; border-radius: 10px;"><i class="fa-solid fa-file-pen"></i></div>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}
function listProductsman(){
    document.getElementById("man").innerHTML = '';
    for(let i = 0; i < man.length; i++){
        
        var demo = '<div class="col-md-6 col-sm-12 p-2" style="border-radius: 15px;">';
        demo += '<div style="width: 100%; background: #fff; border-radius: 15px; padding-bottom:10px;">';
        demo += '<div class="image-box"><img src="'+man[i].image+'"style="width:100%; height:250px; border-top-right-radius: 15px; border-top-left-radius:15px;"></div>';
        demo += '<div class="text-box pl-2 pr-2" style="width: 100%;">';
        demo += '<p class="font-weight-bold mb-0 mt-1" style="font-size: 120%; overflow: hidden; text-overflow: clip; white-space: nowrap;">'+man[i].name+'</p>';
        demo += '<p class="mb-2">Gia: '+man[i].price+' d </p>';
        demo += '<div href="#" class="btn btn-primary" onclick="order()" >Mua Ngay</div>';
        demo += '<div href="#" class="btn btn-danger float-right text-white" onclick="XoaSanPham('+man[i].id+')" style="width:20%; border-radius: 10px;"><i class="fa-regular fa-trash-can"></i></div>';
        demo += '<div href="#" class="btn btn-warning float-right text white mr-2" onclick="CapNhatSanPham('+man[i].id+')" style="width: 20%; border-radius: 10px;"><i class="fa-solid fa-file-pen"></i></div>';
        demo+=  '</div>';
        demo += '</div>';
        demo += '</div>';
        

        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
}
function loadspbody(){
    listProductsman();
    listProductswomen();
}



// function editProduct(id, type){
//     if (type == '1'){
//         for (var i = 0; i < man.length; i++){
//             if (man[i].id == id){
//             document.getElementById('product-name').value = man[i].name;
//             document.getElementById('product-price').value = man[i].price;
//             document.getElementById('product-kind').value = type;
//             current_i = i;
//             }
//         }
//     } else
//     if (type == '2'){
//         for (var i = 0; i < women.length; i++){
//             if (women[i].id == id){
//             document.getElementById('product-name').value = women[i].name;
//             document.getElementById('product-price').value = women[i].price;
//             document.getElementById('product-kind').value = type;
//             current_i = i;
//             }
//         }
//     }
//     current_type = type;
// }
// function updateProduct(){
//     if (current_type == '1' && current_id !== "" && src !== undefined){
//         man[current_i].name = document.getElementById('product-name').value;
//         man[current_i].price = document.getElementById('product-price').value;
//         man[current_i].image = src;
//         loadMale();
//     } else
//     if (current_type == '2' && current_id !== "" && src !== undefined){
//         women[current_i].name = document.getElementById('product-name').value;
//         women[current_i].price = document.getElementById('product-price').value;
//         women[current_i].image = src;
//         loadFemale();
//     } else alert("Lỗi!")

// }