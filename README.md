# RNTemplate

## detox分支

##### 运行流程

###### 1.npm install
###### 2.react-native run-android (确定项目没问题，可以正常安装到手机)
###### 3.yarn start (保持开启服务状态的话可以不用这步)
###### 4.在package.json文件detox配置中，检查及修改真机adbName。adbName在运行2命令的末尾会打印出来。
###### 4.detox build -c android.emu.debug
###### 5.detox test -c android.emu.debug


##### 注意0：
###### testID必须全局唯一。

##### 注意1：
###### Android支持模拟器和真机运行测试；
###### iOS只支持模拟器，不支持真机运行。

##### 注意2：
###### 1.亲自测试，不需要每次修改都重新detox build，修改后直接执行detox test即可。
###### 2.可以创建多个*.spec.js文件，默认运行所有spec.js文件，如果想只运行单个，则执行
######     detox test -c android.emu.debug e2e/home.spec.js
######     亲测可行。
