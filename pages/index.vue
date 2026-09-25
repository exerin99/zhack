<template>
    <div>
      <section class="bg-white dark:bg-neutral-950 border-b">
        <div class="container px-3 sm:px-6 py-10">
          <header>
            <h1 class="text-center tracking-tight text-2xl sm:text-4xl font-semibold">Автоматическое, быстрое и удобное выполнение карточек</h1>
            <p
              class="text-center tracking-tight text-base sm:text-lg mt-2 text-neutral-500 dark:text-neutral-400 font-normal max-w-[1000px] mx-auto">
              ZHack
                – это расширение для браузера, позволяющее решать карточки на сайте
                uchi.ru
                и многих других в автоматическом режиме. Полностью бесплатно!</p>
          </header>
          <section class="mt-16 grid grid-cols-4 gap-4">
            <div
              class="rounded-4xl text-card-foreground shadow bg-white dark:bg-neutral-900 col-span-4 sm:col-span-2 lg:col-span-1 border">
              <div class="flex p-6 items-center justify-start flex-col gap-1.5"><svg xmlns="http://www.w3.org/2000/svg"
                  width="96" height="96" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloudy">
                  <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"></path>
                </svg>
                <h3 class="font-semibold tracking-tight text-2xl text-center">Автоматически</h3>
                <p class="text-sm text-muted-foreground text-center">Всего то нужно сделать пару кликов, а все остальное
                  мы сделаем за вас!</p>
              </div>
            </div>
            <div
              class="rounded-4xl text-card-foreground shadow bg-white dark:bg-neutral-900 col-span-4 sm:col-span-2 lg:col-span-1 border">
              <div class="flex p-6 items-center justify-start flex-col gap-1.5"><svg xmlns="http://www.w3.org/2000/svg"
                  width="96" height="96" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge">
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
                <h3 class="font-semibold tracking-tight text-2xl text-center">Скорость</h3>
                <p class="text-sm text-muted-foreground text-center">Молниеносно, гарантия выполнения всего за 30
                  секунд!</p>
              </div>
            </div>
            <div
              class="rounded-4xl text-card-foreground shadow bg-white dark:bg-neutral-900 col-span-4 sm:col-span-2 lg:col-span-1 border">
              <div class="flex p-6 items-center justify-start flex-col gap-1.5"><svg xmlns="http://www.w3.org/2000/svg"
                  width="96" height="96" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sofa">
                  <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                  <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"></path>
                  <path d="M4 18v2"></path>
                  <path d="M20 18v2"></path>
                  <path d="M12 4v9"></path>
                </svg>
                <h3 class="font-semibold tracking-tight text-2xl text-center">Удобство</h3>
                <p class="text-sm text-muted-foreground text-center">Простота использования сохраняется благодаря
                  интуитивно понятному интерфейсу</p>
              </div>
            </div>
            <div
              class="rounded-4xl text-card-foreground shadow bg-white dark:bg-neutral-900 col-span-4 sm:col-span-2 lg:col-span-1 border">
              <div class="flex p-6 items-center justify-start flex-col gap-1.5"><svg xmlns="http://www.w3.org/2000/svg"
                  width="96" height="96" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
                <h3 class="font-semibold tracking-tight text-2xl text-center">Демократично</h3>
                <p class="text-sm text-muted-foreground text-center">Полностью бесплатно!</p>
              </div>
            </div>
          </section>
          <div class="flex items-center justify-center mt-10"><a
              href="/download"
              rel="noopener noreferrer" target="_blank"
              class="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border dark:bg-primary dark:text-primary-foreground shadow dark:hover:bg-primary/90 h-9 rounded-3xl text-base sm:text-lg whitespace-nowrap px-5 sm:px-9 py-7 bg-orange-300 text-white shadow-text dark:shadow-text-0 transition-colors hover:bg-orange-400/70"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xl">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>Скачать расширение</a></div>
        </div>
      </section>
      
    </div>
</template>