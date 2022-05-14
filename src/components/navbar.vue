<template>
<nav id="site-navbar">
    <div class="container">
        <input id="responsive-menu" type="checkbox" v-model="showNavbar">
        <label for="responsive-menu">
            <a href="javascript:void(0)" @click="goHome" @dblclick="goTerminal">
                <img height="36" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAEkklEQVRIibWWf0xbVRTHz/vRvv6g/CoTKQNqqA4QJlsZg82FDprBGCYsjOwPF40u6tyiMhM1IpsvMJY4TVxiGEMjWcj8Y9PonNK5gYxMYGAL8mPjh0yZLXQEGLSUtq/t67v+YcC1tPwqO8n94573vedzzr335D4AP6ZTqSIQAObve6DmM3BHXl4xQRBVCKF+ZnZ2/66WlpnHCr6pUpHBEkmVKDj4QOyWLeE2k8mt7+kZdzLMwcyGhtbHAm5Rq2Mpivo5SqGIl8rlonk/63TCfZ1uymG1nldqNCcxALRuYG1ubhFBUV/I09KihBLJYhVCMD48bJ7S63tcLLt/x/Xr04GCyaqDJS+yU3cuusRCtr93kF1CKyYQ9vy0KOIOAMgCBjc8nTPWn/WKSf5UXOhKFnR0dJrhh28C5QLpy2m12sBkNtn5PD5fKg0ncBwPGLQs2Gh8YDGMGrocTtfnPJy3Sa83vPtcakokSfjMcc3mUQrrdsPo6KgxGbVl/1S578fvK/acsTHM6/p/DKZ1pXqDGZsdMEDtNE1zC06n86bFYmHWG+yxfwKREBBgGTRN4/NwnC/IkUgkgnmNCEzyulMF/QAACAPjLMMcf6uisS8gMEkQsDE6Ovru2M6mFz7UnCUpLIHi8Uti42IWbjyBA1mUn5kIAGCx2hMbbvVqqmhV4jG6eW7NYAAAWbQsKCQsNMtkMqXzeTxKKpXi/m61RCyEGJlUOPinNQUAbgcEBgAQi0QgFomEKwmA4xiBCIxaDRQAgFS42+IfTliDB6busW4ErB1CR7xFBOYUCdBcDIbhXAgywLeatof7diulIiEFOIYRGCJCVgvGqsvUqiRF7JW0zfEh39W3Dr18QpPgLfLW2Bk4JA0X1u9VbX3CzjhA09Q1MmF2prz32Q3riit+dOLmEHWuVN3sLUIIhU6b5/jz8yOVGl1tef6XfYP339mcKJdsS1Vs1HYP1wFA0ZrABI45jp5uVHmLqsvUqvCQoCsAsHDuei79Y/xvbZ7syTBlXPQGnn5scnctnXfoVfqXi6sGcxzwqkrVtLcIuZHcamM8tDRNc9UfZRf+1jHQWaDeFpmpTAi72vD7pzUfqG+98Umjfjkw7jVz4zg0ew/AsW4+j+S8F79Z2TTmcLrfbtUOsCSBQ1ZGUiRfTF29XFxMrA68BjtMay4/mJwxjRgmnNLQYCwxXqaYe9a6aNeWBnNAcByovAdwKNXpYv0m6XCyg7q+e0arjYHkBLlYIhEcqTmxZ/tSYI9zw3FwHTvduCjb6jK1SiwSFPoLggG4bQ7Xgebbd6/lZys3qDKSIzRNuktfv78z5fCZVsuy4JW2ky87WnGjs7Y8v+b/FntGpu0evgB+WmzN7eTLVtNi61YxwKMtNqQtUCujMrZuCqv/VXe27lRBKYDnM7quFQP812Jfndx7vL1r6Nyu9KTwwtztUgCQAng+oyQAwPjkDOh6/zJzCNz+Aq5EM2+vlV+7dKE8v7j9j6EcAcX36H8eDw8i5ogUkiHZ7mmzpXDabAGOw3z+Wy2nQYCVePscHPHS0Ihxh8/MkGDwX2r0IYqCOyDcAAAAAElFTkSuQmCC"/>
            </a>
            <span class="dev-name">my playground</span>
            <span id="menu-icon"></span></label>
        <div id="overlay"></div>
        <ul>
            <li >
                <label  @click="close">
                <router-link to="npm-packages">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="36" height="36"
                     viewBox="0 0 48 48"
                     style=" fill:#000000;"><path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z"></path><path fill="#fff" d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"></path></svg>
                    Publish Npm Packages </router-link>
                </label>
            </li>
            <li>
                <label  @click="close">
                <a href="https://gist.github.com/mehniyarif" target="_blank"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Gift</title><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                 Shared Works</a></label>
            </li>
            <li>
                <label  @click="close">
                <a href="https://github.com/mehniyarif?tab=repositories" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="28" height="28"
                     viewBox="0 0 50 50"
                     style=" fill:#000000;"><path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path></svg>
                Public Repos</a></label>
            </li>
            <li>
                <label  @click="close">
                <router-link to="experiences">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"viewBox="0 0 512 512"><title>Footsteps</title><path d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41-50.65 7.49-71.52-26.44-80.33-85.06-11.85-78.88 16-127.94 55.71-131.1 36.14-2.87 68.71 60.14 77.53 118.75zM223.65 409.53c3.13 33.28-14.86 64.34-42 69.66-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21 55.99-20.4 59.77 19.74zM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41 50.66 7.49 71.52-26.44 80.33-85.06 11.86-78.89-16-128.22-55.7-131.1-36.4-2.64-68.71 60.13-77.53 118.75zM288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66 27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22-55.99-20.4-59.77 19.75z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                My Work Experiences</router-link></label>
             </li>
            <li>
                <label  @click="close">
                    <router-link to="django-experiences">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="48" height="48"
                     viewBox="0 0 48 48"
                     style=" fill:#000000;"><path fill="#004d40" fill-rule="evenodd" d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29 C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c0.426,0,0.75,0.033,1.143,0.134V16H8z M5.659,22.672 c-0.308-0.1-0.561-0.134-0.886-0.134c-1.328,0-2.096,0.809-2.096,2.228c0,1.381,0.734,2.143,2.079,2.143 c0.291,0,0.527-0.016,0.903-0.067V22.672L5.659,22.672z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M12,20.046v6.618c0,2.076-0.155,3.224-0.612,4.084 c-0.426,0.827-0.987,1.349-2.146,1.925l-2.437-1.149c1.159-0.539,1.721-1.015,2.079-1.742c0.375-0.743,0.494-1.754,0.494-4.017 v-5.721H12z" clip-rule="evenodd"></path><rect width="2.623" height="2.713" x="9.377" y="16" fill="#004d40" fill-rule="evenodd" clip-rule="evenodd"></rect><path fill="#004d40" fill-rule="evenodd" d="M13.734,20.876c1.136-0.552,2.223-0.795,3.408-0.795 c1.321,0,2.189,0.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152,0.171-2.606,0.294-3.673,0.294 c-2.156,0-3.123-0.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-0.483-0.235-0.658-0.884-0.658 c-0.95,0-2.02,0.278-3.024,0.812L13.734,20.876z M17.761,25.107c-1.702,0.171-2.255,0.449-2.255,1.141 c0,0.518,0.318,0.761,1.02,0.761c0.384,0,0.735-0.034,1.235-0.12L17.761,25.107L17.761,25.107z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M21.418,20.693c1.52-0.421,2.772-0.613,4.041-0.613 c1.318,0,2.273,0.317,2.839,0.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-0.335-1.424-1.252-1.424 c-0.351,0-0.669,0.035-1.186,0.195v6.425h-2.57V20.693z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M30.177,30.006c0.919,0.486,1.839,0.71,2.812,0.71 c1.721,0,2.454-0.473,2.454-2.176v-0.052c-0.51,0.258-1.025,0.366-1.704,0.366c-2.302,0-3.739-1.547-3.739-3.997 c0-3.043,2.141-4.762,5.974-4.762c1.126,0,2.167,0.121,3.427,0.383l-0.899,1.93c-0.699-0.138-0.057-0.021-0.584-0.072v0.279 l0.034,1.13l0.017,1.461c0.017,0.366,0.017,0.73,0.034,1.096v0.73c0,2.295-0.19,3.131-0.751,4.02 c-0.818,1.302-2.234,1.947-4.246,1.947c-1.024,0-1.91-0.155-2.829-0.521V30.006L30.177,30.006z M35.392,22.251h-0.085h-0.19 c-0.51-0.017-1.108,0.121-1.518,0.383c-0.628,0.365-0.953,1.027-0.953,1.964c0,1.337,0.649,2.102,1.808,2.102 c0.358,0,0.649-0.069,0.987-0.172v-0.193v-0.73c0-0.314-0.017-0.662-0.017-1.027l-0.017-1.234l-0.017-0.886V22.251z" clip-rule="evenodd"></path><path fill="#004d40" fill-rule="evenodd" d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348 c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z M43.509,26.752 c1.057,0,1.681-0.838,1.681-2.294c0-1.439-0.607-2.294-1.663-2.294c-1.093,0-1.718,0.838-1.718,2.294 C41.81,25.914,42.438,26.752,43.509,26.752L43.509,26.752z" clip-rule="evenodd"></path></svg>
                My Django Experiences</router-link></label>
            </li>
            <li>
                <label  @click="close">
                <router-link to="vue-experiences">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="28" height="28"
                     viewBox="0 0 48 48"
                     style=" fill:#000000;"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon></svg>
                My Vue Experiences</router-link></label>
            </li>
            <li>
                <label  @click="close">
                <router-link to="technologies">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Code Slash</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"/></svg>
                Technologies I Work With</router-link></label>
            </li>
            <li>
                <label  @click="close">
                <router-link to="tools">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Code Working</title><circle cx="256" cy="256" r="26"/><circle cx="346" cy="256" r="26"/><circle cx="166" cy="256" r="26"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112"/></svg>
                Tools I Use</router-link></label>
            </li>
            <li>
                <label  @click="close">
                <router-link to="work-areas">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 512 512"><title>Accessibility</title><circle fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" cx="256" cy="56" r="40"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/></svg>
                Areas I Want To Work</router-link></label>
            </li>
            <li>
                <label  @click="close">
                <a href="mailto:arif.mehniyar@gmail.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="28" height="28"
                         viewBox="0 0 100 100"
                         style=" fill:#000000;"><path fill="#fefdef" d="M80,77H20c-3.314,0-6-2.686-6-6V29c0-3.314,2.686-6,6-6h60c3.314,0,6,2.686,6,6v42	C86,74.314,83.314,77,80,77z"></path><path fill="#f15b6c" d="M23,77h-3c-3.314,0-6-2.686-6-6V29h9V77z"></path><path fill="#f15b6c" d="M77,77h3c3.314,0,6-2.686,6-6V29h-9V77z"></path><path fill="#f15b6c" d="M82.09,24h-0.004L50,47.5L17.914,24H17.91c-1.883,0-3.41,1.527-3.41,3.41v1.554	c0,1.594,0.76,3.092,2.046,4.034L50,57.5l33.454-24.502c1.286-0.942,2.046-2.44,2.046-4.034V27.41C85.5,25.527,83.973,24,82.09,24z"></path><path fill="#1f212b" d="M80,78H20c-3.859,0-7-3.14-7-7V29c0-3.86,3.141-7,7-7h60c3.859,0,7,3.14,7,7v42	C87,74.86,83.859,78,80,78z M20,24c-2.757,0-5,2.243-5,5v42c0,2.757,2.243,5,5,5h60c2.757,0,5-2.243,5-5V29c0-2.757-2.243-5-5-5H20z"></path><path fill="#1f212b" d="M50,58c-0.104,0-0.207-0.032-0.296-0.097L16.25,33.401C14.842,32.37,14,30.711,14,28.964h1	c0,1.429,0.688,2.786,1.841,3.63L50,56.88l33.158-24.286C84.312,31.75,85,30.394,85,28.964h1c0,1.747-0.842,3.406-2.251,4.437	L50.296,57.903C50.207,57.968,50.104,58,50,58z"></path><path fill="#1f212b" d="M22.5,74c-0.276,0-0.5-0.224-0.5-0.5v-33c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v33	C23,73.776,22.776,74,22.5,74z"></path><path fill="#1f212b" d="M77.5,62c-0.276,0-0.5-0.224-0.5-0.5v-21c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v21	C78,61.776,77.776,62,77.5,62z"></path><path fill="#1f212b" d="M77.5,70c-0.276,0-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5	C78,69.776,77.776,70,77.5,70z"></path><path fill="#1f212b" d="M77.5,74c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v1	C78,73.776,77.776,74,77.5,74z"></path><path fill="#1f212b" d="M74.5,30.056c-0.153,0-0.306-0.071-0.403-0.205c-0.163-0.223-0.115-0.536,0.108-0.699l2-1.464	c0.221-0.164,0.535-0.116,0.698,0.108c0.163,0.223,0.115,0.536-0.108,0.699l-2,1.464C74.706,30.025,74.603,30.056,74.5,30.056z"></path><path fill="#1f212b" d="M68.5,34.451c-0.153,0-0.306-0.071-0.403-0.205c-0.163-0.223-0.115-0.536,0.107-0.699l4-2.93	c0.223-0.164,0.536-0.116,0.699,0.108c0.163,0.223,0.115,0.536-0.107,0.699l-4,2.93C68.706,34.419,68.603,34.451,68.5,34.451z"></path><path fill="#1f212b" d="M50,48c-0.104,0-0.207-0.032-0.296-0.097l-32.428-23.75c-0.223-0.163-0.271-0.476-0.107-0.699	c0.163-0.224,0.477-0.271,0.699-0.108L50,46.88l16.089-11.784c0.224-0.164,0.536-0.116,0.699,0.108	c0.163,0.223,0.115,0.536-0.107,0.699l-16.385,12C50.207,47.968,50.104,48,50,48z"></path></svg>
                    Contact Me
                </a></label>
            </li>
        </ul>
        <social-media></social-media>

    </div>
</nav>
</template>

<script>
import SocialMedia from "@/components/social-media";
export default {
    name: "navbar",
    components: {SocialMedia},

    data(){
        return{
            showNavbar:false
        }
    },
    methods:{
        goHome(){
            this.showNavbar = false
            this.$router.push('/').catch(() => {})
        },
        goTerminal(){
            this.showNavbar = false

            this.$router.push('/terminal').catch(() => {})
            // let h = screen.height;
            // let w = screen.width;
            // let routeData = this.$router.resolve({name: 'terminal'});
            // window.open(routeData.href, '_target', `toolbar=yes,scrollbars=no,resizable=yes,top=0,left=0,width=${w},height=${h}`);
        },
        close(){
            this.showNavbar = false
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(191,237,255);
  box-shadow: 0 3px 5px rgba(0,0,0,.1);
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  color: #343A40;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 9999;
}

/*** INPUT ***/
nav input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

/*** LABEL ***/
nav label {
  cursor: pointer;
  display: block;
  font: 2em/1 'Oswald', sans-serif;
  padding: 0.4em;
}
.dev-name{
  font-size: .5em;
  padding-right: 10px;
  color: #4d5864;
}

/* Hamburger Icon */
#menu-icon,
#menu-icon:before,
#menu-icon:after {
  background-color: #48656c;
  border-radius: 0.05em;
  height: 0.1em;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

#menu-icon {
  display: inline-block;
  margin: 0.4em 0;
  max-width: 1em;
  position: relative;
}

nav label #menu-icon {
  float: right;
}

#menu-icon:before,
#menu-icon:after {
  content: '';
  left: 0;
  position: absolute;
}

#menu-icon:before {
  top: -0.4em;
}

#menu-icon:after {
  bottom: -0.4em;
}

/* Close Icon */
nav input[type=checkbox]:checked + label #menu-icon {
  background: transparent;
}

nav:has(input[type=checkbox]:checked) {
  background-color: #F7F9F9;
}

nav input[type=checkbox]:checked + label #menu-icon:before {
  top: 0;
  transform: rotate(-45deg);
}

nav input[type=checkbox]:checked + label #menu-icon:after {
  bottom: 0;
  transform: rotate(45deg);
}


/*** MENU ***/
/* Overlay */
nav input:checked ~ #overlay {
  background-color:  #F7F9F9;
  bottom: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
}

/* List */
nav ul {
  font-size: 1.5em;
  list-style: none;
  margin: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  text-align: center;
}

nav input:checked ~ ul {
  margin: 1em;
  max-height: inherit;
  opacity: 1;
}

nav ul > li {
  margin: 0.1em 0;

  label{
    width: 100%;
    font-size: 1em;
    &:hover{
      text-shadow: 5px 10px 15px rgba(240,240,240,.5);
    }
  }
}

nav ul a {
  color: #1d1f20 !important;
  text-decoration: none;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

nav ul a:hover {
  text-decoration: underline;
}

</style>
