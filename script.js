const loginForm=document.getElementById("loginForm");
const loginMessage=document.getElementById("loginMessage");
const loginPage=document.getElementById("loginPage");
const mainProject=document.getElementById("mainProject");
loginForm.addEventListener("submit",function(e){e.preventDefault();
     const u=document.getElementById("username").value,p=document.getElementById("password").value;
     if(u==="admin"&&p==="1234"){loginMessage.textContent="Login successful!";
     loginPage.classList.add("hidden");
     mainProject.classList.remove("hidden")}
     else{loginMessage.textContent="Invalid username or password."}
}
);
     const students=[];
     const form=document.getElementById("studentForm"),
     tableBody=document.getElementById("studentTableBody"),
     search=document.getElementById("searchInput");
     form.addEventListener("submit",function(e){e.preventDefault();
          const marks=["english","maths","science","programming","dataStructure"].
          map(id=>Number(document.getElementById(id).value));
          const total=marks.reduce((a,b)=>a+b,0),
          percentage=total/5,
          passed=marks.every(m=>m>=40);
          let grade=percentage>=90?"A+":
          percentage>=80?"A":
          percentage>=70?"B":
          percentage>=60?"C":
          percentage>=50?"D":
          percentage>=40?"E":
          "F";
          students.push({name:studentName.value,roll:rollNumber.value,studentClass:document.
               getElementById("studentClass").value,total,percentage,grade:passed?grade:"F",
               result:passed?"Pass":"Fail"});
               form.reset();
               formMessage.textContent="Student record added successfully.";
               displayStudents();updateDashboard()});search.addEventListener("input",displayStudents);function displayStudents(){const t=search.value.toLowerCase(),list=students.filter(s=>s.name.toLowerCase().includes(t)||s.roll.toLowerCase().includes(t));tableBody.innerHTML="";if(!list.length){tableBody.innerHTML='<tr><td colspan="8">No matching student records.</td></tr>'}else{list.forEach(s=>{const i=students.indexOf(s),r=document.createElement("tr");r.innerHTML=`<td>${s.roll}</td><td>${s.name}</td><td>${s.studentClass}</td><td>${s.total} / 500</td><td>${s.percentage.toFixed(2)}%</td><td>${s.grade}</td><td>${s.result}</td><td><button class="delete-button" onclick="deleteStudent(${i})">Delete</button></td>`;tableBody.appendChild(r)})}updateFooter()}function deleteStudent(i){students.splice(i,1);displayStudents();updateDashboard()}function updateDashboard(){const n=students.length,p=students.filter(s=>s.result==="Pass").length,a=n?students.reduce((x,s)=>x+s.percentage,0)/n:0;totalStudents.textContent=n;passedStudents.textContent=p;failedStudents.textContent=n-p;averagePercentage.textContent=a.toFixed(2)+"%"}function updateFooter(){const total=students.reduce((a,s)=>a+s.total,0),avg=students.length?students.reduce((a,s)=>a+s.percentage,0)/students.length:0;footerTotal.textContent=total+" / "+students.length*500;footerAverage.textContent=avg.toFixed(2)+"%"}document.getElementById("logoutButton").addEventListener("click",function(){mainProject.classList.add("hidden");loginPage.classList.remove("hidden");loginForm.reset();loginMessage.textContent=""});displayStudents();updateDashboard();