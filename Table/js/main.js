var students = [
{
    name: "Hạc wick",
    birthday: "1997",
    email: "hackwick@gmail.com",
    phone: "0999999999"
},
{
    name: "John Cena",
    birthday: "1996",
    email: "cenaaaa@gmail.com",
    phone: "0945999999"
},
{
    name: "Trần Dần",
    birthday: "1945",
    email: "hackwick@gmail.com",
    phone: "09222545999"
},
{
    name: "Cậu Vàng",
    birthday: "2000",
    email: "yellowKiute@gmail.com",
    phone: "094553455"
},
{
    name: "Chí Phèo",
    birthday: "1917",
    email: "chifuho@gmail.com",
    phone: "0999943545"
},
{
    name: "Bá Kiến",
    birthday: "1907",
    email: "bakienpro@gmail.com",
    phone: "0943534999"
}
];

//sort theo dữ liệu cột truyền vào
function sortStudents(nameColumn,sign){
    students.sort(function(a,b){
        if(a[nameColumn].toUpperCase() > b[nameColumn].toUpperCase())
            return -1*sign;
        else if(a[nameColumn].toUpperCase() < b[nameColumn].toUpperCase())
            return 1*sign;
        else
            return 0;
    });
}

//in danh sách ra màn hình
function renderStudent(stdList){
    $("#table-title").nextAll().remove();
    stdLength = stdList.length;
    let html = "";
    for(let i = 0; i < stdLength ; i++){
        html += "<tr>";
        html += "<td class=\"name\">"+stdList[i].name+"</td>";
        html += "<td class=\"birthday\">"+stdList[i].birthday+"</td>";
        html += "<td class=\"mail\">"+stdList[i].email+"</td>";
        html += "<td class=\"phone\">"+stdList[i].phone+"</td>";
        html += "<td class=\"person-tool\">";
        html += "<div class=\"edit\">";
        html += "<i class=\"fas fa-edit\"></i>";
        html += "<span>Chỉnh sửa</span>";
        html += "</div> ";
        html += "|";
        html += "<div class=\"delete\">";
        html += "<i class=\"fas fa-trash-alt\"></i>";
        html += "<span> Xóa</span>";
        html += "</div>";
        html += "</td></tr>";
    }
    $("#tbe-students").append(html);
    $('#add').show();
    editData();
    deleteRow();  
}
renderStudent(students);

//Hàm sort các cột
$('.sort').click(function(){
    let nameColumn = $(this).attr("id");
    let sign;
    $('.arrow-icon').css("color","rgba(255,255,255,0.2)");
    $(this).toggleClass("active");
    if($(this).attr("class").includes("active")){
        sign = -1;
        $(this).children().first().css("color","rgba(255,255,255,1)");
    }
        
    else {
        sign = 1;
        $(this).children().last().css("color","rgba(255,255,255,1)");
    }
    sortStudents(nameColumn,sign);
    renderStudent(students);
});




//xóa row table
function deleteRow(){
    $('.delete').click(function(){
        $('#confirm-delete').css("display","block");
        let thisRow = this ;
        thisRow = $(thisRow).parent().parent();

        let nameValue = thisRow.children()[0].innerHTML;
        let birthdayValue = thisRow.children()[1].innerHTML;
        let emailValue = thisRow.children()[2].innerHTML;
        let phoneValue = thisRow.children()[3].innerHTML;
        
        $('#yes-delete').click(function(){
            $('#confirm-delete').css("display","none");
            thisRow.remove();
            students = students.filter(function(std){
                return !(std["name"] == nameValue && std["birthday"] == birthdayValue && std["email"] == emailValue && std["phone"] == phoneValue);
            });
        })
        $('#no-delete').click(function(){
            $('#confirm-delete').css("display","none");
        }) 
    });
};

//Sửa giá trị

function editData(){
        $('.edit').click(function(){
            let nodeCurrents = $(this).parent().siblings();
            let nameCurrent = nodeCurrents[0].innerHTML;
            let birthdayCurrent = nodeCurrents[1].innerHTML;
            let emailCurrent = nodeCurrents[2].innerHTML;
            let phoneCurrent = nodeCurrents[3].innerHTML;
            let indexCurrent = students.findIndex(function(st){ 
                return (st.name == nameCurrent && st.birthday == birthdayCurrent && st.email == emailCurrent && st.phone == phoneCurrent)
            });
            nodeCurrents[0].innerHTML = "<input style=\"height:25px;line-height:25px;padding:0 5px;\" type=\"text\" id=\"new-name\" value=\""+nameCurrent+"\">"
            nodeCurrents[1].innerHTML = "<input style=\"height:25px;line-height:25px;padding:0 5px;\" type=\"text\" id=\"new-birthday\" value=\""+birthdayCurrent+"\">"
            nodeCurrents[2].innerHTML = "<input style=\"height:25px;line-height:25px;padding:0 5px;\" type=\"text\" id=\"new-email\" value=\""+emailCurrent+"\">"
            nodeCurrents[3].innerHTML = "<input style=\"height:25px;line-height:25px;padding:0 5px;\" type=\"text\" id=\"new-phone\" value=\""+phoneCurrent+"\">"
        
            $(this).parents("td").html("<span class=\"save\">Save</span>");
            saveData(indexCurrent);
        })
}

//save 
function saveData(index){
    $('.save').click(function(){
        let std = {
            name : "",
            birthday : "",
            email : "",
            phone : ""
        }
       
        std.name =  $($(this).parent().siblings()[0]).children().val();
        std.birthday =  $($(this).parent().siblings()[1]).children().val();
        std.email =  $($(this).parent().siblings()[2]).children().val();
        std.phone =  $($(this).parent().siblings()[3]).children().val();
        students.splice(index,1,std);
        renderStudent(students);
    })
}

//Tìm kiếm giá trị 
$('#search-text').on('keyup',function(){
    let searchText = removeAccents($('#search-text').val().toUpperCase());
    $("#table-title").nextAll().unmark("mark");
    $("#table-title").nextAll().filter(function(){
        let textOrigin = $($(this).children()[0]).text() + $($(this).children()[1]).text() + $($(this).children()[2]).text() + $($(this).children()[3]).text();
        $(this).toggle(removeAccents(textOrigin.toUpperCase()).indexOf(searchText) > -1);
        $(this).mark(searchText);
        $(this).children().last().unmark("mark");
    });
});



//chuyển có dấu về không có dấu
function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    };
    return str;
  }

  // thêm dữ liệu
  $('#add').click(function(){
    //chỉ cho phép thêm 1 dữ liệu 1
    if(!$(this).attr("class").includes("add-data")){
    $('#add').hide();
    let html = "";
        html += "<tr>";
        html += "<td class=\"name\">"+"<input class=\"add-name\" style=\"height:20px;line-height:20px;padding: 0 5px;\"></input>"+"</td>";
        html += "<td class=\"birthday\">"+"<input class=\"add-birthday\" style=\"height:20px;line-height:20px;padding: 0 5px;\"></input>"+"</td>";
        html += "<td class=\"mail\">"+"<input class=\"add-email\" style=\"height:20px;line-height:20px;padding: 0 5px;\"></input>"+"</td>";
        html += "<td class=\"phone\">"+"<input class=\"add-phone\" style=\"height:20px;line-height:20px;padding: 0 5px;\"></input>"+"</td>";
        html += "<td class=\"add-finish\">";
        html += "<i class=\"fas fa-check\"></i>" ;
        html += "<span>Xong</span>";
        html += "</td></tr>";
    $("#tbe-students").append(html);
    $(this).addClass("add-data");
    addFinish();
    };
  });


  function addFinish(){
      $('.add-finish').click(function(){
        let nameValue = $($(this).siblings()[0]).children().val();
        let birthdayValue = $($(this).siblings()[1]).children().val();
        let emailValue = $($(this).siblings()[2]).children().val();
        let phoneValue = $($(this).siblings()[3]).children().val();
        if(nameValue == '' || birthdayValue == '' || emailValue == '' || phoneValue == ''){
            alert('Không được để trống');
        }
        else {
            let std = {
                name : nameValue,
                birthday : birthdayValue,
                email : emailValue,
                phone : phoneValue
                }
            
            students.push(std);
            renderStudent(students);
            $('#add').removeClass("add-data");
            $('#add').show();
        }
      });
  }



