export default function FeatureCard({ kicker, title, text }) {
  return (
    <article className="feature-card">
      <span className="feature-kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}