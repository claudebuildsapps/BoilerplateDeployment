#!/bin/bash

# Script to check the status of projects in the Projects directory
# Outputs data in a format ready for markdown table construction

PROJECTS_DIR="/Users/joshkornreich/Documents/Projects"

# Create header for CSV
echo "Folder,Is Git Repo,Current Branch,Clean Status,Last Deploy Date,Size,Repo Size"

# Loop through each directory
for dir in "$PROJECTS_DIR"/*/; do
  # Remove trailing slash
  dir=${dir%/}
  folder=$(basename "$dir")
  
  # Skip if not a directory
  if [ ! -d "$dir" ]; then
    continue
  fi
  
  # Get total size of directory
  size=$(du -sh "$dir" | cut -f1)
  
  # Change to project directory
  cd "$dir"
  
  # Check if it's a git repository
  if [ -d ".git" ]; then
    is_git="Yes"
    
    # Get current branch
    branch=$(git branch --show-current 2>/dev/null || echo "Unknown")
    
    # Check if working directory is clean
    if git diff --quiet && git diff --cached --quiet; then
      clean_status="Clean"
    else
      clean_status="Dirty"
    fi
    
    # Try to find last deployment date (simplified approach)
    # Look for the most recent commit with 'deploy' in the message
    last_deploy=$(git log -n 10 --grep="deploy" --date=short --format="%ad" 2>/dev/null | head -1)
    if [ -z "$last_deploy" ]; then
      last_deploy="Unknown"
    fi
    
    # Get size of .git directory
    repo_size=$(du -sh .git | cut -f1)
  else
    is_git="No"
    branch="N/A"
    clean_status="N/A"
    last_deploy="N/A"
    repo_size="N/A"
  fi
  
  # Output the data
  echo "$folder,$is_git,$branch,$clean_status,$last_deploy,$size,$repo_size"
  
  # Return to parent directory
  cd "$PROJECTS_DIR"
done