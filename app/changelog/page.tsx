import Link from "next/link";

export default function Changelog() {
  return <main className="changelog-page"><div className="changelog-shell">
    <Link className="back-link" href="/">← Course home</Link>
    <p className="eyebrow">BME 603/606 · Fall 2026</p>
    <h1>Changelog</h1>
    <section className="change-entry"><time dateTime="2026-08-31">August 31, 2026</time><h2>Interactive background added</h2><p>Added a subtle Conway&apos;s Game of Life simulation that responds to clicks.</p></section>
    <section className="change-entry"><time dateTime="2026-08-31">August 31, 2026</time><h2>Course site updated</h2><ul><li>Added an assignments section.</li><li>Simplified the lecture schedule resource columns.</li><li>Reformatted course policies and expanded the footer.</li></ul></section>
    <section className="change-entry"><time dateTime="2026-08-30">August 30, 2026</time><h2>Course site launched</h2><p>Published the initial Fall 2026 course information, schedule, grading, and policies.</p></section>
  </div></main>;
}
