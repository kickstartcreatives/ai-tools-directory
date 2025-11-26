# Migration Guide - Database Update

## Overview
This guide will help you update your AI Tools Directory with the new data from your friend's CSV file.

## What's Changed?

### 1. **New Database Fields**
- `in_tech_stack` - Marks tools that Diane uses in her tech stack
- `created_by_student` - Highlights tools created by Lab Students

### 2. **Updated Categories**
- **Purpose categories** have been completely updated to reflect AI-specific categories
- **Business Stages** now use lowercase "Getting started"
- **Pricing Tiers** updated to match the new data format

### 3. **New UI Features**
- 🛠️ "In Tech Stack" filter button
- 🎓 "Student Created" filter button
- New badge indicators on tool cards

## Migration Steps

### Step 1: Update Your Supabase Database Schema

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run the migration script:

```bash
cat migration-update-schema.sql
```

Copy and paste that SQL into Supabase and execute it.

### Step 2: Import the New Data

1. Make sure your `.env.local` file has the correct Supabase credentials:
```
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
```

2. Run the import script:
```bash
node import-new-data.js
```

**⚠️ WARNING:** This script will **delete all existing tools** and import the new data from the CSV. If you want to preserve any existing data, comment out the delete section in the script first.

### Step 3: Test the Application

1. Start the development server:
```bash
npm run dev
```

2. Test the following features:
   - ✅ All tools display correctly
   - ✅ Search functionality works
   - ✅ New "In Tech Stack" filter works
   - ✅ New "Student Created" filter works
   - ✅ Tool cards show new badges (🛠️ and 🎓)
   - ✅ Table view shows new columns
   - ✅ All existing filters still work
   - ✅ Purpose categories display correctly

### Step 4: Deploy

Once testing is complete, deploy your changes:

```bash
npm run build
# Then deploy to your hosting platform (Vercel, Netlify, etc.)
```

## Summary of Changes

### Database
- ✅ Added `in_tech_stack` boolean field
- ✅ Added `created_by_student` boolean field
- ✅ Updated schema migration script

### Frontend
- ✅ Updated TypeScript types
- ✅ Updated constants with new categories
- ✅ Added new filter buttons
- ✅ Updated ToolCard component with new badges
- ✅ Updated ToolTable component with new columns
- ✅ Updated filter logic
- ✅ Wired up new filters in App.tsx

### Data
- ✅ 49 tools from updated CSV
- ✅ 46 tools marked as "In Diane's Tech Stack"
- ✅ 3 tools marked as "Student Created"
- ✅ Updated Purpose categories
- ✅ Updated pricing tiers
- ✅ Rich comments from Diane

## Rollback Plan

If you need to rollback:

1. The old schema still works - just don't run the migration
2. Keep a backup of your current database before running the import script
3. The frontend changes are backwards compatible - new fields default to false

## Questions?

If you run into any issues during migration, check:
- Supabase connection is working
- CSV file path is correct in import-new-data.js
- All npm packages are installed (`npm install`)
- Environment variables are set correctly

## Next Steps

After successful migration:
1. Review all 49 tools to ensure data accuracy
2. Consider adding more detailed descriptions where needed
3. Update any favorite/affiliate flags as needed
4. Consider adding tool_type and use_cases data (currently empty arrays)
