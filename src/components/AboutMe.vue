<template>
  <q-page class="q-pa-xl q-my-lg about-me-page">
    <div id="about-me" class="q-gutter-md q-mx-auto" style="max-width: 800px">
      <q-card bordered class="about-me-card">
        <q-card-section>
          <h2 class="text-h5 text-center text-orange">About Me</h2>
          <p class="text-white">
            I am Adrian Bröckerbaum, a passionate developer with a keen interest
            in creating innovative and interactive solutions. With experience in
            Unreal, Unity, ROS, and more, I continuously strive to expand my
            skills and work on exciting projects. I love learning new
            technologies and collaborating to bring ideas to life.
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            dense
            round
            icon="mdi-github"
            href="https://github.com/your-username"
            target="_blank"
            color="secondary"
            class="q-mx-sm"
          />
          <q-btn
            flat
            dense
            round
            icon="mdi-linkedin"
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            color="secondary"
            class="q-mx-sm"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
/* About Me page background */
.about-me-page {
  background-color: #1d2134;
  color: white;
  min-height: 100vh;
}

/* About Me card styling */
.about-me-card {
  background-color: #1d2134;
  color: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #ffa500;
}

/* Title styling */
.text-orange {
  color: #ffa500;
  font-weight: bold;
}

/* Text styling */
.text-white {
  color: white;
  line-height: 1.6;
}
</style>
