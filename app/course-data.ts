export type Meeting = {
  date: string;
  topic?: string;
  notes?: { label: string; url: string }[];
  activities?: { label: string; url: string }[];
  noClass?: boolean;
};

// Edit this file to update the schedule. Add label/URL pairs for any links.
export const meetings: Meeting[] = [
  {
    date: "Wed, Sep 2",
    topic: "Course Overview",
    notes: [
      { label: "W3S Git Tutorial", url: "https://www.w3schools.com/git/default.asp" },
      { label: "Getting started with VS Code", url: "https://code.visualstudio.com/docs/editing/getting-started/editor-tutorial" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/09-02-in-class/" },
      { label: "Survey", url: "https://docs.google.com/forms/d/e/1FAIpQLSdNIT3zH2eyfAPe0EUG4_K0YFSUhMy2niN9R3PEUR7G_JEDxQ/viewform?usp=publish-editor" },
    ],
  },
  { date: "Mon, Sep 7", topic: "Labor Day — no instruction", noClass: true },
  { date: "Wed, Sep 9" },
  { date: "Mon, Sep 14" },
  { date: "Wed, Sep 16" },
  { date: "Mon, Sep 21" },
  { date: "Wed, Sep 23" },
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
    releaseDate: "September 14, 2026",
    description:
      "Assignment materials and submission details will be posted here when released.",
    url: "",
  },
];
