import Sparkles from "./Sparkles";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      
      {/* Dark mode sparkles globally handled */}
      <div className="dark:block hidden absolute inset-0 z-10 pointer-events-none">
        <Sparkles />
      </div>

      <div className="relative z-20">
        {children}
      </div>

    </section>
  );
}