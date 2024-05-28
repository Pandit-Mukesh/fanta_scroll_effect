gsap.from(".center-nav a ,#logoimage",{
	y:-30,
	duration:.5,
	delay:1,
	stagger:.15,
	opacity:0

})
var t1 = gsap.timeline({scrollTrigger:{
		trigger:".two",
		start:"0% 95%",
		end:"50% 50%",
		scrub:true,
		
			}})

	t1.to("#fanta",{
		top:"110%",
		left:"10%"
	},"orange")
	t1.to("#orange-cut",{
		top:"160%",
		left:"28%"
	},"orange")

	t1.to("#orange",{
		top:"175%",
		left:"80%",
		width:"15%"
	},"orange")

	t1.to("#leaf",{
		top:"120%",
		left:"10%",
		width:"15%",
		rotate:"-90%"
	},"orange")
	t1.to("#leaf3",{
		top:"170%",
		rotate:"10%",
		width:"13%"
	},"orange")
	t1.to("#green-leave",{
		top:"110%",
		left:"70%",
		rotate:"120%"
	},"orange")

	t1.from(".right-two h1",{
		x:-100,
		opacity:"0",
		duration:0.5,
		delay:.7
	},"right-two")
      t1.from(".right-two p",{
		x:-100,
		opacity:"0",
		duration:0.5,
		delay:.7
	},"right-two")
      t1.from(".right-two button",{
		x:-100,
		opacity:"0",
		duration:0.5,
		delay:.7
	},"right-two")


	var t2 = gsap.timeline({scrollTrigger:{
		trigger:".three",
		start:"0% 95%",
		end:"50% 50%",
		scrub:true,
		
	}})
   t2.to("#fanta",{
   	top:"225%",
   	left:"40%",
   	width:"20%"
   },"orange")
	t2.to("#orange-cut",{
   	top:"205%",
   	left:"40%",
   	width:"20%"
   },"orange")

	t2.from("#cocacola",{
		opacity:"0",
		y:"50%",
		x:"-20%",
		rotate:"30%"
	},"orange")

	t2.from(".lemon",{
		opacity:"0",
		y:"50%",
		x:"-20%"
	},"orange")
	t2.from("#sprite",{
		opacity:"0",
		y:"100%",
		x:"20%",
		rotate:"-30%"
	},"orange")

	