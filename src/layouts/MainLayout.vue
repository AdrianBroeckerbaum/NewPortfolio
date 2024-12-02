<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navigation Bar -->
    <q-header elevated class="bg-custom text-white">
      <q-toolbar>
        <q-toolbar-title> Adrian Bröckerbaum </q-toolbar-title>
        <q-btn flat label="About Me" @click="scrollToSection('about-me')" />
        <q-btn flat label="Resume" @click="scrollToSection('timeLine')" />
        <q-btn flat label="Projects" @click="scrollToSection('projects')" />
        <q-btn flat label="Contact" @click="scrollToSection('contact')" />
      </q-toolbar>
    </q-header>

    <!-- Page Content -->
    <q-page-container>
      <HeroSection />
      <AboutMe />
      <TimeLine />
      <Projects />
      <Contact />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import HeroSection from 'src/components/HeroSection.vue';
import AboutMe from 'src/components/AboutMe.vue';
import TimeLine from 'src/components/TimeLine.vue';
import Projects from 'src/components/ProjectList.vue';
import Contact from 'src/components/MyContact.vue';

// Smooth scrolling to sections
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
/* Custom color for navigation bar */
.bg-custom {
  background-color: #1d2134;
}
</style>
