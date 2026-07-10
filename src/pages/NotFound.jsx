import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found__eyebrow">404</p>
      <h1>ページが見つかりません</h1>
      <p>URLが間違っているか、ページが移動した可能性があります。</p>
      <Link to="/">トップへ戻る</Link>
    </main>
  );
}
