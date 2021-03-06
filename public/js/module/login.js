/**
 * sharejoy osweb
 * @version   0.0.5
 *make by tianyuan Lee
 */
$(function () {
    $("#login_form").submit(
        function () {
            var api_key = "5d85a0398cb74c66a46affbb98efaf41";
            $.cookie("apikey", api_key, {expire: 30, path: "/"});
            var name = $("#login_form input[name=name]").val();
            var password = $("#login_form input[name=password]").val();
            if (!name || !password) {
                loginError("账号及密码不能为空");
                return false;
            }
            var url = location.origin + "/user/login?" + sortUrl();

            $.ajax({
                url: url,
                data: JSON.stringify({
                    "name": name,
                    "password": hex_md5(password)
                }),
                type: "POST",
                dataType: "json",
                async: false,
                beforeSend: function (xhr) {
                        xhr.setRequestHeader("Content-Type", "application/json");
                }, //这里设置header
                success: function (data) {
                    if (data.code == 200) {
                        $.cookie("token", data.result.token);
                        location.href = "/user/index.html";
                    }else{
                        $(".form-error").text("*" + data.message);
                    }
                },
                error: function (argument) {
                    // body...
                }
            });
            
            
            
            // $.post({
            //     url: url,
            //     data: JSON.stringify(),
            //     type: "POST",
            //     dataType: "json",
            //     async: false,
            //     beforeSend: function (xhr) {
            //         xhr.setRequestHeader("Content-Type", "application/json");
            //     },
            //     success: function (data) {
            //         if (date.code == 200) {
            //             $.cookie("token", date.result.token);
            //             location.href = "/user/index.html";
            //         }
            //         if (date.code == 403000) { //
            //             $.cookie("token", null);
            //             call();
            //         } else if (date.code != 200) { //
            //             loginError(data.message);
            //         }
            //     }
            //
            // })
            return false;
        }
    );
})