(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{13:function(e,a,s){},14:function(e,a,s){},15:function(e,a,s){"use strict";s.r(a);var i=s(0),t=s(1),n=s.n(t),c=s(7),r=s.n(c),l=(s(13),s(14),s(2)),o=s(3),d=s(5),j=s(4),h=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("header",{id:"home",children:[Object(i.jsx)("div",{className:"row banner",children:Object(i.jsxs)("div",{className:"banner-text",children:[Object(i.jsxs)("div",{className:"typewriter",children:[Object(i.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e.name,"."]}),Object(i.jsx)("span",{children:"\xa0"})]}),Object(i.jsxs)("h3",{children:["I am a ",e.role,".",e.roleDescription]}),Object(i.jsx)("hr",{}),Object(i.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(i.jsx)("p",{className:"scrolldown",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(i.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),s}(t.Component),m=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{id:"nav-wrap",children:[Object(i.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(i.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",rel:"noreferrer",children:"Hide navigation"}),Object(i.jsxs)("ul",{id:"nav",className:"nav",children:[Object(i.jsx)("li",{className:"current",children:Object(i.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Portfolio"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"smoothscroll",href:"#contactus",children:"Contact"})})]})]})})}}]),s}(t.Component),b=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("section",{id:"about",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("h1",{children:"About Me"}),Object(i.jsx)("div",{className:"three columns",children:Object(i.jsx)("img",{className:"profile-pic",src:"images/mypic1.jpg",alt:""})}),Object(i.jsxs)("div",{className:"nine columns main-col",children:[e.aboutme&&e.aboutme.map((function(e){return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("h2",{children:e.name}),Object(i.jsx)("p",{children:e.description})]},e.name)})),Object(i.jsx)("div",{className:"download",children:Object(i.jsx)("a",{href:"files/Resume.pdf",target:"_blank",rel:"noferrer",className:"button",children:"Download Resume"})})]})]})})}}]),s}(t.Component),u=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("div",{children:Object(i.jsxs)("section",{id:"resume",children:[Object(i.jsxs)("div",{className:"row education",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Education"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.school}),Object(i.jsxs)("p",{className:"info",children:[e.degree," ",Object(i.jsx)("span",{children:"\u2022"})," ",e.fieldofstudy,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]}),Object(i.jsx)("span",{children:"\u2022"})," ",e.address]}),Object(i.jsxs)("p",{children:["Achievements : ",e.description]})]})})},e.id)}))})]}),Object(i.jsxs)("div",{className:"row work",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Experience"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.Title}),Object(i.jsxs)("p",{className:"info",children:[e.CompanyName,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsxs)("em",{className:"date",children:[e.StartingMonthAndYear,"- ",e.MonthOfLeaving," ",e.YearOfLeaving]}),Object(i.jsx)("span",{children:"\u2022"})," ",e.address]}),Object(i.jsx)("hr",{}),Object(i.jsx)("h1",{children:"Roles & Responsibilities"}),Object(i.jsxs)("ul",{className:"roles",children:[Object(i.jsx)("li",{children:e.Achievements.a1}),Object(i.jsx)("li",{children:e.Achievements.a2}),Object(i.jsx)("li",{children:e.Achievements.a3}),Object(i.jsx)("li",{children:e.Achievements.a4}),Object(i.jsx)("li",{children:e.Achievements.a5}),Object(i.jsx)("li",{children:e.Achievements.a6}),Object(i.jsx)("li",{children:e.Achievements.a7}),Object(i.jsx)("li",{children:e.Achievements.a8})]})]})})},e.CompanyName)}))})]}),Object(i.jsxs)("div",{className:"row work",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Certifications"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:e.certifications&&e.certifications.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"row item",children:Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("h3",{children:e.name}),Object(i.jsxs)("p",{className:"info",children:[e.issuingOrganization,Object(i.jsx)("span",{children:"\u2022"})," ",Object(i.jsx)("em",{className:"date",children:e.issueDate})]}),Object(i.jsx)("p",{className:"info",children:Object(i.jsx)("a",{href:e.credential,target:"_blank",rel:"noreferrer",children:"Credential"})})]})})},e.id)}))})]}),Object(i.jsxs)("div",{className:"row skill",children:[Object(i.jsx)("div",{className:"three columns header-col",children:Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Skills"})})}),Object(i.jsx)("div",{className:"nine columns main-col",children:Object(i.jsx)("div",{className:"bars",children:Object(i.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(i.jsxs)("em",{children:[e.skillname," ",Object(i.jsx)("i",{className:e.className})]})]})},e.id)}))})})})]})]})})}}]),s}(t.Component),p=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("section",{id:"portfolio",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"twelve columns collapsed",children:[Object(i.jsx)("h1",{children:"Check Out Some of My Works"}),Object(i.jsx)("div",{id:"portfolio-wrapper",children:e.portfolio&&e.portfolio.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)("div",{className:"columns portfolio-item",children:[Object(i.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[Object(i.jsx)("img",{src:"".concat(e.imgurl),className:"item-img",alt:""})," "]}),Object(i.jsx)("h5",{children:e.name}),Object(i.jsxs)("p",{children:[e.description," ",Object(i.jsx)("a",{href:e.githubLink,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:e.fabIcon})})]})]})},e.id)}))})]})})})}}]),s}(t.Component),O=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsxs)("section",{id:"contactus",children:[Object(i.jsx)("h2",{children:"Contact Details"}),Object(i.jsx)("div",{className:"row section-head",children:Object(i.jsx)("div",{className:"twelve columns",children:Object(i.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("aside",{className:"six columns footer-widgets",children:[Object(i.jsx)("div",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("li",{children:Object(i.jsxs)("h4",{children:[e.name," ",Object(i.jsx)("i",{className:e.className})," :"," ",Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.id})]})})},e.className)}))}),Object(i.jsxs)("p",{className:"address",children:[Object(i.jsx)("span",{children:e.name}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:e.address1}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:e.address2}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:e.phoneNumber}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:Object(i.jsx)("a",{href:e.website,children:e.website})})]})]}),Object(i.jsx)("div",{className:"six columns footer-widget"}),Object(i.jsx)("div",{className:"columns contact-details"}),Object(i.jsx)("div",{className:"LI-profile-badge","data-version":"v1","data-size":"large","data-locale":"en_US","data-type":"vertical","data-theme":"light","data-vanity":"abhijeet-karmaker",children:Object(i.jsx)("a",{className:"LI-simple-link",href:"https://ca.linkedin.com/in/abhijeet-karmaker?trk=profile-badge",children:"Abhijeet Karmaker"})})]})]})}}]),s}(t.Component),f=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"twelve columns",children:[Object(i.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:e.className})})})},e.url)}))}),Object(i.jsxs)("ul",{className:"copyright",children:[Object(i.jsx)("li",{children:"\xa9 2021 Abhijeet Karmaker"}),Object(i.jsxs)("li",{children:["Design by ",Object(i.jsx)("a",{title:"AbhijeetKarmaker",href:"https://github.com/abhikarmaker",children:"Abhijeet Karmaker"})]})]})]}),Object(i.jsx)("div",{id:"go-top",children:Object(i.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(i.jsx)("i",{className:"icon-up-open"})})})]})})})}}]),s}(t.Component),x={imagebaseurl:"https://abhikarmaker.github.io/portfolio/",name:"Abhijeet Karmaker",role:"Web Developer",linkedinId:"abhijeet-karmaker",githubid:"abhikarmaker",roleDescription:" I like dabbling in various parts of frontend and backend development",address1:"630 Bolevard Jacques-Cartier N",address2:"Sherbrooke, Quebec, Canada, J1J 3A4",phoneNumber:"+1(519)328-5813",website:"http://www.thetechzones.ca",aboutme:[{name:"My Experience",description:"I graduated from college having majored in Computer Software and Database Development and Bachelor's of Technology with a major in Computer Science Engineering. I have been working as an Technical Support Engineer for the past 1 year and recently got promoted as Microsoft 365 Premier Technical Analyst IV. As well as, excellent hands on experience in Web Design and Development in Multiple Platform."},{name:"My Skillset",description:"The main areas of expertise is front end development (server side of the web). HTML, CSS, JavaScript (TypeScript), building small and medium apps with React, features, custom plugin, animations, and coding interactive layouts. I have a keen interest and knowledge on full stack developer experience for building MERN applicaions (MongoDB, Express, React and NodeJS)."},{name:"My Goals",description:"I am looking for an opportunity to work with a team that runs on clear communication. I want to align myself with a company I believe in and where I can create positive change. I am always looking to learn more and am open to taking on challenging projects."}],socialLinks:[{name:"Linked In",id:"abhijeet-karmaker",url:"https://www.linkedin.com/in/abhijeet-karmaker/",className:"fa fa-linkedin"},{name:"GitHub",id:"abhikarmaker",url:"https://github.com/abhikarmaker",className:"fa fa-github"}],education:[{id:"1",school:"Dr. M. G. R. Educational and Research Insitute University",degree:"Bachelor of Technology",fieldofstudy:"Computer Science Engineering",MonthOfPassing:"May",YearOfPassing:"2014",address:"Chennai, Tamil Nadu, India",description:"Internship as a Junior Web Developer for 3 months in Key Difference, eshtablished in Chennai, India, 2014"},{id:"2",school:"Lambton College",degree:"Post Graduation Certificate",fieldofstudy:"Computer Software and Database Development",MonthOfPassing:"May",YearOfPassing:"2019",address:"Sarnia, Ontario, Canada",description:"Dean's Honour List Winter 2018 semester & Fall 2017 semester"}],work:[{id:"1",CompanyName:"Sherweb",Title:"Microsoft 365 Technical Analyst Premier IV",address:"Sherbrooke, Quebec, Canada",StartingMonthAndYear:"March 2020",MonthOfLeaving:"Present",YearOfLeaving:"2020",Achievements:{a1:"Knowledge and experience in creating and running PowerShell scripts",a2:"A specialization on an advanced product like Exchange, Azure, SharePoint or Team",a3:"Assist M365 Premier partners and customers by taking the necessary steps to solve technical problems: identify causes, offer remote support using virtual machines.",a4:"Tackle new technical challenges daily, whether it\u2019s about security AAD, autopilot, device management or others."}},{id:"2",CompanyName:"Acculead",Title:"Junior Web Developer Intern",address:"Halifax, Nova Scotia, Canada",StartingMonthAndYear:"January 2019",MonthOfLeaving:"April",YearOfLeaving:"2019",Achievements:{a1:"Work towards weekly milestones in an agile development environment.",a2:"Interaction designs in HTML, CSS and JavaScript.",a3:"Program the server-side code, using JavaScript and NodeJS back-end technologies.",a4:"Create responsive web pages that would look equally great on desktop, tablet and mobile devices.",a5:"Programming interaction with JavaScript libraries like jQuery and ReactJS, Reacts hooks.",a6:"Testing cross-browser, cross-platform and cross-device compatibility for inconsistencies.",a7:"Participated in architecture discussions and writing code to scale.",a8:"Write and maintain proper programming documentation."}},{id:"3",CompanyName:"TTEC",Title:"Technical Support Advisor - Part Time",address:"Sarnia, Ontario, Canada",StartingMonthAndYear:"July 2018",MonthOfLeaving:"January",YearOfLeaving:"2019",Achievements:{a1:"Demonstrated strong written and verbal communication skills while assisting Rogers customers with their issues",a2:"Established trusting relationships with customers and provided effective solutions."}},{id:"4",CompanyName:"Rance Computer Pvt. Ltd",Title:"Software Testing Engineer",address:"Kolkata, West Bengal, India",StartingMonthAndYear:"Dec 2014",MonthOfLeaving:"August",YearOfLeaving:"2017",Achievements:{a1:"Experience in Manual & Automated Testing of GUI and functional aspects of Client - server and Web based Applications on multiple levels of SDLC and Software Testing Life Cycle (STLC).",a2:"Good Knowledge of Object Oriented programming Concepts(OOPS) and Java Skills",a3:"Good experience in creating test scripts using WebDriver, Selenium RC, Selenium-IDE, Selenium Grid in Java.",a4:"Experience in Functional, Regression and System testing using Manual and Automated testing tools - selenium WebDriver.",a5:"Responsible for entering bugs into an automated bug management system such as JIRA, Mantis and performing regression tests after the bugs were fixed.",a6:"Performed End-to-End testing, Integration testing and User Acceptance Testing."}}],certifications:[{id:"1",name:"Microsoft 365 Certified: Fundamentals MS-900",issuingOrganization:"Microsoft",issueDate:"December 2020",credential:"https://www.youracclaim.com/badges/f8f87b16-8ffd-4d52-a9cf-cac354e891f6?source=linked_in_profile"},{id:"2",name:"Oracle Database 10g: Introduction to SQL",issuingOrganization:"Oracle",issueDate:"January 2014",credential:"https://www.linkedin.com/in/abhijeet-karmaker/"}],skillsDescription:"Your skills here",skills:[{id:"1",skillname:"JAVA",className:"fa fa-java"},{id:"2",skillname:"HTML5",className:"fa fa-html5"},{id:"3",skillname:"CSS",className:"fa fa-css3"},{id:"4",skillname:"JavaScript",className:"fa fa-js-square"},{id:"5",skillname:"Reactjs",className:"fa fa-react"},{id:"6",skillname:"SQL",className:"fa fa-sql"}],portfolio:[{id:"1",name:"Portfolio",description:"The Postfolio Website is made based on React JS and local JSON based APIs, build from scratch.",imgurl:"images/portfolio/project2.jpg",link:"https://abhikarmaker.github.io/portfolio/",githubLink:"https://github.com/abhikarmaker/portfolio",fabIcon:"fa fa-github"},{id:"2",name:"Weather App",description:"Weather App using React, Restful APIs & Bootstrap",imgurl:"images/portfolio/project3.jpg",link:"https://weather-app-b731e.web.app/",githubLink:"https://github.com/abhikarmaker/WeatherReactApp",fabIcon:"fa fa-github"},{id:"3",name:"Netflix Clone",description:"Netflix Clone using React, Hooks, React-Youtube, React-Movie-Trailer and fetching API from TMDB ",imgurl:"images/portfolio/Netflix-Clone.jpg",link:"https://netflixstma-clone.web.app/",githubLink:"https://github.com/abhikarmaker/netflixstma-clone",fabIcon:"fa fa-github"},{id:"4",name:"Kitchen Depot",description:"College Project based on HTML5, CSS, JaaScript, jQuery and JSON",imgurl:"images/portfolio/project1.jpg",link:"https://abhikarmaker.github.io/THE-KITCHEN-DEPOT-FINAL/",githubLink:"https://github.com/abhikarmaker/THE-KITCHEN-DEPOT-FINAL",fabIcon:"fa fa-github"}]};var g=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{resumeData:x}),Object(i.jsx)(m,{}),Object(i.jsx)(b,{resumeData:x}),Object(i.jsx)(u,{resumeData:x}),Object(i.jsx)(p,{resumeData:x}),Object(i.jsx)(O,{resumeData:x}),Object(i.jsx)(f,{resumeData:x})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(a){var s=a.getCLS,i=a.getFID,t=a.getFCP,n=a.getLCP,c=a.getTTFB;s(e),i(e),t(e),n(e),c(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.027d285b.chunk.js.map