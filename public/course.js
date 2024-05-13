const courses = document.getElementById("courses");

const courseIds = [
  "html",
  "css",
  "js",
  "bootstrap",
  "react",
  "nodejs",
  "php",
  "ml",
  "da",
  "dl",
  "python",
  "java",
  "cpp",
  "c#"
];

const videoData = {};

fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=kUMe1FH4CHE,ieTHC78giGQ,lfmg-EJ8gm4,-qfEOE4vtxE,CgkZ7MvWUAA,pkg0J6lpKT4,zZ6vybT1HQs,i_LwzRVP7bg,PSNXoAs2FtQ,DooxDIRAkPA,nLRL_NcnK-4,A74TOX803D0,-TkoO8Z07hI,YrtFtdTTfv0&key=AIzaSyAR6Vdoewih4gngsXjGA9EGjG6dGkC1v9Y')
  .then(response => response.json())
  .then(data => {
    courseIds.forEach((id, index) => {
      videoData[id] = {
        title: data.items[index].snippet.title,
        description: data.items[index].snippet.description,
        videoId: data.items[index].id,
      };
    });

    const courseHome = document.querySelectorAll("li");
    courseHome.forEach(coursehome => {
      coursehome.addEventListener("click", () => {
        courses.style.display = "none";
        sessionStorage.removeItem("selectedCourse");
      });
    })
    
    

    courseIds.forEach(id => {
      const courseElement = document.getElementById(id);
      courseElement.addEventListener("click", () => {
        courses.style.display = "none";
        sessionStorage.setItem("selectedCourse", id);
        loadContent(id);
      });
    });

    const storedCourse = sessionStorage.getItem('selectedCourse');

    if(storedCourse){
      courses.style.display = "none";
      loadContent(storedCourse);
    }
  })
  .catch(error => console.error('Error fetching video data:', error));

function loadContent(courseId){
  const temp = document.getElementById("course-clicked").content;
  const copyContent = document.importNode(temp, true);

  copyContent.querySelector("#title").textContent = videoData[courseId].title;
  const formattedDescription = formatDescription(videoData[courseId].description);
  copyContent.querySelector("#description").innerHTML = formattedDescription;
  copyContent.querySelector("#video").setAttribute("src", `https://www.youtube.com/embed/${videoData[courseId].videoId}`)

  if(courseId == "html" || courseId == "css" || courseId =="js" ||courseId == "bootstrap" || courseId == "react" || courseId == "nodejs" || courseId == "php"){
    copyContent.querySelector("#relatedt1").textContent = webdevCourse['html'].title;
    copyContent.querySelector("#relatedc1").setAttribute("src", `assets/img/courses/${webdevCourse['html'].img}`);
    let bgcolor = copyContent.querySelector("#raltedbg1");
    bgcolor.classList.add(webdevCourse['html'].bg);
    let courseSuggestion = copyContent.querySelector("#course1");
    courseSuggestion.classList.add(webdevCourse['html'].course);

    copyContent.querySelector("#relatedt2").textContent = webdevCourse['css'].title;
    copyContent.querySelector("#relatedc2").setAttribute("src", `assets/img/courses/${webdevCourse['css'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg2");
    bgcolor.classList.add(webdevCourse['css'].bg);
    courseSuggestion = copyContent.querySelector("#course2");
    courseSuggestion.classList.add(webdevCourse['css'].course);

    copyContent.querySelector("#relatedt3").textContent = webdevCourse['js'].title;
    copyContent.querySelector("#relatedc3").setAttribute("src", `assets/img/courses/${webdevCourse['js'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg3");
    bgcolor.classList.add(webdevCourse['js'].bg);
    courseSuggestion = copyContent.querySelector("#course3");
    courseSuggestion.classList.add(webdevCourse['js'].course);
   
    copyContent.querySelector("#relatedt4").textContent = webdevCourse['bootstrap'].title;
    copyContent.querySelector("#relatedc4").setAttribute("src", `assets/img/courses/${webdevCourse['bootstrap'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg4");
    bgcolor.classList.add(webdevCourse['bootstrap'].bg);
    courseSuggestion = copyContent.querySelector("#course4");
    courseSuggestion.classList.add(webdevCourse['bootstrap'].course);
    
    copyContent.querySelector("#relatedt5").textContent = webdevCourse['react'].title;
    copyContent.querySelector("#relatedc5").setAttribute("src", `assets/img/courses/${webdevCourse['react'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg5");
    bgcolor.classList.add(webdevCourse['react'].bg);
    courseSuggestion = copyContent.querySelector("#course5");
    courseSuggestion.classList.add(webdevCourse['react'].course);
  }

  else if(courseId == "ml" || courseId == "da" || courseId =="dl"){
    copyContent.querySelector("#relatedt1").textContent = machines['ml'].title;
    copyContent.querySelector("#relatedc1").setAttribute("src", `assets/img/courses/${machines['ml'].img}`);
    let bgcolor = copyContent.querySelector("#raltedbg1");
    bgcolor.classList.add(machines['ml'].bg);
    let courseSuggestion = copyContent.querySelector("#course1");
    courseSuggestion.classList.add(machines['ml'].course);

    copyContent.querySelector("#relatedt2").textContent = machines['da'].title;
    copyContent.querySelector("#relatedc2").setAttribute("src", `assets/img/courses/${machines['da'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg2");
    bgcolor.classList.add(machines['da'].bg);
    courseSuggestion = copyContent.querySelector("#course2");
    courseSuggestion.classList.add(machines['da'].course);

    copyContent.querySelector("#relatedt3").textContent = machines['dl'].title;
    copyContent.querySelector("#relatedc3").setAttribute("src", `assets/img/courses/${machines['dl'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg3");
    bgcolor.classList.add(machines['dl'].bg);
    courseSuggestion = copyContent.querySelector("#course3");
    courseSuggestion.classList.add(machines['dl'].course);
   
    copyContent.querySelector("#relatedt4").textContent = machines['python'].title;
    copyContent.querySelector("#relatedc4").setAttribute("src", `assets/img/courses/${machines['python'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg4");
    bgcolor.classList.add(machines['python'].bg);
    courseSuggestion = copyContent.querySelector("#course4");
    courseSuggestion.classList.add(machines['python'].course);
    
    copyContent.querySelector("#relatedt5").textContent = machines['cpp'].title;
    copyContent.querySelector("#relatedc5").setAttribute("src", `assets/img/courses/${machines['cpp'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg5");
    bgcolor.classList.add(machines['cpp'].bg);
    courseSuggestion = copyContent.querySelector("#course5");
    courseSuggestion.classList.add(machines['cpp'].course);
  }

  else if(courseId == "python" || courseId == "java" || courseId =="cpp" || courseId == 'c#'){
    copyContent.querySelector("#relatedt1").textContent = proglanguages['python'].title;
    copyContent.querySelector("#relatedc1").setAttribute("src", `assets/img/courses/${proglanguages['python'].img}`);
    let bgcolor = copyContent.querySelector("#raltedbg1");
    bgcolor.classList.add(proglanguages['python'].bg);
    let courseSuggestion = copyContent.querySelector("#course1");
    courseSuggestion.classList.add(proglanguages['python'].course);

    copyContent.querySelector("#relatedt2").textContent = proglanguages['java'].title;
    copyContent.querySelector("#relatedc2").setAttribute("src", `assets/img/courses/${proglanguages['java'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg2");
    bgcolor.classList.add(proglanguages['java'].bg);
    courseSuggestion = copyContent.querySelector("#course2");
    courseSuggestion.classList.add(proglanguages['java'].course);

    copyContent.querySelector("#relatedt3").textContent = proglanguages['cpp'].title;
    copyContent.querySelector("#relatedc3").setAttribute("src", `assets/img/courses/${proglanguages['cpp'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg3");
    bgcolor.classList.add(proglanguages['cpp'].bg);
    courseSuggestion = copyContent.querySelector("#course3");
    courseSuggestion.classList.add(proglanguages['cpp'].course);
   
    copyContent.querySelector("#relatedt4").textContent = proglanguages['c#'].title;
    copyContent.querySelector("#relatedc4").setAttribute("src", `assets/img/courses/${proglanguages['c#'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg4");
    bgcolor.classList.add(proglanguages['c#'].bg);
    courseSuggestion = copyContent.querySelector("#course4");
    courseSuggestion.classList.add(proglanguages['c#'].course);
    
    copyContent.querySelector("#relatedt5").textContent = proglanguages['php'].title;
    copyContent.querySelector("#relatedc5").setAttribute("src", `assets/img/courses/${proglanguages['php'].img}`);
    bgcolor = copyContent.querySelector("#raltedbg5");
    bgcolor.classList.add(proglanguages['php'].bg);
    courseSuggestion = copyContent.querySelector("#course5");
    courseSuggestion.classList.add(proglanguages['php'].course);
  }
  
  const course1 = copyContent.querySelector("#course1");
  course1.addEventListener("click", () => {
    sessionStorage.removeItem("selectedCourse");
    loadContent(course1.classList.item(10))
    document.getElementById("displayCourse").remove(copyContent);
    const selectedCourse = course1.classList.item(10);
    sessionStorage.setItem("selectedCourse", selectedCourse);
    window.location.reload();
  });

  const course2 = copyContent.querySelector("#course2");
  course2.addEventListener("click", () => {
    sessionStorage.removeItem('selectedCourse');
    loadContent(course2.classList.item(10));
    document.getElementById("displayCourse").remove(copyContent);
    const selectedCourse = course2.classList.item(10);
    sessionStorage.setItem("selectedCourse", selectedCourse);
    window.location.reload();
  });

  const course3 = copyContent.querySelector("#course3");
  course3.addEventListener("click", () => {
    sessionStorage.removeItem('selectedCourse');
    loadContent(course3.classList.item(10));
    document.getElementById("displayCourse").remove(copyContent);
    const selectedCourse = course3.classList.item(10);
    sessionStorage.setItem("selectedCourse", selectedCourse);
    window.location.reload();
  });

  const course4 = copyContent.querySelector("#course4");
  course4.addEventListener("click", () => {
    sessionStorage.removeItem('selectedCourse');
    loadContent(course4.classList.item(10));
    document.getElementById("displayCourse").remove(copyContent);
    const selectedCourse = course4.classList.item(10);
    sessionStorage.setItem("selectedCourse", selectedCourse);
    window.location.reload();
  });

  const course5 = copyContent.querySelector("#course5");
  course5.addEventListener("click", () => {
    sessionStorage.removeItem('selectedCourse');
    loadContent(course5.classList.item(10))
    document.getElementById("displayCourse").remove(copyContent);
    const selectedCourse = course5.classList.item(10);
    sessionStorage.setItem("selectedCourse", selectedCourse);
    window.location.reload();
  });
  
  document.getElementById("displayCourse").append(copyContent);
}

function formatDescription(text){
  text = text.replace(/\n/g, "<br>");

  return text;
}

let webdevCourse = ({
  "html": {
      title: "Complete HTML Guide Beginner to Advance - Self Paced",
      img: "html.png",
      bg: "bg-orange-400",
      course: "html",
  }, 
  "css": {
    title: "Complete CSS Guide Beginner to Advance - Self Paced",
    img: "css.png",
    bg: "bg-blue-500",
    course: "css",
  }, 
  "js": {
    title: "Complete JavaScript Guide Beginner to Advance - Self Paced",
    img: "javascript.png",
    bg: "bg-yellow-300",
    course: "js",
  },
  "bootstrap": {
    title: "Complete Bootstrap Guide Beginner to Advance - Self Paced",
    img: "boostrap.png",
    bg: "bg-purple-400",
    course: "bootstrap",
  },
  "react": {
    title: "Complete React Guide Beginner to Advance - Self Paced",
    img: "react.png",
    bg: "bg-cyan-700",
    course: "react",
  }
})

let machines = ({
  "ml": {
      title: "Complete Machine Guide Beginner to Advance - Self Paced",
      img: "machinelearning.png",
      bg: "bg-neutral-600",
      course: "ml",
  }, 
  "da": {
    title: "Complete Data Analysis Guide Beginner to Advance - Self Paced",
    img: "dataanalysis.png",
    bg: "bg-blue-200",
    course: "da",
  }, 
  "dl": {
    title: "Complete Deep Learning Guide Beginner to Advance - Self Paced",
    img: "deeplearning.png",
    bg: "bg-blue-900",
    course: "dl",
  },
  "python": {
    title: "Complete Python Guide Beginner to Advance - Self Paced",
    img: "python.png",
    bg: "bg-yellow-500",
    course: "python",
  },
  "cpp": {
    title: "Complete C++ Guide Beginner to Advance - Self Paced",
    img: "c++.png",
    bg: "bg-blue-950",
    course: "cpp",
  }
})

let proglanguages = ({
  "python": {
      title: "Complete Machine Guide Beginner to Advance - Self Paced",
      img: "python.png",
      bg: "bg-yellow-500",
      course: "ml",
  }, 
  "java": {
    title: "Complete Java Guide Beginner to Advance - Self Paced",
    img: "j1.png",
    bg: "bg-orange-300",
    course: "java",
  }, 
  "cpp": {
    title: "Complete C++ Guide Beginner to Advance - Self Paced",
    img: "c++.png",
    bg: "bg-blue-950",
    course: "cpp",
  },
  "c#": {
    title: "Complete C# Guide Beginner to Advance - Self Paced",
    img: "csharp.png",
    bg: "bg-purple-500",
    course: "c#",
  },
  "php": {
    title: "Complete PHP Guide Beginner to Advance - Self Paced",
    img: "php.png",
    bg: "bg-indigo-950",
    course: "php",
  }
})

window.addEventListener("beforeunload", function(event) {
  window.scrollTo(0, 0); 
});