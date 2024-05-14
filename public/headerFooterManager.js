class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header class="grid sticky top-0 z-50 bg-white">
            <div id="container" class="container max-w-xl2 pl-2 pr-2 2xl:max-w-xl xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs xs:w-full ">
                <nav class="grid grid-flow-col place-items-center text-xl 2xl:text-base xl:text-base lg:text-sm xs: md:gap-3 xs:gap-0">
                    
                    <a href="index.html" id="courseHome" class="justify-self-start z-50 md:px-0"><img src="assets/img/head.png" alt="logo" width="100px" height="100px" class="size-[100px] 2xl:size-20 xl:size-16 lg:size-14 md:px-0"></a>
                    
                    <form class="grid place-items-center grid-flow-col overflow-hidden border border-soft-blue rounded-[30px] h-11 w-80  2xl:w-72 2xl:h-10  xl:w-64  lg:w-48 lg:h-8 md:z-50 md:justify-self-start xs:w-32">
                        <input type="search" name="search" placeholder="Search . . ." class="place-self-center italic pl-2 [&::-webkit-search-cancel-button]:hidden border-none rounded-md focus:outline-none xs:w-24">
                        <button type="submit" class="size-11 rounded-full hover:bg-black hover:bg-opacity-5 transition duration-300 ease-in-out 2xl:size-10 xl:size-10 lg:size-8">
                            <svg class="ml-auto mr-auto size-5 lg:size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </form>

                    <button id="mobileMenuBtn" class="hidden md:block justify-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 hover:text-soft-blue">
                        <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                    </button>

                    <ul class="mobileMenu flex flex-row gap-5 font-semibold md:flex-col md:absolute md:bg-white md:w-full md:mt-64 items-center md:gap-6 md:pt-5 md:hidden">
                        <li class="hover:text-soft-blue duration-200 ease-in-out"><a href="index.html" id="courseHome">HOME</a></li>
                        <li class="hover:text-soft-blue duration-200 ease-in-out"><a href="course.html" id="courseHome">COURSES</a></li>
                        <li class="hover:text-soft-blue duration-200 ease-in-out"><a href="about.html" id="courseHome">ABOUT</a></li>
                        <li class="hover:text-soft-blue duration-200 ease-in-out"><a href="contact.html" id="courseHome">CONTACT</a></li>
                    

                        <div class="z-50 md:flex md:flex-row md:justify-start md:gap-3">
                            <button class="w-28 h-12 font-semibold text-white bg-soft-blue rounded-[30px] hover:bg-[#157ABE] duration-200 ease-in-out 2xl:w-24 2xl:h-10 lg:w-20 lg:h-8"><a href="signup.html">Sign up</a></button>

                            <button class="w-28 h-12 font-semibold bg-soft-blue bg-opacity-40 rounded-[30px] hover:bg-opacity-90 duration-200 ease-in-out 2xl:w-24 2xl:h-10 lg:w-20 lg:h-8"><a href="login.html">Login</a></button>
                        </div>
                    </ul>

                </nav>
            </div>
        </header>
        `
    }
}


class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer class="bg-dark-blue pt-16 pb-3 grid place-content-center sm:pt-5">
            <div class="container max-w-xl2 pl-2 pr-2 2xl:max-w-xl xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs xs:w-full">
                <div class="grid grid-rows-1 grid-cols-4 justify-items-center text-base 2xl:text-sm lg:text-xs sm:grid-rows-2 xs:px-5 xs:grid-cols-1 xs:grid-rows-2">
                    <div class="row-span-2 grid gap-y-7 sm:row-span-1 sm:col-span-2 sm:gap-y-3 xs:col-span-2 xs:">
                        <div>
                            <h1 class="text-5xl italic text-white 2xl:text-4xl lg:text-2xl"><a href="#"><span class="text-soft-blue">W3</span>Program</a></h1>
                            <div class="grid grid-flow-col items-center pt-2">
                                <a href="https://maps.app.goo.gl/UBAYhLkn5XSy2LXN8" target="_blank" class="inline-flex grid-flow-col items-center gap-2">
                                    <svg class="text-soft-blue size-14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                <p class="font-light text-white inline-block  hover:underline">AgaTech Sovereign Corporate Baao, Camarines Sur, 4432, Philippines</p>
                                </a>
                            </div>
                        </div>
                    <div class="grid grid-flow-col w-56 2xl:w-48 md:w-40">
                        <a href="https://www.facebook.com/Agaseeyyy" target="_blank" class="2xl:size-11 md:size-8"><img src="assets/img/Facebook.svg" alt="Facebook Page"></a>
                        <a href="https://www.instagram.com/_agaseeyyy" target="_blank" class="2xl:size-11 md:size-8"><img src="assets/img/Instagram.svg" alt="Instagram Account"></a>
                        <a href="https://www.twitter.com" target="_blank" class="2xl:size-11 md:size-8"><img src="assets/img/TwitterX.svg" alt="TwitterX"></a>
                        <a href="https://github.com/Agaseeyyy" target="_blank" class="2xl:size-11 md:size-8"><img src="assets/img/GitHub.svg" alt="Github"></a>
                    </div>
    
                        <div class="grid grid-flow-col gap-y-3 lg:grid-flow-row sm:gap-y-1">
                            <a href="https://play.google.com" target="_blank" class="2xl:w-32 2xl:h-8 xl:w-28 md:w-24"><img src="assets/img/Google Play.svg" alt="Google Play Store"></a>
                            <a href="https://www.apple.com/ph/app-store/" target="_blank" class="2xl:w-32 2xl:h-8 xl:w-28 md:w-24"><img src="assets/img/App Store.svg" alt="Apple Store"></a>
                        </div>
                    </div>
                
                    <nav class="xs:col-span-2">
                        <h1 class="text-xl text-soft-blue font-semibold mb-2 2xl:text-base">Company</h1>
                        <ul class="text-white font-light grid gap-3">
                            <li class="hover:underline"><a href="about.html">About us</a></li>
                            <li class="hover:underline"><a href="contact.html">Contact us</a></li>
                            <li  class="hover:underline"><a href="privacy.html">Privacy Policy</a></li>
                            <li class="hover:underline"><a href="terms.html">Terms & Conditions</a></li>
                        </ul>
                    </nav>
    
                    <nav class="xs:justify-self-start">
                        <h1 class="text-xl text-soft-blue font-semibold mb-2 2xl:text-base">Languages</h1>
                        <ul class="text-white font-light grid gap-3">
                            <li class="hover:underline"><a href="https://docs.python.org/3/" target="_blank">Python</a></li>
                            <li class="hover:underline"><a href="https://docs.oracle.com/javase/8/docs/" target="_blank">Java</a></li>
                            <li class="hover:underline"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a></li>
                            <li class="hover:underline"><a href="https://devdocs.io/cpp/" target="_blank">C++</a></li>
                            <li class="hover:underline"><a href="https://www.php.net/manual/en/" target="_blank">PHP</a></li>
                        </ul>
                    </nav>
    
                    <nav class="sm:col-start-3 sm:col-span-2 sm:justify-self-start">
                        <h1 class="text-xl text-soft-blue font-semibold mb-2 2xl:text-base">Documentations</h1>
                        <ul class="text-white font-light grid gap-3">
                            <li class="hover:underline"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML Documentations</a></li>
                            <li class="hover:underline"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS Documentations</a></li>
                            <li class="hover:underline"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript Documentations</a></li>
                            <li class="hover:underline"><a href="https://code.visualstudio.com/docs">VSCode Documentations</a></li>
                            <li class="hover:underline"><a href="https://roadmap.sh" target="_blank">Computer Studies Roadmap</a></li>
                        </ul>
                    </nav>
                </div>
                <p class="text-white text-base font-extralight flex text-center px-5 justify-center pt-12 2xl:text-sm md:text-xs sm:pt-0">© 2024 W3Program, AgaTech Sovereign Corporate. All rights reserved.</p>
            </div>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);