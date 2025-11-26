export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#2E0C1E] via-[#5A2F44] to-[#2E0C1E] text-white py-8 px-4 text-center mt-16">
      <p className="mb-1">
        Created with ❤️ by{' '}
        <a
          href="https://kickstartcreatives.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline transition-all"
        >
          Kickstart Creatives
        </a>
      </p>
      <p className="mb-2">
        Exclusively for{' '}
        <a
          href="https://www.skool.com/ai-content-creator-lab/about"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline transition-all"
        >
          The AI Content Creator Lab
        </a>
      </p>
      <p className="text-xs opacity-75">© {currentYear} All rights reserved</p>
    </footer>
  );
}
