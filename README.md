# AI Tools Directory

A searchable, filterable directory of AI and business tools for Diane's Skool community. Built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

## Features

- 🔍 **Real-time search** with debounced input
- 🎯 **Advanced filtering** by tool type, purpose, pricing, and business stage
- ⚡ **Quick filters** for favorites, free plans, and affiliate links
- 📊 **Dual view modes** - Grid and Table views
- 🎨 **Brand-specific design** with exact color palette
- 📱 **Mobile-first responsive** design
- ⭐ **Favorites system** with hot pink stars (only place hot pink is used!)
- 🔗 **Affiliate link indicators**
- 💰 **Price tier badges**

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account
- Git

### 1. Clone and Install

```bash
cd ai-tools-directory
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL to create the `tools` table with all indexes and policies

### 3. Import Data

**Option A: Using the Import Script (Recommended)**

```bash
# Make sure the CSV file is in the correct location
node import-data.js

# This generates import-tools.sql
# Copy the contents and paste into Supabase SQL Editor
# Run the SQL to import all 59 tools
```

**Option B: Manual CSV Import in Supabase**

1. Go to Table Editor in Supabase
2. Select the `tools` table
3. Click "Insert" > "Import data from CSV"
4. Upload `tools-data-updated.csv`
5. **Important:** Map the pipe-delimited columns (tool_type, purpose, etc.) to array types

### 4. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local` (or edit the existing `.env.local`)
2. Get your Supabase credentials:
   - Go to Project Settings > API
   - Copy the Project URL
   - Copy the `anon` `public` key
3. Update `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your directory!

## Brand Colors

**CRITICAL:** These colors must be used exactly as specified:

```css
--hot-pink: #D81159        /* ONLY for favorite stars ⭐ */
--camel-rose-gold: #BE9780 /* Primary brand - buttons, links, accents */
--warm-gray: #DDD4CD       /* Backgrounds, cards, borders */
--deep-purple: #2E0C1E     /* Header, footer, secondary text */
--black: #000000           /* Primary text */
--white: #FFFFFF           /* Main backgrounds */
--ivory: #FEFDFB           /* Card backgrounds */
```

### Color Usage Rules

- **Hot Pink (#D81159):** ONLY for favorite star icons. Nowhere else!
- **Camel/Rose Gold (#BE9780):** Primary buttons, hover states, affiliate icons, price badges, active filters
- **Deep Purple (#2E0C1E):** Header/footer backgrounds, secondary text
- **Warm Gray (#DDD4CD):** Section backgrounds, card borders, inactive elements
- **Black (#000000):** Tool names, body text
- **White/Ivory:** Backgrounds, card backgrounds

## Project Structure

```
ai-tools-directory/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── directory/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── QuickFilters.tsx
│   │   │   ├── FilterSection.tsx
│   │   │   ├── ActiveFilters.tsx
│   │   │   ├── ControlsBar.tsx
│   │   │   ├── ToolCard.tsx
│   │   │   ├── ToolGrid.tsx
│   │   │   └── ToolTable.tsx
│   │   └── ui/ (reusable UI components if needed)
│   ├── lib/
│   │   ├── constants.ts    # Hardcoded categories
│   │   ├── types.ts        # TypeScript interfaces
│   │   └── supabase.ts     # Supabase client
│   ├── hooks/
│   │   └── useTools.ts     # Data fetching hook
│   ├── utils/
│   │   ├── filters.ts      # Filter logic
│   │   └── sorting.ts      # Sort logic
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── supabase-schema.sql
├── import-data.js
├── .env.local
└── package.json
```

## Locked Categories

**Important:** All category options are hardcoded in `src/lib/constants.ts`. Diane cannot add new categories herself - she must contact the developer to update these.

This is intentional to maintain data consistency and prevent filter/search issues.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

### Custom Domain Setup

1. In your DNS settings (for `swayrisecreative.com`):
   - Add CNAME record: `tools` → `your-project.vercel.app`
2. In Vercel project settings:
   - Add custom domain: `tools.swayrisecreative.com`
   - Enable HTTPS

## Managing Content

Diane can manage all tool content through Supabase's built-in Table Editor interface:

### Adding a Tool

1. Log into Supabase
2. Go to Table Editor > `tools`
3. Click "Insert row"
4. Fill in required fields:
   - `name` (required)
   - `url` (required)
   - `description` (required)
   - `tool_type` (required - select from dropdown)
   - `pricing_tier` (required)
5. Optional fields:
   - `purpose`, `use_cases`, `business_stages` (arrays)
   - `pricing_details`, `diane_quote`, `pro_tips` (text)
   - Checkboxes: `has_free_plan`, `is_favorite`, `is_affiliate`
6. Click "Save"

The tool appears on the site immediately!

### Editing a Tool

1. Find the tool in the table
2. Click the row to edit
3. Make changes
4. Save

### Deleting a Tool

1. Find the tool in the table
2. Click the trash icon
3. Confirm deletion

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

1. **Category Management:** Categories are hardcoded - Diane must contact developer to add new ones
2. **No Authentication:** Public read-only site for viewing tools
3. **No User Accounts:** No saved preferences or personal favorites (only Diane's favorites)
4. **Static Categories:** All filter options are hardcoded in the frontend

## Future Enhancements (Phase 2)

- Tool detail modal/page
- Business stage guide page with recommendations
- Categories browse page
- User saved favorites (requires auth)
- Analytics tracking
- Custom admin panel (if Supabase isn't sufficient)
- Fuzzy search
- URL sharing for filtered views

## Support

For issues or questions:
- Check the GitHub Issues
- Contact the developer

## License

Built for Diane's Skool Community.

---

**Ready to go!** 🚀

The directory is fully functional and ready to deploy. Just set up Supabase, import the data, and configure your environment variables.
