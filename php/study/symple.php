
<?php
    // 双引号执行转义字符而单引号不执行转义字符。
    // $string = "11111\n222\t3333";
    // echo $string;
    // $string = '11111\n222\t3333';
    // echo $string;
    
    // 转义字符的
    //要在$beizi的字符串中显示一个双引号怎么办？
    // $beizi = "多于绝大多数的人出生就是杯具，但是\"我们在不断的让人生变为喜剧";
    // $produce ="I\'m a student";
    // echo $produce;
    // echo $beizi;

    // 单双引号混用
    // $legend = '猛虎';
    // $NoAlike = "心有'$legend'，细嗅蔷薇";
    // echo $NoAlike;

    // 连接字符串
    // $shizi = '大学四年好好生活';
    // $happy = '真的开心啊？';
    // $str = $shizi . $happy;

    // echo $str;

    /*
    主要有以下三空情况会产生空（null）类型：

    1.通过变量赋值明确指定为变量的值为NULL

    2.一个变量没有给任何值

    3.使用函数unset()将变量销毁掉
     */
    //empty unset isset
    // $isflag = NULL;
    // echo empty($isflag);

    // $hasB = 'happy';
    // echo empty($hasB);
    // unset($hasB); //将变量销毁掉
    // echo empty($hasB);

    // $num1 = 1;
    // $num2 = 2;
    // $num3 = 3;
    // // echo isset($num1,$num2,$num3);
    // // isset()可以向括号中间传入一个或者多个变量，变量与变量间用逗号分开。只要有有一个变量为null，则返回false。否则，则返回true。
    // unset($num2);
    // echo isset($num1,$num2,$num3);

    //array
    $arr = array(1,2,3);
    var_dump($arr);
?>