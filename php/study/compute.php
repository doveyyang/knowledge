<?php
    // 三元运算符和其它运算符

    // 此外还有一些特殊的运算符和符号，我们再来进行讲解。可能以后我们需要用到。

    // 符号	说明
    // $x? 真代码段:假代码段	判断是否为真假 ? 真情况 : 假情况;
    // ``（反引号）	反引号中间插代命令，执行系统命令，等价于shell_exec函数
    // @	单行抑制错误，把这一行的错误不让它显示出来了，效率低不建议使用
    // =>	数组下标访问符
    // ->	对象访问符
    // instanceof	判断某个对象是否来自某个类，如果是的返回true，如果不是返回false
    // echo 'hello world';

    // echo '<pre>';
    // echo `ipconfig`;  // 执行shell 脚本命令
    // echo '</pre>';
    
    // @$fp = fopen('adfsafasdfasfasdfdsadf.txt','r');

    $data = array('sina' => '新浪','sohu'=>'搜狐');
    // echo $data=>sina;

    //实例化一个对象
    // $obj = new StdClass();

    // //判断某对象是某由某个类实例化，如果是的则执行真
    // if($obj instanceof stdClass){
    //     echo '真';
    // }else{
    //     echo '假';
    // }
    // //向obj对象中追加一个成员属性为username
    // $obj -> username  = 'PHP中文网';
    // echo $obj -> username;

    $obj = new StdClass();
    if($obj instanceof StdClass){
        echo 'true';
    }else{
        echo 'false';
    }
    echo '<br />';
    $obj -> name = 'dovey';
    echo $obj -> name;

    // var_dump(StdClass);

?>