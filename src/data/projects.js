import { LINKS } from "../utils/links";

export const PROJECTS = [
  {
    title: "RISC-V Assembler & Simulator",
    description:
      "A multi-pass assembler and simulator for RISC-V, supporting instruction decoding, memory/register simulation, and GUI integration with Qt and React.",
    stack: "C++, Qt, React",
    link: LINKS.projects.riscvAssemblerSimulator,
    icon: "🛠️",
  },
  {
    title: "Data Recovery Utility",
    description:
      "Signature-based tool that scans raw disk sectors to recover deleted PNG, MP3, PDF, and ZIP files using buffer-level I/O and a Qt-based GUI.",
    stack: "C++, Qt",
    link: LINKS.projects.dataRecoveryUtility,
    icon: "💾",
  },
  {
    title: "DSA Visualizer",
    description:
      "Interactive algorithm visualizations (sorting, backtracking, graphs) built for intuitive learning with Next.js and React Flow.",
    stack: "Next.js, React Flow, TypeScript",
    link: LINKS.projects.dsaVisualizer,
    icon: "📊",
  },
  {
    title: "Startup Website",
    description:
      "Built a clean, responsive landing page for a startup during internship using React.js and TailwindCSS.",
    stack: "React.js, TailwindCSS",
    link: LINKS.projects.startupWebsite,
    icon: "🌐",
  },
  {
    title: "C to Promela Translator",
    description:
      "A tool that converts a restricted subset of C (functions, loops, conditionals) into Promela code for model checking. Built using Python with Clang AST integration and CFG support.",
    stack: "Python, Clang AST, Promela, SPIN",
    link: LINKS.projects.cToPromela,
    icon: "🔁",
  },
  {
    title: "IoT Weather Station",
    description:
      "A DIY weather station built using ESP32 and sensors to capture temperature and humidity, with serial output for real-time monitoring. Created for hands-on exploration and embedded systems learning.",
    stack: "ESP32, C++, Serial Communication",
    link: LINKS.projects.iotWeatherStation,
    icon: "🌦️",
  },
];
