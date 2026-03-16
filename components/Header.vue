<template>
  <header class="flex items-center justify-between bg-white px-6 py-4 shadow sticky top-0 z-10">
    
    <h1 class="text-2xl font-bold text-gray-800">
      HR Dashboard
    </h1>

    <div class="flex items-center space-x-4">

      <!-- Notification -->
      <button class="relative text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 
            2.032 0 0118 14.158V11a6.002 
            6.002 0 00-4-5.659V5a2 
            2 0 10-4 0v.341C7.67 
            6.165 6 8.388 6 11v3.159c0 
            .538-.214 1.055-.595 
            1.436L4 17h5m6 0v1a3 
            3 0 11-6 0v-1m6 0H9"/>
        </svg>

        <span class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

     <!-- User -->
<button class="text-gray-600 hover:text-gray-900">
  <svg xmlns="http://www.w3.org/2000/svg"
       class="w-6 h-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       stroke-width="2">

    <path stroke-linecap="round" stroke-linejoin="round"
      d="M20 21a8 8 0 10-16 0"/>

    <circle cx="12" cy="7" r="4"
      stroke-linecap="round"
      stroke-linejoin="round"></circle>

  </svg>
</button>

      <!-- Settings -->
      <button class="text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-6 h-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             stroke-width="2">
      
          <circle cx="12" cy="12" r="3"></circle>
      
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06
            a2 2 0 1 1-2.83 2.83l-.06-.06
            a1.65 1.65 0 0 0-1.82-.33
            1.65 1.65 0 0 0-1 1.51V21
            a2 2 0 1 1-4 0v-.09
            a1.65 1.65 0 0 0-1-1.51
            1.65 1.65 0 0 0-1.82.33l-.06.06
            a2 2 0 1 1-2.83-2.83l.06-.06
            a1.65 1.65 0 0 0 .33-1.82
            1.65 1.65 0 0 0-1.51-1H3
            a2 2 0 1 1 0-4h.09
            a1.65 1.65 0 0 0 1.51-1
            1.65 1.65 0 0 0-.33-1.82l-.06-.06
            a2 2 0 1 1 2.83-2.83l.06.06
            a1.65 1.65 0 0 0 1.82.33h.01
            a1.65 1.65 0 0 0 1-1.51V3
            a2 2 0 1 1 4 0v.09
            a1.65 1.65 0 0 0 1 1.51
            1.65 1.65 0 0 0 1.82-.33l.06-.06
            a2 2 0 1 1 2.83 2.83l-.06.06
            a1.65 1.65 0 0 0-.33 1.82v.01
            a1.65 1.65 0 0 0 1.51 1H21
            a2 2 0 1 1 0 4h-.09
            a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

    </div>
  </header>
</template>