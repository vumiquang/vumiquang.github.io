function makeDay(){
    var optionDay = "";
    for(let i = 1;i <= 31; i++)
        optionDay += "<option  value="+i+">"+i+"</option>";
        optionDay += "<option value=\"-1\" selected=\"1\">"+"Ngày"+"</option>";
    $("#day").html(optionDay);
}

function makeMonth(){
    var optionMonth = "";
    for(let i = 1;i <= 12; i++)
        optionMonth += "<option value="+i+">"+i+"</option>";
        optionMonth += "<option value=\"-1\" selected=\"1\" >"+"Tháng"+"</option>";
    $("#month").html(optionMonth);
}

function makeYear(){
    var optionYear = "";
    for(let i = 1905;i <= 2019; i++)
        optionYear += "<option value="+i+">"+i+"</option>";
        optionYear += "<option value=\"-1\" selected=\"1\">"+"Năm"+"</option>";
    $("#year").html(optionYear);
}

$(document).ready(function(){
    makeDay();
    makeMonth();
    makeYear();
});

function checkValidate(){
    $(".warner").css("display","none");

    if($("#account").val() == "") {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Không được để trống");
        return false;
    }
    else if($("#account").val().length >= 20) {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Tài khoản ít hơn 20 ký tự");
        return false;
    }
    else if(/\s/.test($("#account").val())) {
        $("#warner-account").css("display","block");
        $("#warner-account").html("Không chứa dấu cách");
        return false;
    }
    if($("#password").val() == "") {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Không được để trống");
        return false;
    }
    else if($("#password").val().length < 6) {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Mật khẩu phải lớn hơn 6 ký tự");
        return false;
    }
    else if(/\s/.test($("#password").val())) {
        $("#warner-password").css("display","block");
        $("#warner-password").html("Không chứa dấu cách");
        return false;
    }
    if($("#day :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        return false;
    }
    if($("#month :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        return false;
    }
    if($("#year :selected").val() == "-1") {
        $("#warner-date").css("display","block");
        $("#warner-date").html("Chọn thời gian hợp lệ");
        return false;
    }
    if($("#address").val() == "") {
        $("#warner-address").css("display","block");
        $("#warner-address").html("Không được để trống");
        return false;
    }
    if($("#phone").val() == "") {
        $("#warner-phone").css("display","block");
        $("#warner-phone").html("Không được để trống");
        return false;
    }
    else if(/\D/.test($("#phone").val())) {
        $("#warner-phone").css("display","block");
        $("#warner-phone").html("Phải là số");
        return false;
    }
    if($("#email").val() == "") {
        $("#warner-email").css("display","block");
        $("#warner-email").html("Không được để trống");
        return false;
    }
    else if(/\s/.test($("#email").val())) {
        $("#warner-email").css("display","block");
        $("#warner-email").html("Không chứa dấu cách");
        return false;
    }
    return true;
}