# Quick Setup Guide for AI Tools Directory

## 🚀 Quick Start (5 Steps)

### 1. Install Dependencies
```bash
cd ai-tools-directory
npm install
```

### 2. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **SQL Editor**
4. Copy the entire contents of `supabase-schema.sql`
5. Paste and **RUN** it in the SQL Editor

### 3. Import Tool Data

**Option A - Using the Script (Recommended):**
```bash
# Generate SQL import file
node import-data.js

# Copy the contents of import-tools.sql
# Paste into Supabase SQL Editor and run
```

**Option B - Manual Import:**
- Go to Table Editor > tools table
- Click Insert > Import from CSV
- Upload the CSV file from `/Users/barbaramiller/Downloads/files/tools-data-updated.csv`

### 4. Configure Environment Variables

1. In Supabase, go to **Settings** > **API**
2. Copy your Project URL and anon/public key
3. Update `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` 🎉

---

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

---

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

### Custom Domain

Add a CNAME record in your DNS:
```
tools.swayrisecreative.com → your-vercel-url.vercel.app
```

Then add the custom domain in Vercel settings.

---

## ✅ Verify Everything Works

After setup, you should see:
- ✅ All 59 tools loaded
- ✅ Search working
- ✅ Filters working
- ✅ Favorites showing with hot pink ⭐
- ✅ Affiliate links showing with 🔗 icon
- ✅ Grid and table views switching
- ✅ Mobile responsive design

---

## 🎨 Brand Colors Reference

**HOT PINK** (#D81159) - ONLY for favorite stars ⭐
**CAMEL ROSE** (#BE9780) - Buttons, links, active filters
**WARM GRAY** (#DDD4CD) - Backgrounds, borders
**DEEP PURPLE** (#2E0C1E) - Header, footer
**BLACK** (#000000) - Text
**IVORY** (#FEFDFB) - Card backgrounds

---

## 📝 Managing Content in Supabase

### Add a Tool
1. Log into Supabase
2. Table Editor > tools
3. Click "Insert row"
4. Fill required fields (name, url, description, tool_type, pricing_tier)
5. Save

### Edit a Tool
1. Find the tool in the table
2. Click to edit
3. Make changes and save

### Mark as Favorite
Check the `is_favorite` box - hot pink star will appear!

### Mark as Affiliate
Check the `is_affiliate` box - link icon will appear!

---

## 🆘 Troubleshooting

**Issue:** "Unable to load tools"
**Fix:** Check your `.env.local` file has correct Supabase credentials

**Issue:** No tools showing
**Fix:** Make sure you imported the data into Supabase

**Issue:** Build fails
**Fix:** Run `npm install` again to ensure all dependencies are installed

**Issue:** Hot pink showing in wrong places
**Fix:** Only `is_favorite` should use hot pink (#D81159). Check the code!

---

## 📧 Support

For questions or issues, contact the developer.

**Built for Diane's Skool Community** 🎓
