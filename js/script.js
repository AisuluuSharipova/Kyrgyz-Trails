const menuBtn = document.querySelector('.menu-btn')
         const navlinks = document.querySelector('.nav-links')

         menuBtn.addEventListener('click',()=>{
             navlinks.classList.toggle('mobile-menu')
         })
         const serviceBtn = document.getElementById("service")
         serviceBtn.onclick = () => {
             document.getElementById('explore').scrollIntoView({
             behavior: 'smooth'
             })
         }
        const trailsBtn = document.getElementById("trails")
        trailsBtn.onclick = () => {
            document.getElementById('welcome').scrollIntoView({
            behavior: 'smooth'
            })
        }
        const featureBtn = document.getElementById("feature")
        featureBtn.onclick = () => {
            document.getElementById('advantage').scrollIntoView({
            behavior: 'smooth'
            })
        }