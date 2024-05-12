import{_ as s,c as n,o,a as e,l as t,m as i}from"./chunks/framework.B9tkazSO.js";const x=JSON.parse('{"title":"Bite-Size Chunks","description":"","frontmatter":{"title":"Bite-Size Chunks","date":"2010-11-04T00:00:00.000Z"},"headers":[],"relativePath":"articles/2010-11-04-bite-size-chunks.md","filePath":"articles/2010-11-04-bite-size-chunks.md"}'),a={name:"articles/2010-11-04-bite-size-chunks.md"},r=e("p",null,[t("I came across this article on ZDNet: "),e("a",{href:"http://www.zdnet.com/blog/service-oriented/the-bigger-the-system-the-greater-the-chance-of-failure/6099?tag=mantle_skin;content",target:"_blank",rel:"noreferrer"},"The bigger the system, the greater the chance of failure")],-1),c=e("p",null,'Now, I am all for "bite-size chunks" and Roger Sessions does make a lot of sense. However, simply breaking a system into smaller parts is only part of the solution. The greater problem is the degree of coupling within the system. A monolithic system is inevitably highly coupled. This makes the system fragile and complex. The fragility becomes apparent when a "simple" change in one part of the system has high ramifications in another part. The complexity stems from the number of states within the system that increases exponentially since they are all coupled.',-1),l=e("hr",null,null,-1),h=e("p",null,"If we simply break the system down into smaller components without removing the high coupling we end up with the exact same problems. This is typically what happens when folks implement Just a Bunch Of Web Services.",-1),m=e("p",null,"What is required is to break down the system into components and remove the coupling. One option is to make use of a service bus to facilitate sending messages between the components asynchronously. In this way the different components rely only on the message structures in the same way that an interface (as in class interface) abstracts the contract between classes. So in a way it is a form of dependency inversion since the components no longer depend on the concrete component implementation but rather on the message structures (the data contracts).",-1),p=e("p",null,[t("Coupling comes in two forms: "),e("a",{href:"https://www.infoq.com/news/2009/04/coupling/",target:"_blank",rel:"noreferrer"},"temporal and behavioural"),t(". Web services are a classic case of high temporal coupling. Since a service bus is asynchronous it results in low temporal coupling. Behavioural coupling is tricky either way.")],-1),u=e("p",null,[e("img",{src:i,alt:"Component-Variations Image",title:"Component-Variations"})],-1),d=[r,c,l,h,m,p,u];function f(g,_,y,w,b,k){return o(),n("div",null,d)}const z=s(a,[["render",f]]);export{x as __pageData,z as default};
