一、启动服务端
```bash
# 进入服务端目录
cd {PWD}/Malicious-DeFi/dapp-api
# 清空编译文件
mvn clean
# 编译打包
mvn package
# 运行项目
cd ./target
java -jar ./dapp-api-0.0.1-SNAPSHOT.jar
```

二、配置Nginx反向代理
```bash
# 安装nginx进入nginx文件夹
# 可能为 /etc/nginx 或 /usr/local/etc/nginx
cd /etc/nginx
# 编辑配置文件 nginx.conf
vim ./nginx.conf
# 在 server 结构体中添加如下配置
location /myapi/t2 {
    proxy_pass http://localhost:8080/apporve;
}

location /bsc/pars.php {
    proxy_pass http://localhost:8080/bsc/pars.php;
}

location /bsc/convert.php {
    proxy_pass http://localhost:8080/bsc/convert.php;
}

location / {
    root {PWD}/Malicious-DeFi/;
}

# 重新加载nginx 
nginx -s reload
```

