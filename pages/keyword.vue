<template>
  <main>
    <div class="items-center justify-center flex pt-12">
      <p class="text-9xl mt-8">
        🕵🏾‍♂️
      </p>
    </div>
    <h1 class="text-4xl pt-5 font-bold text-black text-center">
      Keyword Search Demo
    </h1>

    <div class="items-center pb-6 pt-10 p-8">
      <h2 class="sr-only">Steps</h2>

      <div class="items-center flex justify-center">
        <p class="text-center text-m">
          Search through what ever you want!
        </p>
      </div>
    </div>

    <div class="justify-center items-center">
      <div class="flex items-center justify-center pt-3">
        <label for="Search" class="sr-only"> Search </label>

        <input v-model="searchTerm" type="text" id="SearchTerm" placeholder="what are you looking for?"
          class="w-2/3 rounded-md border-gray-200 bg-slate-300 py-2.5 pl-4 pe-10 shadow-sm sm:text-sm placeholder:text-gray-800" />
      </div>
      <p class="item-center flex justify-center text-xs text-gray-600 pt-2 pb-4">
        try and search for "posts on animals"
      </p>

      <div class="flex items-start justify-center pt-3 gap-2">

        <button @click="submitSearch()"
          class="inline-block rounded border border-white bg-black px-12 py-3 text-sm font-medium text-lime-500 transition hover:border-black hover:bg-lime-500 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
          Search
        </button>
      </div>

      <div v-if="searchResult" class="flex items-start justify-center">
        <div
          class="item-start absolute flex z-10 mt-2 w-[750px] divide-y divide-gray-100 rounded-md border border-gray-100 bg-slate-200 shadow-lg"
          role="menu">
          <div class="p-2">
            <strong class="block p-2 text-xs font-bold uppercase text-black">
              results
            </strong>
            <div>
            </div>
            <div v-for="result in searchResult">
              <div class="space-y-4">
                <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg text-sm p-4 text-gray-900">
                    <h1>
                      {{ result.title }}
                    </h1>
                    <p>
                      {{ result.artist }}
                    </p>
                  </summary>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="flex items-start justify-center">
        <svg aria-hidden="true" class="w-8 h-8 my-2 text-gray-200 animate-spin fill-lime-600" viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
      </div>
    </div>

  </main>
</template>
  
  
<script setup lang="ts">
const searchTerm = ref('')
const loading = ref(false)
const searchResult = ref()
const posts = ref([
    {
    "rank": 1,
    "title": "Like a Rolling Stone",
    "artist": "Bob Dylan",
    "album": "Highway 61 Revisited",
    "year": "1965"
    },
    {
    "rank": 2,
    "title": "(I Can't Get No) Satisfaction",
    "artist": "The Rolling Stones",
    "album": "Out of Our Heads",
    "year": "1965"
    },
    {
    "rank": 3,
    "title": "Imagine",
    "artist": "John Lennon",
    "album": "Imagine",
    "year": "1971"
    },
    {
    "rank": 4,
    "title": "What's Going On Ibiza",
    "artist": "Marvin Gaye",
    "album": "What's Going On",
    "year": "1971"
    },
    {
    "rank": 5,
    "title": "Respect",
    "artist": "Aretha Franklin",
    "album": "I Never Loved a Man the Way I Love You",
    "year": "1967"
    },
    {
    "rank": 6,
    "title": "Good Vibrations Sun",
    "artist": "The Beach Boys",
    "album": "Smiley Smile/Wild Honey",
    "year": "1966"
    },
    {
    "rank": 7,
    "title": "Summer",
    "artist": "Calvin Harris",
    "album": "Smiley Smile/Wild Honey",
    "year": "1966"
    } ,])

async function submitSearch() {
  searchResult.value = posts.value.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
}

</script>
  