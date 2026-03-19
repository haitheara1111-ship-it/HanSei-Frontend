
<template>
  <header class="flex items-center justify-between bg-white px-6 py-2 border-b border-gray-100 sticky top-0 z-50">
    
    <div class="flex items-center w-64 gap-4">
      <span class="text-xl font-medium text-gray-800">|</span>
      <div class="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <img 
          src="https://i.ibb.co/gBgkSKR/Chat-GPT-Image-Mar-16-2026-04-05-52-PM.png" 
          alt="HanSei Logo" 
          class="h-13 w-auto object-contain"
        />
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <div class="relative w-full max-w-[500px]">
        <input 
          type="text" 
          placeholder="Search in HRMS" 
          class="w-full bg-gray-50/50 border border-gray-200 rounded-lg py-2 px-4 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-sm"
        />
        <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-100 rounded text-[10px] font-bold text-gray-400">
          <span>CTRL</span>
          <span class="opacity-50">+</span>
          <span>/</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end w-64 gap-4">
      
      <button class="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="6" height="6" rx="1"></rect>
          <rect x="15" y="3" width="6" height="6" rx="1"></rect>
          <rect x="15" y="15" width="6" height="6" rx="1"></rect>
          <rect x="3" y="15" width="6" height="6" rx="1"></rect>
        </svg>
      </button>

      <button class="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      <div class="relative profile-menu-container">
        <div 
          @click="isProfileOpen = !isProfileOpen"
          class="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs cursor-pointer shadow-sm ml-2 hover:ring-2 ring-orange-500/30 transition-all active:scale-95"
        >
          JD
        </div>

        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="isProfileOpen" class="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-[60]">
            
            <div class="px-4 py-4 border-b border-gray-50 mb-2 bg-gray-50/30 rounded-t-xl">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  JD
                </div>
                <div class="flex flex-col overflow-hidden">
                  <p class="text-sm font-bold text-gray-800 truncate">John Doe</p>
                  <p class="text-[11px] text-gray-500 truncate">Junior Full-stack Developer</p>
                  <div class="flex items-center gap-1 mt-1">
                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span class="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="space-y-0.5 px-1">
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors group text-left">
                <svg class="w-4 h-4 text-gray-400 group-hover:text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                My Profile
              </button>
              
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors group text-left">
                <svg class="w-4 h-4 text-gray-400 group-hover:text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Account Settings
              </button>
            </div>

            <div class="border-t border-gray-50 mt-2 pt-2 px-1">
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors group text-left">
                <svg class="w-4 h-4 text-red-400 group-hover:text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>

  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isProfileOpen = ref(false)

const closeOutside = (e) => {
  if (!e.target.closest('.profile-menu-container')) {
    isProfileOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', closeOutside))
onUnmounted(() => window.removeEventListener('click', closeOutside))
</script>
