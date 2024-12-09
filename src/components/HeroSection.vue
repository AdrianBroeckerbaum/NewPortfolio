<template>
  <div
    id="hero"
    class="full-width text-white text-center flex flex-center q-pt-none"
    style="
      height: 100vh;
      flex-direction: column;
      background-color: #1d2134;
      margin-top: -50px;
    "
  >
    <div>
      <h1 class="text-h7 q-mb-lg" style="font-weight: bold">
        Hi, I am
        <span class="text-orange">
          <br />
          Adrian <br />
          Bröckerbaum</span
        >.
      </h1>
      <p class="text-subtitle1 q-mb-lg">
        I build projects, learn new technologies, and solve problems.
      </p>

      <div>
        <!-- GitHub Button -->
        <q-btn
          flat
          color="secondary"
          class="q-mx-sm"
          href="https://github.com/AdrianBroeckerbaum"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.48 9.48 0 0 1 12 6.84a9.48 9.48 0 0 1 2.48.34c1.9-1.3 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.63.7 1.02 1.59 1.02 2.68 0 3.82-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .26.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
        </q-btn>

        <!-- LinkedIn Button -->
        <q-btn
          flat
          color="secondary"
          class="q-mx-sm"
          href="https://www.linkedin.com/in/adrian-br%C3%B6ckerbaum-a541b0256/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </q-btn>

        <!-- Mail Button -->
        <q-btn
          flat
          color="secondary"
          class="q-mx-sm"
          href="mailto:your-email@example.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.full-width {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.text-orange {
  color: #ffa500; /* Orange color */
}
</style>
