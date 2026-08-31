"use client";

export default function NavLinks() {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    // Update the URL hash without triggering Next.js navigation
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="Course sections">
      <a href="#about" onClick={scrollTo("about")}>About</a>
      <a href="#schedule" onClick={scrollTo("schedule")}>Schedule</a>
      <a href="#assignments" onClick={scrollTo("assignments")}>Assignments</a>
      <a href="#grading" onClick={scrollTo("grading")}>Grading</a>
      <a href="#policies" onClick={scrollTo("policies")}>Policies</a>
    </nav>
  );
}
