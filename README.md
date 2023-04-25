# Test 微信小程序

1、代码提交

    TortoiseGit 工具：设置remote路径

    git add && 提交

    git push

2、代码结构

    后端：testServer
        - bin中的www为启动脚本（express 架构）
    
        - routes 路由
    
        - views 页面：ejs后缀为渲染引擎（还有pug）等，通过app.set('view engine', 'ejs')设置
    
        - app.js设置全局变量，将routes、views全部添加进去
    运行命令：
        进入后台代码路径后
        npm install
        node ./bin/www

    
    前端：miniprogram 代码文件 cloudfunctions云函数（建议废弃）
        
        app.js 加载页面的js处理逻辑
        app.json 首页定义的页面列表

3、软件：IntelliJ全家桶   IDEA-编程  DATAGRIP-数据库