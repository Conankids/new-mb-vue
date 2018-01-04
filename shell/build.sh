#!/usr/bin/env bash

if [ ${#@} == 0 ];then
    echo '请输入打目标包'
    exit -1
fi

BASE_PATH='/Users/jiangzg/PhpstormProjects/JIGUO'
echo -e "\n切换目录:${BASE_PATH}/jiguo\n"
cd ${BASE_PATH}/jiguo

string=`git status`

findstr='nothing to commit, working tree clean'

#获取当前分支名称
CURRENT_BRANCH=(${string:10})

# 检测是否在 master 主分支
masterStr=${string:10:6}

if [ "$masterStr" == "master" ];then
    echo "Git正在处于master分支，不允许打包"
    exit 0
fi

hasStr=${string:(-${#findstr})}

if [ "$hasStr" != "$findstr" ];then
    echo "Git工作区不干净"
    exit 0
fi

#读取注释
echo "请输入提交信息："
read COMMIT_TEXT
while [ ${#COMMIT_TEXT} -le 0 ]
do
    echo "请输入提交信息："
    read COMMIT_TEXT
done

#删除master分支
git branch -D master

#拉取远程主分支
echo -e "\n正在执行git fetch origin master:master\n"
git fetch origin master:master
if [ $? -ne 0 ]; then
    echo "拉取远程主分支失败"
    exit 0
fi

ARRAY_PARAM=$@
BRANCH_NAME_TEMP='j-system-auto-build-'${ARRAY_PARAM[@]:0}-`date`-${RANDOM}
BRANCH_NAME=${BRANCH_NAME_TEMP//[\-\: ]/-}

git checkout master

git checkout -b ${BRANCH_NAME}

cd ${BASE_PATH}/mb_new_vue/home

if [ ${#@} == 0 ];then
        echo '请输入打目标包'
    else
       command_dnot_clear=''
       for arg in "$@";do
            echo '正在打包'${arg} ${command_dnot_clear}
            npm run build ${arg} ${command_dnot_clear}
            command_dnot_clear='command-dnot-clear'
       done
fi





