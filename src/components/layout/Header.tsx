import { Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#BE9780] via-[#E8D5C8] to-[#BE9780] text-black py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">AI Tools for Designers</h1>
        <a
          href="https://www.linkedin.com/in/dianewhiddon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs opacity-80 hover:opacity-100 transition-opacity mb-4"
        >
          <span>by Diane Whiddon</span>
          <span className="bg-white p-0.5 rounded flex items-center justify-center">
            <Linkedin className="w-3 h-3 fill-black stroke-0" strokeWidth={0} />
          </span>
        </a>
        <p className="text-lg md:text-xl opacity-90 mt-2">
          The fastest way to choose the right AI tools for any design project and budget.
        </p>
      </div>
    </header>
  );
}
