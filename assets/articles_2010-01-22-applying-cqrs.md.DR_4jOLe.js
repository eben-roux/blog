import{_ as e,c as t,o,k as a}from"./chunks/framework.B9tkazSO.js";const y=JSON.parse('{"title":"Applying CQRS","description":"","frontmatter":{"title":"Applying CQRS","date":"2010-01-22T00:00:00.000Z"},"headers":[],"relativePath":"articles/2010-01-22-applying-cqrs.md","filePath":"articles/2010-01-22-applying-cqrs.md"}'),n={name:"articles/2010-01-22-applying-cqrs.md"},s=a("<p>Whenever a new technique comes to the fore it takes a while for it to settle in. Quite often one tries to apply it everywhere and that is when it seems as though it doesn&#39;t always fit. Of course, one should at least <em>try</em> to give it a go but there are instances where it may just not be the right tool for the job.</p><p>Command / Query Responsibility Segregation is one such an animal. It may not be applicable in every scenario.</p><hr><p>Now don&#39;t get me wrong. CQRS really is the way to go but it works only when there is actually data to query. Probably seems obvious. If the data you require is <em>not</em> there and you want to CQRS-it then you first need to create it. Let me present an example or two.</p><p>One may often hear a question along the lines of:</p><blockquote><p>&quot;I need to present the total for the quote / order to the user. This total will incorporate tax and discounts and other bells and whistles. It seems as though I need to duplicate my domain behaviour on the front-end. How can I use CQRS to do this?&quot;</p></blockquote><p>More recently someone asked about repeating calendar events on the DDD group. Same thing. The data is not there. It cannot be queried. So CQRS does not work when domain interaction is required.</p><p>There are two options:</p><ul><li>Request the domain to calculate the results, persist it, and then query it - CQRS</li><li>Request the domain to calculate the results, and return it - no CQRS</li></ul><p>It really is as simple as that.</p><p>For situations where you do not need, or want, to persist the results get the domain to simply return the transient results and throw them away when you are done.</p><p>Therefore, it is not a case of CQRS Everywhere.</p>",12),r=[s];function i(l,h,p,u,d,c){return o(),t("div",null,r)}const _=e(n,[["render",i]]);export{y as __pageData,_ as default};
