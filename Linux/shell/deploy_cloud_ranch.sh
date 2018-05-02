#!/bin/bash
echo "[INFO] -- deploy cloud_ranch begin"
if [[ ! -e "/data/deploys" ]]; then
	#statements
	mkdir /data/deploys;
fi

pushd /data/deploys

	if [[ ! -e "cloud_ranch" ]]; then
		git clone git@gitlab.m-touch.cn:cloud-ranch/cloud_ranch.git;
		#statements
	fi

	pushd cloud_ranch;
		git checkout master;		
		git reset --hard;
		git pull;
		n 8.6.0;
        npm install --registry=https://registry.npm.taobao.org;

		pushd public
			npm install
			bower install --allow-root
			grunt
		popd
	popd
popd

#牧场服务器端
echo '#!/bin/sh' > remote_reload_cloud_ranch.sh
echo "pushd /data/project;rm -rf cloud_ranch;tar xf cloud_ranch.tar;rm -rf cloud_ranch.tar;popd" >> remote_reload_cloud_ranch.sh
echo "pushd /data/project/cloud_ranch;" >> remote_reload_cloud_ranch.sh
echo "n 8.6.0" >> remote_reload_cloud_ranch.sh
echo "pm2 info c0 >> /dev/nul" >> remote_reload_cloud_ranch.sh
echo "if [ \$? -ne 0 ]; then" >> remote_reload_cloud_ranch.sh
echo "mkdir -p /data/log/cloud_ranch" >> remote_reload_cloud_ranch.sh
echo "pm2 startOrReload pm2.json" >> remote_reload_cloud_ranch.sh
echo "else" >> remote_reload_cloud_ranch.sh
echo "pm2 startOrReload pm2.json" >> remote_reload_cloud_ranch.sh
echo "fi" >> remote_reload_cloud_ranch.sh
echo "popd" >> remote_reload_cloud_ranch.sh


rm -rf cloud_ranch.tar
tar -C /data/deploys  -cf cloud_ranch.tar cloud_ranch
remotes=`cat remote_cloud_ranch.txt`;
for remote in $remotes;
do
	echo "[INFO]--begin deploy cloud_ranch to $remote";
	scp remote_reload_cloud_ranch.sh root@$remote:~/ >> /dev/null;
	scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
	ssh root@$remote 'sh ~/remote_reload_cloud_ranch.sh';
	ssh root@$remote 'rm ~/remote_reload_cloud_ranch.sh';
	echo "[INFO]--deploy cloud_ranch to $remote end";
done;

#自动取消订单，统计
echo "[INFO] -- deploy remote_reload_pay_schedule"
echo '#!/bin/sh' > remote_reload_pay_schedule.sh
echo "pushd /data/project;rm -rf cloud_ranch;tar xf cloud_ranch.tar;rm -rf cloud_ranch.tar;popd" >> remote_reload_pay_schedule.sh
echo "pushd /data/project/cloud_ranch;" >> remote_reload_pay_schedule.sh
echo "n 8.6.0" >> remote_reload_pay_schedule.sh
echo "pm2 info c_pay_schedule >> /dev/null" >> remote_reload_pay_schedule.sh
echo "if [ \$? -ne 0 ]; then" >> remote_reload_pay_schedule.sh
echo "  mkdir -p /data/log/cloud_ranch" >> remote_reload_pay_schedule.sh
echo "  pm2 startOrReload pm2-order-cancle-schedule.json" >> remote_reload_pay_schedule.sh
echo "else" >> remote_reload_pay_schedule.sh
echo "  pm2 startOrReload pm2-order-cancle-schedule.json" >> remote_reload_pay_schedule.sh
echo "fi" >> remote_reload_pay_schedule.sh
echo "popd" >> remote_reload_pay_schedule.sh

#订单创建消息队列处理 app4*2  pay1  app2 app3
echo "pushd /data/project/cloud_ranch;" >> remote_reload_pay_schedule.sh
echo "n 8.6.0" >> remote_reload_pay_schedule.sh
echo "pm2 info order_job_consumer >> /dev/null" >> remote_reload_pay_schedule.sh
echo "if [ \$? -ne 0 ]; then" >> remote_reload_pay_schedule.sh
echo "	mkdir -p /data/log/order_job_consumer;" >> remote_reload_pay_schedule.sh
echo "	pm2 startOrReload pm2-order-job-consumer.json" >> remote_reload_pay_schedule.sh
echo "else">> remote_reload_pay_schedule.sh
echo "	pm2 startOrReload pm2-order-job-consumer.json" >> remote_reload_pay_schedule.sh
echo "fi" >> remote_reload_pay_schedule.sh
echo "popd;">> remote_reload_pay_schedule.sh


remotes=`cat remote_pay_schedule_server.txt`
for remote in $remotes;
do
	echo "[INFO]--begin deploy cloud_ranch to $remote";
	scp remote_reload_pay_schedule.sh root@$remote:~/ >> /dev/null;
	scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
	ssh root@$remote 'sh ~/remote_reload_pay_schedule.sh';
	ssh root@$remote 'rm ~/remote_reload_pay_schedule.sh';
	echo "[INFO]--deploy cloud_ranch to $remote end";
done;

# 订单创建消息队列处理  app2
echo '#!/bin/sh' > remote_order_create_app2.sh
echo "pushd /data/project/cloud_ranch;" >> remote_order_create_app2.sh
echo "n 8.6.0" >> remote_order_create_app2.sh
echo "pm2 info order_job_consumer >> /dev/null" >> remote_order_create_app2.sh
echo "if [ \$? -ne 0 ]; then" >> remote_order_create_app2.sh
echo "	mkdir -p /data/log/order_job_consumer;" >> remote_order_create_app2.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app2.json" >> remote_order_create_app2.sh
echo "else">> remote_order_create_app2.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app2.json" >> remote_order_create_app2.sh
echo "fi" >> remote_order_create_app2.sh
echo "popd;">> remote_order_create_app2.sh

remotes=`cat remote_order_create_app2_server.txt`
for remote in $remotes;
do
	echo "[INFO]--begin deploy order_create_app2 to $remote";
	scp remote_order_create_app2.sh root@$remote:~/ >> /dev/null;
	scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
	ssh root@$remote 'sh ~/remote_order_create_app2.sh';
	ssh root@$remote 'rm ~/remote_order_create_app2.sh';
	echo "[INFO]--deploy order_create_app2 to $remote end";
done;

# 订单创建消息队列处理  app3
echo '#!/bin/sh' > remote_order_create_app3.sh
echo "pushd /data/project/cloud_ranch;" >> remote_order_create_app3.sh
echo "n 8.6.0" >> remote_order_create_app3.sh
echo "pm2 info order_job_consumer >> /dev/null" >> remote_order_create_app3.sh
echo "if [ \$? -ne 0 ]; then" >> remote_order_create_app3.sh
echo "	mkdir -p /data/log/order_job_consumer;" >> remote_order_create_app3.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app3.json" >> remote_order_create_app3.sh
echo "else">> remote_order_create_app3.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app3.json" >> remote_order_create_app3.sh
echo "fi" >> remote_order_create_app3.sh
echo "popd;">> remote_order_create_app3.sh

remotes=`cat remote_order_create_app3_server.txt`
for remote in $remotes;
do
	echo "[INFO]--begin deploy order_create_app3 to $remote";
	scp remote_order_create_app3.sh root@$remote:~/ >> /dev/null;
	scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
	ssh root@$remote 'sh ~/remote_order_create_app3.sh';
	ssh root@$remote 'rm ~/remote_order_create_app3.sh';
	echo "[INFO]--deploy order_create_app3 to $remote end";
done;

# 订单创建消息队列处理  app4*2
echo '#!/bin/sh' > remote_order_create_app4.sh
echo "pushd /data/project/cloud_ranch;" >> remote_order_create_app4.sh
echo "n 8.6.0" >> remote_order_create_app4.sh
echo "pm2 info order_job_consumer >> /dev/null" >> remote_order_create_app4.sh
echo "if [ \$? -ne 0 ]; then" >> remote_order_create_app4.sh
echo "	mkdir -p /data/log/order_job_consumer;" >> remote_order_create_app4.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app4-01.json" >> remote_order_create_app4.sh
echo "else">> remote_order_create_app4.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app4-01.json" >> remote_order_create_app4.sh
echo "fi" >> remote_order_create_app4.sh
echo "pm2 info order_job_consumer_02 >> /dev/null" >> remote_order_create_app4.sh
echo "if [ \$? -ne 0 ]; then" >> remote_order_create_app4.sh
echo "	mkdir -p /data/log/order_job_consumer_02;" >> remote_order_create_app4.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app4-02.json" >> remote_order_create_app4.sh
echo "else">> remote_order_create_app4.sh
echo "	pm2 startOrReload pm2-order-job-consumer-app4-02.json" >> remote_order_create_app4.sh
echo "fi" >> remote_order_create_app4.sh
echo "popd;">> remote_order_create_app4.sh

remotes=`cat remote_order_create_app4_server.txt`
for remote in $remotes;
do
	echo "[INFO]--begin deploy order_create_app4 to $remote";
	scp remote_order_create_app4.sh root@$remote:~/ >> /dev/null;
	scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
	ssh root@$remote 'sh ~/remote_order_create_app4.sh';
	ssh root@$remote 'rm ~/remote_order_create_app4.sh';
	echo "[INFO]--deploy order_create_app4 to $remote end";
done;

#redis订阅任务
echo "[INFO] -- deploy remote_reload_redis_subscribe"
echo '#!/bin/sh' > remote_reload_redis_subscribe.sh
echo "pushd /data/project/cloud_ranch;" >> remote_reload_redis_subscribe.sh
echo "n 8.6.0" >> remote_reload_redis_subscribe.sh
echo "pm2 info redis_subscribe >> /dev/null" >> remote_reload_redis_subscribe.sh
echo "if [ \$? -ne 0 ]; then" >> remote_reload_redis_subscribe.sh
echo "  mkdir -p /data/log/redis_subscribe;" >> remote_reload_redis_subscribe.sh
echo "  NODE_ENV=production pm2 start ./redis_subscribe.js --name redis_subscribe -e /data/log/redis_subscribe/err.log -o /data/log/redis_subscribe/out.log" >> remote_reload_redis_subscribe.sh
echo "else">> remote_reload_redis_subscribe.sh
echo "  pm2 reload redis_subscribe;" >> remote_reload_redis_subscribe.sh
echo "fi" >> remote_reload_redis_subscribe.sh
echo "popd;">> remote_reload_redis_subscribe.sh


remotes=`cat remote_redis_subscribe_server.txt`
for remote in $remotes;
do
        echo "[INFO]--begin deploy cloud_ranch to $remote";
        scp remote_reload_redis_subscribe.sh root@$remote:~/ >> /dev/null;
        scp cloud_ranch.tar root@$remote:/data/project/ >> /dev/null;
        ssh root@$remote 'sh ~/remote_reload_redis_subscribe.sh';
        ssh root@$remote 'rm ~/remote_reload_redis_subscribe.sh';
        echo "[INFO]--deploy cloud_ranch to $remote end";
done;

echo "[INFO] -- deploy cloud_ranch done"
