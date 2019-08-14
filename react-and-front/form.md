# Form

## 阻止表单默认提交

input type="submit" 才可以利用HTML5的表单required 验证支持

  
    function leave\_com\(\) {  
        axios\({  
            method: 'post',  
            url: 'http://localhost:3004/api/leave\_comment',  
                data: {  
                    username: document.username.value,  
                    email: document.email.value,  
                    content: document.content.value  
                }  
            }\)  
            .then\(function\(response\) {  
            $\('\#visit\_number'\).html\(1000+response.data.visit\_num\);  
            $\('\#praise\_number'\).html\(20+response.data.praise\_num\)  
            }\)  
            .catch\(function \(error\) {  
            if \(error.response\) {  
            console.log\(error.response.data\);  
            alert\(error.response.data.message\)  
            } else if \(error.request\) {  
            console.log\(error.request\);  
            } else {  
            console.log\('Error', error.message\);  
            }  
        }\);  
    }  


## input 禁止复制

&lt;!DOCTYPE html&gt;

禁止粘贴  

