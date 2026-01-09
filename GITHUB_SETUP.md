# GitHub Setup Guide

## Step 1: Set Your Git Email (if not already set)

Run this command with your GitHub email:
```bash
git config user.email "your-email@example.com"
```

## Step 2: Make Your First Commit

```bash
git commit -m "Initial commit: Mentra Website"
```

## Step 3: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `Website-Mentraglasses` (or any name you prefer)
3. Description: "Mentra Website - Smart Glasses E-commerce Site"
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 4: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR-REPO-NAME with your actual repo name)
git remote add origin https://github.com/parthpawar1501/YOUR-REPO-NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Daily Workflow

### Making Changes and Pushing

1. **Make your changes** to files
2. **Check what changed:**
   ```bash
   git status
   ```
3. **Add files to staging:**
   ```bash
   git add .                    # Add all changes
   # OR
   git add path/to/file.tsx     # Add specific file
   ```
4. **Commit your changes:**
   ```bash
   git commit -m "Description of what you changed"
   ```
   Examples:
   - `git commit -m "Fix navigation bar alignment"`
   - `git commit -m "Update FAQ section styling"`
   - `git commit -m "Add prescription page"`
5. **Push to GitHub:**
   ```bash
   git push
   ```

### Pulling Latest Changes (if working on multiple machines)

```bash
git pull
```

### Viewing Your Commit History

```bash
git log --oneline
```

### Undoing Changes

**Before committing:**
```bash
git restore path/to/file.tsx    # Undo changes to a file
git restore .                    # Undo all changes
```

**After committing (but before pushing):**
```bash
git reset HEAD~1                 # Undo last commit, keep changes
git reset --hard HEAD~1          # Undo last commit, discard changes
```

## Useful Git Commands

- `git status` - See what files have changed
- `git diff` - See the actual changes in files
- `git log` - View commit history
- `git branch` - List all branches
- `git checkout -b feature-name` - Create a new branch for a feature

## Troubleshooting

**If you get "fatal: refusing to merge unrelated histories":**
```bash
git pull origin main --allow-unrelated-histories
```

**If you need to force push (be careful!):**
```bash
git push --force
```

**To see your remote repository:**
```bash
git remote -v
```
