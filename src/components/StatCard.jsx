export default function StatCard({ value, label, hint }) {
  return (
    <article className="stat-card">
      <div className="stat-value">{value}</div>
      <h3>{label}</h3>
      <p>{hint}</p>
    </article>
  );
}