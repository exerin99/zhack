<template>
    <section class="bg-neutral-50 dark:bg-neutral-900 border-b">
      <div class="container p-3 sm:p-6 py-3 sm:py-3">
        <nav class="flex items-center justify-between w-full">

            <a class="font-medium text-primary text-2xl sm:text-3xl transition-colors hover:text-primary/50" href="/">
                ZHack
            </a>

            <button class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white border dark:bg-neutral-900 text-secondary-foreground shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-950 h-9 px-9 py-2 rounded-xl text-lg xl:hidden"type="button" id="radix-:R9kp:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                Меню
            </button>
          
            <div class="hidden xl:flex gap-2 2xl:gap-3 items-center">

                <a class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-9 py-2 rounded-xl text-base" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Главная
                </a>
                <a href="/download" rel="noopener noreferrer" target="_blank" class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-9 py-2 rounded-xl text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Скачать расширение
                </a>

            </div>
        </nav>
      </div>
    </section>
</template>