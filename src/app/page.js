import Image from "next/image";
import { Banner, Brand, Courses, Feedback, Goals, Skills, Stories } from "./sections";


export default function Home() {
  return (
    <div>
  
      <Banner />
    
      <Skills />
 
      <Brand />
  
      <Courses />
    
      <Goals />
      <Feedback/>
 
    </div>

  );
}
