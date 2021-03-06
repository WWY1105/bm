$(function () {
    $("body").keydown(function (event) {
        if (event.keyCode == 13) {
            $(".btn").click();
        }
    });
    $("input").focus(function () {
        $(".error").html("");
    });
    $("input").blur(function () {
        setTimeout(() => {
            const scrollHeight =
                document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
    });
    $(".btn").click(function () {
        if(!/^[0-9a-zA-Z:：]*$/g.test($("#name").val())){
            $(".error").html("账号输入错误");
            return;
        }
        if(!$("#name").val()){
            $(".error").html("账号不能为空");
            return;
        }
        if(!$("#password").val()){
            $(".error").html("密码不能为空");
            return;
        }
        var json = {name: $("#name").val(), password: hex_md5($("#password").val())};
        var data = ajaxSendFn(json, constUrlDict["login"], "POST", 2);

        if (data.code == 403000) {//
            $.cookie("token", null, {path: '/'});
        } else if (data.code == 200) {
            $.cookie("token", data.result.token, {path: '/'});
        } else {
            $(".error").html(data.message);
            return;
        }

        if (data.result.type === "M") {
            location.href = indexUrl + "/admin.html";
        } else if (data.result.type === "K") {
            location.href = indexUrl + "/keeper.html";
        } else if (data.result.type === "S") {
            location.href = indexUrl + "/staff.html";
        } else {
            alert("服务器繁忙,请稍后再试")
        }
    })
});
