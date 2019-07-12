<?php
    // phpinfo();
    // 查看数据类型 gettype var_dump
    // $num = 1;
    // echo gettype($num);
    // var_dump($num);

    // 判断数据类型

    /**
     * is_int 是否为整型
     * is_bool 是否为不二
     * is_float 是否为浮点
     * is_string 是否为字符串
     * is_array 是否是数组
     * is_object 是否是对象
     * id_null 是否为空
     * is_resource 是否为资源
     * is_scalar 是否为标量
     * is_numeric 是否为数值类型
     * is_callable 是否为函数
     */
    /**
     * 注：is_types 很好记。is_ 在前后面跟类型即可。
     *     变量：整型（int） 浮点（float）、布尔（bool）、字符串（string）
     * 混合类型： 数组（array）、对象（object）
     * 特殊类型：空（null）、 资源（resouce）、回调（callback）
     * 为什么最后的实验中echo执行假区间呢？
     * 答：因为echo 不是函数，是基本语法。大家眼前可以不用理解函数和基本语法的区别。了解和不了解在实际开发中没有影响。知道有这个知识点就行。
     * 
     */

     /**
      * 布尔值的自动类型转换
      
      */

      /**
       * 整形的0为假 ，其它整型值为真
       * 浮点数的0.0为真，其它为真
       * 空字符串为假，其它为真
       * 空字符串0也为假
       */
    //   $estr = '0';
    //   if(is_bool($estr)){
    //       echo 'true';
    //   }else 
    //     echo 'false';

    // $arr = array();
    // if(is_bool($arr)){
    //     echo 'true';
    // }else 
    //     echo 'false';

    // 类型转换 自动类型转换
    // $numstr ='123都租';
    // $total = $numstr +10;
    // echo ($total);

    // 强制类型转换
    /**
     * 1 使用函数进行转换 intval() floatval() strval()
     * 2 直接在前面强制类型转换 （int）2.3
     * 3 settype 类型转换
     */
    // $num = 1.23;
    // $intnum = intval($num);
    // echo $intnum;
    // $floatnum = floatval($intnum);
    // var_dump($floatnum);
    // $strnum = strval($floatnum);
    // var_dump($strnum);

    // $num = 1.23;
    // $intnum = (int)$num;
    // echo $intnum;

    // $floatnum = (float)$intnum;
    // var_dump($floatnum);
    
    // $strnum =(string)$floatnum;
    // var_dump($strnum);

    // $arrnum = (array)$floatnum;
    // var_dump($arrnum);

    // $fnum = 110.23;
    // settype($fnum,'int'); //直接改变变量的类型
    // var_dump($fnum);
    // echo '123';

    // $empty = null;
    // $eint  = (int)$empty;
    // var_dump($eint);
    
    // $fempty = (float)$empty;
    // var_dump($fempty);
    
    // $strempty =(string)$empty;
    // var_dump($strempty);
    // echo "<br/>";
    // $float = 123.0;
    // $strfloat = (string)$float;
    // var_dump($strfloat);
    // echo "\t";
    // $dfloat = 123.1;
    // $strdfloat = (string)$dfloat;
    // var_dump($strdfloat);


    define('MY_NAME','PHP中文网');

    echo MY_NAME;
    //下面是错误的调用方式
    echo '我的名字是MY_NAME';
    //正确的调用方式该这么写
    echo '我的名字是' . MY_NAME;
    echo "\n";

    define( 'VERSION1' ,'1.2.3');
    define( 'VERSION2' ,'123.364');
    echo VERSION1 . "\t" . VERSION2;
    echo 'LINE';
    echo 'FILE';

    
?>