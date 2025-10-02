import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function MySplitText() {
  return (
    <SplitText
      text="Hello"
      className="text-center text-8xl font-bold font-archivo"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
}
