<template>
  <q-page class="q-pa-xl q-my-lg">
    <h2 class="text-h5 text-center q-mb-md">Resume</h2>
    <div class="row q-col-gutter-md">
      <!-- Education Timeline -->
      <div class="col-12 col-md-6">
        <h3 class="text-h6 text-center">Education</h3>
        <q-timeline>
          <q-timeline-entry
            side="right"
            title="2016"
            subtitle="Abitur"
            icon="feather-award"
          >
            <p>Erfolgreicher Abschluss des Abiturs.</p>
          </q-timeline-entry>

          <q-timeline-entry
            side="right"
            title="2017 - 2023"
            subtitle="Informatik Studium"
            icon="feather-monitor"
          >
            <p>Studium der Informatik an der Technischen Universität Berlin.</p>
          </q-timeline-entry>

          <q-timeline-entry
            side="right"
            title="2017 - 2023"
            subtitle="Master Degree"
            icon="feather-book-open"
          >
            <p>I make my master degree at the HS-Harz.</p>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <!-- Work Timeline -->
      <div class="col-12 col-md-6">
        <h3 class="text-h6 text-center">Work Experience</h3>
        <q-timeline>
          <q-timeline-entry
            side="right"
            title="Work Experience"
            subtitle="Full Stack webdeveloper"
            icon="feather-briefcase"
          >
            <p>
              Erfahrung in der Praxis und Entwicklung von Lösungen bei Gemitec.
            </p>
          </q-timeline-entry>

          <q-timeline-entry
            side="right"
            title="2025 - Present"
            subtitle="Unity Game Development"
            icon="work"
          >
            <p>A small game for TU-Braunschweig</p>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
/* Styling für Timeline */
#resume {
  background-color: #f5f5f5; /* Optional: ein leichter Hintergrund für bessere Lesbarkeit */
  padding: 2rem;
  border-radius: 8px;
}
</style>
