import Image from "next/image";
import { Banner, Brand, Courses, Feedback, Goals, Skills, Stories } from "./sections";

/**
 * The main page of the application, which renders all the sections
 */
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
