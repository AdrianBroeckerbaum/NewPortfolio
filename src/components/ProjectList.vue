<template>
  <q-page class="q-pa-xl q-my-lg project-page">
    <div id="projects" class="q-gutter-md q-mx-auto" style="max-width: 800px">
      <h2 class="text-h5 text-center q-mb-md text-white">Projects</h2>

      <!-- Project Card -->
      <q-card bordered class="q-my-md project-card">
        <!-- Project Image -->
        <q-img
          src="https://via.placeholder.com/800x400"
          alt="Project Image"
          class="project-image"
        />

        <!-- Project Content -->
        <q-card-section>
          <div class="text-h6 text-white">NPC-Projekt</div>
          <p class="text-white">
            Ich habe gelernt mit Unreal umzugehen und C++ gelernt und KI in
            Videospiele einzubauen.
          </p>
        </q-card-section>

        <!-- Tools and Links -->
        <q-card-actions align="right">
          <div class="tools-container">
            <span class="tool">Unreal</span>
            <span class="tool">C++</span>
          </div>
          <q-btn
            flat
            dense
            round
            icon="mdi-github"
            href="https://github.com/your-project"
            target="_blank"
            color="secondary"
          />
        </q-card-actions>
      </q-card>

      <!-- Add more cards as needed -->
      <q-card bordered class="q-my-md project-card">
        <q-img
          src="src\assets\ProjectImages\Screenshot39Copy.png"
          alt="Project Image"
          class="project-image"
        />
        <q-card-section>
          <div class="text-h6 text-white">Hands Vs. Zombies</div>
          <p class="text-white">Ich habe VR gelernt und mit Unity umzugehen.</p>
        </q-card-section>
        <q-card-actions align="right">
          <div class="tools-container">
            <span class="tool">Unity</span>
            <span class="tool">C#</span>
          </div>
          <q-btn
            flat
            dense
            round
            icon="mdi-github"
            href="https://github.com/your-project"
            target="_blank"
            color="secondary"
          />
        </q-card-actions>
      </q-card>

      <q-card bordered class="q-my-md project-card">
        <q-img
          src="src/assets/ProjectImages/Ergonomics.jpg"
          alt="Project Image"
          class="project-image"
        />
        <q-card-section>
          <div class="text-h6 text-white">Ergonomics</div>
          <p class="text-white">
            Ich habe gelernt mich in neue Systeme einzubauen und
            wissenschaftliche Konzepte umzusetzen.
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <div class="tools-container">
            <span class="tool">ROS</span>
            <span class="tool">Python</span>
          </div>
          <q-btn
            flat
            dense
            round
            icon="mdi-github"
            href="https://github.com/your-project"
            target="_blank"
            color="secondary"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
/* Background styling for the page */
.project-page {
  background-color: #1d2134;
  color: white;
  min-height: 100vh;
}

/* Card styling */
.project-card {
  background-color: #1d2134;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* Image styling */
.project-image {
  height: 200px;
  object-fit: cover;
  width: 100%;
}

/* Tools container */
.tools-container {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

/* Individual tool styling */
.tool {
  background-color: #ffa500;
  color: #1d2134;
  border: 1px solid #ffa500;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

/* Align text */
.text-white {
  color: white !important;
}

/* Card title */
.text-h6 {
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
