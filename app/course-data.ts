export type Meeting = {
  date: string;
  topic?: string;
  topicLinks?: { label: string; url: string }[];
  notes?: { label: string; url: string }[];
  activities?: { label: string; url: string }[];
  noClass?: boolean;
  fullRow?: boolean;
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
  {
    date: "Mon, Sep 28",
    topic: "ODEs and PageRank",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/12qhomvYzppARdJQQUBuODtxVWRwk7ZJ4/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1hzg6AZbJjUseBYQp2ThMg74ZDKlo0icp/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/09-28-in-class" },
    ],
  },
  {
    date: "Wed, Sep 30",
    topic: "Intro. to Dynamic Programming",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1BLh8Ll1-QBKzGqsazKszaZMgULkP4MYp/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1UK5HMtZlLPK91aaaXi6dHHVIrXY0y27c/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    activities: [
      { label: "Quiz 1", url: "https://drive.google.com/file/d/1ZDfTsD9lE8eqcp4FSMnPRw59bOXqdfzy/view?usp=sharing" },
      { label: "Quiz 1 Solution", url: "https://drive.google.com/file/d/1598J1r0t9nDF5AXMkfzhJh3bEhSRJaZ_/view?usp=sharing" },
    ],
  },
  {
    date: "Mon, Oct 5",
    topic: "Dynamic Programming (cont'd)",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/149nLUgElcjvgw5wXlrT0Gsq8lAE0XBoR/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1tqj3YWPqFemPKLWTeE3nc4JLrYZm87RZ/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    activities: [
      { label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/10-05-in-class/" },
    ],
  },
  {
    date: "Wed, Oct 7",
    topic: "Sequence Alignment",
    topicLinks: [
      { label: "PDF", url: "https://drive.google.com/file/d/1EpNaYBvNM70-Qy9t023uSjz3TCs7oMZA/view?usp=sharing" },
      { label: "PPT", url: "https://docs.google.com/presentation/d/1r6knmsY4r5iac4qYxNQMx4xNjr7hlnUs/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" },
    ],
    notes: [
      { label: "LA Practice Problem", url: "https://drive.google.com/file/d/1xeBbnJcgOIaJ9HYLGfsyQzCfuyGW9itH/view?usp=sharing" },
      { label: "Freiburg RNA Tools", url: "https://rna.informatik.uni-freiburg.de/Teaching/index.jsp" },
    ],
  },
  { date: "Mon, Oct 12", topic: "Directed Evolution", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1BmwMMg2Ve8resQnpKZJU_aX5Ql6P-9iA/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1fDNREJ1Y35P0Zt8ITfj13pWz7MSnGcLk/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }], notes: [{ label: "Cobb et al., AIChE J., 2013", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4344831/" }, { label: "Wu et al., PNAS, 2019", url: "https://www.pnas.org/doi/10.1073/pnas.1901979116" }], activities: [{ label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/10-12-in-class" }] },
  { date: "Wed, Oct 14", topic: "Sequence-Structure-Function", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1Kor-3MlxaOQL6KOm--uWC77sirIVs6MV/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1xJAQZZUhQjkifRy6J1bxJ4SoaDGSYO3C/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }], notes: [{ label: "CryoEM learning resources", url: "https://github.com/kuixu/awesome-cryoem" }] },
  { date: "Mon, Oct 19", topic: "Intro to Neural Networks", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1KBYQINCip-HlBIsCYfFrk3XEx71iQV3O/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1ZnfdIwAlw6pVw4KbqjYMNUy1cpSDLPGe/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }], activities: [{ label: "In-class Exercise (not graded)", url: "https://colab.research.google.com/github/phlippe/uvadlc_notebooks/blob/master/docs/tutorial_notebooks/tutorial2/Introduction_to_PyTorch.ipynb" }] },
  { date: "Wed, Oct 21", topic: "Deep Networks", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1KbpsZwNsnEkxT3Fg7VBvoJlE0KWTwveX/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1LyHS3bT2qPOpYQC5iTHYQXUGM5gctB9Y/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }], activities: [{ label: "Quiz 2", url: "https://drive.google.com/file/d/1ugTi12tguoMRm4uBOqPAxPpSTr5_emXK/view?usp=sharing" }, { label: "Quiz 2 Solution", url: "https://drive.google.com/file/d/1VIWSuzTXFDXlTU9tMNO11OFuMSdz9jT9/view?usp=sharing" }] },
  { date: "Mon, Oct 26", topic: "RNNs and Transformers", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1VTOouTMYKfjy8bR00dJ-YVOBhdk7yLOk/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1BqO1KPgx8wCFksOk5CZZSgtwQT1BqUeu/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }], notes: [{ label: "ColabFold Notebook", url: "https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb" }] },
  { date: "Wed, Oct 28", topic: "Modeling Chemical Reactions", topicLinks: [{ label: "PDF", url: "https://drive.google.com/file/d/1zK0JseL6J7KWZQxD1aGpAwsMV6MSOFEo/view?usp=sharing" }, { label: "PPT", url: "https://docs.google.com/presentation/d/1gwwbVdarZqm78C7ETak0PLdmVcpGUIoI/edit?usp=sharing&ouid=116154183097190571698&rtpof=true&sd=true" }] },
  { date: "Mon, Nov 2", topic: "Michaelis-Menten Enzyme Kinetics", activities: [{ label: "In-class Exercise", url: "https://github.com/bio-modeling-uw-madison-f26/10-28-in-class" }] },
  { date: "Wed, Nov 4", topic: "Boolean Networks" },
  { date: "Mon, Nov 9", topic: "Bistability and Limit Cycles" },
  { date: "Wed, Nov 11", topic: "Stochastic Reaction Networks" },
  { date: "Mon, Nov 16", topic: "Metabolic Network Modelling", notes: [{ label: "Orman et al., Crit Rev Biomed Eng., 2011", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3634616/" }] },
  { date: "Wed, Nov 18", topic: "Agent-Based Modeling", activities: [{ label: "Quiz 3", url: "" }] },
  { date: "Mon, Nov 23", topic: "Cellular Potts Model" },
  { date: "Wed, Nov 25", topic: "In Class Project Work", fullRow: true },
  { date: "Mon, Nov 30", topic: "In Class Project Work", fullRow: true },
  { date: "Wed, Dec 2", topic: "Active Network Models" },
  { date: "Mon, Dec 7", topic: "TBD" },
  { date: "Wed, Dec 9", topic: "Project Presentations", fullRow: true },
];

export const grading = [
  ["Assignments", "30%"],
  ["In-class exercises", "30%"],
  ["Final project", "20%"],
  ["Quizzes", "10%"],
  ["Participation", "10%"],
];

export const assignments = [
  {
    title: "Assignment 1: Allometric Scaling",
    releaseDate: "September 25, 2026",
    description: "",
    dueDate: "Due Oct 7, 2026",
    url: "/assignments/assignment1.html",
  },
  {
    title: "Assignment 2: Directed Evolution",
    releaseDate: "October 9, 2026",
    description: "",
    dueDate: "Due Oct 28, 2026",
    url: "/assignments/assignment2.html",
  },
  {
    title: "Assignment 3: Circadian Rhythms",
    releaseDate: "October 29, 2026",
    description:
      "Assignment materials and submission details will be posted here when released.",
    url: "",
  },
  {
    title: "Assignment 4: Quorum Sensing",
    releaseDate: "November 17, 2026",
    description:
      "Assignment materials and submission details will be posted here when released.",
    url: "",
  },
];
