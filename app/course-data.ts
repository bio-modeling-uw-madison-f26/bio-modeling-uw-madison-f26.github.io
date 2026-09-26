export type Meeting = {
  date: string;
  topic?: string;
  topicLinks?: { label: string; url: string }[];
  notes?: { label: string; url: string }[];
  activities?: { label: string; url: string }[];
  noClass?: boolean;
};

// Edit this file to update the schedule. Add label/URL pairs for any links.
export const meetings: Meeting[] = [
  {
    date: "Wed, Sep 2",
    topic: "Course Overview",
    topicLinks: [
      { label: "Syllabus", url: "https://drive.google.com/file/d/1SLo5rkmpnM_xMmjId80x3-q261My6pC3/view?usp=sharing" },
    ],
    notes: [
      { label: "Getting started with VS Code", url: "https://code.visualstudio.com/docs/editing/getting-started/editor-tutorial" },
    ],
    activities: [
      { label: "Survey", url: "https://docs.google.com/forms/d/e/1FAIpQLSdNIT3zH2eyfAPe0EUG4_K0YFSUhMy2niN9R3PEUR7G_JEDxQ/viewform?usp=publish-editor" },
    ],
  },
  { date: "Mon, Sep 7", topic: "Labor Day — no instruction", noClass: true },
  {
    date: "Wed, Sep 9",
    topic: "Python Programming Fundamentals",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1rZv-5v69zPeolqEwGNk9UFugIhAfpi4w/view?usp=drive_link" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1JrDGpQEleWnou_HU9YoG25XFNi12dLgA/edit?usp=drive_link&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    notes: [
      { label: "W3S Python Reference", url: "https://www.w3schools.com/python/python_reference.asp" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/09-09-in-class" },
      { label: "Reflection (due 11:59 pm, Wed, Sept 9)", url: "https://forms.gle/MCzRbpq1LoGvfEeC7" },
    ],
  },
  {
    date: "Mon, Sep 14",
    topic: "Matrix Methods and Version Control",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1NhT4oUyXE2iEFjmchi6yfC5kDiy_w5Q_/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1o6AOtFty7yrxHP8gkLHhy0PQC5MQL2Fs/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    notes: [
      { label: "W3S Git Tutorial", url: "https://www.w3schools.com/git/default.asp" },
    ],
  },
  {
    date: "Wed, Sep 16",
    topic: "Interpolation and Least Squares",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/17ssmD4HdIGUvHwxS5-CLOiqXvAP_4qDc/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1OY0xt4_WG5Hr3cReAH1MUeZNgpXe0QKv/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    notes: [
      { label: "Data Science Cheat Sheets", url: "https://adibro.github.io/Data-Science-Resources/Cheat-Sheets/" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/09-16-in-class" },
    ],
  },
  {
    date: "Mon, Sep 21",
    topic: "Numerical Differentiation",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1idD76T91BnbMl-7LlIixsEbkZ3G9zbEY/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1pAcMcb0wtjfK7LYrNOfOCxi_8nIF6VHY/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    notes: [
      { label: "Python Numerical Methods", url: "https://pythonnumericalmethods.studentorg.berkeley.edu/" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/09-21-in-class" },
    ],
  },
  {
    date: "Wed, Sep 23",
    topic: "Numerical Integration",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1ece2ZOqnBhlHjz2gm8-WP5CAHfbl1b61/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1Gkt99o-APuYq2xe1NAiX02F6etKB8M7n/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    activities: [
      { label: "In-class Exercise (optional, extra credit)", url: "https://github.com/bio-modeling-uw-madison-f26/09-23-in-class-bonus" },
    ],
  },
  { date: "Mon, Sep 28" },
  { date: "Wed, Sep 30" },
  { date: "Mon, Oct 5" },
  { date: "Wed, Oct 7" },
  { date: "Mon, Oct 12" },
  { date: "Wed, Oct 14" },
  { date: "Mon, Oct 19" },
  { date: "Wed, Oct 21" },
  { date: "Mon, Oct 26" },
  { date: "Wed, Oct 28" },
  { date: "Mon, Nov 2" },
  { date: "Wed, Nov 4" },
  { date: "Mon, Nov 9" },
  { date: "Wed, Nov 11" },
  { date: "Mon, Nov 16" },
  { date: "Wed, Nov 18" },
  { date: "Mon, Nov 23" },
  { date: "Wed, Nov 25" },
  { date: "Mon, Nov 30" },
  { date: "Wed, Dec 2" },
  { date: "Mon, Dec 7" },
  { date: "Wed, Dec 9", topic: "Project Presentations" },
];

export const grading = [
  ["Homework assignments", "30%"],
  ["In-class exercises", "30%"],
  ["Final project", "20%"],
  ["Quizzes", "10%"],
  ["Participation", "10%"],
];

export const assignments = [
  {
    title: "Assignment 1: Allometric Scaling",
    releaseDate: "September 25, 2026",
    description: "Due: October 5, 2026",
    url: "/assignments/assignment1.html",
  },
  {
    title: "Assignment 2: Directed Evolution",
    releaseDate: "October 5, 2026",
    description:
      "Assignment materials and submission details will be posted here when released.",
    url: "",
  },
];
