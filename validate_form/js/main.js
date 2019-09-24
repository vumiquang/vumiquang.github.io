function makeDay(){
    var optionDay = "";
    for(let i = 1;i <= 31; i++)
        optionDay += "<option  value="+i+">"+i+"</option>";
        optionDay += "<option value=\"-1\" selected=\"1\">"+"Day"+"</option>";
    $("#day").html(optionDay);
}

function makeMonth(){
    var optionMonth = "";
    for(let i = 1;i <= 12; i++)
        optionMonth += "<option value="+i+">"+i+"</option>";
        optionMonth += "<option value=\"-1\" selected=\"1\" >"+"Month"+"</option>";
    $("#month").html(optionMonth);
}

function makeYear(){
    var optionYear = "";
    for(let i = 1905;i <= 2019; i++)
        optionYear += "<option value="+i+">"+i+"</option>";
        optionYear += "<option value=\"-1\" selected=\"1\">"+"Year"+"</option>";
    $("#year").html(optionYear);
}

$(document).ready(function(){
    makeDay();
    makeMonth();
    makeYear();
});

function checkValidate(){
    $(".warner").css("display","none");
    var check = 0;
    //kiểm tra tài khoản
    if($("#account").val() == "") {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Không được để trống");
        check++;
    }
    else if($("#account").val().length >= 20) {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Tài khoản ít hơn 20 ký tự");
        check++;
    }
    else if(/\s/.test($("#account").val())) {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Không chứa dấu cách");
        check++;
    }

    //kiểm tra password
    if($("#password").val() == "") {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Không được để trống");
        check++;
    }
    else if($("#password").val().length < 6) {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Mật khẩu phải lớn hơn 6 ký tự");
        check++;
    }
    else if(/\s/.test($("#password").val())) {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Không chứa dấu cách");
        check++;    
    }

    //kiểm tra repassword
    if($("#password").val() != $("#repassword").val()) {
        $("#warner-repassword").css("display","block");
        $("#warner-repassword").html("Không trùng mật khẩu");
        check++;
    }
    //kiểm tra giới tính
    if(document.forms['sign-up']['gender'].value == ""){
        $('#warner-gender').css('display','block');
        $('#warner-gender').html('Chưa đánh dấu');
        check++;
    }

    //kiểm tra ngày/tháng năm
    if($("#day :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        check++;
    }
    if($("#month :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        check++;
    }
    if($("#year :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        check++;
    }

    //kiểm tra địa chỉ
    if($("#address").val() == "") {
        $("#warner-address").css("display","block");
        $("#warner-address").html("Không được để trống");
        check++;
    }

    // kiểm tra số điện thoại
    if($("#phone").val() == "") {
        $("#warner-phone").css("display","block");
        $("#warner-phone").html("Không được để trống");
        check++;
    }
    else if(/\D/.test($("#phone").val())) {
        $("#warner-phone").css("display","block");
        $("#warner-phone").html("Phải là số");
        check++;
    }


    //kiểm tra email
    if($("#email").val() == "") {
        $("#warner-email").css("display","block");
        $("#warner-email").html("Không được để trống");
        check++;
    }
    else if(/\s/.test($("#email").val())) {
        $("#warner-email").css("display","block");
        $("#warner-email").html("Không chứa dấu cách");
        check++;
    }
    if(check == 0)
     return true;
     else return false;
}