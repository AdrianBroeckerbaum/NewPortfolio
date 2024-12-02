<template>
  <q-page class="q-pa-xl q-my-lg">
    <div id="timeLine" class="q-gutter-md q-mx-auto" style="max-width: 800px">
      <h2 class="text-h5 text-center q-mb-md">Resume</h2>
      <q-timeline>
        <!-- 2016 -->
        <q-timeline-entry
          side="right"
          title="2016"
          subtitle="Abitur"
          icon="school"
        >
          <p>Erfolgreicher Abschluss des Abiturs.</p>
        </q-timeline-entry>

        <!-- 2017-2023 -->
        <q-timeline-entry
          side="left"
          title="2017 - 2023"
          subtitle="Informatik Studium"
          icon="mdi-laptop"
        >
          <p>Studium der Informatik an der Technischen Universität Berlin.</p>
        </q-timeline-entry>

        <!-- 2023-2024 -->
        <q-timeline-entry
          side="right"
          title="2023 - 2024"
          subtitle="Nebenjob bei Gemitec"
          icon="work"
        >
          <p>
            Erfahrung in der Praxis und Entwicklung von Lösungen bei Gemitec.
          </p>
        </q-timeline-entry>

        <!-- 2024 - Jetzt -->
        <q-timeline-entry
          side="left"
          title="2024 - Jetzt"
          subtitle="Medien und Spielekonzeption"
          icon="mdi-gamepad-variant"
        >
          <p>
            Studium der Medien- und Spielekonzeption an der Hochschule Harz.
          </p>
        </q-timeline-entry>
      </q-timeline>
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
