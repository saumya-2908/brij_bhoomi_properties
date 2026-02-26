export default function AmbientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-brand-gold opacity-15 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-brand-gold opacity-15 rounded-full blur-[140px]" />
    </div>
  );
}