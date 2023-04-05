function signup(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm-password").value;

    var user = {
        username: username,
        email: email,
        password: password,
        confirm: confirm,
    };

    if (confirm == password) {
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("Sign up successfully")
        window.location.replace("../html/Login.html")
    }
    else {
        alert("Password did not match")
        return false
    }
}

function login(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username)
    var data = JSON.parse(user)

    if (username == data.username && password == data.password) {
        alert("Log in successfully")
        window.location.replace("./Intro.html")
    }
    else {
        alert("Wrong username or password")
        return false
    }
}

function buttonHandler(x) {
    x.classList.toggle("fa-square")
    x.classList.toggle("fa-square-check")
}

document.getElementById("login").onclick = function () {
    setTimeout(() => {
        window.location = "./Login.html"
    }, 500);
}

document.getElementById("signup").onclick = function () {
    setTimeout(() => {
        window.location = "./SignUp.html"
    }, 500);
}

function change() {
    let box1 = document.getElementById("box")
    let scrb1 = document.getElementById("scrbonus")
    let scr1 = document.getElementById("scr")
    let htextClass1 = document.getElementById("htext")
    let ptextClass1 = document.getElementById("ptext")
    if (box1.className=="c1"){
        box1.classList.remove("c1")
        box1.classList.add("c2")
        htextClass1.innerHTML="Welcome"
        ptextClass1.innerHTML="This is a small intro :3"
        preventDefault()
    }
    if (box1.className=="c2"){
        box1.classList.remove("c2")
        box1.classList.add("c3")
        htextClass1.innerHTML="Tutorial"
        ptextClass1.innerHTML="just click~~"
        
        preventDefault()
    }
    if (box1.className=="c3"){
        box1.classList.remove("c3")
        box1.classList.add("c4")
        scr1.src="../picture/TurorialScr2.png"
        ptextClass1.innerHTML="Well try to click 3 more time <br> for some explaination xd"
        preventDefault()
    }
    if (box1.className=="c4"){
        box1.classList.remove("c4")
        box1.classList.add("c5")
        ptextClass1.innerHTML="1~~"
        preventDefault()
    }
    if (box1.className=="c5"){
        box1.classList.remove("c5")
        box1.classList.add("c6")
        ptextClass1.innerHTML="2:D"
        scr1.src="../picture/TurorialScr3.png"
        preventDefault()
    }
    if (box1.className=="c6"){
        box1.classList.remove("c6")
        box1.classList.add("c7")
        ptextClass1.innerHTML="-3-"
        scr1.src="../picture/TurorialScr4.png"
        preventDefault()
    }
    if (box1.className=="c7"){
        box1.classList.remove("c7")
        box1.classList.add("c8")
        ptextClass1.innerHTML="So basically when you click the box,<br>it will color the picture for you"
        scr1.src="../picture/TurorialScr5.png"
        preventDefault()
    }
    if (box1.className=="c8"){
        box1.classList.remove("c8")
        box1.classList.add("c9")
        ptextClass1.innerHTML="Sometimes, it might open something interesting"
        scrb1.src="../picture/cryingcat.jpg"
        scr1.src="../picture/TurorialScr6.png"
        preventDefault()
    }
    if (box1.className=="c9"){
        box1.classList.remove("c9")
        box1.classList.add("c10")
        ptextClass1.innerHTML="When you fully colored the picture,<br>you will go to the next one"
        scrb1.src="../picture/nothing.png"
        preventDefault()
    }
    if (box1.className=="c10"){
        box1.classList.remove("c10")
        box1.classList.add("c11")
        htextClass1.innerHTML=""
        ptextClass1.innerHTML="Continue"
        scr1.src="../picture/TurorialScr7.png"
        preventDefault()
    }
    if (box1.className=="c11"){
        window.location = "./Main.html"
        preventDefault()
    }
}

function change2() {
    let box3 = document.getElementById("box3")
    let htextClass3 = document.getElementById("htext3")
  
    let box2 = document.getElementById("box2")
    let scrb2 = document.getElementById("scrbonus2")
    let scr2 = document.getElementById("scr2")
    let htextClass2 = document.getElementById("htext2")
    let ptextClass2 = document.getElementById("ptext2")
    if (box2.className=="d1"){
        box2.classList.remove("d1")
        box2.classList.add("d2")
        htextClass2.innerHTML="A little question"
        ptextClass2.innerHTML="What do you think happiness is?"
        preventDefault()
    }
    if (box2.className=="d2"){
        box2.classList.remove("d2")
        box2.classList.add("d3")
        htextClass2.innerHTML="For me"
        ptextClass2.innerHTML="Happiness is..."
        preventDefault()
    }
    if (box2.className=="d3"){
        box2.classList.remove("d3")
        box2.classList.add("d4")
        htextClass2.innerHTML="Happiness is..."
        ptextClass2.innerHTML="To have a clean work place :D"
        scr2.src="../picture/MainScr2.png"
        preventDefault()
    }
    if (box2.className=="d4"){
        box2.classList.remove("d4")
        box2.classList.add("d5")
        htextClass2.innerHTML="For me"
        ptextClass2.innerHTML="It bring the fresh asmosphere<br>while doing my work"
        scr2.src="../picture/MainScr3.png"
        preventDefault()
    }
    if (box2.className=="d5"){
        box2.classList.remove("d5")
        box2.classList.add("d6")
        htextClass2.innerHTML="Happiness is..."
        ptextClass2.innerHTML="To not be ashamed about your hobby"
        scr2.src="../picture/MainScr4.png"
        preventDefault()
    }
    if (box2.className=="d6"){
        box2.classList.remove("d6")
        box2.classList.add("d7")
        htextClass2.innerHTML="Happiness also is..."
        ptextClass2.innerHTML="To have a good schedule"
        scr2.src="../picture/MainScr5.png"
        preventDefault()
    }
    if (box2.className=="d7"){
        box2.classList.remove("d7")
        box2.classList.add("d8")
        htextClass2.innerHTML="How about you try doing it now?"
        ptextClass2.innerHTML=""
        preventDefault()
    }
    if (box2.className=="d8"){
        box2.classList.remove("d8")
        box2.classList.add("d9")
        htextClass2.innerHTML="Continue"
        ptextClass2.innerHTML=""
        box3.classList.add("d0")
        htextClass3.innerHTML="Click here to go<br>to schedule website"
        preventDefault()
    }
    if (box2.className=="d9"){
        box2.classList.remove("d9")
        box2.classList.add("d10")
        htextClass2.innerHTML="Beside, happiness is..."
        ptextClass2.innerHTML="Having a great amount of knowledge"
        box3.classList.remove("d0")
        htextClass3.innerHTML=""
        scr2.src="../picture/MainScr6.png"
        preventDefault()
    }
    if (box2.className=="d10"){
        box2.classList.remove("d10")
        box2.classList.add("d11")
        ptextClass2.innerHTML="Spending time doing your hobby"
        scr2.src="../picture/MainScr7.png"
        preventDefault()
    }
    if (box2.className=="d11"){
        box2.classList.remove("d11")
        box2.classList.add("d12")
        htextClass2.innerHTML="Not just about music but..."
        ptextClass2.innerHTML="Art, sport and even playing chess!"
        preventDefault()
    }
    if (box2.className=="d12"){
        box2.classList.remove("d12")
        box2.classList.add("d13")
        htextClass2.innerHTML="Also, happiness is..."
        ptextClass2.innerHTML="Being able to keep our inventory save"
        scr2.src="../picture/MainScr8.png"
        preventDefault()
    }
    if (box2.className=="d13"){
        box2.classList.remove("d13")
        box2.classList.add("d14")
        htextClass2.innerHTML="Finally, I want to tell you that..."
        ptextClass2.innerHTML="I hope you can realize or be able to find happiness in your live"
        scr2.src="../picture/MainScr9.png"
        preventDefault()
    }
    if (box2.className=="d14"){
        box2.classList.remove("d14")
        box2.classList.add("d15")
        ptextClass2.innerHTML="Thank you and Otsupika~ byebye~"
        scrb2.src="../picture/Pikamee.jpg"
        preventDefault()
    }
    if (box2.className=="d15"){
        scrb2.classList.add("secrect")
        preventDefault()
    }
    
}

function change3() {    
    window.location = "./Schedule.html"
    preventDefault()
}

function secrect() {
    let scrb2 = document.getElementById("scrbonus2")
    if (scrb2.className=="bonuspic2 secrect"){
        window.location = "./ThankYou.html"
        preventDefault()
    }
}