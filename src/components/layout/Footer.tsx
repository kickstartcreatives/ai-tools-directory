export function Footer() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <footer className="bg-deep-purple text-white py-8 px-4 text-center mt-16">
      <p className="mb-2">Built for Diane's Skool Community</p>
      <p className="text-sm opacity-90">Last Updated: {currentDate}</p>
    </footer>
  );
}
