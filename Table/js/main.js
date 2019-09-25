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

//xắp sếp danh sách tăng
function sortIncreaseStudents(){
    stdLength = students.length;
    for(let i = 0; i < (stdLength -1) ; i++)
        for(let j = i+1 ;j < stdLength;j++)
          if(Number(students[i].birthday) > Number(students[j].birthday)){
            let temp = students[i];
            students[i] = students[j];
            students[j] = temp;
          }
}

//xắp sếp danh sách giảm
function sortReductionStudents(){
    sortIncreaseStudents();
    students.reverse();
}

//in danh sách ra màn hình
function renderStudent(){
    $("#table-title").nextAll().remove();
    stdLength = students.length;
    html = "";
    for(let i = 0; i < stdLength ; i++){
        html += "<tr>";
        html += "<td class=\"name\">"+students[i].name+"</td>";
        html += "<td class=\"birthday\">"+students[i].birthday+"</td>";
        html += "<td class=\"mail\">"+students[i].email+"</td>";
        html += "<td class=\"phone\">"+students[i].phone+"</td>";
        html += "<td>";
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
}
renderStudent();

//lấy dữ liệu từ bảng vào biên students
function getTable(){   
    students = [];
    elementTable = document.getElementById("tbe-students").rows;

    for(let i = 1;i < elementTable.length; i++){
        let student = {
            name:"",
            birthday:"",
            email:"",
            phone:"",
        };

        student.name = elementTable[i].cells[0].innerHTML;
        student.birthday = elementTable[i].cells[1].innerHTML;
        student.email = elementTable[i].cells[2].innerHTML;
        student.phone = elementTable[i].cells[3].innerHTML;

        students.push(student);
    }
}

// gán sự kiện tăng giảm cho nút
$('#sort-icon').click(function(){
    $('#sort-icon').toggleClass("active");
    if($('#sort-icon').attr("class").includes("active")){
        sortReductionStudents();
        $('#down-icon').css("color","rgba(255,255,255,1)");
        $('#up-icon').css("color","rgba(255,255,255,0.3)");
    }
    else{
        sortIncreaseStudents();
        $('#up-icon').css("color","rgba(255,255,255,1)");
        $('#down-icon').css("color","rgba(255,255,255,0.3)");
    }
    renderStudent();
    deleteRow();  
});

//xóa row table
function deleteRow(){
    $('.delete').click(function(){
        $(this).parent().parent().remove();
        getTable();
    });
};

deleteRow();