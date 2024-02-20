import Header from "./assets/components/Header.jsx";
import Title from "./assets/components/Title.jsx";
import RoleBasedRoadmaps from "./assets/components/RoleBasedRoadmaps.jsx";
import SkillBasedRoadmaps from "./assets/components/SkillBasedRoadmaps.jsx";
import BestPractices from "./assets/components/BestPractices.jsx";
import Questions from "./assets/components/Questions.jsx";

export default function App() {
  return (
    <main className="w-screen">
      <Header />
      <Title />
      <RoleBasedRoadmaps />
      <SkillBasedRoadmaps />
      <BestPractices />
      <Questions />
    </main>
  );
}
