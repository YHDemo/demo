// JavaScript Document

//サンプル1
$(function(){
	$(".hoge1").css("color","blue")
});


//サンプル2A
$(function(){
	$(".hoge2A").click(function(){
		$(this).css("background-color","green")
	});
});

//サンプル2B
$(function(){
	$(".hoge2B").toggle(function(){
			$(this).css("background-color","green")
		},function(){
			$(this).css("background-color","yellow")
		},function(){
			$(this).css("background-color","red")
		},function(){
			$(this).css("background-color","orange")
		});
	});	
//サンプル2C
$(function(){
	$(".hoge2C").click(function(){
		$(this).hide()
	});
});

//サンプル2D
$(function(){
	$(".hoge2D").click(function(){
		$(this).fadeOut(2000)
	});
});

//サンプル3A
$(function(){
	$(".hoge3A").hover(function(){
		$(".pink").css("background","red")
		.text("はなすと ('(ﾟ∀ﾟ∩ もどるよ！")
	},function(){
		$(".pink").css("background","#FC9")
		.text("")
	});
});

//サンプル3B
$(function(){
	$(".hoge3B").toggle(function(){
		$(".hogehoge").slideUp("slow")
	},function(){
		$(".hogehoge").slideDown("fast")
	});
});

//サンプル4
$(function(){
	$("tr:nth-child(odd)").addClass("odd")
});