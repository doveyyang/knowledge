<?php
	// 输出变量
	echo 'hello world';

	// 申明变量
	$str = '滚犊子';
	$num = 123;
	$bFlag = true;

	echo $str;echo $num;echo $bFlag;

	// 定界符
	/*
	1).在变量后面的等号写三个小于号（<<<）。
	2).然后在<<<后面写上字符（建议英文大写字符）。如下例中的：ABC
	3).然后换行写上任意想写的字符
	4).写完后，顶行。在行最开始处，再写上<<<后面的字符和分号。如下例中的：ABC
	 */
	$dingjie = <<<ABC
		如果
			非要在这个滚犊子
		前
			面<br />
			加上一段
		<i>距离的话</i>
		我想说：<h1>思想有多远，你就跟我滚多远</h1>
ABC;
	//ABC; 必须首行最前面
	echo $dingjie;
	
	$Str = <<<GGG
		这是个什么鬼
				什么鬼
					么鬼
						鬼
		我可以在里面写html
		<h1>我是标题</h1>
GGG;
	echo "$Str";
	echo '$Str';
		/*
		【重要知识点】PHP面试题中，高概率面试题（建议背诵并实验三遍以上）

    1.双引号解析变量，但是单引号不解析变量。

    2.在双引号里面插入变量，变量后面如果有英文或中文字符，它会把这个字符和变量拼接起来，视为一整个变量。一定要在变          量后面接上特殊字符，例如空格等分开。

    3.如果在双引号里面插变量的时候，后面不想有空格，可以拿大括号将变量包起来。

    4.双引号解析转义字符，单引号不解析转义字符。但，单引号能解析\' 和\

    5.单引号效率高于双引号，尽可能使用单引号

    6.双号和单引号可以互插！！！双引号当中插入单引号，单引号当中插入变量，这个变量会被解析。

    7.神奇的字符串拼接胶水——（.）点，用来拼接字符串。

	8.我们将定界符声明字符串视为双引号一样的功能来看待。
	*/


	
?>