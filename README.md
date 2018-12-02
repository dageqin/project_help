# project_help
 #ejs模板的用法
 1.js这样写
 ```jsx harmony
var userList = [{
    name:'kiki'
}];
var template = $('#matchTemplate').html(),
    result = ejs.render(template, {userList: userList});
$(".main").html(result);
```

2、html这样写
```jsx harmony
<main class="main">
    <script type="text/template" id="matchTemplate">
        <%=userList[0].name%>
    </script>
</main>
```