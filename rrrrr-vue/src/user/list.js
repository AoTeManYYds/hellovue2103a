const listForm = {
    template:'\
    <div>\
     <table border="1" cellspacing="0" cellpadding="0">\
    <tr><th>序号</th><th>名字</th><th>年龄</th></tr>\
    <tr v-for="(user,index) in users" v-if="user.gender==\'女\'">\
       <td>{{index+1>9?index+1:\'0\'+(index+1)}}</td>\
       <td>{{ user.name }}</td>\
       <td>{{ user.gender }}</td>\
       <td>{{ user.age }}</td>\
    </tr>\
    </table>\
        <ul>\
            <li v-for="(value,key,index) in user" >\
                {{index+1}}.{{key+\'----\'+value}}\
            </li>\
        </ul>\
    </div>\
    <script src="node_modules/vue/dist/vue.js"></script><!--引入vue.js-->\
    <script>\
        var app = new Vue({\
        el: "#app",\
        data: {\
        users: [\
            {name: \'柳岩\', gender: \'女\', age: 21},\
            {name: \'峰哥\', gender: \'男\', age: 18},\
            {name: \'范冰冰\', gender: \'女\', age: 24},\
        ]\
        }\
        })\
    </script>\
    '
}