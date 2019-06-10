## 阻止表单默认提交
input type="submit" 才可以利用HTML5的表单required 验证支持

<form name="commentForm" onsubmit="return false;">
    <input type="text" placeholder="名字" required name="username">
    <input type="email" placeholder="邮箱" required name="email">
    <textarea name="" id="" cols="30" rows="10" required name="content"></textarea>
    <input type="submit" value="提交" onclick="leave_com()">
</form>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    function leave_com() {
        axios({
            method: 'post',
            url: 'http://localhost:3004/api/leave_comment',
                data: {
                    username: document.username.value,
                    email: document.email.value,
                    content: document.content.value
                }
            })
            .then(function(response) {
            $('#visit_number').html(1000+response.data.visit_num);
            $('#praise_number').html(20+response.data.praise_num)
            })
            .catch(function (error) {
            if (error.response) {
            console.log(error.response.data);
            alert(error.response.data.message)
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log('Error', error.message);
            }
        });
    }
</script>