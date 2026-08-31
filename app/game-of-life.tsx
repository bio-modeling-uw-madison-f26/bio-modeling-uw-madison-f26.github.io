"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 18;
const STEP_MS = 170;

export default function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let columns = 0;
    let rows = 0;
    let cells = new Uint8Array();
    let timer = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const index = (x: number, y: number) => ((y + rows) % rows) * columns + ((x + columns) % columns);

    const addGlider = (x: number, y: number) => {
      [[0, 0], [1, 0], [2, 0], [2, -1], [1, -2]].forEach(([dx, dy]) => {
        cells[index(x + dx, y + dy)] = 1;
      });
    };

    const seed = () => {
      cells.fill(0);
      const count = Math.max(8, Math.floor((columns * rows) / 700));
      for (let i = 0; i < count; i++) {
        addGlider(Math.floor(Math.random() * columns), Math.floor(Math.random() * rows));
      }
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#073b68";
      for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
        if (!cells[index(x, y)]) continue;
        context.fillRect(x * CELL_SIZE + 3, y * CELL_SIZE + 3, CELL_SIZE - 6, CELL_SIZE - 6);
      }
    };

    const step = () => {
      const next = new Uint8Array(cells.length);
      for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
        let neighbors = 0;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          if (dx || dy) neighbors += cells[index(x + dx, y + dy)];
        }
        const alive = cells[index(x, y)] === 1;
        next[index(x, y)] = neighbors === 3 || (alive && neighbors === 2) ? 1 : 0;
      }
      cells = next;
      draw();
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      columns = Math.ceil(window.innerWidth / CELL_SIZE);
      rows = Math.ceil(window.innerHeight / CELL_SIZE);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      cells = new Uint8Array(columns * rows);
      seed();
      draw();
    };

    const addAtPointer = (event: PointerEvent) => {
      const x = Math.floor(event.clientX / CELL_SIZE);
      const y = Math.floor(event.clientY / CELL_SIZE);
      addGlider(x - 1, y + 1);
      draw();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", addAtPointer, { passive: true });
    if (!reducedMotion) timer = window.setInterval(step, STEP_MS);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", addAtPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="game-of-life" aria-hidden="true" />;
}
