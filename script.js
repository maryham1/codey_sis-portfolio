console.log('text')
const list = document.querySelector('.list')
const toggleButton = document.querySelector('.toggleBtn')
const openButton = document.querySelector('.openBtn')
const closeButton = document.querySelector('.closeBtn')
const projectContainer = document.querySelector('.projectCnt')
const projectButton = document.querySelector('.projectBtn')
const projectDone = document.querySelector('#project')
const menuList = document.querySelector('.menu_list')
const allSectionScrolling = document.querySelectorAll('.sectionScroll')
const navLists = document.querySelectorAll('.nav_list')



toggleButton.addEventListener('click',function(){
    openButton.classList.toggle('hidden')
    closeButton.classList.toggle('hidden')
    closeButton.classList.toggle('block')
    
    list.classList.toggle('translate-x-full');
    //closeButton.classList.toggle('rotate-180')
})

navLists.forEach(navList => {
  navList.addEventListener('click', function() {
   list.classList.add('translate-x-full')
    openButton.classList.remove('hidden')
    closeButton.classList.add('hidden')
  })
})

const project1 = {
    projectImage: "./images/projects/taskflow.png",
    code: 'https://github.com/maryham1/TaskFlow',
    site: 'http://1taskflow-1.netlify.app'
}
const project2 = {
    projectImage: "./images/projects/blog.png",
    code: "https://github.com/maryham1/blogPost",
    site: "https://blog1-post.netlify.app/"
}
const project3 = {
    projectImage: "./images/projects/crave.png",
    code: "https://github.com/maryham1/crave", 
    site: "https://crave1.netlify.app/"
}
const project4 = {
    projectImage: "./images/projects/autoglow.png",
    code: "https://github.com/maryham1/carwash1",
    site: "https://autoglow1.netlify.app/"
}
const project5 = {
    projectImage: "./images/projects/weather.png",
    code: "https://github.com/maryham1/weather-app",
    site: "https://maryham1.github.io/weather-app/"
}

const projectArrays = [project1, project2, project3,project4, project5]
const projects = function(pjs,i){
    let prjClass;
    pjs.forEach((pj,i )=> {
        const {projectImage} = pj
        const {code} = pj
        const {site} = pj
        if(i % 2 === 0){
            i = "evenScroll"
            prjClass = i
            
        }
        else{
            i = "oddScroll"
            prjClass = i
            
        }
        const html = `
        <div class="${prjClass} transition-all duration-1000 ease-in-out bg-[#F3D706] w-auto h-auto laptop:w-[400px] laptop:h-[300px] rounded-xl tablet:w-[320px] tablet:h-auto ">
          <img src="${projectImage}" class="rounded-t-xl ">
          <div class="p-[20px] flex flex-col gap-5 laptop:flex-row">
              <button class="bg-amber-950 p-[10px] w-[170px] rounded-full text-[#F3D706] shadow-md shadow-yellow-950 hover:scale-[0.9]">
                <i class="fab fa-github"></i>
                <a href="${code}">
                preview code
                </a>
              </button>
              <button class="bg-amber-950 p-[10px] w-[170px] rounded-full text-[#F3D706] shadow-md shadow-yellow-950 hover:scale-[0.9]">
                <i class="fa-solid fa-link"></i>
                <a href="${site}">
                view live
                </a>
              </button>
          </div>
        `;
        console.log(html)
        projectContainer.insertAdjacentHTML('beforeend',html)
    })
    

}
projects(projectArrays)
const oddScrollAnimation = document.querySelectorAll('.oddScroll')
const evenScrollAnimation = document.querySelectorAll('.evenScroll')

//scroll to project done'
projectButton.addEventListener('click', function(){
    projectDone.scrollIntoView({behavior:"smooth"})
})

//scroll to all list
menuList.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav_list')){
        console.log(e.target)
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
})

//scrolling of sections
const observeFading = function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        
        entry.target.classList.remove('opacity-0')
        entry.target.classList.remove('translate-y-[4rem]')
            
        observer.unobserve(entry.target)
    }) 

}
const observeSections = new IntersectionObserver(observeFading,{
    root: null,
    threshold: 0.15,
})
allSectionScrolling.forEach(section => {
    section.classList.add('opacity-0')
    section.classList.add('translate-y-[4rem]')
    observeSections.observe(section)
})

//odd scroll animation
const oddScrollObserver = function(entries, observer){
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return;

        entry.target.classList.remove('opacity-0')
        entry.target.classList.remove('-translate-x-[4rem]')

        observer.unobserve(entry.target)
    })

}
const oddObserver = new IntersectionObserver(oddScrollObserver, {
    root: null,
    threshold: 0.15,
})
oddScrollAnimation.forEach(odd => {
    odd.classList.add('opacity-0')
    odd.classList.add('-translate-x-[4rem]')
    //on laptop
    odd.classList.add('laptop:opacity-100')
    odd.classList.add('laptop:translate-x-0')

    oddObserver.observe(odd)
})


//even scroll
const evenScrollObserver = function(entries, observer){
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return;

        entry.target.classList.remove('opacity-0')
        entry.target.classList.remove('translate-x-[4rem]')

        observer.unobserve(entry.target)
    })

}
const evenObserver = new IntersectionObserver(evenScrollObserver, {
    root: null,
    threshold: 0.15,
})
evenScrollAnimation.forEach(even => {
    even.classList.add('opacity-0')
    even.classList.add('translate-x-[4rem]')
    //on laptop
    even.classList.add('laptop:opacity-100')
    even.classList.add('laptop:translate-x-0')

    evenObserver.observe(even)
})