import { HeroWidget } from "../components/widgets/HeroWidget";
import { CoreProjectWidget } from "../components/widgets/CoreProjectWidget";
import { ProjectsWidget } from "../components/widgets/ProjectsWidget";
import { TimelineWidget } from "../components/widgets/TimelineWidget";
import { SkillsWidget } from "../components/widgets/SkillsWidget";
import { ProblemSolvingWidget } from "../components/widgets/ProblemSolvingWidget";

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      <HeroWidget id="hero" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <CoreProjectWidget id="core-project" />
          <ProjectsWidget id="projects" />
        </div>
        <div className="space-y-8">
          <TimelineWidget id="experience" />
          <SkillsWidget id="skills" />
          <ProblemSolvingWidget id="problem-solving" />
        </div>
      </div>
    </div>
  );
}
